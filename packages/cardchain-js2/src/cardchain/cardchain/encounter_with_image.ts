//@ts-nocheck
import { Encounter, EncounterAmino, EncounterSDKType } from "./encounter";
import { BinaryReader, BinaryWriter } from "../../binary";
export interface EncounterWithImage {
  encounter?: Encounter;
  image: string;
}
export interface EncounterWithImageProtoMsg {
  typeUrl: "/cardchain.cardchain.EncounterWithImage";
  value: Uint8Array;
}
export interface EncounterWithImageAmino {
  encounter?: EncounterAmino;
  image?: string;
}
export interface EncounterWithImageAminoMsg {
  type: "/cardchain.cardchain.EncounterWithImage";
  value: EncounterWithImageAmino;
}
export interface EncounterWithImageSDKType {
  encounter?: EncounterSDKType;
  image: string;
}
function createBaseEncounterWithImage(): EncounterWithImage {
  return {
    encounter: undefined,
    image: ""
  };
}
export const EncounterWithImage = {
  typeUrl: "/cardchain.cardchain.EncounterWithImage",
  encode(message: EncounterWithImage, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.encounter !== undefined) {
      Encounter.encode(message.encounter, writer.uint32(10).fork()).ldelim();
    }
    if (message.image !== "") {
      writer.uint32(18).string(message.image);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EncounterWithImage {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEncounterWithImage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.encounter = Encounter.decode(reader, reader.uint32());
          break;
        case 2:
          message.image = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EncounterWithImage>): EncounterWithImage {
    const message = createBaseEncounterWithImage();
    message.encounter = object.encounter !== undefined && object.encounter !== null ? Encounter.fromPartial(object.encounter) : undefined;
    message.image = object.image ?? "";
    return message;
  },
  fromAmino(object: EncounterWithImageAmino): EncounterWithImage {
    const message = createBaseEncounterWithImage();
    if (object.encounter !== undefined && object.encounter !== null) {
      message.encounter = Encounter.fromAmino(object.encounter);
    }
    if (object.image !== undefined && object.image !== null) {
      message.image = object.image;
    }
    return message;
  },
  toAmino(message: EncounterWithImage): EncounterWithImageAmino {
    const obj: any = {};
    obj.encounter = message.encounter ? Encounter.toAmino(message.encounter) : undefined;
    obj.image = message.image === "" ? undefined : message.image;
    return obj;
  },
  fromAminoMsg(object: EncounterWithImageAminoMsg): EncounterWithImage {
    return EncounterWithImage.fromAmino(object.value);
  },
  fromProtoMsg(message: EncounterWithImageProtoMsg): EncounterWithImage {
    return EncounterWithImage.decode(message.value);
  },
  toProto(message: EncounterWithImage): Uint8Array {
    return EncounterWithImage.encode(message).finish();
  },
  toProtoMsg(message: EncounterWithImage): EncounterWithImageProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.EncounterWithImage",
      value: EncounterWithImage.encode(message).finish()
    };
  }
};