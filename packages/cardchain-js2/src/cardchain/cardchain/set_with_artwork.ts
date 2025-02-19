//@ts-nocheck
import { Set, SetAmino, SetSDKType } from "./set";
import { BinaryReader, BinaryWriter } from "../../binary";
import { bytesFromBase64, base64FromBytes } from "../../helpers";
export interface SetWithArtwork {
  set?: Set;
  artwork: Uint8Array;
}
export interface SetWithArtworkProtoMsg {
  typeUrl: "/cardchain.cardchain.SetWithArtwork";
  value: Uint8Array;
}
export interface SetWithArtworkAmino {
  set?: SetAmino;
  artwork?: string;
}
export interface SetWithArtworkAminoMsg {
  type: "/cardchain.cardchain.SetWithArtwork";
  value: SetWithArtworkAmino;
}
export interface SetWithArtworkSDKType {
  set?: SetSDKType;
  artwork: Uint8Array;
}
function createBaseSetWithArtwork(): SetWithArtwork {
  return {
    set: undefined,
    artwork: new Uint8Array()
  };
}
export const SetWithArtwork = {
  typeUrl: "/cardchain.cardchain.SetWithArtwork",
  encode(message: SetWithArtwork, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.set !== undefined) {
      Set.encode(message.set, writer.uint32(10).fork()).ldelim();
    }
    if (message.artwork.length !== 0) {
      writer.uint32(18).bytes(message.artwork);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SetWithArtwork {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetWithArtwork();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.set = Set.decode(reader, reader.uint32());
          break;
        case 2:
          message.artwork = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<SetWithArtwork>): SetWithArtwork {
    const message = createBaseSetWithArtwork();
    message.set = object.set !== undefined && object.set !== null ? Set.fromPartial(object.set) : undefined;
    message.artwork = object.artwork ?? new Uint8Array();
    return message;
  },
  fromAmino(object: SetWithArtworkAmino): SetWithArtwork {
    const message = createBaseSetWithArtwork();
    if (object.set !== undefined && object.set !== null) {
      message.set = Set.fromAmino(object.set);
    }
    if (object.artwork !== undefined && object.artwork !== null) {
      message.artwork = bytesFromBase64(object.artwork);
    }
    return message;
  },
  toAmino(message: SetWithArtwork): SetWithArtworkAmino {
    const obj: any = {};
    obj.set = message.set ? Set.toAmino(message.set) : undefined;
    obj.artwork = message.artwork ? base64FromBytes(message.artwork) : undefined;
    return obj;
  },
  fromAminoMsg(object: SetWithArtworkAminoMsg): SetWithArtwork {
    return SetWithArtwork.fromAmino(object.value);
  },
  fromProtoMsg(message: SetWithArtworkProtoMsg): SetWithArtwork {
    return SetWithArtwork.decode(message.value);
  },
  toProto(message: SetWithArtwork): Uint8Array {
    return SetWithArtwork.encode(message).finish();
  },
  toProtoMsg(message: SetWithArtwork): SetWithArtworkProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.SetWithArtwork",
      value: SetWithArtwork.encode(message).finish()
    };
  }
};