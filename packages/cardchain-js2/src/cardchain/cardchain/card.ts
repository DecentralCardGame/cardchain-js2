//@ts-nocheck
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
import { bytesFromBase64, base64FromBytes } from "../../helpers";
export enum CardStatus {
  none = 0,
  scheme = 1,
  prototype = 2,
  trial = 3,
  permanent = 4,
  suspended = 5,
  banned = 6,
  bannedSoon = 7,
  bannedVerySoon = 8,
  adventureItem = 9,
  UNRECOGNIZED = -1,
}
export const CardStatusSDKType = CardStatus;
export const CardStatusAmino = CardStatus;
export function cardStatusFromJSON(object: any): CardStatus {
  switch (object) {
    case 0:
    case "none":
      return CardStatus.none;
    case 1:
    case "scheme":
      return CardStatus.scheme;
    case 2:
    case "prototype":
      return CardStatus.prototype;
    case 3:
    case "trial":
      return CardStatus.trial;
    case 4:
    case "permanent":
      return CardStatus.permanent;
    case 5:
    case "suspended":
      return CardStatus.suspended;
    case 6:
    case "banned":
      return CardStatus.banned;
    case 7:
    case "bannedSoon":
      return CardStatus.bannedSoon;
    case 8:
    case "bannedVerySoon":
      return CardStatus.bannedVerySoon;
    case 9:
    case "adventureItem":
      return CardStatus.adventureItem;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CardStatus.UNRECOGNIZED;
  }
}
export function cardStatusToJSON(object: CardStatus): string {
  switch (object) {
    case CardStatus.none:
      return "none";
    case CardStatus.scheme:
      return "scheme";
    case CardStatus.prototype:
      return "prototype";
    case CardStatus.trial:
      return "trial";
    case CardStatus.permanent:
      return "permanent";
    case CardStatus.suspended:
      return "suspended";
    case CardStatus.banned:
      return "banned";
    case CardStatus.bannedSoon:
      return "bannedSoon";
    case CardStatus.bannedVerySoon:
      return "bannedVerySoon";
    case CardStatus.adventureItem:
      return "adventureItem";
    case CardStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum CardRarity {
  common = 0,
  uncommon = 1,
  rare = 2,
  exceptional = 3,
  unique = 4,
  UNRECOGNIZED = -1,
}
export const CardRaritySDKType = CardRarity;
export const CardRarityAmino = CardRarity;
export function cardRarityFromJSON(object: any): CardRarity {
  switch (object) {
    case 0:
    case "common":
      return CardRarity.common;
    case 1:
    case "uncommon":
      return CardRarity.uncommon;
    case 2:
    case "rare":
      return CardRarity.rare;
    case 3:
    case "exceptional":
      return CardRarity.exceptional;
    case 4:
    case "unique":
      return CardRarity.unique;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CardRarity.UNRECOGNIZED;
  }
}
export function cardRarityToJSON(object: CardRarity): string {
  switch (object) {
    case CardRarity.common:
      return "common";
    case CardRarity.uncommon:
      return "uncommon";
    case CardRarity.rare:
      return "rare";
    case CardRarity.exceptional:
      return "exceptional";
    case CardRarity.unique:
      return "unique";
    case CardRarity.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum CardClass {
  nature = 0,
  culture = 1,
  mysticism = 2,
  technology = 3,
  UNRECOGNIZED = -1,
}
export const CardClassSDKType = CardClass;
export const CardClassAmino = CardClass;
export function cardClassFromJSON(object: any): CardClass {
  switch (object) {
    case 0:
    case "nature":
      return CardClass.nature;
    case 1:
    case "culture":
      return CardClass.culture;
    case 2:
    case "mysticism":
      return CardClass.mysticism;
    case 3:
    case "technology":
      return CardClass.technology;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CardClass.UNRECOGNIZED;
  }
}
export function cardClassToJSON(object: CardClass): string {
  switch (object) {
    case CardClass.nature:
      return "nature";
    case CardClass.culture:
      return "culture";
    case CardClass.mysticism:
      return "mysticism";
    case CardClass.technology:
      return "technology";
    case CardClass.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum CardType {
  place = 0,
  action = 1,
  entity = 2,
  headquarter = 3,
  UNRECOGNIZED = -1,
}
export const CardTypeSDKType = CardType;
export const CardTypeAmino = CardType;
export function cardTypeFromJSON(object: any): CardType {
  switch (object) {
    case 0:
    case "place":
      return CardType.place;
    case 1:
    case "action":
      return CardType.action;
    case 2:
    case "entity":
      return CardType.entity;
    case 3:
    case "headquarter":
      return CardType.headquarter;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CardType.UNRECOGNIZED;
  }
}
export function cardTypeToJSON(object: CardType): string {
  switch (object) {
    case CardType.place:
      return "place";
    case CardType.action:
      return "action";
    case CardType.entity:
      return "entity";
    case CardType.headquarter:
      return "headquarter";
    case CardType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface Card {
  owner: string;
  artist: string;
  content: Uint8Array;
  imageId: bigint;
  fullArt: boolean;
  notes: string;
  status: CardStatus;
  votePool: Coin;
  voters: string[];
  fairEnoughVotes: bigint;
  overpoweredVotes: bigint;
  underpoweredVotes: bigint;
  inappropriateVotes: bigint;
  nerflevel: bigint;
  balanceAnchor: boolean;
  starterCard: boolean;
  rarity: CardRarity;
}
export interface CardProtoMsg {
  typeUrl: "/cardchain.cardchain.Card";
  value: Uint8Array;
}
export interface CardAmino {
  owner?: string;
  artist?: string;
  content?: string;
  image_id?: string;
  fullArt?: boolean;
  notes?: string;
  status?: CardStatus;
  votePool?: CoinAmino;
  voters?: string[];
  fairEnoughVotes?: string;
  overpoweredVotes?: string;
  underpoweredVotes?: string;
  inappropriateVotes?: string;
  nerflevel?: string;
  balanceAnchor?: boolean;
  starterCard?: boolean;
  rarity?: CardRarity;
}
export interface CardAminoMsg {
  type: "/cardchain.cardchain.Card";
  value: CardAmino;
}
export interface CardSDKType {
  owner: string;
  artist: string;
  content: Uint8Array;
  image_id: bigint;
  fullArt: boolean;
  notes: string;
  status: CardStatus;
  votePool: CoinSDKType;
  voters: string[];
  fairEnoughVotes: bigint;
  overpoweredVotes: bigint;
  underpoweredVotes: bigint;
  inappropriateVotes: bigint;
  nerflevel: bigint;
  balanceAnchor: boolean;
  starterCard: boolean;
  rarity: CardRarity;
}
export interface TimeStamp {
  timeStamp: bigint;
}
export interface TimeStampProtoMsg {
  typeUrl: "/cardchain.cardchain.TimeStamp";
  value: Uint8Array;
}
export interface TimeStampAmino {
  timeStamp?: string;
}
export interface TimeStampAminoMsg {
  type: "/cardchain.cardchain.TimeStamp";
  value: TimeStampAmino;
}
export interface TimeStampSDKType {
  timeStamp: bigint;
}
function createBaseCard(): Card {
  return {
    owner: "",
    artist: "",
    content: new Uint8Array(),
    imageId: BigInt(0),
    fullArt: false,
    notes: "",
    status: 0,
    votePool: Coin.fromPartial({}),
    voters: [],
    fairEnoughVotes: BigInt(0),
    overpoweredVotes: BigInt(0),
    underpoweredVotes: BigInt(0),
    inappropriateVotes: BigInt(0),
    nerflevel: BigInt(0),
    balanceAnchor: false,
    starterCard: false,
    rarity: 0
  };
}
export const Card = {
  typeUrl: "/cardchain.cardchain.Card",
  encode(message: Card, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.artist !== "") {
      writer.uint32(18).string(message.artist);
    }
    if (message.content.length !== 0) {
      writer.uint32(26).bytes(message.content);
    }
    if (message.imageId !== BigInt(0)) {
      writer.uint32(32).uint64(message.imageId);
    }
    if (message.fullArt === true) {
      writer.uint32(40).bool(message.fullArt);
    }
    if (message.notes !== "") {
      writer.uint32(50).string(message.notes);
    }
    if (message.status !== 0) {
      writer.uint32(56).int32(message.status);
    }
    if (message.votePool !== undefined) {
      Coin.encode(message.votePool, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.voters) {
      writer.uint32(114).string(v!);
    }
    if (message.fairEnoughVotes !== BigInt(0)) {
      writer.uint32(72).uint64(message.fairEnoughVotes);
    }
    if (message.overpoweredVotes !== BigInt(0)) {
      writer.uint32(80).uint64(message.overpoweredVotes);
    }
    if (message.underpoweredVotes !== BigInt(0)) {
      writer.uint32(88).uint64(message.underpoweredVotes);
    }
    if (message.inappropriateVotes !== BigInt(0)) {
      writer.uint32(96).uint64(message.inappropriateVotes);
    }
    if (message.nerflevel !== BigInt(0)) {
      writer.uint32(104).int64(message.nerflevel);
    }
    if (message.balanceAnchor === true) {
      writer.uint32(120).bool(message.balanceAnchor);
    }
    if (message.starterCard === true) {
      writer.uint32(128).bool(message.starterCard);
    }
    if (message.rarity !== 0) {
      writer.uint32(136).int32(message.rarity);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Card {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCard();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.artist = reader.string();
          break;
        case 3:
          message.content = reader.bytes();
          break;
        case 4:
          message.imageId = reader.uint64();
          break;
        case 5:
          message.fullArt = reader.bool();
          break;
        case 6:
          message.notes = reader.string();
          break;
        case 7:
          message.status = reader.int32() as any;
          break;
        case 8:
          message.votePool = Coin.decode(reader, reader.uint32());
          break;
        case 14:
          message.voters.push(reader.string());
          break;
        case 9:
          message.fairEnoughVotes = reader.uint64();
          break;
        case 10:
          message.overpoweredVotes = reader.uint64();
          break;
        case 11:
          message.underpoweredVotes = reader.uint64();
          break;
        case 12:
          message.inappropriateVotes = reader.uint64();
          break;
        case 13:
          message.nerflevel = reader.int64();
          break;
        case 15:
          message.balanceAnchor = reader.bool();
          break;
        case 16:
          message.starterCard = reader.bool();
          break;
        case 17:
          message.rarity = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Card>): Card {
    const message = createBaseCard();
    message.owner = object.owner ?? "";
    message.artist = object.artist ?? "";
    message.content = object.content ?? new Uint8Array();
    message.imageId = object.imageId !== undefined && object.imageId !== null ? BigInt(object.imageId.toString()) : BigInt(0);
    message.fullArt = object.fullArt ?? false;
    message.notes = object.notes ?? "";
    message.status = object.status ?? 0;
    message.votePool = object.votePool !== undefined && object.votePool !== null ? Coin.fromPartial(object.votePool) : undefined;
    message.voters = object.voters?.map(e => e) || [];
    message.fairEnoughVotes = object.fairEnoughVotes !== undefined && object.fairEnoughVotes !== null ? BigInt(object.fairEnoughVotes.toString()) : BigInt(0);
    message.overpoweredVotes = object.overpoweredVotes !== undefined && object.overpoweredVotes !== null ? BigInt(object.overpoweredVotes.toString()) : BigInt(0);
    message.underpoweredVotes = object.underpoweredVotes !== undefined && object.underpoweredVotes !== null ? BigInt(object.underpoweredVotes.toString()) : BigInt(0);
    message.inappropriateVotes = object.inappropriateVotes !== undefined && object.inappropriateVotes !== null ? BigInt(object.inappropriateVotes.toString()) : BigInt(0);
    message.nerflevel = object.nerflevel !== undefined && object.nerflevel !== null ? BigInt(object.nerflevel.toString()) : BigInt(0);
    message.balanceAnchor = object.balanceAnchor ?? false;
    message.starterCard = object.starterCard ?? false;
    message.rarity = object.rarity ?? 0;
    return message;
  },
  fromAmino(object: CardAmino): Card {
    const message = createBaseCard();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.artist !== undefined && object.artist !== null) {
      message.artist = object.artist;
    }
    if (object.content !== undefined && object.content !== null) {
      message.content = bytesFromBase64(object.content);
    }
    if (object.image_id !== undefined && object.image_id !== null) {
      message.imageId = BigInt(object.image_id);
    }
    if (object.fullArt !== undefined && object.fullArt !== null) {
      message.fullArt = object.fullArt;
    }
    if (object.notes !== undefined && object.notes !== null) {
      message.notes = object.notes;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.votePool !== undefined && object.votePool !== null) {
      message.votePool = Coin.fromAmino(object.votePool);
    }
    message.voters = object.voters?.map(e => e) || [];
    if (object.fairEnoughVotes !== undefined && object.fairEnoughVotes !== null) {
      message.fairEnoughVotes = BigInt(object.fairEnoughVotes);
    }
    if (object.overpoweredVotes !== undefined && object.overpoweredVotes !== null) {
      message.overpoweredVotes = BigInt(object.overpoweredVotes);
    }
    if (object.underpoweredVotes !== undefined && object.underpoweredVotes !== null) {
      message.underpoweredVotes = BigInt(object.underpoweredVotes);
    }
    if (object.inappropriateVotes !== undefined && object.inappropriateVotes !== null) {
      message.inappropriateVotes = BigInt(object.inappropriateVotes);
    }
    if (object.nerflevel !== undefined && object.nerflevel !== null) {
      message.nerflevel = BigInt(object.nerflevel);
    }
    if (object.balanceAnchor !== undefined && object.balanceAnchor !== null) {
      message.balanceAnchor = object.balanceAnchor;
    }
    if (object.starterCard !== undefined && object.starterCard !== null) {
      message.starterCard = object.starterCard;
    }
    if (object.rarity !== undefined && object.rarity !== null) {
      message.rarity = object.rarity;
    }
    return message;
  },
  toAmino(message: Card): CardAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.artist = message.artist === "" ? undefined : message.artist;
    obj.content = message.content ? base64FromBytes(message.content) : undefined;
    obj.image_id = message.imageId !== BigInt(0) ? message.imageId?.toString() : undefined;
    obj.fullArt = message.fullArt === false ? undefined : message.fullArt;
    obj.notes = message.notes === "" ? undefined : message.notes;
    obj.status = message.status === 0 ? undefined : message.status;
    obj.votePool = message.votePool ? Coin.toAmino(message.votePool) : undefined;
    if (message.voters) {
      obj.voters = message.voters.map(e => e);
    } else {
      obj.voters = message.voters;
    }
    obj.fairEnoughVotes = message.fairEnoughVotes !== BigInt(0) ? message.fairEnoughVotes?.toString() : undefined;
    obj.overpoweredVotes = message.overpoweredVotes !== BigInt(0) ? message.overpoweredVotes?.toString() : undefined;
    obj.underpoweredVotes = message.underpoweredVotes !== BigInt(0) ? message.underpoweredVotes?.toString() : undefined;
    obj.inappropriateVotes = message.inappropriateVotes !== BigInt(0) ? message.inappropriateVotes?.toString() : undefined;
    obj.nerflevel = message.nerflevel !== BigInt(0) ? message.nerflevel?.toString() : undefined;
    obj.balanceAnchor = message.balanceAnchor === false ? undefined : message.balanceAnchor;
    obj.starterCard = message.starterCard === false ? undefined : message.starterCard;
    obj.rarity = message.rarity === 0 ? undefined : message.rarity;
    return obj;
  },
  fromAminoMsg(object: CardAminoMsg): Card {
    return Card.fromAmino(object.value);
  },
  fromProtoMsg(message: CardProtoMsg): Card {
    return Card.decode(message.value);
  },
  toProto(message: Card): Uint8Array {
    return Card.encode(message).finish();
  },
  toProtoMsg(message: Card): CardProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.Card",
      value: Card.encode(message).finish()
    };
  }
};
function createBaseTimeStamp(): TimeStamp {
  return {
    timeStamp: BigInt(0)
  };
}
export const TimeStamp = {
  typeUrl: "/cardchain.cardchain.TimeStamp",
  encode(message: TimeStamp, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.timeStamp !== BigInt(0)) {
      writer.uint32(8).uint64(message.timeStamp);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TimeStamp {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimeStamp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timeStamp = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<TimeStamp>): TimeStamp {
    const message = createBaseTimeStamp();
    message.timeStamp = object.timeStamp !== undefined && object.timeStamp !== null ? BigInt(object.timeStamp.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: TimeStampAmino): TimeStamp {
    const message = createBaseTimeStamp();
    if (object.timeStamp !== undefined && object.timeStamp !== null) {
      message.timeStamp = BigInt(object.timeStamp);
    }
    return message;
  },
  toAmino(message: TimeStamp): TimeStampAmino {
    const obj: any = {};
    obj.timeStamp = message.timeStamp !== BigInt(0) ? message.timeStamp?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: TimeStampAminoMsg): TimeStamp {
    return TimeStamp.fromAmino(object.value);
  },
  fromProtoMsg(message: TimeStampProtoMsg): TimeStamp {
    return TimeStamp.decode(message.value);
  },
  toProto(message: TimeStamp): Uint8Array {
    return TimeStamp.encode(message).finish();
  },
  toProtoMsg(message: TimeStamp): TimeStampProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.TimeStamp",
      value: TimeStamp.encode(message).finish()
    };
  }
};