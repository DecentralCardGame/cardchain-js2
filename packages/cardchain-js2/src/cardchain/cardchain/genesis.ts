//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Card, CardAmino, CardSDKType, TimeStamp, TimeStampAmino, TimeStampSDKType } from "./card";
import { User, UserAmino, UserSDKType } from "./user";
import { Match, MatchAmino, MatchSDKType } from "./match";
import { Set, SetAmino, SetSDKType } from "./set";
import { SellOffer, SellOfferAmino, SellOfferSDKType } from "./sell_offer";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Council, CouncilAmino, CouncilSDKType } from "./council";
import { RunningAverage, RunningAverageAmino, RunningAverageSDKType } from "./running_average";
import { Image, ImageAmino, ImageSDKType } from "./image";
import { Server, ServerAmino, ServerSDKType } from "./server";
import { Zealy, ZealyAmino, ZealySDKType } from "./zealy";
import { Encounter, EncounterAmino, EncounterSDKType } from "./encounter";
import { BinaryReader, BinaryWriter } from "../../binary";
/** GenesisState defines the cardchain module's genesis state. */
export interface GenesisState {
  /** params defines all the parameters of the module. */
  params: Params;
  cardRecords: Card[];
  users: User[];
  addresses: string[];
  matches: Match[];
  sets: Set[];
  sellOffers: SellOffer[];
  pools: Coin[];
  cardAuctionPrice: Coin;
  councils: Council[];
  runningAverages: RunningAverage[];
  images: Image[];
  servers: Server[];
  lastCardModified: TimeStamp;
  zealys: Zealy[];
  encounters: Encounter[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/cardchain.cardchain.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the cardchain module's genesis state. */
export interface GenesisStateAmino {
  /** params defines all the parameters of the module. */
  params: ParamsAmino;
  cardRecords?: CardAmino[];
  users?: UserAmino[];
  addresses?: string[];
  matches?: MatchAmino[];
  sets?: SetAmino[];
  sellOffers?: SellOfferAmino[];
  pools?: CoinAmino[];
  cardAuctionPrice?: CoinAmino;
  councils?: CouncilAmino[];
  runningAverages?: RunningAverageAmino[];
  images?: ImageAmino[];
  servers?: ServerAmino[];
  lastCardModified?: TimeStampAmino;
  zealys?: ZealyAmino[];
  encounters?: EncounterAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/cardchain.cardchain.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the cardchain module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  cardRecords: CardSDKType[];
  users: UserSDKType[];
  addresses: string[];
  matches: MatchSDKType[];
  sets: SetSDKType[];
  sellOffers: SellOfferSDKType[];
  pools: CoinSDKType[];
  cardAuctionPrice: CoinSDKType;
  councils: CouncilSDKType[];
  runningAverages: RunningAverageSDKType[];
  images: ImageSDKType[];
  servers: ServerSDKType[];
  lastCardModified: TimeStampSDKType;
  zealys: ZealySDKType[];
  encounters: EncounterSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    cardRecords: [],
    users: [],
    addresses: [],
    matches: [],
    sets: [],
    sellOffers: [],
    pools: [],
    cardAuctionPrice: Coin.fromPartial({}),
    councils: [],
    runningAverages: [],
    images: [],
    servers: [],
    lastCardModified: TimeStamp.fromPartial({}),
    zealys: [],
    encounters: []
  };
}
export const GenesisState = {
  typeUrl: "/cardchain.cardchain.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.cardRecords) {
      Card.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.users) {
      User.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.addresses) {
      writer.uint32(34).string(v!);
    }
    for (const v of message.matches) {
      Match.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.sets) {
      Set.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.sellOffers) {
      SellOffer.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.pools) {
      Coin.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    if (message.cardAuctionPrice !== undefined) {
      Coin.encode(message.cardAuctionPrice, writer.uint32(90).fork()).ldelim();
    }
    for (const v of message.councils) {
      Council.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    for (const v of message.runningAverages) {
      RunningAverage.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    for (const v of message.images) {
      Image.encode(v!, writer.uint32(114).fork()).ldelim();
    }
    for (const v of message.servers) {
      Server.encode(v!, writer.uint32(122).fork()).ldelim();
    }
    if (message.lastCardModified !== undefined) {
      TimeStamp.encode(message.lastCardModified, writer.uint32(130).fork()).ldelim();
    }
    for (const v of message.zealys) {
      Zealy.encode(v!, writer.uint32(138).fork()).ldelim();
    }
    for (const v of message.encounters) {
      Encounter.encode(v!, writer.uint32(146).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.cardRecords.push(Card.decode(reader, reader.uint32()));
          break;
        case 3:
          message.users.push(User.decode(reader, reader.uint32()));
          break;
        case 4:
          message.addresses.push(reader.string());
          break;
        case 6:
          message.matches.push(Match.decode(reader, reader.uint32()));
          break;
        case 7:
          message.sets.push(Set.decode(reader, reader.uint32()));
          break;
        case 8:
          message.sellOffers.push(SellOffer.decode(reader, reader.uint32()));
          break;
        case 9:
          message.pools.push(Coin.decode(reader, reader.uint32()));
          break;
        case 11:
          message.cardAuctionPrice = Coin.decode(reader, reader.uint32());
          break;
        case 12:
          message.councils.push(Council.decode(reader, reader.uint32()));
          break;
        case 13:
          message.runningAverages.push(RunningAverage.decode(reader, reader.uint32()));
          break;
        case 14:
          message.images.push(Image.decode(reader, reader.uint32()));
          break;
        case 15:
          message.servers.push(Server.decode(reader, reader.uint32()));
          break;
        case 16:
          message.lastCardModified = TimeStamp.decode(reader, reader.uint32());
          break;
        case 17:
          message.zealys.push(Zealy.decode(reader, reader.uint32()));
          break;
        case 18:
          message.encounters.push(Encounter.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.cardRecords = object.cardRecords?.map(e => Card.fromPartial(e)) || [];
    message.users = object.users?.map(e => User.fromPartial(e)) || [];
    message.addresses = object.addresses?.map(e => e) || [];
    message.matches = object.matches?.map(e => Match.fromPartial(e)) || [];
    message.sets = object.sets?.map(e => Set.fromPartial(e)) || [];
    message.sellOffers = object.sellOffers?.map(e => SellOffer.fromPartial(e)) || [];
    message.pools = object.pools?.map(e => Coin.fromPartial(e)) || [];
    message.cardAuctionPrice = object.cardAuctionPrice !== undefined && object.cardAuctionPrice !== null ? Coin.fromPartial(object.cardAuctionPrice) : undefined;
    message.councils = object.councils?.map(e => Council.fromPartial(e)) || [];
    message.runningAverages = object.runningAverages?.map(e => RunningAverage.fromPartial(e)) || [];
    message.images = object.images?.map(e => Image.fromPartial(e)) || [];
    message.servers = object.servers?.map(e => Server.fromPartial(e)) || [];
    message.lastCardModified = object.lastCardModified !== undefined && object.lastCardModified !== null ? TimeStamp.fromPartial(object.lastCardModified) : undefined;
    message.zealys = object.zealys?.map(e => Zealy.fromPartial(e)) || [];
    message.encounters = object.encounters?.map(e => Encounter.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.cardRecords = object.cardRecords?.map(e => Card.fromAmino(e)) || [];
    message.users = object.users?.map(e => User.fromAmino(e)) || [];
    message.addresses = object.addresses?.map(e => e) || [];
    message.matches = object.matches?.map(e => Match.fromAmino(e)) || [];
    message.sets = object.sets?.map(e => Set.fromAmino(e)) || [];
    message.sellOffers = object.sellOffers?.map(e => SellOffer.fromAmino(e)) || [];
    message.pools = object.pools?.map(e => Coin.fromAmino(e)) || [];
    if (object.cardAuctionPrice !== undefined && object.cardAuctionPrice !== null) {
      message.cardAuctionPrice = Coin.fromAmino(object.cardAuctionPrice);
    }
    message.councils = object.councils?.map(e => Council.fromAmino(e)) || [];
    message.runningAverages = object.runningAverages?.map(e => RunningAverage.fromAmino(e)) || [];
    message.images = object.images?.map(e => Image.fromAmino(e)) || [];
    message.servers = object.servers?.map(e => Server.fromAmino(e)) || [];
    if (object.lastCardModified !== undefined && object.lastCardModified !== null) {
      message.lastCardModified = TimeStamp.fromAmino(object.lastCardModified);
    }
    message.zealys = object.zealys?.map(e => Zealy.fromAmino(e)) || [];
    message.encounters = object.encounters?.map(e => Encounter.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    if (message.cardRecords) {
      obj.cardRecords = message.cardRecords.map(e => e ? Card.toAmino(e) : undefined);
    } else {
      obj.cardRecords = message.cardRecords;
    }
    if (message.users) {
      obj.users = message.users.map(e => e ? User.toAmino(e) : undefined);
    } else {
      obj.users = message.users;
    }
    if (message.addresses) {
      obj.addresses = message.addresses.map(e => e);
    } else {
      obj.addresses = message.addresses;
    }
    if (message.matches) {
      obj.matches = message.matches.map(e => e ? Match.toAmino(e) : undefined);
    } else {
      obj.matches = message.matches;
    }
    if (message.sets) {
      obj.sets = message.sets.map(e => e ? Set.toAmino(e) : undefined);
    } else {
      obj.sets = message.sets;
    }
    if (message.sellOffers) {
      obj.sellOffers = message.sellOffers.map(e => e ? SellOffer.toAmino(e) : undefined);
    } else {
      obj.sellOffers = message.sellOffers;
    }
    if (message.pools) {
      obj.pools = message.pools.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.pools = message.pools;
    }
    obj.cardAuctionPrice = message.cardAuctionPrice ? Coin.toAmino(message.cardAuctionPrice) : undefined;
    if (message.councils) {
      obj.councils = message.councils.map(e => e ? Council.toAmino(e) : undefined);
    } else {
      obj.councils = message.councils;
    }
    if (message.runningAverages) {
      obj.runningAverages = message.runningAverages.map(e => e ? RunningAverage.toAmino(e) : undefined);
    } else {
      obj.runningAverages = message.runningAverages;
    }
    if (message.images) {
      obj.images = message.images.map(e => e ? Image.toAmino(e) : undefined);
    } else {
      obj.images = message.images;
    }
    if (message.servers) {
      obj.servers = message.servers.map(e => e ? Server.toAmino(e) : undefined);
    } else {
      obj.servers = message.servers;
    }
    obj.lastCardModified = message.lastCardModified ? TimeStamp.toAmino(message.lastCardModified) : undefined;
    if (message.zealys) {
      obj.zealys = message.zealys.map(e => e ? Zealy.toAmino(e) : undefined);
    } else {
      obj.zealys = message.zealys;
    }
    if (message.encounters) {
      obj.encounters = message.encounters.map(e => e ? Encounter.toAmino(e) : undefined);
    } else {
      obj.encounters = message.encounters;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};