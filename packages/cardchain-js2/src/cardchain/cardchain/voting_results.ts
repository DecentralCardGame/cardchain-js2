//@ts-nocheck
import { VotingResult, VotingResultAmino, VotingResultSDKType } from "./voting";
import { BinaryReader, BinaryWriter } from "../../binary";
export interface VotingResults {
  totalVotes: bigint;
  totalFairEnoughVotes: bigint;
  totalOverpoweredVotes: bigint;
  totalUnderpoweredVotes: bigint;
  totalInappropriateVotes: bigint;
  cardResults: VotingResult[];
  notes: string;
}
export interface VotingResultsProtoMsg {
  typeUrl: "/cardchain.cardchain.VotingResults";
  value: Uint8Array;
}
export interface VotingResultsAmino {
  totalVotes?: string;
  totalFairEnoughVotes?: string;
  totalOverpoweredVotes?: string;
  totalUnderpoweredVotes?: string;
  totalInappropriateVotes?: string;
  cardResults?: VotingResultAmino[];
  notes?: string;
}
export interface VotingResultsAminoMsg {
  type: "/cardchain.cardchain.VotingResults";
  value: VotingResultsAmino;
}
export interface VotingResultsSDKType {
  totalVotes: bigint;
  totalFairEnoughVotes: bigint;
  totalOverpoweredVotes: bigint;
  totalUnderpoweredVotes: bigint;
  totalInappropriateVotes: bigint;
  cardResults: VotingResultSDKType[];
  notes: string;
}
function createBaseVotingResults(): VotingResults {
  return {
    totalVotes: BigInt(0),
    totalFairEnoughVotes: BigInt(0),
    totalOverpoweredVotes: BigInt(0),
    totalUnderpoweredVotes: BigInt(0),
    totalInappropriateVotes: BigInt(0),
    cardResults: [],
    notes: ""
  };
}
export const VotingResults = {
  typeUrl: "/cardchain.cardchain.VotingResults",
  encode(message: VotingResults, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.totalVotes !== BigInt(0)) {
      writer.uint32(8).uint64(message.totalVotes);
    }
    if (message.totalFairEnoughVotes !== BigInt(0)) {
      writer.uint32(16).uint64(message.totalFairEnoughVotes);
    }
    if (message.totalOverpoweredVotes !== BigInt(0)) {
      writer.uint32(24).uint64(message.totalOverpoweredVotes);
    }
    if (message.totalUnderpoweredVotes !== BigInt(0)) {
      writer.uint32(32).uint64(message.totalUnderpoweredVotes);
    }
    if (message.totalInappropriateVotes !== BigInt(0)) {
      writer.uint32(40).uint64(message.totalInappropriateVotes);
    }
    for (const v of message.cardResults) {
      VotingResult.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.notes !== "") {
      writer.uint32(58).string(message.notes);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): VotingResults {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVotingResults();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalVotes = reader.uint64();
          break;
        case 2:
          message.totalFairEnoughVotes = reader.uint64();
          break;
        case 3:
          message.totalOverpoweredVotes = reader.uint64();
          break;
        case 4:
          message.totalUnderpoweredVotes = reader.uint64();
          break;
        case 5:
          message.totalInappropriateVotes = reader.uint64();
          break;
        case 6:
          message.cardResults.push(VotingResult.decode(reader, reader.uint32()));
          break;
        case 7:
          message.notes = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<VotingResults>): VotingResults {
    const message = createBaseVotingResults();
    message.totalVotes = object.totalVotes !== undefined && object.totalVotes !== null ? BigInt(object.totalVotes.toString()) : BigInt(0);
    message.totalFairEnoughVotes = object.totalFairEnoughVotes !== undefined && object.totalFairEnoughVotes !== null ? BigInt(object.totalFairEnoughVotes.toString()) : BigInt(0);
    message.totalOverpoweredVotes = object.totalOverpoweredVotes !== undefined && object.totalOverpoweredVotes !== null ? BigInt(object.totalOverpoweredVotes.toString()) : BigInt(0);
    message.totalUnderpoweredVotes = object.totalUnderpoweredVotes !== undefined && object.totalUnderpoweredVotes !== null ? BigInt(object.totalUnderpoweredVotes.toString()) : BigInt(0);
    message.totalInappropriateVotes = object.totalInappropriateVotes !== undefined && object.totalInappropriateVotes !== null ? BigInt(object.totalInappropriateVotes.toString()) : BigInt(0);
    message.cardResults = object.cardResults?.map(e => VotingResult.fromPartial(e)) || [];
    message.notes = object.notes ?? "";
    return message;
  },
  fromAmino(object: VotingResultsAmino): VotingResults {
    const message = createBaseVotingResults();
    if (object.totalVotes !== undefined && object.totalVotes !== null) {
      message.totalVotes = BigInt(object.totalVotes);
    }
    if (object.totalFairEnoughVotes !== undefined && object.totalFairEnoughVotes !== null) {
      message.totalFairEnoughVotes = BigInt(object.totalFairEnoughVotes);
    }
    if (object.totalOverpoweredVotes !== undefined && object.totalOverpoweredVotes !== null) {
      message.totalOverpoweredVotes = BigInt(object.totalOverpoweredVotes);
    }
    if (object.totalUnderpoweredVotes !== undefined && object.totalUnderpoweredVotes !== null) {
      message.totalUnderpoweredVotes = BigInt(object.totalUnderpoweredVotes);
    }
    if (object.totalInappropriateVotes !== undefined && object.totalInappropriateVotes !== null) {
      message.totalInappropriateVotes = BigInt(object.totalInappropriateVotes);
    }
    message.cardResults = object.cardResults?.map(e => VotingResult.fromAmino(e)) || [];
    if (object.notes !== undefined && object.notes !== null) {
      message.notes = object.notes;
    }
    return message;
  },
  toAmino(message: VotingResults): VotingResultsAmino {
    const obj: any = {};
    obj.totalVotes = message.totalVotes !== BigInt(0) ? message.totalVotes?.toString() : undefined;
    obj.totalFairEnoughVotes = message.totalFairEnoughVotes !== BigInt(0) ? message.totalFairEnoughVotes?.toString() : undefined;
    obj.totalOverpoweredVotes = message.totalOverpoweredVotes !== BigInt(0) ? message.totalOverpoweredVotes?.toString() : undefined;
    obj.totalUnderpoweredVotes = message.totalUnderpoweredVotes !== BigInt(0) ? message.totalUnderpoweredVotes?.toString() : undefined;
    obj.totalInappropriateVotes = message.totalInappropriateVotes !== BigInt(0) ? message.totalInappropriateVotes?.toString() : undefined;
    if (message.cardResults) {
      obj.cardResults = message.cardResults.map(e => e ? VotingResult.toAmino(e) : undefined);
    } else {
      obj.cardResults = message.cardResults;
    }
    obj.notes = message.notes === "" ? undefined : message.notes;
    return obj;
  },
  fromAminoMsg(object: VotingResultsAminoMsg): VotingResults {
    return VotingResults.fromAmino(object.value);
  },
  fromProtoMsg(message: VotingResultsProtoMsg): VotingResults {
    return VotingResults.decode(message.value);
  },
  toProto(message: VotingResults): Uint8Array {
    return VotingResults.encode(message).finish();
  },
  toProtoMsg(message: VotingResults): VotingResultsProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.VotingResults",
      value: VotingResults.encode(message).finish()
    };
  }
};