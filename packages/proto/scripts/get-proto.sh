#!/bin/bash
set -o errexit -o nounset -o pipefail

SCRIPT_PATH="$( cd -- "$(dirname "$0")" >/dev/null 2>&1 ; pwd -P )"

rm -rf "${SCRIPT_PATH}/go-bitsong"
git clone --depth 1 --branch v0.11.0 https://github.com/bitsongofficial/go-bitsong "${SCRIPT_PATH}/go-bitsong"

OUT_DIR="${SCRIPT_PATH}/../proto"
mkdir -p "$OUT_DIR"
mkdir -p "$OUT_DIR/third_party"

cp -r "${SCRIPT_PATH}/go-bitsong/proto/bitsong" "$OUT_DIR"
cp -r "${SCRIPT_PATH}/go-bitsong/third_party/proto/cosmos" "$OUT_DIR/third_party"
cp -r "${SCRIPT_PATH}/go-bitsong/third_party/proto/cosmos_proto" "$OUT_DIR/third_party"
cp -r "${SCRIPT_PATH}/go-bitsong/third_party/proto/gogoproto" "$OUT_DIR/third_party"
cp -r "${SCRIPT_PATH}/go-bitsong/third_party/proto/google" "$OUT_DIR/third_party"
cp -r "${SCRIPT_PATH}/go-bitsong/third_party/proto/ibc" "$OUT_DIR/third_party"
cp -r "${SCRIPT_PATH}/go-bitsong/third_party/proto/tendermint" "$OUT_DIR/third_party"

rm -rf "${SCRIPT_PATH}/go-bitsong"