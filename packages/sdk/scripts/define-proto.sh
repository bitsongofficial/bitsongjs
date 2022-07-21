#!/bin/bash
set -o errexit -o nounset -o pipefail
command -v shellcheck >/dev/null && shellcheck "$0"

ROOT_PROTO_DIR="./proto"

ROOT_BITSONG_PROTO_DIR="./proto/bitsong"

ROOT_IBC_PROTO_DIR="./proto/ibc"

OUT_DIR="./src/codec/"

mkdir -p "$OUT_DIR"
#echo $(find ${COSMOS_PROTO_DIR} ${THIRD_PARTY_PROTO_DIR} ${BITSONG_PROTO_DIR} ${IBC_PROTO_DIR} -path -prune -o -name '*.proto' -print0 | xargs -0)

protoc \
    --plugin="$(yarn bin protoc-gen-ts_proto)" \
    --ts_proto_out="$OUT_DIR" \
    --ts_proto_opt="esModuleInterop=true,forceLong=long,useOptionals=messages,useDate=false" \
    --proto_path="$ROOT_PROTO_DIR" \
    $(find ${ROOT_BITSONG_PROTO_DIR} ${ROOT_IBC_PROTO_DIR} -path -prune -o -name '*.proto' -print0 | xargs -0)

# Remove unnecessary codec files (TODO: IMPROVE!)
#rm -rf \
#    src/codec/cosmos_proto/ \
#    src/codec/gogoproto/ \
#    src/codec/google/api/ \
#    src/codec/google/protobuf/descriptor.ts
