//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
export interface Flag {
  module: string;
  name: string;
  set: boolean;
}
export interface FlagProtoMsg {
  typeUrl: "/cardchain.featureflag.Flag";
  value: Uint8Array;
}
export interface FlagAmino {
  Module?: string;
  Name?: string;
  Set?: boolean;
}
export interface FlagAminoMsg {
  type: "/cardchain.featureflag.Flag";
  value: FlagAmino;
}
export interface FlagSDKType {
  Module: string;
  Name: string;
  Set: boolean;
}
function createBaseFlag(): Flag {
  return {
    module: "",
    name: "",
    set: false
  };
}
export const Flag = {
  typeUrl: "/cardchain.featureflag.Flag",
  encode(message: Flag, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.module !== "") {
      writer.uint32(10).string(message.module);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.set === true) {
      writer.uint32(24).bool(message.set);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Flag {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFlag();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.module = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.set = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Flag>): Flag {
    const message = createBaseFlag();
    message.module = object.module ?? "";
    message.name = object.name ?? "";
    message.set = object.set ?? false;
    return message;
  },
  fromAmino(object: FlagAmino): Flag {
    const message = createBaseFlag();
    if (object.Module !== undefined && object.Module !== null) {
      message.module = object.Module;
    }
    if (object.Name !== undefined && object.Name !== null) {
      message.name = object.Name;
    }
    if (object.Set !== undefined && object.Set !== null) {
      message.set = object.Set;
    }
    return message;
  },
  toAmino(message: Flag): FlagAmino {
    const obj: any = {};
    obj.Module = message.module === "" ? undefined : message.module;
    obj.Name = message.name === "" ? undefined : message.name;
    obj.Set = message.set === false ? undefined : message.set;
    return obj;
  },
  fromAminoMsg(object: FlagAminoMsg): Flag {
    return Flag.fromAmino(object.value);
  },
  fromProtoMsg(message: FlagProtoMsg): Flag {
    return Flag.decode(message.value);
  },
  toProto(message: Flag): Uint8Array {
    return Flag.encode(message).finish();
  },
  toProtoMsg(message: Flag): FlagProtoMsg {
    return {
      typeUrl: "/cardchain.featureflag.Flag",
      value: Flag.encode(message).finish()
    };
  }
};