//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
export enum CouncilStatus {
  available = 0,
  unavailable = 1,
  openCouncil = 2,
  startedCouncil = 3,
  UNRECOGNIZED = -1,
}
export const CouncilStatusSDKType = CouncilStatus;
export const CouncilStatusAmino = CouncilStatus;
export function councilStatusFromJSON(object: any): CouncilStatus {
  switch (object) {
    case 0:
    case "available":
      return CouncilStatus.available;
    case 1:
    case "unavailable":
      return CouncilStatus.unavailable;
    case 2:
    case "openCouncil":
      return CouncilStatus.openCouncil;
    case 3:
    case "startedCouncil":
      return CouncilStatus.startedCouncil;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CouncilStatus.UNRECOGNIZED;
  }
}
export function councilStatusToJSON(object: CouncilStatus): string {
  switch (object) {
    case CouncilStatus.available:
      return "available";
    case CouncilStatus.unavailable:
      return "unavailable";
    case CouncilStatus.openCouncil:
      return "openCouncil";
    case CouncilStatus.startedCouncil:
      return "startedCouncil";
    case CouncilStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum AirDrop {
  play = 0,
  vote = 1,
  create = 2,
  buy = 3,
  user = 4,
  UNRECOGNIZED = -1,
}
export const AirDropSDKType = AirDrop;
export const AirDropAmino = AirDrop;
export function airDropFromJSON(object: any): AirDrop {
  switch (object) {
    case 0:
    case "play":
      return AirDrop.play;
    case 1:
    case "vote":
      return AirDrop.vote;
    case 2:
    case "create":
      return AirDrop.create;
    case 3:
    case "buy":
      return AirDrop.buy;
    case 4:
    case "user":
      return AirDrop.user;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AirDrop.UNRECOGNIZED;
  }
}
export function airDropToJSON(object: AirDrop): string {
  switch (object) {
    case AirDrop.play:
      return "play";
    case AirDrop.vote:
      return "vote";
    case AirDrop.create:
      return "create";
    case AirDrop.buy:
      return "buy";
    case AirDrop.user:
      return "user";
    case AirDrop.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface User {
  alias: string;
  ownedCardSchemes: bigint[];
  ownedPrototypes: bigint[];
  cards: bigint[];
  councilStatus: CouncilStatus;
  reportMatches: boolean;
  profileCard: bigint;
  airDrops?: AirDrops;
  boosterPacks: BoosterPack[];
  website: string;
  biography: string;
  votableCards: bigint[];
  votedCards: bigint[];
  earlyAccess?: EarlyAccess;
  openEncounters: bigint[];
  wonEncounters: bigint[];
}
export interface UserProtoMsg {
  typeUrl: "/cardchain.cardchain.User";
  value: Uint8Array;
}
export interface UserAmino {
  alias?: string;
  ownedCardSchemes?: string[];
  ownedPrototypes?: string[];
  cards?: string[];
  CouncilStatus?: CouncilStatus;
  ReportMatches?: boolean;
  profileCard?: string;
  airDrops?: AirDropsAmino;
  boosterPacks?: BoosterPackAmino[];
  website?: string;
  biography?: string;
  votableCards?: string[];
  votedCards?: string[];
  earlyAccess?: EarlyAccessAmino;
  OpenEncounters?: string[];
  WonEncounters?: string[];
}
export interface UserAminoMsg {
  type: "/cardchain.cardchain.User";
  value: UserAmino;
}
export interface UserSDKType {
  alias: string;
  ownedCardSchemes: bigint[];
  ownedPrototypes: bigint[];
  cards: bigint[];
  CouncilStatus: CouncilStatus;
  ReportMatches: boolean;
  profileCard: bigint;
  airDrops?: AirDropsSDKType;
  boosterPacks: BoosterPackSDKType[];
  website: string;
  biography: string;
  votableCards: bigint[];
  votedCards: bigint[];
  earlyAccess?: EarlyAccessSDKType;
  OpenEncounters: bigint[];
  WonEncounters: bigint[];
}
export interface EarlyAccess {
  active: boolean;
  invitedByUser: string;
  invitedUser: string;
}
export interface EarlyAccessProtoMsg {
  typeUrl: "/cardchain.cardchain.EarlyAccess";
  value: Uint8Array;
}
export interface EarlyAccessAmino {
  active?: boolean;
  invitedByUser?: string;
  invitedUser?: string;
}
export interface EarlyAccessAminoMsg {
  type: "/cardchain.cardchain.EarlyAccess";
  value: EarlyAccessAmino;
}
export interface EarlyAccessSDKType {
  active: boolean;
  invitedByUser: string;
  invitedUser: string;
}
export interface BoosterPack {
  setId: bigint;
  timeStamp: bigint;
  /** How often the different rarities will appear in a BoosterPack */
  raritiesPerPack: bigint[];
  /** The chances of the rare beeing a normal rare, an exceptional or a unique */
  dropRatiosPerPack: bigint[];
}
export interface BoosterPackProtoMsg {
  typeUrl: "/cardchain.cardchain.BoosterPack";
  value: Uint8Array;
}
export interface BoosterPackAmino {
  setId?: string;
  timeStamp?: string;
  /** How often the different rarities will appear in a BoosterPack */
  raritiesPerPack?: string[];
  /** The chances of the rare beeing a normal rare, an exceptional or a unique */
  dropRatiosPerPack?: string[];
}
export interface BoosterPackAminoMsg {
  type: "/cardchain.cardchain.BoosterPack";
  value: BoosterPackAmino;
}
export interface BoosterPackSDKType {
  setId: bigint;
  timeStamp: bigint;
  raritiesPerPack: bigint[];
  dropRatiosPerPack: bigint[];
}
export interface AirDrops {
  vote: boolean;
  create: boolean;
  buy: boolean;
  play: boolean;
  user: boolean;
}
export interface AirDropsProtoMsg {
  typeUrl: "/cardchain.cardchain.AirDrops";
  value: Uint8Array;
}
export interface AirDropsAmino {
  vote?: boolean;
  create?: boolean;
  buy?: boolean;
  play?: boolean;
  user?: boolean;
}
export interface AirDropsAminoMsg {
  type: "/cardchain.cardchain.AirDrops";
  value: AirDropsAmino;
}
export interface AirDropsSDKType {
  vote: boolean;
  create: boolean;
  buy: boolean;
  play: boolean;
  user: boolean;
}
function createBaseUser(): User {
  return {
    alias: "",
    ownedCardSchemes: [],
    ownedPrototypes: [],
    cards: [],
    councilStatus: 0,
    reportMatches: false,
    profileCard: BigInt(0),
    airDrops: undefined,
    boosterPacks: [],
    website: "",
    biography: "",
    votableCards: [],
    votedCards: [],
    earlyAccess: undefined,
    openEncounters: [],
    wonEncounters: []
  };
}
export const User = {
  typeUrl: "/cardchain.cardchain.User",
  encode(message: User, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.alias !== "") {
      writer.uint32(10).string(message.alias);
    }
    writer.uint32(18).fork();
    for (const v of message.ownedCardSchemes) {
      writer.uint64(v);
    }
    writer.ldelim();
    writer.uint32(26).fork();
    for (const v of message.ownedPrototypes) {
      writer.uint64(v);
    }
    writer.ldelim();
    writer.uint32(34).fork();
    for (const v of message.cards) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.councilStatus !== 0) {
      writer.uint32(48).int32(message.councilStatus);
    }
    if (message.reportMatches === true) {
      writer.uint32(56).bool(message.reportMatches);
    }
    if (message.profileCard !== BigInt(0)) {
      writer.uint32(64).uint64(message.profileCard);
    }
    if (message.airDrops !== undefined) {
      AirDrops.encode(message.airDrops, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.boosterPacks) {
      BoosterPack.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    if (message.website !== "") {
      writer.uint32(90).string(message.website);
    }
    if (message.biography !== "") {
      writer.uint32(98).string(message.biography);
    }
    writer.uint32(106).fork();
    for (const v of message.votableCards) {
      writer.uint64(v);
    }
    writer.ldelim();
    writer.uint32(114).fork();
    for (const v of message.votedCards) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.earlyAccess !== undefined) {
      EarlyAccess.encode(message.earlyAccess, writer.uint32(122).fork()).ldelim();
    }
    writer.uint32(130).fork();
    for (const v of message.openEncounters) {
      writer.uint64(v);
    }
    writer.ldelim();
    writer.uint32(138).fork();
    for (const v of message.wonEncounters) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): User {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUser();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.alias = reader.string();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.ownedCardSchemes.push(reader.uint64());
            }
          } else {
            message.ownedCardSchemes.push(reader.uint64());
          }
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.ownedPrototypes.push(reader.uint64());
            }
          } else {
            message.ownedPrototypes.push(reader.uint64());
          }
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.cards.push(reader.uint64());
            }
          } else {
            message.cards.push(reader.uint64());
          }
          break;
        case 6:
          message.councilStatus = reader.int32() as any;
          break;
        case 7:
          message.reportMatches = reader.bool();
          break;
        case 8:
          message.profileCard = reader.uint64();
          break;
        case 9:
          message.airDrops = AirDrops.decode(reader, reader.uint32());
          break;
        case 10:
          message.boosterPacks.push(BoosterPack.decode(reader, reader.uint32()));
          break;
        case 11:
          message.website = reader.string();
          break;
        case 12:
          message.biography = reader.string();
          break;
        case 13:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.votableCards.push(reader.uint64());
            }
          } else {
            message.votableCards.push(reader.uint64());
          }
          break;
        case 14:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.votedCards.push(reader.uint64());
            }
          } else {
            message.votedCards.push(reader.uint64());
          }
          break;
        case 15:
          message.earlyAccess = EarlyAccess.decode(reader, reader.uint32());
          break;
        case 16:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.openEncounters.push(reader.uint64());
            }
          } else {
            message.openEncounters.push(reader.uint64());
          }
          break;
        case 17:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.wonEncounters.push(reader.uint64());
            }
          } else {
            message.wonEncounters.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<User>): User {
    const message = createBaseUser();
    message.alias = object.alias ?? "";
    message.ownedCardSchemes = object.ownedCardSchemes?.map(e => BigInt(e.toString())) || [];
    message.ownedPrototypes = object.ownedPrototypes?.map(e => BigInt(e.toString())) || [];
    message.cards = object.cards?.map(e => BigInt(e.toString())) || [];
    message.councilStatus = object.councilStatus ?? 0;
    message.reportMatches = object.reportMatches ?? false;
    message.profileCard = object.profileCard !== undefined && object.profileCard !== null ? BigInt(object.profileCard.toString()) : BigInt(0);
    message.airDrops = object.airDrops !== undefined && object.airDrops !== null ? AirDrops.fromPartial(object.airDrops) : undefined;
    message.boosterPacks = object.boosterPacks?.map(e => BoosterPack.fromPartial(e)) || [];
    message.website = object.website ?? "";
    message.biography = object.biography ?? "";
    message.votableCards = object.votableCards?.map(e => BigInt(e.toString())) || [];
    message.votedCards = object.votedCards?.map(e => BigInt(e.toString())) || [];
    message.earlyAccess = object.earlyAccess !== undefined && object.earlyAccess !== null ? EarlyAccess.fromPartial(object.earlyAccess) : undefined;
    message.openEncounters = object.openEncounters?.map(e => BigInt(e.toString())) || [];
    message.wonEncounters = object.wonEncounters?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object: UserAmino): User {
    const message = createBaseUser();
    if (object.alias !== undefined && object.alias !== null) {
      message.alias = object.alias;
    }
    message.ownedCardSchemes = object.ownedCardSchemes?.map(e => BigInt(e)) || [];
    message.ownedPrototypes = object.ownedPrototypes?.map(e => BigInt(e)) || [];
    message.cards = object.cards?.map(e => BigInt(e)) || [];
    if (object.CouncilStatus !== undefined && object.CouncilStatus !== null) {
      message.councilStatus = object.CouncilStatus;
    }
    if (object.ReportMatches !== undefined && object.ReportMatches !== null) {
      message.reportMatches = object.ReportMatches;
    }
    if (object.profileCard !== undefined && object.profileCard !== null) {
      message.profileCard = BigInt(object.profileCard);
    }
    if (object.airDrops !== undefined && object.airDrops !== null) {
      message.airDrops = AirDrops.fromAmino(object.airDrops);
    }
    message.boosterPacks = object.boosterPacks?.map(e => BoosterPack.fromAmino(e)) || [];
    if (object.website !== undefined && object.website !== null) {
      message.website = object.website;
    }
    if (object.biography !== undefined && object.biography !== null) {
      message.biography = object.biography;
    }
    message.votableCards = object.votableCards?.map(e => BigInt(e)) || [];
    message.votedCards = object.votedCards?.map(e => BigInt(e)) || [];
    if (object.earlyAccess !== undefined && object.earlyAccess !== null) {
      message.earlyAccess = EarlyAccess.fromAmino(object.earlyAccess);
    }
    message.openEncounters = object.OpenEncounters?.map(e => BigInt(e)) || [];
    message.wonEncounters = object.WonEncounters?.map(e => BigInt(e)) || [];
    return message;
  },
  toAmino(message: User): UserAmino {
    const obj: any = {};
    obj.alias = message.alias === "" ? undefined : message.alias;
    if (message.ownedCardSchemes) {
      obj.ownedCardSchemes = message.ownedCardSchemes.map(e => e.toString());
    } else {
      obj.ownedCardSchemes = message.ownedCardSchemes;
    }
    if (message.ownedPrototypes) {
      obj.ownedPrototypes = message.ownedPrototypes.map(e => e.toString());
    } else {
      obj.ownedPrototypes = message.ownedPrototypes;
    }
    if (message.cards) {
      obj.cards = message.cards.map(e => e.toString());
    } else {
      obj.cards = message.cards;
    }
    obj.CouncilStatus = message.councilStatus === 0 ? undefined : message.councilStatus;
    obj.ReportMatches = message.reportMatches === false ? undefined : message.reportMatches;
    obj.profileCard = message.profileCard !== BigInt(0) ? message.profileCard?.toString() : undefined;
    obj.airDrops = message.airDrops ? AirDrops.toAmino(message.airDrops) : undefined;
    if (message.boosterPacks) {
      obj.boosterPacks = message.boosterPacks.map(e => e ? BoosterPack.toAmino(e) : undefined);
    } else {
      obj.boosterPacks = message.boosterPacks;
    }
    obj.website = message.website === "" ? undefined : message.website;
    obj.biography = message.biography === "" ? undefined : message.biography;
    if (message.votableCards) {
      obj.votableCards = message.votableCards.map(e => e.toString());
    } else {
      obj.votableCards = message.votableCards;
    }
    if (message.votedCards) {
      obj.votedCards = message.votedCards.map(e => e.toString());
    } else {
      obj.votedCards = message.votedCards;
    }
    obj.earlyAccess = message.earlyAccess ? EarlyAccess.toAmino(message.earlyAccess) : undefined;
    if (message.openEncounters) {
      obj.OpenEncounters = message.openEncounters.map(e => e.toString());
    } else {
      obj.OpenEncounters = message.openEncounters;
    }
    if (message.wonEncounters) {
      obj.WonEncounters = message.wonEncounters.map(e => e.toString());
    } else {
      obj.WonEncounters = message.wonEncounters;
    }
    return obj;
  },
  fromAminoMsg(object: UserAminoMsg): User {
    return User.fromAmino(object.value);
  },
  fromProtoMsg(message: UserProtoMsg): User {
    return User.decode(message.value);
  },
  toProto(message: User): Uint8Array {
    return User.encode(message).finish();
  },
  toProtoMsg(message: User): UserProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.User",
      value: User.encode(message).finish()
    };
  }
};
function createBaseEarlyAccess(): EarlyAccess {
  return {
    active: false,
    invitedByUser: "",
    invitedUser: ""
  };
}
export const EarlyAccess = {
  typeUrl: "/cardchain.cardchain.EarlyAccess",
  encode(message: EarlyAccess, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.active === true) {
      writer.uint32(8).bool(message.active);
    }
    if (message.invitedByUser !== "") {
      writer.uint32(18).string(message.invitedByUser);
    }
    if (message.invitedUser !== "") {
      writer.uint32(26).string(message.invitedUser);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EarlyAccess {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEarlyAccess();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.active = reader.bool();
          break;
        case 2:
          message.invitedByUser = reader.string();
          break;
        case 3:
          message.invitedUser = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EarlyAccess>): EarlyAccess {
    const message = createBaseEarlyAccess();
    message.active = object.active ?? false;
    message.invitedByUser = object.invitedByUser ?? "";
    message.invitedUser = object.invitedUser ?? "";
    return message;
  },
  fromAmino(object: EarlyAccessAmino): EarlyAccess {
    const message = createBaseEarlyAccess();
    if (object.active !== undefined && object.active !== null) {
      message.active = object.active;
    }
    if (object.invitedByUser !== undefined && object.invitedByUser !== null) {
      message.invitedByUser = object.invitedByUser;
    }
    if (object.invitedUser !== undefined && object.invitedUser !== null) {
      message.invitedUser = object.invitedUser;
    }
    return message;
  },
  toAmino(message: EarlyAccess): EarlyAccessAmino {
    const obj: any = {};
    obj.active = message.active === false ? undefined : message.active;
    obj.invitedByUser = message.invitedByUser === "" ? undefined : message.invitedByUser;
    obj.invitedUser = message.invitedUser === "" ? undefined : message.invitedUser;
    return obj;
  },
  fromAminoMsg(object: EarlyAccessAminoMsg): EarlyAccess {
    return EarlyAccess.fromAmino(object.value);
  },
  fromProtoMsg(message: EarlyAccessProtoMsg): EarlyAccess {
    return EarlyAccess.decode(message.value);
  },
  toProto(message: EarlyAccess): Uint8Array {
    return EarlyAccess.encode(message).finish();
  },
  toProtoMsg(message: EarlyAccess): EarlyAccessProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.EarlyAccess",
      value: EarlyAccess.encode(message).finish()
    };
  }
};
function createBaseBoosterPack(): BoosterPack {
  return {
    setId: BigInt(0),
    timeStamp: BigInt(0),
    raritiesPerPack: [],
    dropRatiosPerPack: []
  };
}
export const BoosterPack = {
  typeUrl: "/cardchain.cardchain.BoosterPack",
  encode(message: BoosterPack, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.setId !== BigInt(0)) {
      writer.uint32(8).uint64(message.setId);
    }
    if (message.timeStamp !== BigInt(0)) {
      writer.uint32(16).int64(message.timeStamp);
    }
    writer.uint32(26).fork();
    for (const v of message.raritiesPerPack) {
      writer.uint64(v);
    }
    writer.ldelim();
    writer.uint32(34).fork();
    for (const v of message.dropRatiosPerPack) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BoosterPack {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBoosterPack();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.setId = reader.uint64();
          break;
        case 2:
          message.timeStamp = reader.int64();
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.raritiesPerPack.push(reader.uint64());
            }
          } else {
            message.raritiesPerPack.push(reader.uint64());
          }
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.dropRatiosPerPack.push(reader.uint64());
            }
          } else {
            message.dropRatiosPerPack.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<BoosterPack>): BoosterPack {
    const message = createBaseBoosterPack();
    message.setId = object.setId !== undefined && object.setId !== null ? BigInt(object.setId.toString()) : BigInt(0);
    message.timeStamp = object.timeStamp !== undefined && object.timeStamp !== null ? BigInt(object.timeStamp.toString()) : BigInt(0);
    message.raritiesPerPack = object.raritiesPerPack?.map(e => BigInt(e.toString())) || [];
    message.dropRatiosPerPack = object.dropRatiosPerPack?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object: BoosterPackAmino): BoosterPack {
    const message = createBaseBoosterPack();
    if (object.setId !== undefined && object.setId !== null) {
      message.setId = BigInt(object.setId);
    }
    if (object.timeStamp !== undefined && object.timeStamp !== null) {
      message.timeStamp = BigInt(object.timeStamp);
    }
    message.raritiesPerPack = object.raritiesPerPack?.map(e => BigInt(e)) || [];
    message.dropRatiosPerPack = object.dropRatiosPerPack?.map(e => BigInt(e)) || [];
    return message;
  },
  toAmino(message: BoosterPack): BoosterPackAmino {
    const obj: any = {};
    obj.setId = message.setId !== BigInt(0) ? message.setId?.toString() : undefined;
    obj.timeStamp = message.timeStamp !== BigInt(0) ? message.timeStamp?.toString() : undefined;
    if (message.raritiesPerPack) {
      obj.raritiesPerPack = message.raritiesPerPack.map(e => e.toString());
    } else {
      obj.raritiesPerPack = message.raritiesPerPack;
    }
    if (message.dropRatiosPerPack) {
      obj.dropRatiosPerPack = message.dropRatiosPerPack.map(e => e.toString());
    } else {
      obj.dropRatiosPerPack = message.dropRatiosPerPack;
    }
    return obj;
  },
  fromAminoMsg(object: BoosterPackAminoMsg): BoosterPack {
    return BoosterPack.fromAmino(object.value);
  },
  fromProtoMsg(message: BoosterPackProtoMsg): BoosterPack {
    return BoosterPack.decode(message.value);
  },
  toProto(message: BoosterPack): Uint8Array {
    return BoosterPack.encode(message).finish();
  },
  toProtoMsg(message: BoosterPack): BoosterPackProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.BoosterPack",
      value: BoosterPack.encode(message).finish()
    };
  }
};
function createBaseAirDrops(): AirDrops {
  return {
    vote: false,
    create: false,
    buy: false,
    play: false,
    user: false
  };
}
export const AirDrops = {
  typeUrl: "/cardchain.cardchain.AirDrops",
  encode(message: AirDrops, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.vote === true) {
      writer.uint32(8).bool(message.vote);
    }
    if (message.create === true) {
      writer.uint32(16).bool(message.create);
    }
    if (message.buy === true) {
      writer.uint32(24).bool(message.buy);
    }
    if (message.play === true) {
      writer.uint32(32).bool(message.play);
    }
    if (message.user === true) {
      writer.uint32(40).bool(message.user);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AirDrops {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAirDrops();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vote = reader.bool();
          break;
        case 2:
          message.create = reader.bool();
          break;
        case 3:
          message.buy = reader.bool();
          break;
        case 4:
          message.play = reader.bool();
          break;
        case 5:
          message.user = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<AirDrops>): AirDrops {
    const message = createBaseAirDrops();
    message.vote = object.vote ?? false;
    message.create = object.create ?? false;
    message.buy = object.buy ?? false;
    message.play = object.play ?? false;
    message.user = object.user ?? false;
    return message;
  },
  fromAmino(object: AirDropsAmino): AirDrops {
    const message = createBaseAirDrops();
    if (object.vote !== undefined && object.vote !== null) {
      message.vote = object.vote;
    }
    if (object.create !== undefined && object.create !== null) {
      message.create = object.create;
    }
    if (object.buy !== undefined && object.buy !== null) {
      message.buy = object.buy;
    }
    if (object.play !== undefined && object.play !== null) {
      message.play = object.play;
    }
    if (object.user !== undefined && object.user !== null) {
      message.user = object.user;
    }
    return message;
  },
  toAmino(message: AirDrops): AirDropsAmino {
    const obj: any = {};
    obj.vote = message.vote === false ? undefined : message.vote;
    obj.create = message.create === false ? undefined : message.create;
    obj.buy = message.buy === false ? undefined : message.buy;
    obj.play = message.play === false ? undefined : message.play;
    obj.user = message.user === false ? undefined : message.user;
    return obj;
  },
  fromAminoMsg(object: AirDropsAminoMsg): AirDrops {
    return AirDrops.fromAmino(object.value);
  },
  fromProtoMsg(message: AirDropsProtoMsg): AirDrops {
    return AirDrops.decode(message.value);
  },
  toProto(message: AirDrops): Uint8Array {
    return AirDrops.encode(message).finish();
  },
  toProtoMsg(message: AirDrops): AirDropsProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.AirDrops",
      value: AirDrops.encode(message).finish()
    };
  }
};