//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgUpdateParams, MsgSet } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/cardchain.featureflag.MsgUpdateParams", MsgUpdateParams], ["/cardchain.featureflag.MsgSet", MsgSet]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/cardchain.featureflag.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    set(value: MsgSet) {
      return {
        typeUrl: "/cardchain.featureflag.MsgSet",
        value: MsgSet.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/cardchain.featureflag.MsgUpdateParams",
        value
      };
    },
    set(value: MsgSet) {
      return {
        typeUrl: "/cardchain.featureflag.MsgSet",
        value
      };
    }
  },
  fromPartial: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/cardchain.featureflag.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    set(value: MsgSet) {
      return {
        typeUrl: "/cardchain.featureflag.MsgSet",
        value: MsgSet.fromPartial(value)
      };
    }
  }
};