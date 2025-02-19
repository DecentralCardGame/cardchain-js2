//@ts-nocheck
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
export enum SellOfferStatus {
  empty = 0,
  open = 1,
  sold = 2,
  removed = 3,
  UNRECOGNIZED = -1,
}
export const SellOfferStatusSDKType = SellOfferStatus;
export const SellOfferStatusAmino = SellOfferStatus;
export function sellOfferStatusFromJSON(object: any): SellOfferStatus {
  switch (object) {
    case 0:
    case "empty":
      return SellOfferStatus.empty;
    case 1:
    case "open":
      return SellOfferStatus.open;
    case 2:
    case "sold":
      return SellOfferStatus.sold;
    case 3:
    case "removed":
      return SellOfferStatus.removed;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SellOfferStatus.UNRECOGNIZED;
  }
}
export function sellOfferStatusToJSON(object: SellOfferStatus): string {
  switch (object) {
    case SellOfferStatus.empty:
      return "empty";
    case SellOfferStatus.open:
      return "open";
    case SellOfferStatus.sold:
      return "sold";
    case SellOfferStatus.removed:
      return "removed";
    case SellOfferStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface SellOffer {
  seller: string;
  buyer: string;
  card: bigint;
  price: Coin;
  status: SellOfferStatus;
}
export interface SellOfferProtoMsg {
  typeUrl: "/cardchain.cardchain.SellOffer";
  value: Uint8Array;
}
export interface SellOfferAmino {
  seller?: string;
  buyer?: string;
  card?: string;
  price?: CoinAmino;
  status?: SellOfferStatus;
}
export interface SellOfferAminoMsg {
  type: "/cardchain.cardchain.SellOffer";
  value: SellOfferAmino;
}
export interface SellOfferSDKType {
  seller: string;
  buyer: string;
  card: bigint;
  price: CoinSDKType;
  status: SellOfferStatus;
}
function createBaseSellOffer(): SellOffer {
  return {
    seller: "",
    buyer: "",
    card: BigInt(0),
    price: Coin.fromPartial({}),
    status: 0
  };
}
export const SellOffer = {
  typeUrl: "/cardchain.cardchain.SellOffer",
  encode(message: SellOffer, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.seller !== "") {
      writer.uint32(10).string(message.seller);
    }
    if (message.buyer !== "") {
      writer.uint32(18).string(message.buyer);
    }
    if (message.card !== BigInt(0)) {
      writer.uint32(24).uint64(message.card);
    }
    if (message.price !== undefined) {
      Coin.encode(message.price, writer.uint32(34).fork()).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(40).int32(message.status);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SellOffer {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSellOffer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.seller = reader.string();
          break;
        case 2:
          message.buyer = reader.string();
          break;
        case 3:
          message.card = reader.uint64();
          break;
        case 4:
          message.price = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.status = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<SellOffer>): SellOffer {
    const message = createBaseSellOffer();
    message.seller = object.seller ?? "";
    message.buyer = object.buyer ?? "";
    message.card = object.card !== undefined && object.card !== null ? BigInt(object.card.toString()) : BigInt(0);
    message.price = object.price !== undefined && object.price !== null ? Coin.fromPartial(object.price) : undefined;
    message.status = object.status ?? 0;
    return message;
  },
  fromAmino(object: SellOfferAmino): SellOffer {
    const message = createBaseSellOffer();
    if (object.seller !== undefined && object.seller !== null) {
      message.seller = object.seller;
    }
    if (object.buyer !== undefined && object.buyer !== null) {
      message.buyer = object.buyer;
    }
    if (object.card !== undefined && object.card !== null) {
      message.card = BigInt(object.card);
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = Coin.fromAmino(object.price);
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    return message;
  },
  toAmino(message: SellOffer): SellOfferAmino {
    const obj: any = {};
    obj.seller = message.seller === "" ? undefined : message.seller;
    obj.buyer = message.buyer === "" ? undefined : message.buyer;
    obj.card = message.card !== BigInt(0) ? message.card?.toString() : undefined;
    obj.price = message.price ? Coin.toAmino(message.price) : undefined;
    obj.status = message.status === 0 ? undefined : message.status;
    return obj;
  },
  fromAminoMsg(object: SellOfferAminoMsg): SellOffer {
    return SellOffer.fromAmino(object.value);
  },
  fromProtoMsg(message: SellOfferProtoMsg): SellOffer {
    return SellOffer.decode(message.value);
  },
  toProto(message: SellOffer): Uint8Array {
    return SellOffer.encode(message).finish();
  },
  toProtoMsg(message: SellOffer): SellOfferProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.SellOffer",
      value: SellOffer.encode(message).finish()
    };
  }
};