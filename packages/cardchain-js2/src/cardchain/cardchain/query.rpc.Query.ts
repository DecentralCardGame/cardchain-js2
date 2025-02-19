//@ts-nocheck
import { grpc } from "@improbable-eng/grpc-web";
import { UnaryMethodDefinitionish } from "../../grpc-web";
import { DeepPartial } from "../../helpers";
import { BrowserHeaders } from "browser-headers";
import { QueryParamsRequest, QueryParamsResponse, QueryCardRequest, QueryCardResponse, QueryUserRequest, QueryUserResponse, QueryCardsRequest, QueryCardsResponse, QueryMatchRequest, QueryMatchResponse, QuerySetRequest, QuerySetResponse, QuerySellOfferRequest, QuerySellOfferResponse, QueryCouncilRequest, QueryCouncilResponse, QueryServerRequest, QueryServerResponse, QueryEncounterRequest, QueryEncounterResponse, QueryEncountersRequest, QueryEncountersResponse, QueryEncounterWithImageRequest, QueryEncounterWithImageResponse, QueryEncountersWithImageRequest, QueryEncountersWithImageResponse, QueryCardchainInfoRequest, QueryCardchainInfoResponse, QuerySetRarityDistributionRequest, QuerySetRarityDistributionResponse, QueryAccountFromZealyRequest, QueryAccountFromZealyResponse, QueryVotingResultsRequest, QueryVotingResultsResponse, QueryMatchesRequest, QueryMatchesResponse, QuerySetsRequest, QuerySetsResponse, QueryCardContentRequest, QueryCardContentResponse, QueryCardContentsRequest, QueryCardContentsResponse, QuerySellOffersRequest, QuerySellOffersResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;
  /** Queries a list of Card items. */
  card(request: DeepPartial<QueryCardRequest>, metadata?: grpc.Metadata): Promise<QueryCardResponse>;
  /** Queries a list of User items. */
  user(request: DeepPartial<QueryUserRequest>, metadata?: grpc.Metadata): Promise<QueryUserResponse>;
  /** Queries a list of Cards items. */
  cards(request: DeepPartial<QueryCardsRequest>, metadata?: grpc.Metadata): Promise<QueryCardsResponse>;
  /** Queries a list of Match items. */
  match(request: DeepPartial<QueryMatchRequest>, metadata?: grpc.Metadata): Promise<QueryMatchResponse>;
  /** Queries a list of Set items. */
  set(request: DeepPartial<QuerySetRequest>, metadata?: grpc.Metadata): Promise<QuerySetResponse>;
  /** Queries a list of SellOffer items. */
  sellOffer(request: DeepPartial<QuerySellOfferRequest>, metadata?: grpc.Metadata): Promise<QuerySellOfferResponse>;
  /** Queries a list of Council items. */
  council(request: DeepPartial<QueryCouncilRequest>, metadata?: grpc.Metadata): Promise<QueryCouncilResponse>;
  /** Queries a list of Server items. */
  server(request: DeepPartial<QueryServerRequest>, metadata?: grpc.Metadata): Promise<QueryServerResponse>;
  /** Queries a list of Encounter items. */
  encounter(request: DeepPartial<QueryEncounterRequest>, metadata?: grpc.Metadata): Promise<QueryEncounterResponse>;
  /** Queries a list of Encounters items. */
  encounters(request?: DeepPartial<QueryEncountersRequest>, metadata?: grpc.Metadata): Promise<QueryEncountersResponse>;
  /** Queries a list of EncounterWithImage items. */
  encounterWithImage(request: DeepPartial<QueryEncounterWithImageRequest>, metadata?: grpc.Metadata): Promise<QueryEncounterWithImageResponse>;
  /** Queries a list of EncountersWithImage items. */
  encountersWithImage(request?: DeepPartial<QueryEncountersWithImageRequest>, metadata?: grpc.Metadata): Promise<QueryEncountersWithImageResponse>;
  /** Queries a list of CardchainInfo items. */
  cardchainInfo(request?: DeepPartial<QueryCardchainInfoRequest>, metadata?: grpc.Metadata): Promise<QueryCardchainInfoResponse>;
  /** Queries a list of SetRarityDistribution items. */
  setRarityDistribution(request: DeepPartial<QuerySetRarityDistributionRequest>, metadata?: grpc.Metadata): Promise<QuerySetRarityDistributionResponse>;
  /** Queries a list of AccountFromZealy items. */
  accountFromZealy(request: DeepPartial<QueryAccountFromZealyRequest>, metadata?: grpc.Metadata): Promise<QueryAccountFromZealyResponse>;
  /** Queries a list of VotingResults items. */
  votingResults(request?: DeepPartial<QueryVotingResultsRequest>, metadata?: grpc.Metadata): Promise<QueryVotingResultsResponse>;
  /** Queries a list of Matches items. */
  matches(request: DeepPartial<QueryMatchesRequest>, metadata?: grpc.Metadata): Promise<QueryMatchesResponse>;
  /** Queries a list of Sets items. */
  sets(request: DeepPartial<QuerySetsRequest>, metadata?: grpc.Metadata): Promise<QuerySetsResponse>;
  /** Queries a list of CardContent items. */
  cardContent(request: DeepPartial<QueryCardContentRequest>, metadata?: grpc.Metadata): Promise<QueryCardContentResponse>;
  /** Queries a list of CardContents items. */
  cardContents(request: DeepPartial<QueryCardContentsRequest>, metadata?: grpc.Metadata): Promise<QueryCardContentsResponse>;
  /** Queries a list of SellOffers items. */
  sellOffers(request: DeepPartial<QuerySellOffersRequest>, metadata?: grpc.Metadata): Promise<QuerySellOffersResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.card = this.card.bind(this);
    this.user = this.user.bind(this);
    this.cards = this.cards.bind(this);
    this.match = this.match.bind(this);
    this.set = this.set.bind(this);
    this.sellOffer = this.sellOffer.bind(this);
    this.council = this.council.bind(this);
    this.server = this.server.bind(this);
    this.encounter = this.encounter.bind(this);
    this.encounters = this.encounters.bind(this);
    this.encounterWithImage = this.encounterWithImage.bind(this);
    this.encountersWithImage = this.encountersWithImage.bind(this);
    this.cardchainInfo = this.cardchainInfo.bind(this);
    this.setRarityDistribution = this.setRarityDistribution.bind(this);
    this.accountFromZealy = this.accountFromZealy.bind(this);
    this.votingResults = this.votingResults.bind(this);
    this.matches = this.matches.bind(this);
    this.sets = this.sets.bind(this);
    this.cardContent = this.cardContent.bind(this);
    this.cardContents = this.cardContents.bind(this);
    this.sellOffers = this.sellOffers.bind(this);
  }
  params(request: DeepPartial<QueryParamsRequest> = {}, metadata?: grpc.Metadata): Promise<QueryParamsResponse> {
    return this.rpc.unary(QueryParamsDesc, QueryParamsRequest.fromPartial(request), metadata);
  }
  card(request: DeepPartial<QueryCardRequest>, metadata?: grpc.Metadata): Promise<QueryCardResponse> {
    return this.rpc.unary(QueryCardDesc, QueryCardRequest.fromPartial(request), metadata);
  }
  user(request: DeepPartial<QueryUserRequest>, metadata?: grpc.Metadata): Promise<QueryUserResponse> {
    return this.rpc.unary(QueryUserDesc, QueryUserRequest.fromPartial(request), metadata);
  }
  cards(request: DeepPartial<QueryCardsRequest>, metadata?: grpc.Metadata): Promise<QueryCardsResponse> {
    return this.rpc.unary(QueryCardsDesc, QueryCardsRequest.fromPartial(request), metadata);
  }
  match(request: DeepPartial<QueryMatchRequest>, metadata?: grpc.Metadata): Promise<QueryMatchResponse> {
    return this.rpc.unary(QueryMatchDesc, QueryMatchRequest.fromPartial(request), metadata);
  }
  set(request: DeepPartial<QuerySetRequest>, metadata?: grpc.Metadata): Promise<QuerySetResponse> {
    return this.rpc.unary(QuerySetDesc, QuerySetRequest.fromPartial(request), metadata);
  }
  sellOffer(request: DeepPartial<QuerySellOfferRequest>, metadata?: grpc.Metadata): Promise<QuerySellOfferResponse> {
    return this.rpc.unary(QuerySellOfferDesc, QuerySellOfferRequest.fromPartial(request), metadata);
  }
  council(request: DeepPartial<QueryCouncilRequest>, metadata?: grpc.Metadata): Promise<QueryCouncilResponse> {
    return this.rpc.unary(QueryCouncilDesc, QueryCouncilRequest.fromPartial(request), metadata);
  }
  server(request: DeepPartial<QueryServerRequest>, metadata?: grpc.Metadata): Promise<QueryServerResponse> {
    return this.rpc.unary(QueryServerDesc, QueryServerRequest.fromPartial(request), metadata);
  }
  encounter(request: DeepPartial<QueryEncounterRequest>, metadata?: grpc.Metadata): Promise<QueryEncounterResponse> {
    return this.rpc.unary(QueryEncounterDesc, QueryEncounterRequest.fromPartial(request), metadata);
  }
  encounters(request: DeepPartial<QueryEncountersRequest> = {}, metadata?: grpc.Metadata): Promise<QueryEncountersResponse> {
    return this.rpc.unary(QueryEncountersDesc, QueryEncountersRequest.fromPartial(request), metadata);
  }
  encounterWithImage(request: DeepPartial<QueryEncounterWithImageRequest>, metadata?: grpc.Metadata): Promise<QueryEncounterWithImageResponse> {
    return this.rpc.unary(QueryEncounterWithImageDesc, QueryEncounterWithImageRequest.fromPartial(request), metadata);
  }
  encountersWithImage(request: DeepPartial<QueryEncountersWithImageRequest> = {}, metadata?: grpc.Metadata): Promise<QueryEncountersWithImageResponse> {
    return this.rpc.unary(QueryEncountersWithImageDesc, QueryEncountersWithImageRequest.fromPartial(request), metadata);
  }
  cardchainInfo(request: DeepPartial<QueryCardchainInfoRequest> = {}, metadata?: grpc.Metadata): Promise<QueryCardchainInfoResponse> {
    return this.rpc.unary(QueryCardchainInfoDesc, QueryCardchainInfoRequest.fromPartial(request), metadata);
  }
  setRarityDistribution(request: DeepPartial<QuerySetRarityDistributionRequest>, metadata?: grpc.Metadata): Promise<QuerySetRarityDistributionResponse> {
    return this.rpc.unary(QuerySetRarityDistributionDesc, QuerySetRarityDistributionRequest.fromPartial(request), metadata);
  }
  accountFromZealy(request: DeepPartial<QueryAccountFromZealyRequest>, metadata?: grpc.Metadata): Promise<QueryAccountFromZealyResponse> {
    return this.rpc.unary(QueryAccountFromZealyDesc, QueryAccountFromZealyRequest.fromPartial(request), metadata);
  }
  votingResults(request: DeepPartial<QueryVotingResultsRequest> = {}, metadata?: grpc.Metadata): Promise<QueryVotingResultsResponse> {
    return this.rpc.unary(QueryVotingResultsDesc, QueryVotingResultsRequest.fromPartial(request), metadata);
  }
  matches(request: DeepPartial<QueryMatchesRequest>, metadata?: grpc.Metadata): Promise<QueryMatchesResponse> {
    return this.rpc.unary(QueryMatchesDesc, QueryMatchesRequest.fromPartial(request), metadata);
  }
  sets(request: DeepPartial<QuerySetsRequest>, metadata?: grpc.Metadata): Promise<QuerySetsResponse> {
    return this.rpc.unary(QuerySetsDesc, QuerySetsRequest.fromPartial(request), metadata);
  }
  cardContent(request: DeepPartial<QueryCardContentRequest>, metadata?: grpc.Metadata): Promise<QueryCardContentResponse> {
    return this.rpc.unary(QueryCardContentDesc, QueryCardContentRequest.fromPartial(request), metadata);
  }
  cardContents(request: DeepPartial<QueryCardContentsRequest>, metadata?: grpc.Metadata): Promise<QueryCardContentsResponse> {
    return this.rpc.unary(QueryCardContentsDesc, QueryCardContentsRequest.fromPartial(request), metadata);
  }
  sellOffers(request: DeepPartial<QuerySellOffersRequest>, metadata?: grpc.Metadata): Promise<QuerySellOffersResponse> {
    return this.rpc.unary(QuerySellOffersDesc, QuerySellOffersRequest.fromPartial(request), metadata);
  }
}
export const QueryDesc = {
  serviceName: "cardchain.cardchain.Query"
};
export const QueryParamsDesc: UnaryMethodDefinitionish = {
  methodName: "Params",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryParamsRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryParamsResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QueryCardDesc: UnaryMethodDefinitionish = {
  methodName: "Card",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryCardRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryCardResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QueryUserDesc: UnaryMethodDefinitionish = {
  methodName: "User",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryUserRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryUserResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QueryCardsDesc: UnaryMethodDefinitionish = {
  methodName: "Cards",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryCardsRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryCardsResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QueryMatchDesc: UnaryMethodDefinitionish = {
  methodName: "Match",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryMatchRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryMatchResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QuerySetDesc: UnaryMethodDefinitionish = {
  methodName: "Set",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QuerySetRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QuerySetResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QuerySellOfferDesc: UnaryMethodDefinitionish = {
  methodName: "SellOffer",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QuerySellOfferRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QuerySellOfferResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QueryCouncilDesc: UnaryMethodDefinitionish = {
  methodName: "Council",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryCouncilRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryCouncilResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QueryServerDesc: UnaryMethodDefinitionish = {
  methodName: "Server",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryServerRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryServerResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QueryEncounterDesc: UnaryMethodDefinitionish = {
  methodName: "Encounter",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryEncounterRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryEncounterResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QueryEncountersDesc: UnaryMethodDefinitionish = {
  methodName: "Encounters",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryEncountersRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryEncountersResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QueryEncounterWithImageDesc: UnaryMethodDefinitionish = {
  methodName: "EncounterWithImage",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryEncounterWithImageRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryEncounterWithImageResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QueryEncountersWithImageDesc: UnaryMethodDefinitionish = {
  methodName: "EncountersWithImage",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryEncountersWithImageRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryEncountersWithImageResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QueryCardchainInfoDesc: UnaryMethodDefinitionish = {
  methodName: "CardchainInfo",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryCardchainInfoRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryCardchainInfoResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QuerySetRarityDistributionDesc: UnaryMethodDefinitionish = {
  methodName: "SetRarityDistribution",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QuerySetRarityDistributionRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QuerySetRarityDistributionResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QueryAccountFromZealyDesc: UnaryMethodDefinitionish = {
  methodName: "AccountFromZealy",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryAccountFromZealyRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAccountFromZealyResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QueryVotingResultsDesc: UnaryMethodDefinitionish = {
  methodName: "VotingResults",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryVotingResultsRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryVotingResultsResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QueryMatchesDesc: UnaryMethodDefinitionish = {
  methodName: "Matches",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryMatchesRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryMatchesResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QuerySetsDesc: UnaryMethodDefinitionish = {
  methodName: "Sets",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QuerySetsRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QuerySetsResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QueryCardContentDesc: UnaryMethodDefinitionish = {
  methodName: "CardContent",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryCardContentRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryCardContentResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QueryCardContentsDesc: UnaryMethodDefinitionish = {
  methodName: "CardContents",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryCardContentsRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryCardContentsResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QuerySellOffersDesc: UnaryMethodDefinitionish = {
  methodName: "SellOffers",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QuerySellOffersRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QuerySellOffersResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export interface Rpc {
  unary<T extends UnaryMethodDefinitionish>(methodDesc: T, request: any, metadata: grpc.Metadata | undefined): Promise<any>;
}
export class GrpcWebImpl {
  host: string;
  options: {
    transport?: grpc.TransportFactory;
    debug?: boolean;
    metadata?: grpc.Metadata;
  };
  constructor(host: string, options: {
    transport?: grpc.TransportFactory;
    debug?: boolean;
    metadata?: grpc.Metadata;
  }) {
    this.host = host;
    this.options = options;
  }
  unary<T extends UnaryMethodDefinitionish>(methodDesc: T, _request: any, metadata: grpc.Metadata | undefined) {
    const request = {
      ..._request,
      ...methodDesc.requestType
    };
    const maybeCombinedMetadata = metadata && this.options.metadata ? new BrowserHeaders({
      ...this.options?.metadata.headersMap,
      ...metadata?.headersMap
    }) : metadata || this.options.metadata;
    return new Promise((resolve, reject) => {
      grpc.unary(methodDesc, {
        request,
        host: this.host,
        metadata: maybeCombinedMetadata,
        transport: this.options.transport,
        debug: this.options.debug,
        onEnd: function (response) {
          if (response.status === grpc.Code.OK) {
            resolve(response.message);
          } else {
            const err = new Error(response.statusMessage) as any;
            err.code = response.status;
            err.metadata = response.trailers;
            reject(err);
          }
        }
      });
    });
  }
}