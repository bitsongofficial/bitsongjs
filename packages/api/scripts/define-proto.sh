#!/bin/bash
set -o errexit -o nounset -o pipefail
command -v shellcheck >/dev/null && shellcheck "$0"

ROOT_PROTO_DIR="./proto"
ROOT_BITSONG_PROTO_DIR="./proto/bitsong"
ROOT_IBC_PROTO_DIR="./proto/ibc"

OUT_DIR="./src/codec/"
mkdir -p "$OUT_DIR"

protoc \
    --plugin="$(yarn bin protoc-gen-ts_proto)" \
    --ts_proto_out="$OUT_DIR" \
    --ts_proto_opt="esModuleInterop=true,forceLong=long,useOptionals=messages,useDate=false" \
    --proto_path="$ROOT_PROTO_DIR" \
    $(find ${ROOT_BITSONG_PROTO_DIR} ${ROOT_IBC_PROTO_DIR} -path -prune -o -name '*.proto' -print0 | xargs -0)