//@ts-nocheck
import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as cardchainCardchainTxRegistry from "./cardchain/tx.registry";
import * as cardchainFeatureflagTxRegistry from "./featureflag/tx.registry";
import * as cardchainCardchainTxAmino from "./cardchain/tx.amino";
import * as cardchainFeatureflagTxAmino from "./featureflag/tx.amino";
export const cardchainAminoConverters = {
  ...cardchainCardchainTxAmino.AminoConverter,
  ...cardchainFeatureflagTxAmino.AminoConverter
};
export const cardchainProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...cardchainCardchainTxRegistry.registry, ...cardchainFeatureflagTxRegistry.registry];
export const getSigningCardchainClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...cardchainProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...cardchainAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningCardchainClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string | HttpEndpoint;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const {
    registry,
    aminoTypes
  } = getSigningCardchainClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: registry as any,
    aminoTypes
  });
  return client;
};