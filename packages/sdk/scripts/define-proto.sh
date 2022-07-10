#!/bin/bash
set -o errexit -o nounset -o pipefail
command -v shellcheck >/dev/null && shellcheck "$0"

ROOT_PROTO_DIR="./proto/cosmos/cosmos-sdk"
COSMOS_PROTO_DIR="$ROOT_PROTO_DIR/proto"
THIRD_PARTY_PROTO_DIR="$ROOT_PROTO_DIR/third_party/proto"

ROOT_BITSONG_PROTO_DIR="./proto/bitsong/go-bitsong"
BITSONG_PROTO_DIR="$ROOT_BITSONG_PROTO_DIR/proto"

ROOT_IBC_PROTO_DIR="./proto/ibc/ibc-go"
IBC_PROTO_DIR="$ROOT_IBC_PROTO_DIR/proto"

OUT_DIR="./src/codec/"

mkdir -p "$OUT_DIR"
# echo $(find ${COSMOS_PROTO_DIR} ${THIRD_PARTY_PROTO_DIR} ${BITSONG_PROTO_DIR} ${IBC_PROTO_DIR} -path -prune -o -name '*.proto' -print0 | xargs -0) 
protoc \
    --plugin="$(yarn bin protoc-gen-ts_proto)" \
    --ts_proto_out="$OUT_DIR" \
    --ts_proto_opt="esModuleInterop=true,forceLong=long,useOptionals=true" \
    --proto_path="$COSMOS_PROTO_DIR" \
    --proto_path="$THIRD_PARTY_PROTO_DIR" \
    --proto_path="$BITSONG_PROTO_DIR" \
    --proto_path="$IBC_PROTO_DIR" \   
    $(find ${COSMOS_PROTO_DIR} ${THIRD_PARTY_PROTO_DIR} ${BITSONG_PROTO_DIR} ${IBC_PROTO_DIR} -path -prune -o -name '*.proto' -print0 | xargs -0) 


# Remove unnecessary codec files (TODO: IMPROVE!)
#rm -rf \
#    src/codec/cosmos_proto/ \
#    src/codec/gogoproto/ \
#    src/codec/google/api/ \
#    src/codec/google/protobuf/descriptor.ts
