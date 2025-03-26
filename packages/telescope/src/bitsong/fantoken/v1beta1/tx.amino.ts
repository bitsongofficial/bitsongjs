import { MsgIssue, MsgMint, MsgBurn, MsgDisableMint, MsgSetMinter, MsgSetAuthority, MsgSetUri } from "./tx";
export const AminoConverter = {
  "/bitsong.fantoken.v1beta1.MsgIssue": {
    aminoType: "/bitsong.fantoken.v1beta1.MsgIssue",
    toAmino: MsgIssue.toAmino,
    fromAmino: MsgIssue.fromAmino
  },
  "/bitsong.fantoken.v1beta1.MsgMint": {
    aminoType: "/bitsong.fantoken.v1beta1.MsgMint",
    toAmino: MsgMint.toAmino,
    fromAmino: MsgMint.fromAmino
  },
  "/bitsong.fantoken.v1beta1.MsgBurn": {
    aminoType: "/bitsong.fantoken.v1beta1.MsgBurn",
    toAmino: MsgBurn.toAmino,
    fromAmino: MsgBurn.fromAmino
  },
  "/bitsong.fantoken.v1beta1.MsgDisableMint": {
    aminoType: "/bitsong.fantoken.v1beta1.MsgDisableMint",
    toAmino: MsgDisableMint.toAmino,
    fromAmino: MsgDisableMint.fromAmino
  },
  "/bitsong.fantoken.v1beta1.MsgSetMinter": {
    aminoType: "/bitsong.fantoken.v1beta1.MsgSetMinter",
    toAmino: MsgSetMinter.toAmino,
    fromAmino: MsgSetMinter.fromAmino
  },
  "/bitsong.fantoken.v1beta1.MsgSetAuthority": {
    aminoType: "/bitsong.fantoken.v1beta1.MsgSetAuthority",
    toAmino: MsgSetAuthority.toAmino,
    fromAmino: MsgSetAuthority.fromAmino
  },
  "/bitsong.fantoken.v1beta1.MsgSetUri": {
    aminoType: "/bitsong.fantoken.v1beta1.MsgSetUri",
    toAmino: MsgSetUri.toAmino,
    fromAmino: MsgSetUri.fromAmino
  }
};