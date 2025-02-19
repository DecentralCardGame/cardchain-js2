//@ts-nocheck
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
/** Params defines the parameters for the module. */
export interface Params {
  votingRightsExpirationTime: bigint;
  setSize: bigint;
  setPrice: Coin;
  activeSetsAmount: bigint;
  setCreationFee: Coin;
  collateralDeposit: Coin;
  winnerReward: bigint;
  hourlyFaucet: Coin;
  inflationRate: string;
  raresPerPack: bigint;
  commonsPerPack: bigint;
  unCommonsPerPack: bigint;
  trialPeriod: bigint;
  gameVoteRatio: bigint;
  cardAuctionPriceReductionPeriod: bigint;
  airDropValue: Coin;
  airDropMaxBlockHeight: bigint;
  trialVoteReward: Coin;
  votePoolFraction: bigint;
  votingRewardCap: bigint;
  matchWorkerDelay: bigint;
  rareDropRatio: bigint;
  exceptionalDropRatio: bigint;
  uniqueDropRatio: bigint;
}
export interface ParamsProtoMsg {
  typeUrl: "/cardchain.cardchain.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsAmino {
  votingRightsExpirationTime?: string;
  setSize?: string;
  setPrice?: CoinAmino;
  activeSetsAmount?: string;
  setCreationFee?: CoinAmino;
  collateralDeposit?: CoinAmino;
  winnerReward?: string;
  hourlyFaucet?: CoinAmino;
  inflationRate?: string;
  raresPerPack?: string;
  commonsPerPack?: string;
  unCommonsPerPack?: string;
  trialPeriod?: string;
  gameVoteRatio?: string;
  cardAuctionPriceReductionPeriod?: string;
  airDropValue?: CoinAmino;
  airDropMaxBlockHeight?: string;
  trialVoteReward?: CoinAmino;
  votePoolFraction?: string;
  votingRewardCap?: string;
  matchWorkerDelay?: string;
  rareDropRatio?: string;
  exceptionalDropRatio?: string;
  uniqueDropRatio?: string;
}
export interface ParamsAminoMsg {
  type: "cardchain/x/cardchain/Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  votingRightsExpirationTime: bigint;
  setSize: bigint;
  setPrice: CoinSDKType;
  activeSetsAmount: bigint;
  setCreationFee: CoinSDKType;
  collateralDeposit: CoinSDKType;
  winnerReward: bigint;
  hourlyFaucet: CoinSDKType;
  inflationRate: string;
  raresPerPack: bigint;
  commonsPerPack: bigint;
  unCommonsPerPack: bigint;
  trialPeriod: bigint;
  gameVoteRatio: bigint;
  cardAuctionPriceReductionPeriod: bigint;
  airDropValue: CoinSDKType;
  airDropMaxBlockHeight: bigint;
  trialVoteReward: CoinSDKType;
  votePoolFraction: bigint;
  votingRewardCap: bigint;
  matchWorkerDelay: bigint;
  rareDropRatio: bigint;
  exceptionalDropRatio: bigint;
  uniqueDropRatio: bigint;
}
function createBaseParams(): Params {
  return {
    votingRightsExpirationTime: BigInt(0),
    setSize: BigInt(0),
    setPrice: Coin.fromPartial({}),
    activeSetsAmount: BigInt(0),
    setCreationFee: Coin.fromPartial({}),
    collateralDeposit: Coin.fromPartial({}),
    winnerReward: BigInt(0),
    hourlyFaucet: Coin.fromPartial({}),
    inflationRate: "",
    raresPerPack: BigInt(0),
    commonsPerPack: BigInt(0),
    unCommonsPerPack: BigInt(0),
    trialPeriod: BigInt(0),
    gameVoteRatio: BigInt(0),
    cardAuctionPriceReductionPeriod: BigInt(0),
    airDropValue: Coin.fromPartial({}),
    airDropMaxBlockHeight: BigInt(0),
    trialVoteReward: Coin.fromPartial({}),
    votePoolFraction: BigInt(0),
    votingRewardCap: BigInt(0),
    matchWorkerDelay: BigInt(0),
    rareDropRatio: BigInt(0),
    exceptionalDropRatio: BigInt(0),
    uniqueDropRatio: BigInt(0)
  };
}
export const Params = {
  typeUrl: "/cardchain.cardchain.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.votingRightsExpirationTime !== BigInt(0)) {
      writer.uint32(8).int64(message.votingRightsExpirationTime);
    }
    if (message.setSize !== BigInt(0)) {
      writer.uint32(16).uint64(message.setSize);
    }
    if (message.setPrice !== undefined) {
      Coin.encode(message.setPrice, writer.uint32(26).fork()).ldelim();
    }
    if (message.activeSetsAmount !== BigInt(0)) {
      writer.uint32(32).uint64(message.activeSetsAmount);
    }
    if (message.setCreationFee !== undefined) {
      Coin.encode(message.setCreationFee, writer.uint32(42).fork()).ldelim();
    }
    if (message.collateralDeposit !== undefined) {
      Coin.encode(message.collateralDeposit, writer.uint32(50).fork()).ldelim();
    }
    if (message.winnerReward !== BigInt(0)) {
      writer.uint32(56).int64(message.winnerReward);
    }
    if (message.hourlyFaucet !== undefined) {
      Coin.encode(message.hourlyFaucet, writer.uint32(74).fork()).ldelim();
    }
    if (message.inflationRate !== "") {
      writer.uint32(82).string(message.inflationRate);
    }
    if (message.raresPerPack !== BigInt(0)) {
      writer.uint32(88).uint64(message.raresPerPack);
    }
    if (message.commonsPerPack !== BigInt(0)) {
      writer.uint32(96).uint64(message.commonsPerPack);
    }
    if (message.unCommonsPerPack !== BigInt(0)) {
      writer.uint32(104).uint64(message.unCommonsPerPack);
    }
    if (message.trialPeriod !== BigInt(0)) {
      writer.uint32(112).uint64(message.trialPeriod);
    }
    if (message.gameVoteRatio !== BigInt(0)) {
      writer.uint32(120).int64(message.gameVoteRatio);
    }
    if (message.cardAuctionPriceReductionPeriod !== BigInt(0)) {
      writer.uint32(128).int64(message.cardAuctionPriceReductionPeriod);
    }
    if (message.airDropValue !== undefined) {
      Coin.encode(message.airDropValue, writer.uint32(138).fork()).ldelim();
    }
    if (message.airDropMaxBlockHeight !== BigInt(0)) {
      writer.uint32(144).int64(message.airDropMaxBlockHeight);
    }
    if (message.trialVoteReward !== undefined) {
      Coin.encode(message.trialVoteReward, writer.uint32(154).fork()).ldelim();
    }
    if (message.votePoolFraction !== BigInt(0)) {
      writer.uint32(160).int64(message.votePoolFraction);
    }
    if (message.votingRewardCap !== BigInt(0)) {
      writer.uint32(64).int64(message.votingRewardCap);
    }
    if (message.matchWorkerDelay !== BigInt(0)) {
      writer.uint32(168).uint64(message.matchWorkerDelay);
    }
    if (message.rareDropRatio !== BigInt(0)) {
      writer.uint32(176).uint64(message.rareDropRatio);
    }
    if (message.exceptionalDropRatio !== BigInt(0)) {
      writer.uint32(184).uint64(message.exceptionalDropRatio);
    }
    if (message.uniqueDropRatio !== BigInt(0)) {
      writer.uint32(192).uint64(message.uniqueDropRatio);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.votingRightsExpirationTime = reader.int64();
          break;
        case 2:
          message.setSize = reader.uint64();
          break;
        case 3:
          message.setPrice = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.activeSetsAmount = reader.uint64();
          break;
        case 5:
          message.setCreationFee = Coin.decode(reader, reader.uint32());
          break;
        case 6:
          message.collateralDeposit = Coin.decode(reader, reader.uint32());
          break;
        case 7:
          message.winnerReward = reader.int64();
          break;
        case 9:
          message.hourlyFaucet = Coin.decode(reader, reader.uint32());
          break;
        case 10:
          message.inflationRate = reader.string();
          break;
        case 11:
          message.raresPerPack = reader.uint64();
          break;
        case 12:
          message.commonsPerPack = reader.uint64();
          break;
        case 13:
          message.unCommonsPerPack = reader.uint64();
          break;
        case 14:
          message.trialPeriod = reader.uint64();
          break;
        case 15:
          message.gameVoteRatio = reader.int64();
          break;
        case 16:
          message.cardAuctionPriceReductionPeriod = reader.int64();
          break;
        case 17:
          message.airDropValue = Coin.decode(reader, reader.uint32());
          break;
        case 18:
          message.airDropMaxBlockHeight = reader.int64();
          break;
        case 19:
          message.trialVoteReward = Coin.decode(reader, reader.uint32());
          break;
        case 20:
          message.votePoolFraction = reader.int64();
          break;
        case 8:
          message.votingRewardCap = reader.int64();
          break;
        case 21:
          message.matchWorkerDelay = reader.uint64();
          break;
        case 22:
          message.rareDropRatio = reader.uint64();
          break;
        case 23:
          message.exceptionalDropRatio = reader.uint64();
          break;
        case 24:
          message.uniqueDropRatio = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.votingRightsExpirationTime = object.votingRightsExpirationTime !== undefined && object.votingRightsExpirationTime !== null ? BigInt(object.votingRightsExpirationTime.toString()) : BigInt(0);
    message.setSize = object.setSize !== undefined && object.setSize !== null ? BigInt(object.setSize.toString()) : BigInt(0);
    message.setPrice = object.setPrice !== undefined && object.setPrice !== null ? Coin.fromPartial(object.setPrice) : undefined;
    message.activeSetsAmount = object.activeSetsAmount !== undefined && object.activeSetsAmount !== null ? BigInt(object.activeSetsAmount.toString()) : BigInt(0);
    message.setCreationFee = object.setCreationFee !== undefined && object.setCreationFee !== null ? Coin.fromPartial(object.setCreationFee) : undefined;
    message.collateralDeposit = object.collateralDeposit !== undefined && object.collateralDeposit !== null ? Coin.fromPartial(object.collateralDeposit) : undefined;
    message.winnerReward = object.winnerReward !== undefined && object.winnerReward !== null ? BigInt(object.winnerReward.toString()) : BigInt(0);
    message.hourlyFaucet = object.hourlyFaucet !== undefined && object.hourlyFaucet !== null ? Coin.fromPartial(object.hourlyFaucet) : undefined;
    message.inflationRate = object.inflationRate ?? "";
    message.raresPerPack = object.raresPerPack !== undefined && object.raresPerPack !== null ? BigInt(object.raresPerPack.toString()) : BigInt(0);
    message.commonsPerPack = object.commonsPerPack !== undefined && object.commonsPerPack !== null ? BigInt(object.commonsPerPack.toString()) : BigInt(0);
    message.unCommonsPerPack = object.unCommonsPerPack !== undefined && object.unCommonsPerPack !== null ? BigInt(object.unCommonsPerPack.toString()) : BigInt(0);
    message.trialPeriod = object.trialPeriod !== undefined && object.trialPeriod !== null ? BigInt(object.trialPeriod.toString()) : BigInt(0);
    message.gameVoteRatio = object.gameVoteRatio !== undefined && object.gameVoteRatio !== null ? BigInt(object.gameVoteRatio.toString()) : BigInt(0);
    message.cardAuctionPriceReductionPeriod = object.cardAuctionPriceReductionPeriod !== undefined && object.cardAuctionPriceReductionPeriod !== null ? BigInt(object.cardAuctionPriceReductionPeriod.toString()) : BigInt(0);
    message.airDropValue = object.airDropValue !== undefined && object.airDropValue !== null ? Coin.fromPartial(object.airDropValue) : undefined;
    message.airDropMaxBlockHeight = object.airDropMaxBlockHeight !== undefined && object.airDropMaxBlockHeight !== null ? BigInt(object.airDropMaxBlockHeight.toString()) : BigInt(0);
    message.trialVoteReward = object.trialVoteReward !== undefined && object.trialVoteReward !== null ? Coin.fromPartial(object.trialVoteReward) : undefined;
    message.votePoolFraction = object.votePoolFraction !== undefined && object.votePoolFraction !== null ? BigInt(object.votePoolFraction.toString()) : BigInt(0);
    message.votingRewardCap = object.votingRewardCap !== undefined && object.votingRewardCap !== null ? BigInt(object.votingRewardCap.toString()) : BigInt(0);
    message.matchWorkerDelay = object.matchWorkerDelay !== undefined && object.matchWorkerDelay !== null ? BigInt(object.matchWorkerDelay.toString()) : BigInt(0);
    message.rareDropRatio = object.rareDropRatio !== undefined && object.rareDropRatio !== null ? BigInt(object.rareDropRatio.toString()) : BigInt(0);
    message.exceptionalDropRatio = object.exceptionalDropRatio !== undefined && object.exceptionalDropRatio !== null ? BigInt(object.exceptionalDropRatio.toString()) : BigInt(0);
    message.uniqueDropRatio = object.uniqueDropRatio !== undefined && object.uniqueDropRatio !== null ? BigInt(object.uniqueDropRatio.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.votingRightsExpirationTime !== undefined && object.votingRightsExpirationTime !== null) {
      message.votingRightsExpirationTime = BigInt(object.votingRightsExpirationTime);
    }
    if (object.setSize !== undefined && object.setSize !== null) {
      message.setSize = BigInt(object.setSize);
    }
    if (object.setPrice !== undefined && object.setPrice !== null) {
      message.setPrice = Coin.fromAmino(object.setPrice);
    }
    if (object.activeSetsAmount !== undefined && object.activeSetsAmount !== null) {
      message.activeSetsAmount = BigInt(object.activeSetsAmount);
    }
    if (object.setCreationFee !== undefined && object.setCreationFee !== null) {
      message.setCreationFee = Coin.fromAmino(object.setCreationFee);
    }
    if (object.collateralDeposit !== undefined && object.collateralDeposit !== null) {
      message.collateralDeposit = Coin.fromAmino(object.collateralDeposit);
    }
    if (object.winnerReward !== undefined && object.winnerReward !== null) {
      message.winnerReward = BigInt(object.winnerReward);
    }
    if (object.hourlyFaucet !== undefined && object.hourlyFaucet !== null) {
      message.hourlyFaucet = Coin.fromAmino(object.hourlyFaucet);
    }
    if (object.inflationRate !== undefined && object.inflationRate !== null) {
      message.inflationRate = object.inflationRate;
    }
    if (object.raresPerPack !== undefined && object.raresPerPack !== null) {
      message.raresPerPack = BigInt(object.raresPerPack);
    }
    if (object.commonsPerPack !== undefined && object.commonsPerPack !== null) {
      message.commonsPerPack = BigInt(object.commonsPerPack);
    }
    if (object.unCommonsPerPack !== undefined && object.unCommonsPerPack !== null) {
      message.unCommonsPerPack = BigInt(object.unCommonsPerPack);
    }
    if (object.trialPeriod !== undefined && object.trialPeriod !== null) {
      message.trialPeriod = BigInt(object.trialPeriod);
    }
    if (object.gameVoteRatio !== undefined && object.gameVoteRatio !== null) {
      message.gameVoteRatio = BigInt(object.gameVoteRatio);
    }
    if (object.cardAuctionPriceReductionPeriod !== undefined && object.cardAuctionPriceReductionPeriod !== null) {
      message.cardAuctionPriceReductionPeriod = BigInt(object.cardAuctionPriceReductionPeriod);
    }
    if (object.airDropValue !== undefined && object.airDropValue !== null) {
      message.airDropValue = Coin.fromAmino(object.airDropValue);
    }
    if (object.airDropMaxBlockHeight !== undefined && object.airDropMaxBlockHeight !== null) {
      message.airDropMaxBlockHeight = BigInt(object.airDropMaxBlockHeight);
    }
    if (object.trialVoteReward !== undefined && object.trialVoteReward !== null) {
      message.trialVoteReward = Coin.fromAmino(object.trialVoteReward);
    }
    if (object.votePoolFraction !== undefined && object.votePoolFraction !== null) {
      message.votePoolFraction = BigInt(object.votePoolFraction);
    }
    if (object.votingRewardCap !== undefined && object.votingRewardCap !== null) {
      message.votingRewardCap = BigInt(object.votingRewardCap);
    }
    if (object.matchWorkerDelay !== undefined && object.matchWorkerDelay !== null) {
      message.matchWorkerDelay = BigInt(object.matchWorkerDelay);
    }
    if (object.rareDropRatio !== undefined && object.rareDropRatio !== null) {
      message.rareDropRatio = BigInt(object.rareDropRatio);
    }
    if (object.exceptionalDropRatio !== undefined && object.exceptionalDropRatio !== null) {
      message.exceptionalDropRatio = BigInt(object.exceptionalDropRatio);
    }
    if (object.uniqueDropRatio !== undefined && object.uniqueDropRatio !== null) {
      message.uniqueDropRatio = BigInt(object.uniqueDropRatio);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.votingRightsExpirationTime = message.votingRightsExpirationTime !== BigInt(0) ? message.votingRightsExpirationTime?.toString() : undefined;
    obj.setSize = message.setSize !== BigInt(0) ? message.setSize?.toString() : undefined;
    obj.setPrice = message.setPrice ? Coin.toAmino(message.setPrice) : undefined;
    obj.activeSetsAmount = message.activeSetsAmount !== BigInt(0) ? message.activeSetsAmount?.toString() : undefined;
    obj.setCreationFee = message.setCreationFee ? Coin.toAmino(message.setCreationFee) : undefined;
    obj.collateralDeposit = message.collateralDeposit ? Coin.toAmino(message.collateralDeposit) : undefined;
    obj.winnerReward = message.winnerReward !== BigInt(0) ? message.winnerReward?.toString() : undefined;
    obj.hourlyFaucet = message.hourlyFaucet ? Coin.toAmino(message.hourlyFaucet) : undefined;
    obj.inflationRate = message.inflationRate === "" ? undefined : message.inflationRate;
    obj.raresPerPack = message.raresPerPack !== BigInt(0) ? message.raresPerPack?.toString() : undefined;
    obj.commonsPerPack = message.commonsPerPack !== BigInt(0) ? message.commonsPerPack?.toString() : undefined;
    obj.unCommonsPerPack = message.unCommonsPerPack !== BigInt(0) ? message.unCommonsPerPack?.toString() : undefined;
    obj.trialPeriod = message.trialPeriod !== BigInt(0) ? message.trialPeriod?.toString() : undefined;
    obj.gameVoteRatio = message.gameVoteRatio !== BigInt(0) ? message.gameVoteRatio?.toString() : undefined;
    obj.cardAuctionPriceReductionPeriod = message.cardAuctionPriceReductionPeriod !== BigInt(0) ? message.cardAuctionPriceReductionPeriod?.toString() : undefined;
    obj.airDropValue = message.airDropValue ? Coin.toAmino(message.airDropValue) : undefined;
    obj.airDropMaxBlockHeight = message.airDropMaxBlockHeight !== BigInt(0) ? message.airDropMaxBlockHeight?.toString() : undefined;
    obj.trialVoteReward = message.trialVoteReward ? Coin.toAmino(message.trialVoteReward) : undefined;
    obj.votePoolFraction = message.votePoolFraction !== BigInt(0) ? message.votePoolFraction?.toString() : undefined;
    obj.votingRewardCap = message.votingRewardCap !== BigInt(0) ? message.votingRewardCap?.toString() : undefined;
    obj.matchWorkerDelay = message.matchWorkerDelay !== BigInt(0) ? message.matchWorkerDelay?.toString() : undefined;
    obj.rareDropRatio = message.rareDropRatio !== BigInt(0) ? message.rareDropRatio?.toString() : undefined;
    obj.exceptionalDropRatio = message.exceptionalDropRatio !== BigInt(0) ? message.exceptionalDropRatio?.toString() : undefined;
    obj.uniqueDropRatio = message.uniqueDropRatio !== BigInt(0) ? message.uniqueDropRatio?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "cardchain/x/cardchain/Params",
      value: Params.toAmino(message)
    };
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.Params",
      value: Params.encode(message).finish()
    };
  }
};