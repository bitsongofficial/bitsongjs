#!/bin/bash
set -o errexit -o nounset -o pipefail
command -v shellcheck >/dev/null && shellcheck "$0"

SCRIPT_PATH="$( cd -- "$(dirname "$0")" >/dev/null 2>&1 ; pwd -P )"

PROTO_DIR="./proto"

rm -rf "$PROTO_DIR"
mkdir "$PROTO_DIR"

COSMOS_DIR="./cosmos-tmp"
rm -rf "$COSMOS_DIR"

COSMOS_SDK_DIR="$COSMOS_DIR/cosmos-sdk"
ZIP_FILE="$COSMOS_DIR/tmp.zip"
CREF=${CREF:-"master"}
CSUFFIX=${CREF}
[[ $CSUFFIX =~ ^v[0-9]+\.[0-9]+\.[0-9]+(-.+)?$ ]] && CSUFFIX=${CSUFFIX#v}

# Download the cosmos archive
mkdir -p "$COSMOS_DIR"
wget -qO "$ZIP_FILE" "https://github.com/cosmos/cosmos-sdk/archive/$CREF.zip"
unzip "$ZIP_FILE" "*.proto" -d "$COSMOS_DIR"
mv $COSMOS_SDK_DIR-$CSUFFIX/proto/* $PROTO_DIR
mv $COSMOS_SDK_DIR-$CSUFFIX/third_party/proto/* $PROTO_DIR
rm -rf "$COSMOS_DIR"

BITSONG_DIR="$PROTO_DIR/bitsong-tmp"
GOBITSONG_DIR="$BITSONG_DIR/go-bitsong"
ZIP_FILE="$BITSONG_DIR/tmp.zip"
BREF=${BREF:-"master"}
BSUFFIX=${BREF}
[[ $BSUFFIX =~ ^v[0-9]+\.[0-9]+\.[0-9]+(-.+)?$ ]] && BSUFFIX=${BSUFFIX#v}

# Download the bitsong archive
mkdir -p "$BITSONG_DIR"
wget -qO "$ZIP_FILE" "https://github.com/bitsongofficial/go-bitsong/archive/$BREF.zip"
unzip "$ZIP_FILE" "*.proto" -d "$BITSONG_DIR"
mv $GOBITSONG_DIR-$BSUFFIX/proto/bitsong/ "$PROTO_DIR/bitsong"
rm -rf "$BITSONG_DIR"

# Download some google protobuf type
GOOGLE_PROTOBUF_REPO="https://raw.githubusercontent.com/protocolbuffers/protobuf/v21.3/src/google/protobuf"
wget -O $PROTO_DIR/google/protobuf/descriptor.proto "$GOOGLE_PROTOBUF_REPO/descriptor.proto"
wget -O $PROTO_DIR/google/protobuf/duration.proto "$GOOGLE_PROTOBUF_REPO/duration.proto"
wget -O $PROTO_DIR/google/protobuf/empty.proto "$GOOGLE_PROTOBUF_REPO/empty.proto"
wget -O $PROTO_DIR/google/protobuf/timestamp.proto "$GOOGLE_PROTOBUF_REPO/timestamp.proto"

PLUGIN_PATH="${SCRIPT_PATH}/../node_modules/.bin/protoc-gen-ts_proto"
TS_PROTO_OPTS="esModuleInterop=true,forceLong=string,useOptionals=messages,useDate=false,lowerCaseServiceMethods=true,outputClientImpl=grpc-web"

rm -rf ./src
mkdir -p ./src

protoc \
  --plugin="protoc-gen-ts_proto=${PLUGIN_PATH}" \
  --ts_proto_out="./src" \
  --ts_proto_opt="${TS_PROTO_OPTS}" \
  --proto_path="./proto" \
  $(find ./proto -path -prune -o -name '*.proto' -print0 | xargs -0)

find "./src" -name '*.ts' | xargs -n 1 perl -i -pe 's/import _m0 from/import * as _m0 from/g'