//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryReader, BinaryWriter } from "../../binary";
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParams {
  /**
   * authority is the address that controls the module (defaults to x/gov unless
   * overwritten).
   */
  authority: string;
  /** NOTE: All parameters must be supplied. */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/cardchain.featureflag.MsgUpdateParams";
  value: Uint8Array;
}
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParamsAmino {
  /**
   * authority is the address that controls the module (defaults to x/gov unless
   * overwritten).
   */
  authority?: string;
  /** NOTE: All parameters must be supplied. */
  params: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "cardchain/x/featureflag/MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParamsSDKType {
  authority: string;
  params: ParamsSDKType;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/cardchain.featureflag.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/cardchain.featureflag.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponseSDKType {}
export interface MsgSet {
  authority: string;
  module: string;
  name: string;
  value: boolean;
}
export interface MsgSetProtoMsg {
  typeUrl: "/cardchain.featureflag.MsgSet";
  value: Uint8Array;
}
export interface MsgSetAmino {
  authority?: string;
  module?: string;
  name?: string;
  value?: boolean;
}
export interface MsgSetAminoMsg {
  type: "/cardchain.featureflag.MsgSet";
  value: MsgSetAmino;
}
export interface MsgSetSDKType {
  authority: string;
  module: string;
  name: string;
  value: boolean;
}
export interface MsgSetResponse {}
export interface MsgSetResponseProtoMsg {
  typeUrl: "/cardchain.featureflag.MsgSetResponse";
  value: Uint8Array;
}
export interface MsgSetResponseAmino {}
export interface MsgSetResponseAminoMsg {
  type: "/cardchain.featureflag.MsgSetResponse";
  value: MsgSetResponseAmino;
}
export interface MsgSetResponseSDKType {}
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: "/cardchain.featureflag.MsgUpdateParams",
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg {
    return {
      type: "cardchain/x/featureflag/MsgUpdateParams",
      value: MsgUpdateParams.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/cardchain.featureflag.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/cardchain.featureflag.MsgUpdateParamsResponse",
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
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
  fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/cardchain.featureflag.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSet(): MsgSet {
  return {
    authority: "",
    module: "",
    name: "",
    value: false
  };
}
export const MsgSet = {
  typeUrl: "/cardchain.featureflag.MsgSet",
  encode(message: MsgSet, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.module !== "") {
      writer.uint32(18).string(message.module);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.value === true) {
      writer.uint32(32).bool(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSet {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.module = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.value = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSet>): MsgSet {
    const message = createBaseMsgSet();
    message.authority = object.authority ?? "";
    message.module = object.module ?? "";
    message.name = object.name ?? "";
    message.value = object.value ?? false;
    return message;
  },
  fromAmino(object: MsgSetAmino): MsgSet {
    const message = createBaseMsgSet();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.module !== undefined && object.module !== null) {
      message.module = object.module;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
  toAmino(message: MsgSet): MsgSetAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.module = message.module === "" ? undefined : message.module;
    obj.name = message.name === "" ? undefined : message.name;
    obj.value = message.value === false ? undefined : message.value;
    return obj;
  },
  fromAminoMsg(object: MsgSetAminoMsg): MsgSet {
    return MsgSet.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetProtoMsg): MsgSet {
    return MsgSet.decode(message.value);
  },
  toProto(message: MsgSet): Uint8Array {
    return MsgSet.encode(message).finish();
  },
  toProtoMsg(message: MsgSet): MsgSetProtoMsg {
    return {
      typeUrl: "/cardchain.featureflag.MsgSet",
      value: MsgSet.encode(message).finish()
    };
  }
};
function createBaseMsgSetResponse(): MsgSetResponse {
  return {};
}
export const MsgSetResponse = {
  typeUrl: "/cardchain.featureflag.MsgSetResponse",
  encode(_: MsgSetResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetResponse();
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
  fromPartial(_: Partial<MsgSetResponse>): MsgSetResponse {
    const message = createBaseMsgSetResponse();
    return message;
  },
  fromAmino(_: MsgSetResponseAmino): MsgSetResponse {
    const message = createBaseMsgSetResponse();
    return message;
  },
  toAmino(_: MsgSetResponse): MsgSetResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetResponseAminoMsg): MsgSetResponse {
    return MsgSetResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetResponseProtoMsg): MsgSetResponse {
    return MsgSetResponse.decode(message.value);
  },
  toProto(message: MsgSetResponse): Uint8Array {
    return MsgSetResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetResponse): MsgSetResponseProtoMsg {
    return {
      typeUrl: "/cardchain.featureflag.MsgSetResponse",
      value: MsgSetResponse.encode(message).finish()
    };
  }
};