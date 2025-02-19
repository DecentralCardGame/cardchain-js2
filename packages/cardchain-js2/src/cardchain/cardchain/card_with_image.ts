//@ts-nocheck
import { Card, CardAmino, CardSDKType } from "./card";
import { BinaryReader, BinaryWriter } from "../../binary";
export interface CardWithImage {
  card?: Card;
  image: string;
  hash: string;
}
export interface CardWithImageProtoMsg {
  typeUrl: "/cardchain.cardchain.CardWithImage";
  value: Uint8Array;
}
export interface CardWithImageAmino {
  card?: CardAmino;
  image?: string;
  hash?: string;
}
export interface CardWithImageAminoMsg {
  type: "/cardchain.cardchain.CardWithImage";
  value: CardWithImageAmino;
}
export interface CardWithImageSDKType {
  card?: CardSDKType;
  image: string;
  hash: string;
}
function createBaseCardWithImage(): CardWithImage {
  return {
    card: undefined,
    image: "",
    hash: ""
  };
}
export const CardWithImage = {
  typeUrl: "/cardchain.cardchain.CardWithImage",
  encode(message: CardWithImage, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.card !== undefined) {
      Card.encode(message.card, writer.uint32(10).fork()).ldelim();
    }
    if (message.image !== "") {
      writer.uint32(18).string(message.image);
    }
    if (message.hash !== "") {
      writer.uint32(26).string(message.hash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CardWithImage {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCardWithImage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.card = Card.decode(reader, reader.uint32());
          break;
        case 2:
          message.image = reader.string();
          break;
        case 3:
          message.hash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<CardWithImage>): CardWithImage {
    const message = createBaseCardWithImage();
    message.card = object.card !== undefined && object.card !== null ? Card.fromPartial(object.card) : undefined;
    message.image = object.image ?? "";
    message.hash = object.hash ?? "";
    return message;
  },
  fromAmino(object: CardWithImageAmino): CardWithImage {
    const message = createBaseCardWithImage();
    if (object.card !== undefined && object.card !== null) {
      message.card = Card.fromAmino(object.card);
    }
    if (object.image !== undefined && object.image !== null) {
      message.image = object.image;
    }
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = object.hash;
    }
    return message;
  },
  toAmino(message: CardWithImage): CardWithImageAmino {
    const obj: any = {};
    obj.card = message.card ? Card.toAmino(message.card) : undefined;
    obj.image = message.image === "" ? undefined : message.image;
    obj.hash = message.hash === "" ? undefined : message.hash;
    return obj;
  },
  fromAminoMsg(object: CardWithImageAminoMsg): CardWithImage {
    return CardWithImage.fromAmino(object.value);
  },
  fromProtoMsg(message: CardWithImageProtoMsg): CardWithImage {
    return CardWithImage.decode(message.value);
  },
  toProto(message: CardWithImage): Uint8Array {
    return CardWithImage.encode(message).finish();
  },
  toProtoMsg(message: CardWithImage): CardWithImageProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.CardWithImage",
      value: CardWithImage.encode(message).finish()
    };
  }
};