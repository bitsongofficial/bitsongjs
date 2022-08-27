#!/bin/bash
set -o errexit -o nounset -o pipefail
command -v shellcheck >/dev/null && shellcheck "$0"

PROTO_DIR="./proto"
PROTO_MERGED_DIR="./proto/merged"

COSMOS_DIR="$PROTO_DIR/cosmos"
COSMOS_SDK_DIR="$COSMOS_DIR/cosmos-sdk"
ZIP_FILE="$COSMOS_DIR/tmp.zip"

BITSONG_DIR="$PROTO_DIR/bitsong"
BITSONG_SDK_DIR="$BITSONG_DIR/go-bitsong"
ZIP_BITSONG_FILE="$BITSONG_DIR/tmp.zip"

IBC_DIR="$PROTO_DIR/ibc"
IBC_SDK_DIR="$IBC_DIR/ibc-go"
IBC_ZIP_FILE="$IBC_DIR/tmp.zip"

CREF=${CREF:-"main"}
CSUFFIX=${CREF}
[[ $CSUFFIX =~ ^v[0-9]+\.[0-9]+\.[0-9]+(-.+)?$ ]] && CSUFFIX=${CSUFFIX#v}

BREF=${BREF:-"main"}
BSUFFIX=${BREF}
[[ $BSUFFIX =~ ^v[0-9]+\.[0-9]+\.[0-9]+(-.+)?$ ]] && BSUFFIX=${BSUFFIX#v}

IBCREF=${IBCREF:-"main"}
IBCSUFFIX=${IBCREF}
[[ $IBCSUFFIX =~ ^v[0-9]+\.[0-9]+\.[0-9]+(-.+)?$ ]] && IBCSUFFIX=${IBCSUFFIX#v}

# Create the cosmos dir
mkdir -p "$COSMOS_DIR"

# Download the cosmos archive
wget -qO "$ZIP_FILE" "https://github.com/cosmos/cosmos-sdk/archive/$CREF.zip"
unzip "$ZIP_FILE" "*.proto" -d "$COSMOS_DIR"
mv "$COSMOS_SDK_DIR-$CSUFFIX" "$COSMOS_SDK_DIR"
rm "$ZIP_FILE"

# Create the bitsong proto dir
mkdir -p "$BITSONG_DIR"

# Download the archive
wget -qO "$ZIP_BITSONG_FILE" "https://github.com/bitsongofficial/go-bitsong/archive/$BREF.zip"
unzip "$ZIP_BITSONG_FILE" "*.proto" -d "$BITSONG_DIR"
mv "$BITSONG_SDK_DIR-$BSUFFIX" "$BITSONG_SDK_DIR"
rm "$ZIP_BITSONG_FILE"

# Create the ibc proto dir
mkdir -p "$IBC_DIR"

# Download the archive
wget -qO "$IBC_ZIP_FILE" "https://github.com/cosmos/ibc-go/archive/$IBCREF.zip"
unzip "$IBC_ZIP_FILE" "*.proto" -d "$IBC_DIR"
mv "$IBC_SDK_DIR-$IBCSUFFIX" "$IBC_SDK_DIR"
rm "$IBC_ZIP_FILE"


mv $COSMOS_SDK_DIR/proto $PROTO_MERGED_DIR
mv $COSMOS_SDK_DIR/third_party/proto/* $PROTO_MERGED_DIR
mv $BITSONG_SDK_DIR/proto/bitsong $PROTO_MERGED_DIR
mv $IBC_SDK_DIR/proto/ibc $PROTO_MERGED_DIR

rm -rf $COSMOS_DIR
rm -rf $BITSONG_DIR
rm -rf $IBC_DIR
#rm -rf $PROTO_MERGED_DIR/cosmos
#rm -rf $PROTO_MERGED_DIR/gogoproto
#rm -rf $PROTO_MERGED_DIR/tendermint
#rm -rf $PROTO_MERGED_DIR/google


#mv $IBC_SDK_DIR/proto/ibc $PROTO_MERGED_DIR
#mv $IBC_SDK_DIR/third_party/proto/* $PROTO_MERGED_DIR