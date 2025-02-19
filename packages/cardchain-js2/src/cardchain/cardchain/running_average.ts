//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
export interface RunningAverage {
  arr: bigint[];
}
export interface RunningAverageProtoMsg {
  typeUrl: "/cardchain.cardchain.RunningAverage";
  value: Uint8Array;
}
export interface RunningAverageAmino {
  arr?: string[];
}
export interface RunningAverageAminoMsg {
  type: "/cardchain.cardchain.RunningAverage";
  value: RunningAverageAmino;
}
export interface RunningAverageSDKType {
  arr: bigint[];
}
function createBaseRunningAverage(): RunningAverage {
  return {
    arr: []
  };
}
export const RunningAverage = {
  typeUrl: "/cardchain.cardchain.RunningAverage",
  encode(message: RunningAverage, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.arr) {
      writer.int64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RunningAverage {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRunningAverage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.arr.push(reader.int64());
            }
          } else {
            message.arr.push(reader.int64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<RunningAverage>): RunningAverage {
    const message = createBaseRunningAverage();
    message.arr = object.arr?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object: RunningAverageAmino): RunningAverage {
    const message = createBaseRunningAverage();
    message.arr = object.arr?.map(e => BigInt(e)) || [];
    return message;
  },
  toAmino(message: RunningAverage): RunningAverageAmino {
    const obj: any = {};
    if (message.arr) {
      obj.arr = message.arr.map(e => e.toString());
    } else {
      obj.arr = message.arr;
    }
    return obj;
  },
  fromAminoMsg(object: RunningAverageAminoMsg): RunningAverage {
    return RunningAverage.fromAmino(object.value);
  },
  fromProtoMsg(message: RunningAverageProtoMsg): RunningAverage {
    return RunningAverage.decode(message.value);
  },
  toProto(message: RunningAverage): Uint8Array {
    return RunningAverage.encode(message).finish();
  },
  toProtoMsg(message: RunningAverage): RunningAverageProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.RunningAverage",
      value: RunningAverage.encode(message).finish()
    };
  }
};