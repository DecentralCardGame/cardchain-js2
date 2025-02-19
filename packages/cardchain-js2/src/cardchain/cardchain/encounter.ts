//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
export interface Encounter_ParametersEntry {
  key: string;
  value: string;
}
export interface Encounter_ParametersEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
export interface Encounter_ParametersEntryAmino {
  key?: string;
  value?: string;
}
export interface Encounter_ParametersEntryAminoMsg {
  type: string;
  value: Encounter_ParametersEntryAmino;
}
export interface Encounter_ParametersEntrySDKType {
  key: string;
  value: string;
}
export interface Encounter {
  id: bigint;
  drawlist: bigint[];
  proven: boolean;
  owner: string;
  parameters: {
    [key: string]: string;
  };
  imageId: bigint;
  name: string;
}
export interface EncounterProtoMsg {
  typeUrl: "/cardchain.cardchain.Encounter";
  value: Uint8Array;
}
export interface EncounterAmino {
  id?: string;
  drawlist?: string[];
  proven?: boolean;
  owner?: string;
  parameters?: {
    [key: string]: string;
  };
  imageId?: string;
  name?: string;
}
export interface EncounterAminoMsg {
  type: "/cardchain.cardchain.Encounter";
  value: EncounterAmino;
}
export interface EncounterSDKType {
  id: bigint;
  drawlist: bigint[];
  proven: boolean;
  owner: string;
  parameters: {
    [key: string]: string;
  };
  imageId: bigint;
  name: string;
}
function createBaseEncounter_ParametersEntry(): Encounter_ParametersEntry {
  return {
    key: "",
    value: ""
  };
}
export const Encounter_ParametersEntry = {
  encode(message: Encounter_ParametersEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Encounter_ParametersEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEncounter_ParametersEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Encounter_ParametersEntry>): Encounter_ParametersEntry {
    const message = createBaseEncounter_ParametersEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
  fromAmino(object: Encounter_ParametersEntryAmino): Encounter_ParametersEntry {
    const message = createBaseEncounter_ParametersEntry();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
  toAmino(message: Encounter_ParametersEntry): Encounter_ParametersEntryAmino {
    const obj: any = {};
    obj.key = message.key === "" ? undefined : message.key;
    obj.value = message.value === "" ? undefined : message.value;
    return obj;
  },
  fromAminoMsg(object: Encounter_ParametersEntryAminoMsg): Encounter_ParametersEntry {
    return Encounter_ParametersEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: Encounter_ParametersEntryProtoMsg): Encounter_ParametersEntry {
    return Encounter_ParametersEntry.decode(message.value);
  },
  toProto(message: Encounter_ParametersEntry): Uint8Array {
    return Encounter_ParametersEntry.encode(message).finish();
  }
};
function createBaseEncounter(): Encounter {
  return {
    id: BigInt(0),
    drawlist: [],
    proven: false,
    owner: "",
    parameters: {},
    imageId: BigInt(0),
    name: ""
  };
}
export const Encounter = {
  typeUrl: "/cardchain.cardchain.Encounter",
  encode(message: Encounter, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    writer.uint32(18).fork();
    for (const v of message.drawlist) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.proven === true) {
      writer.uint32(24).bool(message.proven);
    }
    if (message.owner !== "") {
      writer.uint32(34).string(message.owner);
    }
    Object.entries(message.parameters).forEach(([key, value]) => {
      Encounter_ParametersEntry.encode({
        key: key as any,
        value
      }, writer.uint32(42).fork()).ldelim();
    });
    if (message.imageId !== BigInt(0)) {
      writer.uint32(48).uint64(message.imageId);
    }
    if (message.name !== "") {
      writer.uint32(58).string(message.name);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Encounter {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEncounter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.drawlist.push(reader.uint64());
            }
          } else {
            message.drawlist.push(reader.uint64());
          }
          break;
        case 3:
          message.proven = reader.bool();
          break;
        case 4:
          message.owner = reader.string();
          break;
        case 5:
          const entry5 = Encounter_ParametersEntry.decode(reader, reader.uint32());
          if (entry5.value !== undefined) {
            message.parameters[entry5.key] = entry5.value;
          }
          break;
        case 6:
          message.imageId = reader.uint64();
          break;
        case 7:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Encounter>): Encounter {
    const message = createBaseEncounter();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.drawlist = object.drawlist?.map(e => BigInt(e.toString())) || [];
    message.proven = object.proven ?? false;
    message.owner = object.owner ?? "";
    message.parameters = Object.entries(object.parameters ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.imageId = object.imageId !== undefined && object.imageId !== null ? BigInt(object.imageId.toString()) : BigInt(0);
    message.name = object.name ?? "";
    return message;
  },
  fromAmino(object: EncounterAmino): Encounter {
    const message = createBaseEncounter();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    message.drawlist = object.drawlist?.map(e => BigInt(e)) || [];
    if (object.proven !== undefined && object.proven !== null) {
      message.proven = object.proven;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    message.parameters = Object.entries(object.parameters ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    if (object.imageId !== undefined && object.imageId !== null) {
      message.imageId = BigInt(object.imageId);
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    return message;
  },
  toAmino(message: Encounter): EncounterAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    if (message.drawlist) {
      obj.drawlist = message.drawlist.map(e => e.toString());
    } else {
      obj.drawlist = message.drawlist;
    }
    obj.proven = message.proven === false ? undefined : message.proven;
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.parameters = {};
    if (message.parameters) {
      Object.entries(message.parameters).forEach(([k, v]) => {
        obj.parameters[k] = v;
      });
    }
    obj.imageId = message.imageId !== BigInt(0) ? message.imageId?.toString() : undefined;
    obj.name = message.name === "" ? undefined : message.name;
    return obj;
  },
  fromAminoMsg(object: EncounterAminoMsg): Encounter {
    return Encounter.fromAmino(object.value);
  },
  fromProtoMsg(message: EncounterProtoMsg): Encounter {
    return Encounter.decode(message.value);
  },
  toProto(message: Encounter): Uint8Array {
    return Encounter.encode(message).finish();
  },
  toProtoMsg(message: Encounter): EncounterProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.Encounter",
      value: Encounter.encode(message).finish()
    };
  }
};