//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
export enum VoteType {
  fairEnough = 0,
  inappropriate = 1,
  overpowered = 2,
  underpowered = 3,
  UNRECOGNIZED = -1,
}
export const VoteTypeSDKType = VoteType;
export const VoteTypeAmino = VoteType;
export function voteTypeFromJSON(object: any): VoteType {
  switch (object) {
    case 0:
    case "fairEnough":
      return VoteType.fairEnough;
    case 1:
    case "inappropriate":
      return VoteType.inappropriate;
    case 2:
    case "overpowered":
      return VoteType.overpowered;
    case 3:
    case "underpowered":
      return VoteType.underpowered;
    case -1:
    case "UNRECOGNIZED":
    default:
      return VoteType.UNRECOGNIZED;
  }
}
export function voteTypeToJSON(object: VoteType): string {
  switch (object) {
    case VoteType.fairEnough:
      return "fairEnough";
    case VoteType.inappropriate:
      return "inappropriate";
    case VoteType.overpowered:
      return "overpowered";
    case VoteType.underpowered:
      return "underpowered";
    case VoteType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface VotingResult {
  cardId: bigint;
  fairEnoughVotes: bigint;
  overpoweredVotes: bigint;
  underpoweredVotes: bigint;
  inappropriateVotes: bigint;
  result: string;
}
export interface VotingResultProtoMsg {
  typeUrl: "/cardchain.cardchain.VotingResult";
  value: Uint8Array;
}
export interface VotingResultAmino {
  cardId?: string;
  fairEnoughVotes?: string;
  overpoweredVotes?: string;
  underpoweredVotes?: string;
  inappropriateVotes?: string;
  result?: string;
}
export interface VotingResultAminoMsg {
  type: "/cardchain.cardchain.VotingResult";
  value: VotingResultAmino;
}
export interface VotingResultSDKType {
  cardId: bigint;
  fairEnoughVotes: bigint;
  overpoweredVotes: bigint;
  underpoweredVotes: bigint;
  inappropriateVotes: bigint;
  result: string;
}
export interface SingleVote {
  cardId: bigint;
  voteType: VoteType;
}
export interface SingleVoteProtoMsg {
  typeUrl: "/cardchain.cardchain.SingleVote";
  value: Uint8Array;
}
export interface SingleVoteAmino {
  cardId?: string;
  voteType?: VoteType;
}
export interface SingleVoteAminoMsg {
  type: "/cardchain.cardchain.SingleVote";
  value: SingleVoteAmino;
}
export interface SingleVoteSDKType {
  cardId: bigint;
  voteType: VoteType;
}
function createBaseVotingResult(): VotingResult {
  return {
    cardId: BigInt(0),
    fairEnoughVotes: BigInt(0),
    overpoweredVotes: BigInt(0),
    underpoweredVotes: BigInt(0),
    inappropriateVotes: BigInt(0),
    result: ""
  };
}
export const VotingResult = {
  typeUrl: "/cardchain.cardchain.VotingResult",
  encode(message: VotingResult, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.cardId !== BigInt(0)) {
      writer.uint32(8).uint64(message.cardId);
    }
    if (message.fairEnoughVotes !== BigInt(0)) {
      writer.uint32(16).uint64(message.fairEnoughVotes);
    }
    if (message.overpoweredVotes !== BigInt(0)) {
      writer.uint32(24).uint64(message.overpoweredVotes);
    }
    if (message.underpoweredVotes !== BigInt(0)) {
      writer.uint32(32).uint64(message.underpoweredVotes);
    }
    if (message.inappropriateVotes !== BigInt(0)) {
      writer.uint32(40).uint64(message.inappropriateVotes);
    }
    if (message.result !== "") {
      writer.uint32(50).string(message.result);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): VotingResult {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVotingResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cardId = reader.uint64();
          break;
        case 2:
          message.fairEnoughVotes = reader.uint64();
          break;
        case 3:
          message.overpoweredVotes = reader.uint64();
          break;
        case 4:
          message.underpoweredVotes = reader.uint64();
          break;
        case 5:
          message.inappropriateVotes = reader.uint64();
          break;
        case 6:
          message.result = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<VotingResult>): VotingResult {
    const message = createBaseVotingResult();
    message.cardId = object.cardId !== undefined && object.cardId !== null ? BigInt(object.cardId.toString()) : BigInt(0);
    message.fairEnoughVotes = object.fairEnoughVotes !== undefined && object.fairEnoughVotes !== null ? BigInt(object.fairEnoughVotes.toString()) : BigInt(0);
    message.overpoweredVotes = object.overpoweredVotes !== undefined && object.overpoweredVotes !== null ? BigInt(object.overpoweredVotes.toString()) : BigInt(0);
    message.underpoweredVotes = object.underpoweredVotes !== undefined && object.underpoweredVotes !== null ? BigInt(object.underpoweredVotes.toString()) : BigInt(0);
    message.inappropriateVotes = object.inappropriateVotes !== undefined && object.inappropriateVotes !== null ? BigInt(object.inappropriateVotes.toString()) : BigInt(0);
    message.result = object.result ?? "";
    return message;
  },
  fromAmino(object: VotingResultAmino): VotingResult {
    const message = createBaseVotingResult();
    if (object.cardId !== undefined && object.cardId !== null) {
      message.cardId = BigInt(object.cardId);
    }
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
    if (object.result !== undefined && object.result !== null) {
      message.result = object.result;
    }
    return message;
  },
  toAmino(message: VotingResult): VotingResultAmino {
    const obj: any = {};
    obj.cardId = message.cardId !== BigInt(0) ? message.cardId?.toString() : undefined;
    obj.fairEnoughVotes = message.fairEnoughVotes !== BigInt(0) ? message.fairEnoughVotes?.toString() : undefined;
    obj.overpoweredVotes = message.overpoweredVotes !== BigInt(0) ? message.overpoweredVotes?.toString() : undefined;
    obj.underpoweredVotes = message.underpoweredVotes !== BigInt(0) ? message.underpoweredVotes?.toString() : undefined;
    obj.inappropriateVotes = message.inappropriateVotes !== BigInt(0) ? message.inappropriateVotes?.toString() : undefined;
    obj.result = message.result === "" ? undefined : message.result;
    return obj;
  },
  fromAminoMsg(object: VotingResultAminoMsg): VotingResult {
    return VotingResult.fromAmino(object.value);
  },
  fromProtoMsg(message: VotingResultProtoMsg): VotingResult {
    return VotingResult.decode(message.value);
  },
  toProto(message: VotingResult): Uint8Array {
    return VotingResult.encode(message).finish();
  },
  toProtoMsg(message: VotingResult): VotingResultProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.VotingResult",
      value: VotingResult.encode(message).finish()
    };
  }
};
function createBaseSingleVote(): SingleVote {
  return {
    cardId: BigInt(0),
    voteType: 0
  };
}
export const SingleVote = {
  typeUrl: "/cardchain.cardchain.SingleVote",
  encode(message: SingleVote, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.cardId !== BigInt(0)) {
      writer.uint32(8).uint64(message.cardId);
    }
    if (message.voteType !== 0) {
      writer.uint32(16).int32(message.voteType);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SingleVote {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSingleVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cardId = reader.uint64();
          break;
        case 2:
          message.voteType = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<SingleVote>): SingleVote {
    const message = createBaseSingleVote();
    message.cardId = object.cardId !== undefined && object.cardId !== null ? BigInt(object.cardId.toString()) : BigInt(0);
    message.voteType = object.voteType ?? 0;
    return message;
  },
  fromAmino(object: SingleVoteAmino): SingleVote {
    const message = createBaseSingleVote();
    if (object.cardId !== undefined && object.cardId !== null) {
      message.cardId = BigInt(object.cardId);
    }
    if (object.voteType !== undefined && object.voteType !== null) {
      message.voteType = object.voteType;
    }
    return message;
  },
  toAmino(message: SingleVote): SingleVoteAmino {
    const obj: any = {};
    obj.cardId = message.cardId !== BigInt(0) ? message.cardId?.toString() : undefined;
    obj.voteType = message.voteType === 0 ? undefined : message.voteType;
    return obj;
  },
  fromAminoMsg(object: SingleVoteAminoMsg): SingleVote {
    return SingleVote.fromAmino(object.value);
  },
  fromProtoMsg(message: SingleVoteProtoMsg): SingleVote {
    return SingleVote.decode(message.value);
  },
  toProto(message: SingleVote): Uint8Array {
    return SingleVote.encode(message).finish();
  },
  toProtoMsg(message: SingleVote): SingleVoteProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.SingleVote",
      value: SingleVote.encode(message).finish()
    };
  }
};