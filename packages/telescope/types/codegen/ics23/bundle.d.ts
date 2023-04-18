import * as _7 from "../confio/proofs";
export declare const ics23: {
    hashOpFromJSON(object: any): _7.HashOp;
    hashOpToJSON(object: _7.HashOp): string;
    lengthOpFromJSON(object: any): _7.LengthOp;
    lengthOpToJSON(object: _7.LengthOp): string;
    HashOp: typeof _7.HashOp;
    HashOpSDKType: typeof _7.HashOp;
    LengthOp: typeof _7.LengthOp;
    LengthOpSDKType: typeof _7.LengthOp;
    ExistenceProof: {
        encode(message: _7.ExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.ExistenceProof;
        fromPartial(object: any): _7.ExistenceProof;
    };
    NonExistenceProof: {
        encode(message: _7.NonExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.NonExistenceProof;
        fromPartial(object: any): _7.NonExistenceProof;
    };
    CommitmentProof: {
        encode(message: _7.CommitmentProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.CommitmentProof;
        fromPartial(object: any): _7.CommitmentProof;
    };
    LeafOp: {
        encode(message: _7.LeafOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.LeafOp;
        fromPartial(object: any): _7.LeafOp;
    };
    InnerOp: {
        encode(message: _7.InnerOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.InnerOp;
        fromPartial(object: any): _7.InnerOp;
    };
    ProofSpec: {
        encode(message: _7.ProofSpec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.ProofSpec;
        fromPartial(object: any): _7.ProofSpec;
    };
    InnerSpec: {
        encode(message: _7.InnerSpec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.InnerSpec;
        fromPartial(object: any): _7.InnerSpec;
    };
    BatchProof: {
        encode(message: _7.BatchProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.BatchProof;
        fromPartial(object: any): _7.BatchProof;
    };
    BatchEntry: {
        encode(message: _7.BatchEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.BatchEntry;
        fromPartial(object: any): _7.BatchEntry;
    };
    CompressedBatchProof: {
        encode(message: _7.CompressedBatchProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.CompressedBatchProof;
        fromPartial(object: any): _7.CompressedBatchProof;
    };
    CompressedBatchEntry: {
        encode(message: _7.CompressedBatchEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.CompressedBatchEntry;
        fromPartial(object: any): _7.CompressedBatchEntry;
    };
    CompressedExistenceProof: {
        encode(message: _7.CompressedExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.CompressedExistenceProof;
        fromPartial(object: any): _7.CompressedExistenceProof;
    };
    CompressedNonExistenceProof: {
        encode(message: _7.CompressedNonExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.CompressedNonExistenceProof;
        fromPartial(object: any): _7.CompressedNonExistenceProof;
    };
};
