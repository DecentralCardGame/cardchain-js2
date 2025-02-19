//@ts-nocheck
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
export enum SetStatus {
  undefined = 0,
  design = 1,
  finalized = 2,
  active = 3,
  archived = 4,
  UNRECOGNIZED = -1,
}
export const SetStatusSDKType = SetStatus;
export const SetStatusAmino = SetStatus;
export function setStatusFromJSON(object: any): SetStatus {
  switch (object) {
    case 0:
    case "undefined":
      return SetStatus.undefined;
    case 1:
    case "design":
      return SetStatus.design;
    case 2:
    case "finalized":
      return SetStatus.finalized;
    case 3:
    case "active":
      return SetStatus.active;
    case 4:
    case "archived":
      return SetStatus.archived;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SetStatus.UNRECOGNIZED;
  }
}
export function setStatusToJSON(object: SetStatus): string {
  switch (object) {
    case SetStatus.undefined:
      return "undefined";
    case SetStatus.design:
      return "design";
    case SetStatus.finalized:
      return "finalized";
    case SetStatus.active:
      return "active";
    case SetStatus.archived:
      return "archived";
    case SetStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface Set {
  name: string;
  cards: bigint[];
  artist: string;
  storyWriter: string;
  contributors: string[];
  story: string;
  artworkId: bigint;
  status: SetStatus;
  timeStamp: bigint;
  contributorsDistribution: AddrWithQuantity[];
  rarities: InnerRarities[];
}
export interface SetProtoMsg {
  typeUrl: "/cardchain.cardchain.Set";
  value: Uint8Array;
}
export interface SetAmino {
  name?: string;
  cards?: string[];
  artist?: string;
  storyWriter?: string;
  contributors?: string[];
  story?: string;
  artworkId?: string;
  status?: SetStatus;
  timeStamp?: string;
  contributorsDistribution?: AddrWithQuantityAmino[];
  Rarities?: InnerRaritiesAmino[];
}
export interface SetAminoMsg {
  type: "/cardchain.cardchain.Set";
  value: SetAmino;
}
export interface SetSDKType {
  name: string;
  cards: bigint[];
  artist: string;
  storyWriter: string;
  contributors: string[];
  story: string;
  artworkId: bigint;
  status: SetStatus;
  timeStamp: bigint;
  contributorsDistribution: AddrWithQuantitySDKType[];
  Rarities: InnerRaritiesSDKType[];
}
export interface InnerRarities {
  r: bigint[];
}
export interface InnerRaritiesProtoMsg {
  typeUrl: "/cardchain.cardchain.InnerRarities";
  value: Uint8Array;
}
export interface InnerRaritiesAmino {
  R?: string[];
}
export interface InnerRaritiesAminoMsg {
  type: "/cardchain.cardchain.InnerRarities";
  value: InnerRaritiesAmino;
}
export interface InnerRaritiesSDKType {
  R: bigint[];
}
export interface AddrWithQuantity {
  addr: string;
  q: number;
  payment?: Coin;
}
export interface AddrWithQuantityProtoMsg {
  typeUrl: "/cardchain.cardchain.AddrWithQuantity";
  value: Uint8Array;
}
export interface AddrWithQuantityAmino {
  addr?: string;
  q?: number;
  payment?: CoinAmino;
}
export interface AddrWithQuantityAminoMsg {
  type: "/cardchain.cardchain.AddrWithQuantity";
  value: AddrWithQuantityAmino;
}
export interface AddrWithQuantitySDKType {
  addr: string;
  q: number;
  payment?: CoinSDKType;
}
function createBaseSet(): Set {
  return {
    name: "",
    cards: [],
    artist: "",
    storyWriter: "",
    contributors: [],
    story: "",
    artworkId: BigInt(0),
    status: 0,
    timeStamp: BigInt(0),
    contributorsDistribution: [],
    rarities: []
  };
}
export const Set = {
  typeUrl: "/cardchain.cardchain.Set",
  encode(message: Set, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    writer.uint32(18).fork();
    for (const v of message.cards) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.artist !== "") {
      writer.uint32(26).string(message.artist);
    }
    if (message.storyWriter !== "") {
      writer.uint32(34).string(message.storyWriter);
    }
    for (const v of message.contributors) {
      writer.uint32(42).string(v!);
    }
    if (message.story !== "") {
      writer.uint32(50).string(message.story);
    }
    if (message.artworkId !== BigInt(0)) {
      writer.uint32(56).uint64(message.artworkId);
    }
    if (message.status !== 0) {
      writer.uint32(64).int32(message.status);
    }
    if (message.timeStamp !== BigInt(0)) {
      writer.uint32(72).int64(message.timeStamp);
    }
    for (const v of message.contributorsDistribution) {
      AddrWithQuantity.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    for (const v of message.rarities) {
      InnerRarities.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Set {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.cards.push(reader.uint64());
            }
          } else {
            message.cards.push(reader.uint64());
          }
          break;
        case 3:
          message.artist = reader.string();
          break;
        case 4:
          message.storyWriter = reader.string();
          break;
        case 5:
          message.contributors.push(reader.string());
          break;
        case 6:
          message.story = reader.string();
          break;
        case 7:
          message.artworkId = reader.uint64();
          break;
        case 8:
          message.status = reader.int32() as any;
          break;
        case 9:
          message.timeStamp = reader.int64();
          break;
        case 10:
          message.contributorsDistribution.push(AddrWithQuantity.decode(reader, reader.uint32()));
          break;
        case 11:
          message.rarities.push(InnerRarities.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Set>): Set {
    const message = createBaseSet();
    message.name = object.name ?? "";
    message.cards = object.cards?.map(e => BigInt(e.toString())) || [];
    message.artist = object.artist ?? "";
    message.storyWriter = object.storyWriter ?? "";
    message.contributors = object.contributors?.map(e => e) || [];
    message.story = object.story ?? "";
    message.artworkId = object.artworkId !== undefined && object.artworkId !== null ? BigInt(object.artworkId.toString()) : BigInt(0);
    message.status = object.status ?? 0;
    message.timeStamp = object.timeStamp !== undefined && object.timeStamp !== null ? BigInt(object.timeStamp.toString()) : BigInt(0);
    message.contributorsDistribution = object.contributorsDistribution?.map(e => AddrWithQuantity.fromPartial(e)) || [];
    message.rarities = object.rarities?.map(e => InnerRarities.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: SetAmino): Set {
    const message = createBaseSet();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    message.cards = object.cards?.map(e => BigInt(e)) || [];
    if (object.artist !== undefined && object.artist !== null) {
      message.artist = object.artist;
    }
    if (object.storyWriter !== undefined && object.storyWriter !== null) {
      message.storyWriter = object.storyWriter;
    }
    message.contributors = object.contributors?.map(e => e) || [];
    if (object.story !== undefined && object.story !== null) {
      message.story = object.story;
    }
    if (object.artworkId !== undefined && object.artworkId !== null) {
      message.artworkId = BigInt(object.artworkId);
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.timeStamp !== undefined && object.timeStamp !== null) {
      message.timeStamp = BigInt(object.timeStamp);
    }
    message.contributorsDistribution = object.contributorsDistribution?.map(e => AddrWithQuantity.fromAmino(e)) || [];
    message.rarities = object.Rarities?.map(e => InnerRarities.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Set): SetAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    if (message.cards) {
      obj.cards = message.cards.map(e => e.toString());
    } else {
      obj.cards = message.cards;
    }
    obj.artist = message.artist === "" ? undefined : message.artist;
    obj.storyWriter = message.storyWriter === "" ? undefined : message.storyWriter;
    if (message.contributors) {
      obj.contributors = message.contributors.map(e => e);
    } else {
      obj.contributors = message.contributors;
    }
    obj.story = message.story === "" ? undefined : message.story;
    obj.artworkId = message.artworkId !== BigInt(0) ? message.artworkId?.toString() : undefined;
    obj.status = message.status === 0 ? undefined : message.status;
    obj.timeStamp = message.timeStamp !== BigInt(0) ? message.timeStamp?.toString() : undefined;
    if (message.contributorsDistribution) {
      obj.contributorsDistribution = message.contributorsDistribution.map(e => e ? AddrWithQuantity.toAmino(e) : undefined);
    } else {
      obj.contributorsDistribution = message.contributorsDistribution;
    }
    if (message.rarities) {
      obj.Rarities = message.rarities.map(e => e ? InnerRarities.toAmino(e) : undefined);
    } else {
      obj.Rarities = message.rarities;
    }
    return obj;
  },
  fromAminoMsg(object: SetAminoMsg): Set {
    return Set.fromAmino(object.value);
  },
  fromProtoMsg(message: SetProtoMsg): Set {
    return Set.decode(message.value);
  },
  toProto(message: Set): Uint8Array {
    return Set.encode(message).finish();
  },
  toProtoMsg(message: Set): SetProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.Set",
      value: Set.encode(message).finish()
    };
  }
};
function createBaseInnerRarities(): InnerRarities {
  return {
    r: []
  };
}
export const InnerRarities = {
  typeUrl: "/cardchain.cardchain.InnerRarities",
  encode(message: InnerRarities, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.r) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): InnerRarities {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInnerRarities();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.r.push(reader.uint64());
            }
          } else {
            message.r.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<InnerRarities>): InnerRarities {
    const message = createBaseInnerRarities();
    message.r = object.r?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object: InnerRaritiesAmino): InnerRarities {
    const message = createBaseInnerRarities();
    message.r = object.R?.map(e => BigInt(e)) || [];
    return message;
  },
  toAmino(message: InnerRarities): InnerRaritiesAmino {
    const obj: any = {};
    if (message.r) {
      obj.R = message.r.map(e => e.toString());
    } else {
      obj.R = message.r;
    }
    return obj;
  },
  fromAminoMsg(object: InnerRaritiesAminoMsg): InnerRarities {
    return InnerRarities.fromAmino(object.value);
  },
  fromProtoMsg(message: InnerRaritiesProtoMsg): InnerRarities {
    return InnerRarities.decode(message.value);
  },
  toProto(message: InnerRarities): Uint8Array {
    return InnerRarities.encode(message).finish();
  },
  toProtoMsg(message: InnerRarities): InnerRaritiesProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.InnerRarities",
      value: InnerRarities.encode(message).finish()
    };
  }
};
function createBaseAddrWithQuantity(): AddrWithQuantity {
  return {
    addr: "",
    q: 0,
    payment: undefined
  };
}
export const AddrWithQuantity = {
  typeUrl: "/cardchain.cardchain.AddrWithQuantity",
  encode(message: AddrWithQuantity, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.addr !== "") {
      writer.uint32(10).string(message.addr);
    }
    if (message.q !== 0) {
      writer.uint32(16).uint32(message.q);
    }
    if (message.payment !== undefined) {
      Coin.encode(message.payment, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AddrWithQuantity {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddrWithQuantity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addr = reader.string();
          break;
        case 2:
          message.q = reader.uint32();
          break;
        case 3:
          message.payment = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<AddrWithQuantity>): AddrWithQuantity {
    const message = createBaseAddrWithQuantity();
    message.addr = object.addr ?? "";
    message.q = object.q ?? 0;
    message.payment = object.payment !== undefined && object.payment !== null ? Coin.fromPartial(object.payment) : undefined;
    return message;
  },
  fromAmino(object: AddrWithQuantityAmino): AddrWithQuantity {
    const message = createBaseAddrWithQuantity();
    if (object.addr !== undefined && object.addr !== null) {
      message.addr = object.addr;
    }
    if (object.q !== undefined && object.q !== null) {
      message.q = object.q;
    }
    if (object.payment !== undefined && object.payment !== null) {
      message.payment = Coin.fromAmino(object.payment);
    }
    return message;
  },
  toAmino(message: AddrWithQuantity): AddrWithQuantityAmino {
    const obj: any = {};
    obj.addr = message.addr === "" ? undefined : message.addr;
    obj.q = message.q === 0 ? undefined : message.q;
    obj.payment = message.payment ? Coin.toAmino(message.payment) : undefined;
    return obj;
  },
  fromAminoMsg(object: AddrWithQuantityAminoMsg): AddrWithQuantity {
    return AddrWithQuantity.fromAmino(object.value);
  },
  fromProtoMsg(message: AddrWithQuantityProtoMsg): AddrWithQuantity {
    return AddrWithQuantity.decode(message.value);
  },
  toProto(message: AddrWithQuantity): Uint8Array {
    return AddrWithQuantity.encode(message).finish();
  },
  toProtoMsg(message: AddrWithQuantity): AddrWithQuantityProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.AddrWithQuantity",
      value: AddrWithQuantity.encode(message).finish()
    };
  }
};