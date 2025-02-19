//@ts-nocheck
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
export enum Response {
  Yes = 0,
  No = 1,
  Suggestion = 2,
  UNRECOGNIZED = -1,
}
export const ResponseSDKType = Response;
export const ResponseAmino = Response;
export function responseFromJSON(object: any): Response {
  switch (object) {
    case 0:
    case "Yes":
      return Response.Yes;
    case 1:
    case "No":
      return Response.No;
    case 2:
    case "Suggestion":
      return Response.Suggestion;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Response.UNRECOGNIZED;
  }
}
export function responseToJSON(object: Response): string {
  switch (object) {
    case Response.Yes:
      return "Yes";
    case Response.No:
      return "No";
    case Response.Suggestion:
      return "Suggestion";
    case Response.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum CouncelingStatus {
  councilOpen = 0,
  councilCreated = 1,
  councilClosed = 2,
  commited = 3,
  revealed = 4,
  suggestionsMade = 5,
  UNRECOGNIZED = -1,
}
export const CouncelingStatusSDKType = CouncelingStatus;
export const CouncelingStatusAmino = CouncelingStatus;
export function councelingStatusFromJSON(object: any): CouncelingStatus {
  switch (object) {
    case 0:
    case "councilOpen":
      return CouncelingStatus.councilOpen;
    case 1:
    case "councilCreated":
      return CouncelingStatus.councilCreated;
    case 2:
    case "councilClosed":
      return CouncelingStatus.councilClosed;
    case 3:
    case "commited":
      return CouncelingStatus.commited;
    case 4:
    case "revealed":
      return CouncelingStatus.revealed;
    case 5:
    case "suggestionsMade":
      return CouncelingStatus.suggestionsMade;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CouncelingStatus.UNRECOGNIZED;
  }
}
export function councelingStatusToJSON(object: CouncelingStatus): string {
  switch (object) {
    case CouncelingStatus.councilOpen:
      return "councilOpen";
    case CouncelingStatus.councilCreated:
      return "councilCreated";
    case CouncelingStatus.councilClosed:
      return "councilClosed";
    case CouncelingStatus.commited:
      return "commited";
    case CouncelingStatus.revealed:
      return "revealed";
    case CouncelingStatus.suggestionsMade:
      return "suggestionsMade";
    case CouncelingStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface Council {
  cardId: bigint;
  voters: string[];
  hashResponses: WrapHashResponse[];
  clearResponses: WrapClearResponse[];
  treasury: Coin;
  status: CouncelingStatus;
  trialStart: bigint;
}
export interface CouncilProtoMsg {
  typeUrl: "/cardchain.cardchain.Council";
  value: Uint8Array;
}
export interface CouncilAmino {
  cardId?: string;
  voters?: string[];
  hashResponses?: WrapHashResponseAmino[];
  clearResponses?: WrapClearResponseAmino[];
  treasury?: CoinAmino;
  status?: CouncelingStatus;
  trialStart?: string;
}
export interface CouncilAminoMsg {
  type: "/cardchain.cardchain.Council";
  value: CouncilAmino;
}
export interface CouncilSDKType {
  cardId: bigint;
  voters: string[];
  hashResponses: WrapHashResponseSDKType[];
  clearResponses: WrapClearResponseSDKType[];
  treasury: CoinSDKType;
  status: CouncelingStatus;
  trialStart: bigint;
}
export interface WrapClearResponse {
  user: string;
  response: Response;
  suggestion: string;
}
export interface WrapClearResponseProtoMsg {
  typeUrl: "/cardchain.cardchain.WrapClearResponse";
  value: Uint8Array;
}
export interface WrapClearResponseAmino {
  user?: string;
  response?: Response;
  suggestion?: string;
}
export interface WrapClearResponseAminoMsg {
  type: "/cardchain.cardchain.WrapClearResponse";
  value: WrapClearResponseAmino;
}
export interface WrapClearResponseSDKType {
  user: string;
  response: Response;
  suggestion: string;
}
export interface WrapHashResponse {
  user: string;
  hash: string;
}
export interface WrapHashResponseProtoMsg {
  typeUrl: "/cardchain.cardchain.WrapHashResponse";
  value: Uint8Array;
}
export interface WrapHashResponseAmino {
  user?: string;
  hash?: string;
}
export interface WrapHashResponseAminoMsg {
  type: "/cardchain.cardchain.WrapHashResponse";
  value: WrapHashResponseAmino;
}
export interface WrapHashResponseSDKType {
  user: string;
  hash: string;
}
function createBaseCouncil(): Council {
  return {
    cardId: BigInt(0),
    voters: [],
    hashResponses: [],
    clearResponses: [],
    treasury: Coin.fromPartial({}),
    status: 0,
    trialStart: BigInt(0)
  };
}
export const Council = {
  typeUrl: "/cardchain.cardchain.Council",
  encode(message: Council, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.cardId !== BigInt(0)) {
      writer.uint32(8).uint64(message.cardId);
    }
    for (const v of message.voters) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.hashResponses) {
      WrapHashResponse.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.clearResponses) {
      WrapClearResponse.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.treasury !== undefined) {
      Coin.encode(message.treasury, writer.uint32(66).fork()).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(48).int32(message.status);
    }
    if (message.trialStart !== BigInt(0)) {
      writer.uint32(56).uint64(message.trialStart);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Council {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCouncil();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cardId = reader.uint64();
          break;
        case 2:
          message.voters.push(reader.string());
          break;
        case 3:
          message.hashResponses.push(WrapHashResponse.decode(reader, reader.uint32()));
          break;
        case 4:
          message.clearResponses.push(WrapClearResponse.decode(reader, reader.uint32()));
          break;
        case 8:
          message.treasury = Coin.decode(reader, reader.uint32());
          break;
        case 6:
          message.status = reader.int32() as any;
          break;
        case 7:
          message.trialStart = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Council>): Council {
    const message = createBaseCouncil();
    message.cardId = object.cardId !== undefined && object.cardId !== null ? BigInt(object.cardId.toString()) : BigInt(0);
    message.voters = object.voters?.map(e => e) || [];
    message.hashResponses = object.hashResponses?.map(e => WrapHashResponse.fromPartial(e)) || [];
    message.clearResponses = object.clearResponses?.map(e => WrapClearResponse.fromPartial(e)) || [];
    message.treasury = object.treasury !== undefined && object.treasury !== null ? Coin.fromPartial(object.treasury) : undefined;
    message.status = object.status ?? 0;
    message.trialStart = object.trialStart !== undefined && object.trialStart !== null ? BigInt(object.trialStart.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: CouncilAmino): Council {
    const message = createBaseCouncil();
    if (object.cardId !== undefined && object.cardId !== null) {
      message.cardId = BigInt(object.cardId);
    }
    message.voters = object.voters?.map(e => e) || [];
    message.hashResponses = object.hashResponses?.map(e => WrapHashResponse.fromAmino(e)) || [];
    message.clearResponses = object.clearResponses?.map(e => WrapClearResponse.fromAmino(e)) || [];
    if (object.treasury !== undefined && object.treasury !== null) {
      message.treasury = Coin.fromAmino(object.treasury);
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.trialStart !== undefined && object.trialStart !== null) {
      message.trialStart = BigInt(object.trialStart);
    }
    return message;
  },
  toAmino(message: Council): CouncilAmino {
    const obj: any = {};
    obj.cardId = message.cardId !== BigInt(0) ? message.cardId?.toString() : undefined;
    if (message.voters) {
      obj.voters = message.voters.map(e => e);
    } else {
      obj.voters = message.voters;
    }
    if (message.hashResponses) {
      obj.hashResponses = message.hashResponses.map(e => e ? WrapHashResponse.toAmino(e) : undefined);
    } else {
      obj.hashResponses = message.hashResponses;
    }
    if (message.clearResponses) {
      obj.clearResponses = message.clearResponses.map(e => e ? WrapClearResponse.toAmino(e) : undefined);
    } else {
      obj.clearResponses = message.clearResponses;
    }
    obj.treasury = message.treasury ? Coin.toAmino(message.treasury) : undefined;
    obj.status = message.status === 0 ? undefined : message.status;
    obj.trialStart = message.trialStart !== BigInt(0) ? message.trialStart?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: CouncilAminoMsg): Council {
    return Council.fromAmino(object.value);
  },
  fromProtoMsg(message: CouncilProtoMsg): Council {
    return Council.decode(message.value);
  },
  toProto(message: Council): Uint8Array {
    return Council.encode(message).finish();
  },
  toProtoMsg(message: Council): CouncilProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.Council",
      value: Council.encode(message).finish()
    };
  }
};
function createBaseWrapClearResponse(): WrapClearResponse {
  return {
    user: "",
    response: 0,
    suggestion: ""
  };
}
export const WrapClearResponse = {
  typeUrl: "/cardchain.cardchain.WrapClearResponse",
  encode(message: WrapClearResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.user !== "") {
      writer.uint32(10).string(message.user);
    }
    if (message.response !== 0) {
      writer.uint32(16).int32(message.response);
    }
    if (message.suggestion !== "") {
      writer.uint32(26).string(message.suggestion);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): WrapClearResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWrapClearResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.user = reader.string();
          break;
        case 2:
          message.response = reader.int32() as any;
          break;
        case 3:
          message.suggestion = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<WrapClearResponse>): WrapClearResponse {
    const message = createBaseWrapClearResponse();
    message.user = object.user ?? "";
    message.response = object.response ?? 0;
    message.suggestion = object.suggestion ?? "";
    return message;
  },
  fromAmino(object: WrapClearResponseAmino): WrapClearResponse {
    const message = createBaseWrapClearResponse();
    if (object.user !== undefined && object.user !== null) {
      message.user = object.user;
    }
    if (object.response !== undefined && object.response !== null) {
      message.response = object.response;
    }
    if (object.suggestion !== undefined && object.suggestion !== null) {
      message.suggestion = object.suggestion;
    }
    return message;
  },
  toAmino(message: WrapClearResponse): WrapClearResponseAmino {
    const obj: any = {};
    obj.user = message.user === "" ? undefined : message.user;
    obj.response = message.response === 0 ? undefined : message.response;
    obj.suggestion = message.suggestion === "" ? undefined : message.suggestion;
    return obj;
  },
  fromAminoMsg(object: WrapClearResponseAminoMsg): WrapClearResponse {
    return WrapClearResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: WrapClearResponseProtoMsg): WrapClearResponse {
    return WrapClearResponse.decode(message.value);
  },
  toProto(message: WrapClearResponse): Uint8Array {
    return WrapClearResponse.encode(message).finish();
  },
  toProtoMsg(message: WrapClearResponse): WrapClearResponseProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.WrapClearResponse",
      value: WrapClearResponse.encode(message).finish()
    };
  }
};
function createBaseWrapHashResponse(): WrapHashResponse {
  return {
    user: "",
    hash: ""
  };
}
export const WrapHashResponse = {
  typeUrl: "/cardchain.cardchain.WrapHashResponse",
  encode(message: WrapHashResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.user !== "") {
      writer.uint32(10).string(message.user);
    }
    if (message.hash !== "") {
      writer.uint32(18).string(message.hash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): WrapHashResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWrapHashResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.user = reader.string();
          break;
        case 2:
          message.hash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<WrapHashResponse>): WrapHashResponse {
    const message = createBaseWrapHashResponse();
    message.user = object.user ?? "";
    message.hash = object.hash ?? "";
    return message;
  },
  fromAmino(object: WrapHashResponseAmino): WrapHashResponse {
    const message = createBaseWrapHashResponse();
    if (object.user !== undefined && object.user !== null) {
      message.user = object.user;
    }
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = object.hash;
    }
    return message;
  },
  toAmino(message: WrapHashResponse): WrapHashResponseAmino {
    const obj: any = {};
    obj.user = message.user === "" ? undefined : message.user;
    obj.hash = message.hash === "" ? undefined : message.hash;
    return obj;
  },
  fromAminoMsg(object: WrapHashResponseAminoMsg): WrapHashResponse {
    return WrapHashResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: WrapHashResponseProtoMsg): WrapHashResponse {
    return WrapHashResponse.decode(message.value);
  },
  toProto(message: WrapHashResponse): Uint8Array {
    return WrapHashResponse.encode(message).finish();
  },
  toProtoMsg(message: WrapHashResponse): WrapHashResponseProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.WrapHashResponse",
      value: WrapHashResponse.encode(message).finish()
    };
  }
};