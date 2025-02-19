//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
export interface CardContent {
  content: string;
  hash: string;
}
export interface CardContentProtoMsg {
  typeUrl: "/cardchain.cardchain.CardContent";
  value: Uint8Array;
}
export interface CardContentAmino {
  content?: string;
  hash?: string;
}
export interface CardContentAminoMsg {
  type: "/cardchain.cardchain.CardContent";
  value: CardContentAmino;
}
export interface CardContentSDKType {
  content: string;
  hash: string;
}
function createBaseCardContent(): CardContent {
  return {
    content: "",
    hash: ""
  };
}
export const CardContent = {
  typeUrl: "/cardchain.cardchain.CardContent",
  encode(message: CardContent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.content !== "") {
      writer.uint32(10).string(message.content);
    }
    if (message.hash !== "") {
      writer.uint32(18).string(message.hash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CardContent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCardContent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.content = reader.string();
          break;
        case 2:
          message.hash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<CardContent>): CardContent {
    const message = createBaseCardContent();
    message.content = object.content ?? "";
    message.hash = object.hash ?? "";
    return message;
  },
  fromAmino(object: CardContentAmino): CardContent {
    const message = createBaseCardContent();
    if (object.content !== undefined && object.content !== null) {
      message.content = object.content;
    }
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = object.hash;
    }
    return message;
  },
  toAmino(message: CardContent): CardContentAmino {
    const obj: any = {};
    obj.content = message.content === "" ? undefined : message.content;
    obj.hash = message.hash === "" ? undefined : message.hash;
    return obj;
  },
  fromAminoMsg(object: CardContentAminoMsg): CardContent {
    return CardContent.fromAmino(object.value);
  },
  fromProtoMsg(message: CardContentProtoMsg): CardContent {
    return CardContent.decode(message.value);
  },
  toProto(message: CardContent): Uint8Array {
    return CardContent.encode(message).finish();
  },
  toProtoMsg(message: CardContent): CardContentProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.CardContent",
      value: CardContent.encode(message).finish()
    };
  }
};