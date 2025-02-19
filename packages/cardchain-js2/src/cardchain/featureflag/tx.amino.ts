//@ts-nocheck
import { MsgUpdateParams, MsgSet } from "./tx";
export const AminoConverter = {
  "/cardchain.featureflag.MsgUpdateParams": {
    aminoType: "cardchain/x/featureflag/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  },
  "/cardchain.featureflag.MsgSet": {
    aminoType: "/cardchain.featureflag.MsgSet",
    toAmino: MsgSet.toAmino,
    fromAmino: MsgSet.fromAmino
  }
};