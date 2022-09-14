#!/bin/bash
set -o errexit -o nounset -o pipefail
command -v shellcheck >/dev/null && shellcheck "$0"

OUT_DIR="./src/codec/"
mkdir -p "$OUT_DIR"

BITSONG_PROTO_DIR="./proto/merged"

#TS_PROTO_OPTS="esModuleInterop=true,forceLong=string,useOptionals=true,useDate=false,lowerCaseServiceMethods=true,outputClientImpl=grpc-web"
TS_PROTO_OPTS="esModuleInterop=true,forceLong=long,useOptionals=messages,outputTypeRegistry=true,useDate=false"

protoc \
    --plugin="$(yarn bin protoc-gen-ts_proto)" \
    --ts_proto_out="$OUT_DIR" \
    --ts_proto_opt="$TS_PROTO_OPTS" \
    --proto_path="$BITSONG_PROTO_DIR" \
    $(find ${BITSONG_PROTO_DIR} -path -prune -o -name '*.proto' -print0 | xargs -0)