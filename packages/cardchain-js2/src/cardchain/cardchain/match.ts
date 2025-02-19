//@ts-nocheck
import { SingleVote, SingleVoteAmino, SingleVoteSDKType } from "./voting";
import { BinaryReader, BinaryWriter } from "../../binary";
export enum Outcome {
  Undefined = 0,
  AWon = 1,
  BWon = 2,
  Draw = 3,
  Aborted = 4,
  UNRECOGNIZED = -1,
}
export const OutcomeSDKType = Outcome;
export const OutcomeAmino = Outcome;
export function outcomeFromJSON(object: any): Outcome {
  switch (object) {
    case 0:
    case "Undefined":
      return Outcome.Undefined;
    case 1:
    case "AWon":
      return Outcome.AWon;
    case 2:
    case "BWon":
      return Outcome.BWon;
    case 3:
    case "Draw":
      return Outcome.Draw;
    case 4:
    case "Aborted":
      return Outcome.Aborted;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Outcome.UNRECOGNIZED;
  }
}
export function outcomeToJSON(object: Outcome): string {
  switch (object) {
    case Outcome.Undefined:
      return "Undefined";
    case Outcome.AWon:
      return "AWon";
    case Outcome.BWon:
      return "BWon";
    case Outcome.Draw:
      return "Draw";
    case Outcome.Aborted:
      return "Aborted";
    case Outcome.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface Match {
  timestamp: bigint;
  reporter: string;
  playerA?: MatchPlayer;
  playerB?: MatchPlayer;
  outcome: Outcome;
  coinsDistributed: boolean;
  serverConfirmed: boolean;
}
export interface MatchProtoMsg {
  typeUrl: "/cardchain.cardchain.Match";
  value: Uint8Array;
}
export interface MatchAmino {
  timestamp?: string;
  reporter?: string;
  playerA?: MatchPlayerAmino;
  playerB?: MatchPlayerAmino;
  outcome?: Outcome;
  coinsDistributed?: boolean;
  serverConfirmed?: boolean;
}
export interface MatchAminoMsg {
  type: "/cardchain.cardchain.Match";
  value: MatchAmino;
}
export interface MatchSDKType {
  timestamp: bigint;
  reporter: string;
  playerA?: MatchPlayerSDKType;
  playerB?: MatchPlayerSDKType;
  outcome: Outcome;
  coinsDistributed: boolean;
  serverConfirmed: boolean;
}
export interface MatchPlayer {
  addr: string;
  playedCards: bigint[];
  confirmed: boolean;
  outcome: Outcome;
  deck: bigint[];
  votedCards: SingleVote[];
}
export interface MatchPlayerProtoMsg {
  typeUrl: "/cardchain.cardchain.MatchPlayer";
  value: Uint8Array;
}
export interface MatchPlayerAmino {
  addr?: string;
  playedCards?: string[];
  confirmed?: boolean;
  outcome?: Outcome;
  deck?: string[];
  votedCards?: SingleVoteAmino[];
}
export interface MatchPlayerAminoMsg {
  type: "/cardchain.cardchain.MatchPlayer";
  value: MatchPlayerAmino;
}
export interface MatchPlayerSDKType {
  addr: string;
  playedCards: bigint[];
  confirmed: boolean;
  outcome: Outcome;
  deck: bigint[];
  votedCards: SingleVoteSDKType[];
}
function createBaseMatch(): Match {
  return {
    timestamp: BigInt(0),
    reporter: "",
    playerA: undefined,
    playerB: undefined,
    outcome: 0,
    coinsDistributed: false,
    serverConfirmed: false
  };
}
export const Match = {
  typeUrl: "/cardchain.cardchain.Match",
  encode(message: Match, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.timestamp !== BigInt(0)) {
      writer.uint32(8).uint64(message.timestamp);
    }
    if (message.reporter !== "") {
      writer.uint32(18).string(message.reporter);
    }
    if (message.playerA !== undefined) {
      MatchPlayer.encode(message.playerA, writer.uint32(26).fork()).ldelim();
    }
    if (message.playerB !== undefined) {
      MatchPlayer.encode(message.playerB, writer.uint32(34).fork()).ldelim();
    }
    if (message.outcome !== 0) {
      writer.uint32(56).int32(message.outcome);
    }
    if (message.coinsDistributed === true) {
      writer.uint32(80).bool(message.coinsDistributed);
    }
    if (message.serverConfirmed === true) {
      writer.uint32(64).bool(message.serverConfirmed);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Match {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMatch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timestamp = reader.uint64();
          break;
        case 2:
          message.reporter = reader.string();
          break;
        case 3:
          message.playerA = MatchPlayer.decode(reader, reader.uint32());
          break;
        case 4:
          message.playerB = MatchPlayer.decode(reader, reader.uint32());
          break;
        case 7:
          message.outcome = reader.int32() as any;
          break;
        case 10:
          message.coinsDistributed = reader.bool();
          break;
        case 8:
          message.serverConfirmed = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Match>): Match {
    const message = createBaseMatch();
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? BigInt(object.timestamp.toString()) : BigInt(0);
    message.reporter = object.reporter ?? "";
    message.playerA = object.playerA !== undefined && object.playerA !== null ? MatchPlayer.fromPartial(object.playerA) : undefined;
    message.playerB = object.playerB !== undefined && object.playerB !== null ? MatchPlayer.fromPartial(object.playerB) : undefined;
    message.outcome = object.outcome ?? 0;
    message.coinsDistributed = object.coinsDistributed ?? false;
    message.serverConfirmed = object.serverConfirmed ?? false;
    return message;
  },
  fromAmino(object: MatchAmino): Match {
    const message = createBaseMatch();
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = BigInt(object.timestamp);
    }
    if (object.reporter !== undefined && object.reporter !== null) {
      message.reporter = object.reporter;
    }
    if (object.playerA !== undefined && object.playerA !== null) {
      message.playerA = MatchPlayer.fromAmino(object.playerA);
    }
    if (object.playerB !== undefined && object.playerB !== null) {
      message.playerB = MatchPlayer.fromAmino(object.playerB);
    }
    if (object.outcome !== undefined && object.outcome !== null) {
      message.outcome = object.outcome;
    }
    if (object.coinsDistributed !== undefined && object.coinsDistributed !== null) {
      message.coinsDistributed = object.coinsDistributed;
    }
    if (object.serverConfirmed !== undefined && object.serverConfirmed !== null) {
      message.serverConfirmed = object.serverConfirmed;
    }
    return message;
  },
  toAmino(message: Match): MatchAmino {
    const obj: any = {};
    obj.timestamp = message.timestamp !== BigInt(0) ? message.timestamp?.toString() : undefined;
    obj.reporter = message.reporter === "" ? undefined : message.reporter;
    obj.playerA = message.playerA ? MatchPlayer.toAmino(message.playerA) : undefined;
    obj.playerB = message.playerB ? MatchPlayer.toAmino(message.playerB) : undefined;
    obj.outcome = message.outcome === 0 ? undefined : message.outcome;
    obj.coinsDistributed = message.coinsDistributed === false ? undefined : message.coinsDistributed;
    obj.serverConfirmed = message.serverConfirmed === false ? undefined : message.serverConfirmed;
    return obj;
  },
  fromAminoMsg(object: MatchAminoMsg): Match {
    return Match.fromAmino(object.value);
  },
  fromProtoMsg(message: MatchProtoMsg): Match {
    return Match.decode(message.value);
  },
  toProto(message: Match): Uint8Array {
    return Match.encode(message).finish();
  },
  toProtoMsg(message: Match): MatchProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.Match",
      value: Match.encode(message).finish()
    };
  }
};
function createBaseMatchPlayer(): MatchPlayer {
  return {
    addr: "",
    playedCards: [],
    confirmed: false,
    outcome: 0,
    deck: [],
    votedCards: []
  };
}
export const MatchPlayer = {
  typeUrl: "/cardchain.cardchain.MatchPlayer",
  encode(message: MatchPlayer, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.addr !== "") {
      writer.uint32(10).string(message.addr);
    }
    writer.uint32(18).fork();
    for (const v of message.playedCards) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.confirmed === true) {
      writer.uint32(24).bool(message.confirmed);
    }
    if (message.outcome !== 0) {
      writer.uint32(32).int32(message.outcome);
    }
    writer.uint32(42).fork();
    for (const v of message.deck) {
      writer.uint64(v);
    }
    writer.ldelim();
    for (const v of message.votedCards) {
      SingleVote.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MatchPlayer {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMatchPlayer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addr = reader.string();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.playedCards.push(reader.uint64());
            }
          } else {
            message.playedCards.push(reader.uint64());
          }
          break;
        case 3:
          message.confirmed = reader.bool();
          break;
        case 4:
          message.outcome = reader.int32() as any;
          break;
        case 5:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.deck.push(reader.uint64());
            }
          } else {
            message.deck.push(reader.uint64());
          }
          break;
        case 6:
          message.votedCards.push(SingleVote.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MatchPlayer>): MatchPlayer {
    const message = createBaseMatchPlayer();
    message.addr = object.addr ?? "";
    message.playedCards = object.playedCards?.map(e => BigInt(e.toString())) || [];
    message.confirmed = object.confirmed ?? false;
    message.outcome = object.outcome ?? 0;
    message.deck = object.deck?.map(e => BigInt(e.toString())) || [];
    message.votedCards = object.votedCards?.map(e => SingleVote.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MatchPlayerAmino): MatchPlayer {
    const message = createBaseMatchPlayer();
    if (object.addr !== undefined && object.addr !== null) {
      message.addr = object.addr;
    }
    message.playedCards = object.playedCards?.map(e => BigInt(e)) || [];
    if (object.confirmed !== undefined && object.confirmed !== null) {
      message.confirmed = object.confirmed;
    }
    if (object.outcome !== undefined && object.outcome !== null) {
      message.outcome = object.outcome;
    }
    message.deck = object.deck?.map(e => BigInt(e)) || [];
    message.votedCards = object.votedCards?.map(e => SingleVote.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MatchPlayer): MatchPlayerAmino {
    const obj: any = {};
    obj.addr = message.addr === "" ? undefined : message.addr;
    if (message.playedCards) {
      obj.playedCards = message.playedCards.map(e => e.toString());
    } else {
      obj.playedCards = message.playedCards;
    }
    obj.confirmed = message.confirmed === false ? undefined : message.confirmed;
    obj.outcome = message.outcome === 0 ? undefined : message.outcome;
    if (message.deck) {
      obj.deck = message.deck.map(e => e.toString());
    } else {
      obj.deck = message.deck;
    }
    if (message.votedCards) {
      obj.votedCards = message.votedCards.map(e => e ? SingleVote.toAmino(e) : undefined);
    } else {
      obj.votedCards = message.votedCards;
    }
    return obj;
  },
  fromAminoMsg(object: MatchPlayerAminoMsg): MatchPlayer {
    return MatchPlayer.fromAmino(object.value);
  },
  fromProtoMsg(message: MatchPlayerProtoMsg): MatchPlayer {
    return MatchPlayer.decode(message.value);
  },
  toProto(message: MatchPlayer): Uint8Array {
    return MatchPlayer.encode(message).finish();
  },
  toProtoMsg(message: MatchPlayer): MatchPlayerProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.MatchPlayer",
      value: MatchPlayer.encode(message).finish()
    };
  }
};