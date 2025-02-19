//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
import { bytesFromBase64, base64FromBytes } from "../../helpers";
export interface Image {
  image: Uint8Array;
}
export interface ImageProtoMsg {
  typeUrl: "/cardchain.cardchain.Image";
  value: Uint8Array;
}
export interface ImageAmino {
  image?: string;
}
export interface ImageAminoMsg {
  type: "/cardchain.cardchain.Image";
  value: ImageAmino;
}
export interface ImageSDKType {
  image: Uint8Array;
}
function createBaseImage(): Image {
  return {
    image: new Uint8Array()
  };
}
export const Image = {
  typeUrl: "/cardchain.cardchain.Image",
  encode(message: Image, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.image.length !== 0) {
      writer.uint32(10).bytes(message.image);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Image {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseImage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.image = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Image>): Image {
    const message = createBaseImage();
    message.image = object.image ?? new Uint8Array();
    return message;
  },
  fromAmino(object: ImageAmino): Image {
    const message = createBaseImage();
    if (object.image !== undefined && object.image !== null) {
      message.image = bytesFromBase64(object.image);
    }
    return message;
  },
  toAmino(message: Image): ImageAmino {
    const obj: any = {};
    obj.image = message.image ? base64FromBytes(message.image) : undefined;
    return obj;
  },
  fromAminoMsg(object: ImageAminoMsg): Image {
    return Image.fromAmino(object.value);
  },
  fromProtoMsg(message: ImageProtoMsg): Image {
    return Image.decode(message.value);
  },
  toProto(message: Image): Uint8Array {
    return Image.encode(message).finish();
  },
  toProtoMsg(message: Image): ImageProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.Image",
      value: Image.encode(message).finish()
    };
  }
};