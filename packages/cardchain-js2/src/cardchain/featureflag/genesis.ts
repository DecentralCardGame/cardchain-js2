//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Flag, FlagAmino, FlagSDKType } from "./flag";
import { BinaryReader, BinaryWriter } from "../../binary";
export interface GenesisState_FlagsEntry {
  key: string;
  value?: Flag;
}
export interface GenesisState_FlagsEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
export interface GenesisState_FlagsEntryAmino {
  key?: string;
  value?: FlagAmino;
}
export interface GenesisState_FlagsEntryAminoMsg {
  type: string;
  value: GenesisState_FlagsEntryAmino;
}
export interface GenesisState_FlagsEntrySDKType {
  key: string;
  value?: FlagSDKType;
}
/** GenesisState defines the featureflag module's genesis state. */
export interface GenesisState {
  /** params defines all the parameters of the module. */
  params: Params;
  flags: {
    [key: string]: Flag;
  };
}
export interface GenesisStateProtoMsg {
  typeUrl: "/cardchain.featureflag.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the featureflag module's genesis state. */
export interface GenesisStateAmino {
  /** params defines all the parameters of the module. */
  params: ParamsAmino;
  flags?: {
    [key: string]: FlagAmino;
  };
}
export interface GenesisStateAminoMsg {
  type: "/cardchain.featureflag.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the featureflag module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  flags: {
    [key: string]: FlagSDKType;
  };
}
function createBaseGenesisState_FlagsEntry(): GenesisState_FlagsEntry {
  return {
    key: "",
    value: undefined
  };
}
export const GenesisState_FlagsEntry = {
  encode(message: GenesisState_FlagsEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Flag.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState_FlagsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState_FlagsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = Flag.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<GenesisState_FlagsEntry>): GenesisState_FlagsEntry {
    const message = createBaseGenesisState_FlagsEntry();
    message.key = object.key ?? "";
    message.value = object.value !== undefined && object.value !== null ? Flag.fromPartial(object.value) : undefined;
    return message;
  },
  fromAmino(object: GenesisState_FlagsEntryAmino): GenesisState_FlagsEntry {
    const message = createBaseGenesisState_FlagsEntry();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Flag.fromAmino(object.value);
    }
    return message;
  },
  toAmino(message: GenesisState_FlagsEntry): GenesisState_FlagsEntryAmino {
    const obj: any = {};
    obj.key = message.key === "" ? undefined : message.key;
    obj.value = message.value ? Flag.toAmino(message.value) : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisState_FlagsEntryAminoMsg): GenesisState_FlagsEntry {
    return GenesisState_FlagsEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisState_FlagsEntryProtoMsg): GenesisState_FlagsEntry {
    return GenesisState_FlagsEntry.decode(message.value);
  },
  toProto(message: GenesisState_FlagsEntry): Uint8Array {
    return GenesisState_FlagsEntry.encode(message).finish();
  }
};
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    flags: {}
  };
}
export const GenesisState = {
  typeUrl: "/cardchain.featureflag.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    Object.entries(message.flags).forEach(([key, value]) => {
      GenesisState_FlagsEntry.encode({
        key: key as any,
        value
      }, writer.uint32(18).fork()).ldelim();
    });
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
          const entry2 = GenesisState_FlagsEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.flags[entry2.key] = entry2.value;
          }
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
    message.flags = Object.entries(object.flags ?? {}).reduce<{
      [key: string]: Flag;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = Flag.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.flags = Object.entries(object.flags ?? {}).reduce<{
      [key: string]: Flag;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = Flag.fromAmino(value);
      }
      return acc;
    }, {});
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    obj.flags = {};
    if (message.flags) {
      Object.entries(message.flags).forEach(([k, v]) => {
        obj.flags[k] = Flag.toAmino(v);
      });
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
      typeUrl: "/cardchain.featureflag.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};