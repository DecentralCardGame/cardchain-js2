//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Flag, FlagAmino, FlagSDKType } from "./flag";
import { BinaryReader, BinaryWriter } from "../../binary";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/cardchain.featureflag.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/cardchain.featureflag.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/cardchain.featureflag.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params holds all the parameters of this module. */
  params: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/cardchain.featureflag.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
export interface QueryFlagRequest {
  module: string;
  name: string;
}
export interface QueryFlagRequestProtoMsg {
  typeUrl: "/cardchain.featureflag.QueryFlagRequest";
  value: Uint8Array;
}
export interface QueryFlagRequestAmino {
  module?: string;
  name?: string;
}
export interface QueryFlagRequestAminoMsg {
  type: "/cardchain.featureflag.QueryFlagRequest";
  value: QueryFlagRequestAmino;
}
export interface QueryFlagRequestSDKType {
  module: string;
  name: string;
}
export interface QueryFlagResponse {
  flag?: Flag;
}
export interface QueryFlagResponseProtoMsg {
  typeUrl: "/cardchain.featureflag.QueryFlagResponse";
  value: Uint8Array;
}
export interface QueryFlagResponseAmino {
  flag?: FlagAmino;
}
export interface QueryFlagResponseAminoMsg {
  type: "/cardchain.featureflag.QueryFlagResponse";
  value: QueryFlagResponseAmino;
}
export interface QueryFlagResponseSDKType {
  flag?: FlagSDKType;
}
export interface QueryFlagsRequest {}
export interface QueryFlagsRequestProtoMsg {
  typeUrl: "/cardchain.featureflag.QueryFlagsRequest";
  value: Uint8Array;
}
export interface QueryFlagsRequestAmino {}
export interface QueryFlagsRequestAminoMsg {
  type: "/cardchain.featureflag.QueryFlagsRequest";
  value: QueryFlagsRequestAmino;
}
export interface QueryFlagsRequestSDKType {}
export interface QueryFlagsResponse {
  flags: Flag[];
}
export interface QueryFlagsResponseProtoMsg {
  typeUrl: "/cardchain.featureflag.QueryFlagsResponse";
  value: Uint8Array;
}
export interface QueryFlagsResponseAmino {
  flags?: FlagAmino[];
}
export interface QueryFlagsResponseAminoMsg {
  type: "/cardchain.featureflag.QueryFlagsResponse";
  value: QueryFlagsResponseAmino;
}
export interface QueryFlagsResponseSDKType {
  flags: FlagSDKType[];
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/cardchain.featureflag.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/cardchain.featureflag.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/cardchain.featureflag.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/cardchain.featureflag.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryFlagRequest(): QueryFlagRequest {
  return {
    module: "",
    name: ""
  };
}
export const QueryFlagRequest = {
  typeUrl: "/cardchain.featureflag.QueryFlagRequest",
  encode(message: QueryFlagRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.module !== "") {
      writer.uint32(10).string(message.module);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFlagRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFlagRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.module = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryFlagRequest>): QueryFlagRequest {
    const message = createBaseQueryFlagRequest();
    message.module = object.module ?? "";
    message.name = object.name ?? "";
    return message;
  },
  fromAmino(object: QueryFlagRequestAmino): QueryFlagRequest {
    const message = createBaseQueryFlagRequest();
    if (object.module !== undefined && object.module !== null) {
      message.module = object.module;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    return message;
  },
  toAmino(message: QueryFlagRequest): QueryFlagRequestAmino {
    const obj: any = {};
    obj.module = message.module === "" ? undefined : message.module;
    obj.name = message.name === "" ? undefined : message.name;
    return obj;
  },
  fromAminoMsg(object: QueryFlagRequestAminoMsg): QueryFlagRequest {
    return QueryFlagRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFlagRequestProtoMsg): QueryFlagRequest {
    return QueryFlagRequest.decode(message.value);
  },
  toProto(message: QueryFlagRequest): Uint8Array {
    return QueryFlagRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryFlagRequest): QueryFlagRequestProtoMsg {
    return {
      typeUrl: "/cardchain.featureflag.QueryFlagRequest",
      value: QueryFlagRequest.encode(message).finish()
    };
  }
};
function createBaseQueryFlagResponse(): QueryFlagResponse {
  return {
    flag: undefined
  };
}
export const QueryFlagResponse = {
  typeUrl: "/cardchain.featureflag.QueryFlagResponse",
  encode(message: QueryFlagResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.flag !== undefined) {
      Flag.encode(message.flag, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFlagResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFlagResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.flag = Flag.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryFlagResponse>): QueryFlagResponse {
    const message = createBaseQueryFlagResponse();
    message.flag = object.flag !== undefined && object.flag !== null ? Flag.fromPartial(object.flag) : undefined;
    return message;
  },
  fromAmino(object: QueryFlagResponseAmino): QueryFlagResponse {
    const message = createBaseQueryFlagResponse();
    if (object.flag !== undefined && object.flag !== null) {
      message.flag = Flag.fromAmino(object.flag);
    }
    return message;
  },
  toAmino(message: QueryFlagResponse): QueryFlagResponseAmino {
    const obj: any = {};
    obj.flag = message.flag ? Flag.toAmino(message.flag) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryFlagResponseAminoMsg): QueryFlagResponse {
    return QueryFlagResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFlagResponseProtoMsg): QueryFlagResponse {
    return QueryFlagResponse.decode(message.value);
  },
  toProto(message: QueryFlagResponse): Uint8Array {
    return QueryFlagResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryFlagResponse): QueryFlagResponseProtoMsg {
    return {
      typeUrl: "/cardchain.featureflag.QueryFlagResponse",
      value: QueryFlagResponse.encode(message).finish()
    };
  }
};
function createBaseQueryFlagsRequest(): QueryFlagsRequest {
  return {};
}
export const QueryFlagsRequest = {
  typeUrl: "/cardchain.featureflag.QueryFlagsRequest",
  encode(_: QueryFlagsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFlagsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFlagsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<QueryFlagsRequest>): QueryFlagsRequest {
    const message = createBaseQueryFlagsRequest();
    return message;
  },
  fromAmino(_: QueryFlagsRequestAmino): QueryFlagsRequest {
    const message = createBaseQueryFlagsRequest();
    return message;
  },
  toAmino(_: QueryFlagsRequest): QueryFlagsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryFlagsRequestAminoMsg): QueryFlagsRequest {
    return QueryFlagsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFlagsRequestProtoMsg): QueryFlagsRequest {
    return QueryFlagsRequest.decode(message.value);
  },
  toProto(message: QueryFlagsRequest): Uint8Array {
    return QueryFlagsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryFlagsRequest): QueryFlagsRequestProtoMsg {
    return {
      typeUrl: "/cardchain.featureflag.QueryFlagsRequest",
      value: QueryFlagsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryFlagsResponse(): QueryFlagsResponse {
  return {
    flags: []
  };
}
export const QueryFlagsResponse = {
  typeUrl: "/cardchain.featureflag.QueryFlagsResponse",
  encode(message: QueryFlagsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.flags) {
      Flag.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFlagsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFlagsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.flags.push(Flag.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryFlagsResponse>): QueryFlagsResponse {
    const message = createBaseQueryFlagsResponse();
    message.flags = object.flags?.map(e => Flag.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryFlagsResponseAmino): QueryFlagsResponse {
    const message = createBaseQueryFlagsResponse();
    message.flags = object.flags?.map(e => Flag.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryFlagsResponse): QueryFlagsResponseAmino {
    const obj: any = {};
    if (message.flags) {
      obj.flags = message.flags.map(e => e ? Flag.toAmino(e) : undefined);
    } else {
      obj.flags = message.flags;
    }
    return obj;
  },
  fromAminoMsg(object: QueryFlagsResponseAminoMsg): QueryFlagsResponse {
    return QueryFlagsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFlagsResponseProtoMsg): QueryFlagsResponse {
    return QueryFlagsResponse.decode(message.value);
  },
  toProto(message: QueryFlagsResponse): Uint8Array {
    return QueryFlagsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryFlagsResponse): QueryFlagsResponseProtoMsg {
    return {
      typeUrl: "/cardchain.featureflag.QueryFlagsResponse",
      value: QueryFlagsResponse.encode(message).finish()
    };
  }
};