//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
export interface Server {
  reporter: string;
  invalidReports: bigint;
  validReports: bigint;
}
export interface ServerProtoMsg {
  typeUrl: "/cardchain.cardchain.Server";
  value: Uint8Array;
}
export interface ServerAmino {
  reporter?: string;
  invalidReports?: string;
  validReports?: string;
}
export interface ServerAminoMsg {
  type: "/cardchain.cardchain.Server";
  value: ServerAmino;
}
export interface ServerSDKType {
  reporter: string;
  invalidReports: bigint;
  validReports: bigint;
}
function createBaseServer(): Server {
  return {
    reporter: "",
    invalidReports: BigInt(0),
    validReports: BigInt(0)
  };
}
export const Server = {
  typeUrl: "/cardchain.cardchain.Server",
  encode(message: Server, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.reporter !== "") {
      writer.uint32(10).string(message.reporter);
    }
    if (message.invalidReports !== BigInt(0)) {
      writer.uint32(16).uint64(message.invalidReports);
    }
    if (message.validReports !== BigInt(0)) {
      writer.uint32(24).uint64(message.validReports);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Server {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reporter = reader.string();
          break;
        case 2:
          message.invalidReports = reader.uint64();
          break;
        case 3:
          message.validReports = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Server>): Server {
    const message = createBaseServer();
    message.reporter = object.reporter ?? "";
    message.invalidReports = object.invalidReports !== undefined && object.invalidReports !== null ? BigInt(object.invalidReports.toString()) : BigInt(0);
    message.validReports = object.validReports !== undefined && object.validReports !== null ? BigInt(object.validReports.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ServerAmino): Server {
    const message = createBaseServer();
    if (object.reporter !== undefined && object.reporter !== null) {
      message.reporter = object.reporter;
    }
    if (object.invalidReports !== undefined && object.invalidReports !== null) {
      message.invalidReports = BigInt(object.invalidReports);
    }
    if (object.validReports !== undefined && object.validReports !== null) {
      message.validReports = BigInt(object.validReports);
    }
    return message;
  },
  toAmino(message: Server): ServerAmino {
    const obj: any = {};
    obj.reporter = message.reporter === "" ? undefined : message.reporter;
    obj.invalidReports = message.invalidReports !== BigInt(0) ? message.invalidReports?.toString() : undefined;
    obj.validReports = message.validReports !== BigInt(0) ? message.validReports?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ServerAminoMsg): Server {
    return Server.fromAmino(object.value);
  },
  fromProtoMsg(message: ServerProtoMsg): Server {
    return Server.decode(message.value);
  },
  toProto(message: Server): Uint8Array {
    return Server.encode(message).finish();
  },
  toProtoMsg(message: Server): ServerProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.Server",
      value: Server.encode(message).finish()
    };
  }
};