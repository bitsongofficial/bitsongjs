import * as _90 from "./abci/types";
import * as _91 from "./crypto/keys";
import * as _92 from "./crypto/proof";
import * as _93 from "./libs/bits/types";
import * as _94 from "./p2p/types";
import * as _95 from "./types/block";
import * as _96 from "./types/evidence";
import * as _97 from "./types/params";
import * as _98 from "./types/types";
import * as _99 from "./types/validator";
import * as _100 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _90.CheckTxType;
        checkTxTypeToJSON(object: _90.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _90.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _90.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _90.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _90.ResponseApplySnapshotChunk_Result): string;
        evidenceTypeFromJSON(object: any): _90.EvidenceType;
        evidenceTypeToJSON(object: _90.EvidenceType): string;
        CheckTxType: typeof _90.CheckTxType;
        CheckTxTypeSDKType: typeof _90.CheckTxTypeSDKType;
        ResponseOfferSnapshot_Result: typeof _90.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultSDKType: typeof _90.ResponseOfferSnapshot_ResultSDKType;
        ResponseApplySnapshotChunk_Result: typeof _90.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultSDKType: typeof _90.ResponseApplySnapshotChunk_ResultSDKType;
        EvidenceType: typeof _90.EvidenceType;
        EvidenceTypeSDKType: typeof _90.EvidenceTypeSDKType;
        Request: {
            encode(message: _90.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.Request;
            fromPartial(object: any): _90.Request;
        };
        RequestEcho: {
            encode(message: _90.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.RequestEcho;
            fromPartial(object: any): _90.RequestEcho;
        };
        RequestFlush: {
            encode(_: _90.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.RequestFlush;
            fromPartial(_: any): _90.RequestFlush;
        };
        RequestInfo: {
            encode(message: _90.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.RequestInfo;
            fromPartial(object: any): _90.RequestInfo;
        };
        RequestSetOption: {
            encode(message: _90.RequestSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.RequestSetOption;
            fromPartial(object: any): _90.RequestSetOption;
        };
        RequestInitChain: {
            encode(message: _90.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.RequestInitChain;
            fromPartial(object: any): _90.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _90.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.RequestQuery;
            fromPartial(object: any): _90.RequestQuery;
        };
        RequestBeginBlock: {
            encode(message: _90.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.RequestBeginBlock;
            fromPartial(object: any): _90.RequestBeginBlock;
        };
        RequestCheckTx: {
            encode(message: _90.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.RequestCheckTx;
            fromPartial(object: any): _90.RequestCheckTx;
        };
        RequestDeliverTx: {
            encode(message: _90.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.RequestDeliverTx;
            fromPartial(object: any): _90.RequestDeliverTx;
        };
        RequestEndBlock: {
            encode(message: _90.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.RequestEndBlock;
            fromPartial(object: any): _90.RequestEndBlock;
        };
        RequestCommit: {
            encode(_: _90.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.RequestCommit;
            fromPartial(_: any): _90.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _90.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.RequestListSnapshots;
            fromPartial(_: any): _90.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _90.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.RequestOfferSnapshot;
            fromPartial(object: any): _90.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _90.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.RequestLoadSnapshotChunk;
            fromPartial(object: any): _90.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _90.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.RequestApplySnapshotChunk;
            fromPartial(object: any): _90.RequestApplySnapshotChunk;
        };
        Response: {
            encode(message: _90.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.Response;
            fromPartial(object: any): _90.Response;
        };
        ResponseException: {
            encode(message: _90.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.ResponseException;
            fromPartial(object: any): _90.ResponseException;
        };
        ResponseEcho: {
            encode(message: _90.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.ResponseEcho;
            fromPartial(object: any): _90.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _90.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.ResponseFlush;
            fromPartial(_: any): _90.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _90.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.ResponseInfo;
            fromPartial(object: any): _90.ResponseInfo;
        };
        ResponseSetOption: {
            encode(message: _90.ResponseSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.ResponseSetOption;
            fromPartial(object: any): _90.ResponseSetOption;
        };
        ResponseInitChain: {
            encode(message: _90.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.ResponseInitChain;
            fromPartial(object: any): _90.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _90.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.ResponseQuery;
            fromPartial(object: any): _90.ResponseQuery;
        };
        ResponseBeginBlock: {
            encode(message: _90.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.ResponseBeginBlock;
            fromPartial(object: any): _90.ResponseBeginBlock;
        };
        ResponseCheckTx: {
            encode(message: _90.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.ResponseCheckTx;
            fromPartial(object: any): _90.ResponseCheckTx;
        };
        ResponseDeliverTx: {
            encode(message: _90.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.ResponseDeliverTx;
            fromPartial(object: any): _90.ResponseDeliverTx;
        };
        ResponseEndBlock: {
            encode(message: _90.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.ResponseEndBlock;
            fromPartial(object: any): _90.ResponseEndBlock;
        };
        ResponseCommit: {
            encode(message: _90.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.ResponseCommit;
            fromPartial(object: any): _90.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _90.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.ResponseListSnapshots;
            fromPartial(object: any): _90.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _90.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.ResponseOfferSnapshot;
            fromPartial(object: any): _90.ResponseOfferSnapshot;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _90.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.ResponseLoadSnapshotChunk;
            fromPartial(object: any): _90.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _90.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.ResponseApplySnapshotChunk;
            fromPartial(object: any): _90.ResponseApplySnapshotChunk;
        };
        ConsensusParams: {
            encode(message: _90.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.ConsensusParams;
            fromPartial(object: any): _90.ConsensusParams;
        };
        BlockParams: {
            encode(message: _90.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.BlockParams;
            fromPartial(object: any): _90.BlockParams;
        };
        LastCommitInfo: {
            encode(message: _90.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.LastCommitInfo;
            fromPartial(object: any): _90.LastCommitInfo;
        };
        Event: {
            encode(message: _90.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.Event;
            fromPartial(object: any): _90.Event;
        };
        EventAttribute: {
            encode(message: _90.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.EventAttribute;
            fromPartial(object: any): _90.EventAttribute;
        };
        TxResult: {
            encode(message: _90.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.TxResult;
            fromPartial(object: any): _90.TxResult;
        };
        Validator: {
            encode(message: _90.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.Validator;
            fromPartial(object: any): _90.Validator;
        };
        ValidatorUpdate: {
            encode(message: _90.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.ValidatorUpdate;
            fromPartial(object: any): _90.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _90.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.VoteInfo;
            fromPartial(object: any): _90.VoteInfo;
        };
        Evidence: {
            encode(message: _90.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.Evidence;
            fromPartial(object: any): _90.Evidence;
        };
        Snapshot: {
            encode(message: _90.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.Snapshot;
            fromPartial(object: any): _90.Snapshot;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _92.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.Proof;
            fromPartial(object: any): _92.Proof;
        };
        ValueOp: {
            encode(message: _92.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.ValueOp;
            fromPartial(object: any): _92.ValueOp;
        };
        DominoOp: {
            encode(message: _92.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.DominoOp;
            fromPartial(object: any): _92.DominoOp;
        };
        ProofOp: {
            encode(message: _92.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.ProofOp;
            fromPartial(object: any): _92.ProofOp;
        };
        ProofOps: {
            encode(message: _92.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.ProofOps;
            fromPartial(object: any): _92.ProofOps;
        };
        PublicKey: {
            encode(message: _91.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.PublicKey;
            fromPartial(object: any): _91.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _93.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.BitArray;
                fromPartial(object: any): _93.BitArray;
            };
        };
    }
    const p2p: {
        NetAddress: {
            encode(message: _94.NetAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.NetAddress;
            fromPartial(object: any): _94.NetAddress;
        };
        ProtocolVersion: {
            encode(message: _94.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.ProtocolVersion;
            fromPartial(object: any): _94.ProtocolVersion;
        };
        DefaultNodeInfo: {
            encode(message: _94.DefaultNodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.DefaultNodeInfo;
            fromPartial(object: any): _94.DefaultNodeInfo;
        };
        DefaultNodeInfoOther: {
            encode(message: _94.DefaultNodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.DefaultNodeInfoOther;
            fromPartial(object: any): _94.DefaultNodeInfoOther;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _99.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.ValidatorSet;
            fromPartial(object: any): _99.ValidatorSet;
        };
        Validator: {
            encode(message: _99.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.Validator;
            fromPartial(object: any): _99.Validator;
        };
        SimpleValidator: {
            encode(message: _99.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.SimpleValidator;
            fromPartial(object: any): _99.SimpleValidator;
        };
        blockIDFlagFromJSON(object: any): _98.BlockIDFlag;
        blockIDFlagToJSON(object: _98.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _98.SignedMsgType;
        signedMsgTypeToJSON(object: _98.SignedMsgType): string;
        BlockIDFlag: typeof _98.BlockIDFlag;
        BlockIDFlagSDKType: typeof _98.BlockIDFlagSDKType;
        SignedMsgType: typeof _98.SignedMsgType;
        SignedMsgTypeSDKType: typeof _98.SignedMsgTypeSDKType;
        PartSetHeader: {
            encode(message: _98.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.PartSetHeader;
            fromPartial(object: any): _98.PartSetHeader;
        };
        Part: {
            encode(message: _98.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.Part;
            fromPartial(object: any): _98.Part;
        };
        BlockID: {
            encode(message: _98.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.BlockID;
            fromPartial(object: any): _98.BlockID;
        };
        Header: {
            encode(message: _98.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.Header;
            fromPartial(object: any): _98.Header;
        };
        Data: {
            encode(message: _98.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.Data;
            fromPartial(object: any): _98.Data;
        };
        Vote: {
            encode(message: _98.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.Vote;
            fromPartial(object: any): _98.Vote;
        };
        Commit: {
            encode(message: _98.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.Commit;
            fromPartial(object: any): _98.Commit;
        };
        CommitSig: {
            encode(message: _98.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.CommitSig;
            fromPartial(object: any): _98.CommitSig;
        };
        Proposal: {
            encode(message: _98.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.Proposal;
            fromPartial(object: any): _98.Proposal;
        };
        SignedHeader: {
            encode(message: _98.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.SignedHeader;
            fromPartial(object: any): _98.SignedHeader;
        };
        LightBlock: {
            encode(message: _98.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.LightBlock;
            fromPartial(object: any): _98.LightBlock;
        };
        BlockMeta: {
            encode(message: _98.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.BlockMeta;
            fromPartial(object: any): _98.BlockMeta;
        };
        TxProof: {
            encode(message: _98.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.TxProof;
            fromPartial(object: any): _98.TxProof;
        };
        ConsensusParams: {
            encode(message: _97.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.ConsensusParams;
            fromPartial(object: any): _97.ConsensusParams;
        };
        BlockParams: {
            encode(message: _97.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.BlockParams;
            fromPartial(object: any): _97.BlockParams;
        };
        EvidenceParams: {
            encode(message: _97.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.EvidenceParams;
            fromPartial(object: any): _97.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _97.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.ValidatorParams;
            fromPartial(object: any): _97.ValidatorParams;
        };
        VersionParams: {
            encode(message: _97.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.VersionParams;
            fromPartial(object: any): _97.VersionParams;
        };
        HashedParams: {
            encode(message: _97.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.HashedParams;
            fromPartial(object: any): _97.HashedParams;
        };
        Evidence: {
            encode(message: _96.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.Evidence;
            fromPartial(object: any): _96.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _96.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.DuplicateVoteEvidence;
            fromPartial(object: any): _96.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _96.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.LightClientAttackEvidence;
            fromPartial(object: any): _96.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _96.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.EvidenceList;
            fromPartial(object: any): _96.EvidenceList;
        };
        Block: {
            encode(message: _95.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.Block;
            fromPartial(object: any): _95.Block;
        };
    };
    const version: {
        App: {
            encode(message: _100.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.App;
            fromPartial(object: any): _100.App;
        };
        Consensus: {
            encode(message: _100.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.Consensus;
            fromPartial(object: any): _100.Consensus;
        };
    };
}
