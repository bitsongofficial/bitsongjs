import * as _84 from "./abci/types";
import * as _85 from "./crypto/keys";
import * as _86 from "./crypto/proof";
import * as _87 from "./libs/bits/types";
import * as _88 from "./p2p/types";
import * as _89 from "./types/block";
import * as _90 from "./types/evidence";
import * as _91 from "./types/params";
import * as _92 from "./types/types";
import * as _93 from "./types/validator";
import * as _94 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _84.CheckTxType;
        checkTxTypeToJSON(object: _84.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _84.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _84.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _84.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _84.ResponseApplySnapshotChunk_Result): string;
        evidenceTypeFromJSON(object: any): _84.EvidenceType;
        evidenceTypeToJSON(object: _84.EvidenceType): string;
        CheckTxType: typeof _84.CheckTxType;
        CheckTxTypeSDKType: typeof _84.CheckTxTypeSDKType;
        ResponseOfferSnapshot_Result: typeof _84.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultSDKType: typeof _84.ResponseOfferSnapshot_ResultSDKType;
        ResponseApplySnapshotChunk_Result: typeof _84.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultSDKType: typeof _84.ResponseApplySnapshotChunk_ResultSDKType;
        EvidenceType: typeof _84.EvidenceType;
        EvidenceTypeSDKType: typeof _84.EvidenceTypeSDKType;
        Request: {
            encode(message: _84.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.Request;
            fromPartial(object: any): _84.Request;
        };
        RequestEcho: {
            encode(message: _84.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.RequestEcho;
            fromPartial(object: any): _84.RequestEcho;
        };
        RequestFlush: {
            encode(_: _84.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.RequestFlush;
            fromPartial(_: any): _84.RequestFlush;
        };
        RequestInfo: {
            encode(message: _84.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.RequestInfo;
            fromPartial(object: any): _84.RequestInfo;
        };
        RequestSetOption: {
            encode(message: _84.RequestSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.RequestSetOption;
            fromPartial(object: any): _84.RequestSetOption;
        };
        RequestInitChain: {
            encode(message: _84.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.RequestInitChain;
            fromPartial(object: any): _84.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _84.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.RequestQuery;
            fromPartial(object: any): _84.RequestQuery;
        };
        RequestBeginBlock: {
            encode(message: _84.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.RequestBeginBlock;
            fromPartial(object: any): _84.RequestBeginBlock;
        };
        RequestCheckTx: {
            encode(message: _84.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.RequestCheckTx;
            fromPartial(object: any): _84.RequestCheckTx;
        };
        RequestDeliverTx: {
            encode(message: _84.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.RequestDeliverTx;
            fromPartial(object: any): _84.RequestDeliverTx;
        };
        RequestEndBlock: {
            encode(message: _84.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.RequestEndBlock;
            fromPartial(object: any): _84.RequestEndBlock;
        };
        RequestCommit: {
            encode(_: _84.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.RequestCommit;
            fromPartial(_: any): _84.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _84.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.RequestListSnapshots;
            fromPartial(_: any): _84.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _84.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.RequestOfferSnapshot;
            fromPartial(object: any): _84.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _84.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.RequestLoadSnapshotChunk;
            fromPartial(object: any): _84.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _84.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.RequestApplySnapshotChunk;
            fromPartial(object: any): _84.RequestApplySnapshotChunk;
        };
        Response: {
            encode(message: _84.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.Response;
            fromPartial(object: any): _84.Response;
        };
        ResponseException: {
            encode(message: _84.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.ResponseException;
            fromPartial(object: any): _84.ResponseException;
        };
        ResponseEcho: {
            encode(message: _84.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.ResponseEcho;
            fromPartial(object: any): _84.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _84.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.ResponseFlush;
            fromPartial(_: any): _84.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _84.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.ResponseInfo;
            fromPartial(object: any): _84.ResponseInfo;
        };
        ResponseSetOption: {
            encode(message: _84.ResponseSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.ResponseSetOption;
            fromPartial(object: any): _84.ResponseSetOption;
        };
        ResponseInitChain: {
            encode(message: _84.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.ResponseInitChain;
            fromPartial(object: any): _84.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _84.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.ResponseQuery;
            fromPartial(object: any): _84.ResponseQuery;
        };
        ResponseBeginBlock: {
            encode(message: _84.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.ResponseBeginBlock;
            fromPartial(object: any): _84.ResponseBeginBlock;
        };
        ResponseCheckTx: {
            encode(message: _84.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.ResponseCheckTx;
            fromPartial(object: any): _84.ResponseCheckTx;
        };
        ResponseDeliverTx: {
            encode(message: _84.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.ResponseDeliverTx;
            fromPartial(object: any): _84.ResponseDeliverTx;
        };
        ResponseEndBlock: {
            encode(message: _84.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.ResponseEndBlock;
            fromPartial(object: any): _84.ResponseEndBlock;
        };
        ResponseCommit: {
            encode(message: _84.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.ResponseCommit;
            fromPartial(object: any): _84.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _84.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.ResponseListSnapshots;
            fromPartial(object: any): _84.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _84.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.ResponseOfferSnapshot;
            fromPartial(object: any): _84.ResponseOfferSnapshot;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _84.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.ResponseLoadSnapshotChunk;
            fromPartial(object: any): _84.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _84.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.ResponseApplySnapshotChunk;
            fromPartial(object: any): _84.ResponseApplySnapshotChunk;
        };
        ConsensusParams: {
            encode(message: _84.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.ConsensusParams;
            fromPartial(object: any): _84.ConsensusParams;
        };
        BlockParams: {
            encode(message: _84.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.BlockParams;
            fromPartial(object: any): _84.BlockParams;
        };
        LastCommitInfo: {
            encode(message: _84.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.LastCommitInfo;
            fromPartial(object: any): _84.LastCommitInfo;
        };
        Event: {
            encode(message: _84.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.Event;
            fromPartial(object: any): _84.Event;
        };
        EventAttribute: {
            encode(message: _84.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.EventAttribute;
            fromPartial(object: any): _84.EventAttribute;
        };
        TxResult: {
            encode(message: _84.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.TxResult;
            fromPartial(object: any): _84.TxResult;
        };
        Validator: {
            encode(message: _84.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.Validator;
            fromPartial(object: any): _84.Validator;
        };
        ValidatorUpdate: {
            encode(message: _84.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.ValidatorUpdate;
            fromPartial(object: any): _84.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _84.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.VoteInfo;
            fromPartial(object: any): _84.VoteInfo;
        };
        Evidence: {
            encode(message: _84.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.Evidence;
            fromPartial(object: any): _84.Evidence;
        };
        Snapshot: {
            encode(message: _84.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.Snapshot;
            fromPartial(object: any): _84.Snapshot;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _86.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.Proof;
            fromPartial(object: any): _86.Proof;
        };
        ValueOp: {
            encode(message: _86.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.ValueOp;
            fromPartial(object: any): _86.ValueOp;
        };
        DominoOp: {
            encode(message: _86.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.DominoOp;
            fromPartial(object: any): _86.DominoOp;
        };
        ProofOp: {
            encode(message: _86.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.ProofOp;
            fromPartial(object: any): _86.ProofOp;
        };
        ProofOps: {
            encode(message: _86.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.ProofOps;
            fromPartial(object: any): _86.ProofOps;
        };
        PublicKey: {
            encode(message: _85.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.PublicKey;
            fromPartial(object: any): _85.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _87.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.BitArray;
                fromPartial(object: any): _87.BitArray;
            };
        };
    }
    const p2p: {
        NetAddress: {
            encode(message: _88.NetAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.NetAddress;
            fromPartial(object: any): _88.NetAddress;
        };
        ProtocolVersion: {
            encode(message: _88.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.ProtocolVersion;
            fromPartial(object: any): _88.ProtocolVersion;
        };
        DefaultNodeInfo: {
            encode(message: _88.DefaultNodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.DefaultNodeInfo;
            fromPartial(object: any): _88.DefaultNodeInfo;
        };
        DefaultNodeInfoOther: {
            encode(message: _88.DefaultNodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.DefaultNodeInfoOther;
            fromPartial(object: any): _88.DefaultNodeInfoOther;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _93.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.ValidatorSet;
            fromPartial(object: any): _93.ValidatorSet;
        };
        Validator: {
            encode(message: _93.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.Validator;
            fromPartial(object: any): _93.Validator;
        };
        SimpleValidator: {
            encode(message: _93.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.SimpleValidator;
            fromPartial(object: any): _93.SimpleValidator;
        };
        blockIDFlagFromJSON(object: any): _92.BlockIDFlag;
        blockIDFlagToJSON(object: _92.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _92.SignedMsgType;
        signedMsgTypeToJSON(object: _92.SignedMsgType): string;
        BlockIDFlag: typeof _92.BlockIDFlag;
        BlockIDFlagSDKType: typeof _92.BlockIDFlagSDKType;
        SignedMsgType: typeof _92.SignedMsgType;
        SignedMsgTypeSDKType: typeof _92.SignedMsgTypeSDKType;
        PartSetHeader: {
            encode(message: _92.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.PartSetHeader;
            fromPartial(object: any): _92.PartSetHeader;
        };
        Part: {
            encode(message: _92.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.Part;
            fromPartial(object: any): _92.Part;
        };
        BlockID: {
            encode(message: _92.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.BlockID;
            fromPartial(object: any): _92.BlockID;
        };
        Header: {
            encode(message: _92.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.Header;
            fromPartial(object: any): _92.Header;
        };
        Data: {
            encode(message: _92.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.Data;
            fromPartial(object: any): _92.Data;
        };
        Vote: {
            encode(message: _92.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.Vote;
            fromPartial(object: any): _92.Vote;
        };
        Commit: {
            encode(message: _92.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.Commit;
            fromPartial(object: any): _92.Commit;
        };
        CommitSig: {
            encode(message: _92.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.CommitSig;
            fromPartial(object: any): _92.CommitSig;
        };
        Proposal: {
            encode(message: _92.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.Proposal;
            fromPartial(object: any): _92.Proposal;
        };
        SignedHeader: {
            encode(message: _92.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.SignedHeader;
            fromPartial(object: any): _92.SignedHeader;
        };
        LightBlock: {
            encode(message: _92.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.LightBlock;
            fromPartial(object: any): _92.LightBlock;
        };
        BlockMeta: {
            encode(message: _92.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.BlockMeta;
            fromPartial(object: any): _92.BlockMeta;
        };
        TxProof: {
            encode(message: _92.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.TxProof;
            fromPartial(object: any): _92.TxProof;
        };
        ConsensusParams: {
            encode(message: _91.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.ConsensusParams;
            fromPartial(object: any): _91.ConsensusParams;
        };
        BlockParams: {
            encode(message: _91.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.BlockParams;
            fromPartial(object: any): _91.BlockParams;
        };
        EvidenceParams: {
            encode(message: _91.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.EvidenceParams;
            fromPartial(object: any): _91.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _91.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.ValidatorParams;
            fromPartial(object: any): _91.ValidatorParams;
        };
        VersionParams: {
            encode(message: _91.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.VersionParams;
            fromPartial(object: any): _91.VersionParams;
        };
        HashedParams: {
            encode(message: _91.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.HashedParams;
            fromPartial(object: any): _91.HashedParams;
        };
        Evidence: {
            encode(message: _90.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.Evidence;
            fromPartial(object: any): _90.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _90.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.DuplicateVoteEvidence;
            fromPartial(object: any): _90.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _90.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.LightClientAttackEvidence;
            fromPartial(object: any): _90.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _90.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.EvidenceList;
            fromPartial(object: any): _90.EvidenceList;
        };
        Block: {
            encode(message: _89.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.Block;
            fromPartial(object: any): _89.Block;
        };
    };
    const version: {
        App: {
            encode(message: _94.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.App;
            fromPartial(object: any): _94.App;
        };
        Consensus: {
            encode(message: _94.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.Consensus;
            fromPartial(object: any): _94.Consensus;
        };
    };
}
