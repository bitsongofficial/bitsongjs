import { Rpc } from "../../helpers";
import { MsgIssue, MsgIssueResponse, MsgMint, MsgMintResponse, MsgBurn, MsgBurnResponse, MsgDisableMint, MsgDisableMintResponse, MsgSetMinter, MsgSetMinterResponse, MsgSetAuthority, MsgSetAuthorityResponse, MsgSetUri, MsgSetUriResponse } from "./tx";
/** Msg defines the oracle Msg service */
export interface Msg {
    /** Issue defines a method for issuing a new fan token */
    issue(request: MsgIssue): Promise<MsgIssueResponse>;
    /** Mint defines a method for minting some fan tokens */
    mint(request: MsgMint): Promise<MsgMintResponse>;
    /** Burn defines a method for burning some fan tokens */
    burn(request: MsgBurn): Promise<MsgBurnResponse>;
    /** DisableMint defines a method for disable the mint function */
    disableMint(request: MsgDisableMint): Promise<MsgDisableMintResponse>;
    setMinter(request: MsgSetMinter): Promise<MsgSetMinterResponse>;
    setAuthority(request: MsgSetAuthority): Promise<MsgSetAuthorityResponse>;
    setUri(request: MsgSetUri): Promise<MsgSetUriResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    issue(request: MsgIssue): Promise<MsgIssueResponse>;
    mint(request: MsgMint): Promise<MsgMintResponse>;
    burn(request: MsgBurn): Promise<MsgBurnResponse>;
    disableMint(request: MsgDisableMint): Promise<MsgDisableMintResponse>;
    setMinter(request: MsgSetMinter): Promise<MsgSetMinterResponse>;
    setAuthority(request: MsgSetAuthority): Promise<MsgSetAuthorityResponse>;
    setUri(request: MsgSetUri): Promise<MsgSetUriResponse>;
}
