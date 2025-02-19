//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
export interface Zealy {
  address: string;
  zealyId: string;
}
export interface ZealyProtoMsg {
  typeUrl: "/cardchain.cardchain.Zealy";
  value: Uint8Array;
}
export interface ZealyAmino {
  address?: string;
  zealyId?: string;
}
export interface ZealyAminoMsg {
  type: "/cardchain.cardchain.Zealy";
  value: ZealyAmino;
}
export interface ZealySDKType {
  address: string;
  zealyId: string;
}
function createBaseZealy(): Zealy {
  return {
    address: "",
    zealyId: ""
  };
}
export const Zealy = {
  typeUrl: "/cardchain.cardchain.Zealy",
  encode(message: Zealy, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.zealyId !== "") {
      writer.uint32(18).string(message.zealyId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Zealy {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseZealy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.zealyId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Zealy>): Zealy {
    const message = createBaseZealy();
    message.address = object.address ?? "";
    message.zealyId = object.zealyId ?? "";
    return message;
  },
  fromAmino(object: ZealyAmino): Zealy {
    const message = createBaseZealy();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.zealyId !== undefined && object.zealyId !== null) {
      message.zealyId = object.zealyId;
    }
    return message;
  },
  toAmino(message: Zealy): ZealyAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.zealyId = message.zealyId === "" ? undefined : message.zealyId;
    return obj;
  },
  fromAminoMsg(object: ZealyAminoMsg): Zealy {
    return Zealy.fromAmino(object.value);
  },
  fromProtoMsg(message: ZealyProtoMsg): Zealy {
    return Zealy.decode(message.value);
  },
  toProto(message: Zealy): Uint8Array {
    return Zealy.encode(message).finish();
  },
  toProtoMsg(message: Zealy): ZealyProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.Zealy",
      value: Zealy.encode(message).finish()
    };
  }
};