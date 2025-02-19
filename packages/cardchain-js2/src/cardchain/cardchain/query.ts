//@ts-nocheck
import { CardStatus, CardType, CardClass, CardRarity } from "./card";
import { Outcome, Match, MatchAmino, MatchSDKType } from "./match";
import { SetStatus } from "./set";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { SellOfferStatus, SellOffer, SellOfferAmino, SellOfferSDKType } from "./sell_offer";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { CardWithImage, CardWithImageAmino, CardWithImageSDKType } from "./card_with_image";
import { User, UserAmino, UserSDKType } from "./user";
import { SetWithArtwork, SetWithArtworkAmino, SetWithArtworkSDKType } from "./set_with_artwork";
import { Council, CouncilAmino, CouncilSDKType } from "./council";
import { Server, ServerAmino, ServerSDKType } from "./server";
import { Encounter, EncounterAmino, EncounterSDKType } from "./encounter";
import { EncounterWithImage, EncounterWithImageAmino, EncounterWithImageSDKType } from "./encounter_with_image";
import { VotingResults, VotingResultsAmino, VotingResultsSDKType } from "./voting_results";
import { CardContent, CardContentAmino, CardContentSDKType } from "./card_content";
import { BinaryReader, BinaryWriter } from "../../binary";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/cardchain.cardchain.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/cardchain.cardchain.QueryParamsRequest";
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
  typeUrl: "/cardchain.cardchain.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params holds all the parameters of this module. */
  params: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/cardchain.cardchain.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
export interface QueryCardRequest {
  cardId: bigint;
}
export interface QueryCardRequestProtoMsg {
  typeUrl: "/cardchain.cardchain.QueryCardRequest";
  value: Uint8Array;
}
export interface QueryCardRequestAmino {
  cardId?: string;
}
export interface QueryCardRequestAminoMsg {
  type: "/cardchain.cardchain.QueryCardRequest";
  value: QueryCardRequestAmino;
}
export interface QueryCardRequestSDKType {
  cardId: bigint;
}
export interface QueryCardResponse {
  card?: CardWithImage;
}
export interface QueryCardResponseProtoMsg {
  typeUrl: "/cardchain.cardchain.QueryCardResponse";
  value: Uint8Array;
}
export interface QueryCardResponseAmino {
  card?: CardWithImageAmino;
}
export interface QueryCardResponseAminoMsg {
  type: "/cardchain.cardchain.QueryCardResponse";
  value: QueryCardResponseAmino;
}
export interface QueryCardResponseSDKType {
  card?: CardWithImageSDKType;
}
export interface QueryUserRequest {
  address: string;
}
export interface QueryUserRequestProtoMsg {
  typeUrl: "/cardchain.cardchain.QueryUserRequest";
  value: Uint8Array;
}
export interface QueryUserRequestAmino {
  address?: string;
}
export interface QueryUserRequestAminoMsg {
  type: "/cardchain.cardchain.QueryUserRequest";
  value: QueryUserRequestAmino;
}
export interface QueryUserRequestSDKType {
  address: string;
}
export interface QueryUserResponse {
  user?: User;
}
export interface QueryUserResponseProtoMsg {
  typeUrl: "/cardchain.cardchain.QueryUserResponse";
  value: Uint8Array;
}
export interface QueryUserResponseAmino {
  user?: UserAmino;
}
export interface QueryUserResponseAminoMsg {
  type: "/cardchain.cardchain.QueryUserResponse";
  value: QueryUserResponseAmino;
}
export interface QueryUserResponseSDKType {
  user?: UserSDKType;
}
export interface QueryCardsRequest {
  owner: string;
  status: CardStatus[];
  cardType: CardType[];
  class: CardClass[];
  sortBy: string;
  nameContains: string;
  keywordsContains: string;
  notesContains: string;
  onlyStarterCard: boolean;
  onlyBalanceAnchors: boolean;
  rarities: CardRarity[];
  multiClassOnly: boolean;
}
export interface QueryCardsRequestProtoMsg {
  typeUrl: "/cardchain.cardchain.QueryCardsRequest";
  value: Uint8Array;
}
export interface QueryCardsRequestAmino {
  owner?: string;
  status?: CardStatus[];
  cardType?: CardType[];
  class?: CardClass[];
  sortBy?: string;
  nameContains?: string;
  keywordsContains?: string;
  notesContains?: string;
  onlyStarterCard?: boolean;
  onlyBalanceAnchors?: boolean;
  rarities?: CardRarity[];
  multiClassOnly?: boolean;
}
export interface QueryCardsRequestAminoMsg {
  type: "/cardchain.cardchain.QueryCardsRequest";
  value: QueryCardsRequestAmino;
}
export interface QueryCardsRequestSDKType {
  owner: string;
  status: CardStatus[];
  cardType: CardType[];
  class: CardClass[];
  sortBy: string;
  nameContains: string;
  keywordsContains: string;
  notesContains: string;
  onlyStarterCard: boolean;
  onlyBalanceAnchors: boolean;
  rarities: CardRarity[];
  multiClassOnly: boolean;
}
export interface QueryCardsResponse {
  cardIds: bigint[];
}
export interface QueryCardsResponseProtoMsg {
  typeUrl: "/cardchain.cardchain.QueryCardsResponse";
  value: Uint8Array;
}
export interface QueryCardsResponseAmino {
  cardIds?: string[];
}
export interface QueryCardsResponseAminoMsg {
  type: "/cardchain.cardchain.QueryCardsResponse";
  value: QueryCardsResponseAmino;
}
export interface QueryCardsResponseSDKType {
  cardIds: bigint[];
}
export interface QueryMatchRequest {
  matchId: bigint;
}
export interface QueryMatchRequestProtoMsg {
  typeUrl: "/cardchain.cardchain.QueryMatchRequest";
  value: Uint8Array;
}
export interface QueryMatchRequestAmino {
  matchId?: string;
}
export interface QueryMatchRequestAminoMsg {
  type: "/cardchain.cardchain.QueryMatchRequest";
  value: QueryMatchRequestAmino;
}
export interface QueryMatchRequestSDKType {
  matchId: bigint;
}
export interface QueryMatchResponse {
  match?: Match;
}
export interface QueryMatchResponseProtoMsg {
  typeUrl: "/cardchain.cardchain.QueryMatchResponse";
  value: Uint8Array;
}
export interface QueryMatchResponseAmino {
  match?: MatchAmino;
}
export interface QueryMatchResponseAminoMsg {
  type: "/cardchain.cardchain.QueryMatchResponse";
  value: QueryMatchResponseAmino;
}
export interface QueryMatchResponseSDKType {
  match?: MatchSDKType;
}
export interface QuerySetRequest {
  setId: bigint;
}
export interface QuerySetRequestProtoMsg {
  typeUrl: "/cardchain.cardchain.QuerySetRequest";
  value: Uint8Array;
}
export interface QuerySetRequestAmino {
  setId?: string;
}
export interface QuerySetRequestAminoMsg {
  type: "/cardchain.cardchain.QuerySetRequest";
  value: QuerySetRequestAmino;
}
export interface QuerySetRequestSDKType {
  setId: bigint;
}
export interface QuerySetResponse {
  set?: SetWithArtwork;
}
export interface QuerySetResponseProtoMsg {
  typeUrl: "/cardchain.cardchain.QuerySetResponse";
  value: Uint8Array;
}
export interface QuerySetResponseAmino {
  set?: SetWithArtworkAmino;
}
export interface QuerySetResponseAminoMsg {
  type: "/cardchain.cardchain.QuerySetResponse";
  value: QuerySetResponseAmino;
}
export interface QuerySetResponseSDKType {
  set?: SetWithArtworkSDKType;
}
export interface QuerySellOfferRequest {
  sellOfferId: bigint;
}
export interface QuerySellOfferRequestProtoMsg {
  typeUrl: "/cardchain.cardchain.QuerySellOfferRequest";
  value: Uint8Array;
}
export interface QuerySellOfferRequestAmino {
  sellOfferId?: string;
}
export interface QuerySellOfferRequestAminoMsg {
  type: "/cardchain.cardchain.QuerySellOfferRequest";
  value: QuerySellOfferRequestAmino;
}
export interface QuerySellOfferRequestSDKType {
  sellOfferId: bigint;
}
export interface QuerySellOfferResponse {
  sellOffer?: SellOffer;
}
export interface QuerySellOfferResponseProtoMsg {
  typeUrl: "/cardchain.cardchain.QuerySellOfferResponse";
  value: Uint8Array;
}
export interface QuerySellOfferResponseAmino {
  sellOffer?: SellOfferAmino;
}
export interface QuerySellOfferResponseAminoMsg {
  type: "/cardchain.cardchain.QuerySellOfferResponse";
  value: QuerySellOfferResponseAmino;
}
export interface QuerySellOfferResponseSDKType {
  sellOffer?: SellOfferSDKType;
}
export interface QueryCouncilRequest {
  councilId: bigint;
}
export interface QueryCouncilRequestProtoMsg {
  typeUrl: "/cardchain.cardchain.QueryCouncilRequest";
  value: Uint8Array;
}
export interface QueryCouncilRequestAmino {
  councilId?: string;
}
export interface QueryCouncilRequestAminoMsg {
  type: "/cardchain.cardchain.QueryCouncilRequest";
  value: QueryCouncilRequestAmino;
}
export interface QueryCouncilRequestSDKType {
  councilId: bigint;
}
export interface QueryCouncilResponse {
  council?: Council;
}
export interface QueryCouncilResponseProtoMsg {
  typeUrl: "/cardchain.cardchain.QueryCouncilResponse";
  value: Uint8Array;
}
export interface QueryCouncilResponseAmino {
  council?: CouncilAmino;
}
export interface QueryCouncilResponseAminoMsg {
  type: "/cardchain.cardchain.QueryCouncilResponse";
  value: QueryCouncilResponseAmino;
}
export interface QueryCouncilResponseSDKType {
  council?: CouncilSDKType;
}
export interface QueryServerRequest {
  serverId: bigint;
}
export interface QueryServerRequestProtoMsg {
  typeUrl: "/cardchain.cardchain.QueryServerRequest";
  value: Uint8Array;
}
export interface QueryServerRequestAmino {
  serverId?: string;
}
export interface QueryServerRequestAminoMsg {
  type: "/cardchain.cardchain.QueryServerRequest";
  value: QueryServerRequestAmino;
}
export interface QueryServerRequestSDKType {
  serverId: bigint;
}
export interface QueryServerResponse {
  server?: Server;
}
export interface QueryServerResponseProtoMsg {
  typeUrl: "/cardchain.cardchain.QueryServerResponse";
  value: Uint8Array;
}
export interface QueryServerResponseAmino {
  server?: ServerAmino;
}
export interface QueryServerResponseAminoMsg {
  type: "/cardchain.cardchain.QueryServerResponse";
  value: QueryServerResponseAmino;
}
export interface QueryServerResponseSDKType {
  server?: ServerSDKType;
}
export interface QueryEncounterRequest {
  encounterId: bigint;
}
export interface QueryEncounterRequestProtoMsg {
  typeUrl: "/cardchain.cardchain.QueryEncounterRequest";
  value: Uint8Array;
}
export interface QueryEncounterRequestAmino {
  encounterId?: string;
}
export interface QueryEncounterRequestAminoMsg {
  type: "/cardchain.cardchain.QueryEncounterRequest";
  value: QueryEncounterRequestAmino;
}
export interface QueryEncounterRequestSDKType {
  encounterId: bigint;
}
export interface QueryEncounterResponse {
  encounter?: Encounter;
}
export interface QueryEncounterResponseProtoMsg {
  typeUrl: "/cardchain.cardchain.QueryEncounterResponse";
  value: Uint8Array;
}
export interface QueryEncounterResponseAmino {
  encounter?: EncounterAmino;
}
export interface QueryEncounterResponseAminoMsg {
  type: "/cardchain.cardchain.QueryEncounterResponse";
  value: QueryEncounterResponseAmino;
}
export interface QueryEncounterResponseSDKType {
  encounter?: EncounterSDKType;
}
export interface QueryEncountersRequest {}
export interface QueryEncountersRequestProtoMsg {
  typeUrl: "/cardchain.cardchain.QueryEncountersRequest";
  value: Uint8Array;
}
export interface QueryEncountersRequestAmino {}
export interface QueryEncountersRequestAminoMsg {
  type: "/cardchain.cardchain.QueryEncountersRequest";
  value: QueryEncountersRequestAmino;
}
export interface QueryEncountersRequestSDKType {}
export interface QueryEncountersResponse {
  encounters: Encounter[];
}
export interface QueryEncountersResponseProtoMsg {
  typeUrl: "/cardchain.cardchain.QueryEncountersResponse";
  value: Uint8Array;
}
export interface QueryEncountersResponseAmino {
  encounters?: EncounterAmino[];
}
export interface QueryEncountersResponseAminoMsg {
  type: "/cardchain.cardchain.QueryEncountersResponse";
  value: QueryEncountersResponseAmino;
}
export interface QueryEncountersResponseSDKType {
  encounters: EncounterSDKType[];
}
export interface QueryEncounterWithImageRequest {
  encounterId: bigint;
}
export interface QueryEncounterWithImageRequestProtoMsg {
  typeUrl: "/cardchain.cardchain.QueryEncounterWithImageRequest";
  value: Uint8Array;
}
export interface QueryEncounterWithImageRequestAmino {
  encounterId?: string;
}
export interface QueryEncounterWithImageRequestAminoMsg {
  type: "/cardchain.cardchain.QueryEncounterWithImageRequest";
  value: QueryEncounterWithImageRequestAmino;
}
export interface QueryEncounterWithImageRequestSDKType {
  encounterId: bigint;
}
export interface QueryEncounterWithImageResponse {
  encounter?: EncounterWithImage;
}
export interface QueryEncounterWithImageResponseProtoMsg {
  typeUrl: "/cardchain.cardchain.QueryEncounterWithImageResponse";
  value: Uint8Array;
}
export interface QueryEncounterWithImageResponseAmino {
  encounter?: EncounterWithImageAmino;
}
export interface QueryEncounterWithImageResponseAminoMsg {
  type: "/cardchain.cardchain.QueryEncounterWithImageResponse";
  value: QueryEncounterWithImageResponseAmino;
}
export interface QueryEncounterWithImageResponseSDKType {
  encounter?: EncounterWithImageSDKType;
}
export interface QueryEncountersWithImageRequest {}
export interface QueryEncountersWithImageRequestProtoMsg {
  typeUrl: "/cardchain.cardchain.QueryEncountersWithImageRequest";
  value: Uint8Array;
}
export interface QueryEncountersWithImageRequestAmino {}
export interface QueryEncountersWithImageRequestAminoMsg {
  type: "/cardchain.cardchain.QueryEncountersWithImageRequest";
  value: QueryEncountersWithImageRequestAmino;
}
export interface QueryEncountersWithImageRequestSDKType {}
export interface QueryEncountersWithImageResponse {
  encounters: EncounterWithImage[];
}
export interface QueryEncountersWithImageResponseProtoMsg {
  typeUrl: "/cardchain.cardchain.QueryEncountersWithImageResponse";
  value: Uint8Array;
}
export interface QueryEncountersWithImageResponseAmino {
  encounters?: EncounterWithImageAmino[];
}
export interface QueryEncountersWithImageResponseAminoMsg {
  type: "/cardchain.cardchain.QueryEncountersWithImageResponse";
  value: QueryEncountersWithImageResponseAmino;
}
export interface QueryEncountersWithImageResponseSDKType {
  encounters: EncounterWithImageSDKType[];
}
export interface QueryCardchainInfoRequest {}
export interface QueryCardchainInfoRequestProtoMsg {
  typeUrl: "/cardchain.cardchain.QueryCardchainInfoRequest";
  value: Uint8Array;
}
export interface QueryCardchainInfoRequestAmino {}
export interface QueryCardchainInfoRequestAminoMsg {
  type: "/cardchain.cardchain.QueryCardchainInfoRequest";
  value: QueryCardchainInfoRequestAmino;
}
export interface QueryCardchainInfoRequestSDKType {}
export interface QueryCardchainInfoResponse {
  cardAuctionPrice: Coin;
  activeSets: bigint[];
  cardsNumber: bigint;
  matchesNumber: bigint;
  sellOffersNumber: bigint;
  councilsNumber: bigint;
  lastCardModified: bigint;
}
export interface QueryCardchainInfoResponseProtoMsg {
  typeUrl: "/cardchain.cardchain.QueryCardchainInfoResponse";
  value: Uint8Array;
}
export interface QueryCardchainInfoResponseAmino {
  cardAuctionPrice?: CoinAmino;
  activeSets?: string[];
  cardsNumber?: string;
  matchesNumber?: string;
  sellOffersNumber?: string;
  councilsNumber?: string;
  lastCardModified?: string;
}
export interface QueryCardchainInfoResponseAminoMsg {
  type: "/cardchain.cardchain.QueryCardchainInfoResponse";
  value: QueryCardchainInfoResponseAmino;
}
export interface QueryCardchainInfoResponseSDKType {
  cardAuctionPrice: CoinSDKType;
  activeSets: bigint[];
  cardsNumber: bigint;
  matchesNumber: bigint;
  sellOffersNumber: bigint;
  councilsNumber: bigint;
  lastCardModified: bigint;
}
export interface QuerySetRarityDistributionRequest {
  setId: bigint;
}
export interface QuerySetRarityDistributionRequestProtoMsg {
  typeUrl: "/cardchain.cardchain.QuerySetRarityDistributionRequest";
  value: Uint8Array;
}
export interface QuerySetRarityDistributionRequestAmino {
  setId?: string;
}
export interface QuerySetRarityDistributionRequestAminoMsg {
  type: "/cardchain.cardchain.QuerySetRarityDistributionRequest";
  value: QuerySetRarityDistributionRequestAmino;
}
export interface QuerySetRarityDistributionRequestSDKType {
  setId: bigint;
}
export interface QuerySetRarityDistributionResponse {
  current: bigint[];
  wanted: bigint[];
}
export interface QuerySetRarityDistributionResponseProtoMsg {
  typeUrl: "/cardchain.cardchain.QuerySetRarityDistributionResponse";
  value: Uint8Array;
}
export interface QuerySetRarityDistributionResponseAmino {
  current?: string[];
  wanted?: string[];
}
export interface QuerySetRarityDistributionResponseAminoMsg {
  type: "/cardchain.cardchain.QuerySetRarityDistributionResponse";
  value: QuerySetRarityDistributionResponseAmino;
}
export interface QuerySetRarityDistributionResponseSDKType {
  current: bigint[];
  wanted: bigint[];
}
export interface QueryAccountFromZealyRequest {
  zealyId: string;
}
export interface QueryAccountFromZealyRequestProtoMsg {
  typeUrl: "/cardchain.cardchain.QueryAccountFromZealyRequest";
  value: Uint8Array;
}
export interface QueryAccountFromZealyRequestAmino {
  zealyId?: string;
}
export interface QueryAccountFromZealyRequestAminoMsg {
  type: "/cardchain.cardchain.QueryAccountFromZealyRequest";
  value: QueryAccountFromZealyRequestAmino;
}
export interface QueryAccountFromZealyRequestSDKType {
  zealyId: string;
}
export interface QueryAccountFromZealyResponse {
  address: string;
}
export interface QueryAccountFromZealyResponseProtoMsg {
  typeUrl: "/cardchain.cardchain.QueryAccountFromZealyResponse";
  value: Uint8Array;
}
export interface QueryAccountFromZealyResponseAmino {
  address?: string;
}
export interface QueryAccountFromZealyResponseAminoMsg {
  type: "/cardchain.cardchain.QueryAccountFromZealyResponse";
  value: QueryAccountFromZealyResponseAmino;
}
export interface QueryAccountFromZealyResponseSDKType {
  address: string;
}
export interface QueryVotingResultsRequest {}
export interface QueryVotingResultsRequestProtoMsg {
  typeUrl: "/cardchain.cardchain.QueryVotingResultsRequest";
  value: Uint8Array;
}
export interface QueryVotingResultsRequestAmino {}
export interface QueryVotingResultsRequestAminoMsg {
  type: "/cardchain.cardchain.QueryVotingResultsRequest";
  value: QueryVotingResultsRequestAmino;
}
export interface QueryVotingResultsRequestSDKType {}
export interface QueryVotingResultsResponse {
  lastVotingResults?: VotingResults;
}
export interface QueryVotingResultsResponseProtoMsg {
  typeUrl: "/cardchain.cardchain.QueryVotingResultsResponse";
  value: Uint8Array;
}
export interface QueryVotingResultsResponseAmino {
  lastVotingResults?: VotingResultsAmino;
}
export interface QueryVotingResultsResponseAminoMsg {
  type: "/cardchain.cardchain.QueryVotingResultsResponse";
  value: QueryVotingResultsResponseAmino;
}
export interface QueryVotingResultsResponseSDKType {
  lastVotingResults?: VotingResultsSDKType;
}
export interface QueryMatchesRequest {
  timestampDown: bigint;
  timestampUp: bigint;
  containsUsers: string[];
  reporter: string;
  outcome: Outcome;
  cardsPlayed: bigint[];
}
export interface QueryMatchesRequestProtoMsg {
  typeUrl: "/cardchain.cardchain.QueryMatchesRequest";
  value: Uint8Array;
}
export interface QueryMatchesRequestAmino {
  timestampDown?: string;
  timestampUp?: string;
  containsUsers?: string[];
  reporter?: string;
  outcome?: Outcome;
  cardsPlayed?: string[];
}
export interface QueryMatchesRequestAminoMsg {
  type: "/cardchain.cardchain.QueryMatchesRequest";
  value: QueryMatchesRequestAmino;
}
export interface QueryMatchesRequestSDKType {
  timestampDown: bigint;
  timestampUp: bigint;
  containsUsers: string[];
  reporter: string;
  outcome: Outcome;
  cardsPlayed: bigint[];
}
export interface QueryMatchesResponse {
  matches: Match[];
  matchIds: bigint[];
}
export interface QueryMatchesResponseProtoMsg {
  typeUrl: "/cardchain.cardchain.QueryMatchesResponse";
  value: Uint8Array;
}
export interface QueryMatchesResponseAmino {
  matches?: MatchAmino[];
  matchIds?: string[];
}
export interface QueryMatchesResponseAminoMsg {
  type: "/cardchain.cardchain.QueryMatchesResponse";
  value: QueryMatchesResponseAmino;
}
export interface QueryMatchesResponseSDKType {
  matches: MatchSDKType[];
  matchIds: bigint[];
}
export interface QuerySetsRequest {
  status: SetStatus;
  contributors: string[];
  containsCards: bigint[];
  owner: string;
}
export interface QuerySetsRequestProtoMsg {
  typeUrl: "/cardchain.cardchain.QuerySetsRequest";
  value: Uint8Array;
}
export interface QuerySetsRequestAmino {
  status?: SetStatus;
  contributors?: string[];
  containsCards?: string[];
  owner?: string;
}
export interface QuerySetsRequestAminoMsg {
  type: "/cardchain.cardchain.QuerySetsRequest";
  value: QuerySetsRequestAmino;
}
export interface QuerySetsRequestSDKType {
  status: SetStatus;
  contributors: string[];
  containsCards: bigint[];
  owner: string;
}
export interface QuerySetsResponse {
  setIds: bigint[];
}
export interface QuerySetsResponseProtoMsg {
  typeUrl: "/cardchain.cardchain.QuerySetsResponse";
  value: Uint8Array;
}
export interface QuerySetsResponseAmino {
  setIds?: string[];
}
export interface QuerySetsResponseAminoMsg {
  type: "/cardchain.cardchain.QuerySetsResponse";
  value: QuerySetsResponseAmino;
}
export interface QuerySetsResponseSDKType {
  setIds: bigint[];
}
export interface QueryCardContentRequest {
  cardId: bigint;
}
export interface QueryCardContentRequestProtoMsg {
  typeUrl: "/cardchain.cardchain.QueryCardContentRequest";
  value: Uint8Array;
}
export interface QueryCardContentRequestAmino {
  cardId?: string;
}
export interface QueryCardContentRequestAminoMsg {
  type: "/cardchain.cardchain.QueryCardContentRequest";
  value: QueryCardContentRequestAmino;
}
export interface QueryCardContentRequestSDKType {
  cardId: bigint;
}
export interface QueryCardContentResponse {
  cardContent?: CardContent;
}
export interface QueryCardContentResponseProtoMsg {
  typeUrl: "/cardchain.cardchain.QueryCardContentResponse";
  value: Uint8Array;
}
export interface QueryCardContentResponseAmino {
  cardContent?: CardContentAmino;
}
export interface QueryCardContentResponseAminoMsg {
  type: "/cardchain.cardchain.QueryCardContentResponse";
  value: QueryCardContentResponseAmino;
}
export interface QueryCardContentResponseSDKType {
  cardContent?: CardContentSDKType;
}
export interface QueryCardContentsRequest {
  cardIds: bigint[];
}
export interface QueryCardContentsRequestProtoMsg {
  typeUrl: "/cardchain.cardchain.QueryCardContentsRequest";
  value: Uint8Array;
}
export interface QueryCardContentsRequestAmino {
  cardIds?: string[];
}
export interface QueryCardContentsRequestAminoMsg {
  type: "/cardchain.cardchain.QueryCardContentsRequest";
  value: QueryCardContentsRequestAmino;
}
export interface QueryCardContentsRequestSDKType {
  cardIds: bigint[];
}
export interface QueryCardContentsResponse {
  cardContents: CardContent[];
}
export interface QueryCardContentsResponseProtoMsg {
  typeUrl: "/cardchain.cardchain.QueryCardContentsResponse";
  value: Uint8Array;
}
export interface QueryCardContentsResponseAmino {
  cardContents?: CardContentAmino[];
}
export interface QueryCardContentsResponseAminoMsg {
  type: "/cardchain.cardchain.QueryCardContentsResponse";
  value: QueryCardContentsResponseAmino;
}
export interface QueryCardContentsResponseSDKType {
  cardContents: CardContentSDKType[];
}
export interface QuerySellOffersRequest {
  priceDown: Coin;
  priceUp: Coin;
  seller: string;
  buyer: string;
  card: bigint;
  status: SellOfferStatus;
}
export interface QuerySellOffersRequestProtoMsg {
  typeUrl: "/cardchain.cardchain.QuerySellOffersRequest";
  value: Uint8Array;
}
export interface QuerySellOffersRequestAmino {
  priceDown?: CoinAmino;
  priceUp?: CoinAmino;
  seller?: string;
  buyer?: string;
  card?: string;
  status?: SellOfferStatus;
}
export interface QuerySellOffersRequestAminoMsg {
  type: "/cardchain.cardchain.QuerySellOffersRequest";
  value: QuerySellOffersRequestAmino;
}
export interface QuerySellOffersRequestSDKType {
  priceDown: CoinSDKType;
  priceUp: CoinSDKType;
  seller: string;
  buyer: string;
  card: bigint;
  status: SellOfferStatus;
}
export interface QuerySellOffersResponse {
  sellOffers: SellOffer[];
  sellOfferIds: bigint[];
}
export interface QuerySellOffersResponseProtoMsg {
  typeUrl: "/cardchain.cardchain.QuerySellOffersResponse";
  value: Uint8Array;
}
export interface QuerySellOffersResponseAmino {
  sellOffers?: SellOfferAmino[];
  sellOfferIds?: string[];
}
export interface QuerySellOffersResponseAminoMsg {
  type: "/cardchain.cardchain.QuerySellOffersResponse";
  value: QuerySellOffersResponseAmino;
}
export interface QuerySellOffersResponseSDKType {
  sellOffers: SellOfferSDKType[];
  sellOfferIds: bigint[];
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/cardchain.cardchain.QueryParamsRequest",
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
      typeUrl: "/cardchain.cardchain.QueryParamsRequest",
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
  typeUrl: "/cardchain.cardchain.QueryParamsResponse",
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
      typeUrl: "/cardchain.cardchain.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryCardRequest(): QueryCardRequest {
  return {
    cardId: BigInt(0)
  };
}
export const QueryCardRequest = {
  typeUrl: "/cardchain.cardchain.QueryCardRequest",
  encode(message: QueryCardRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.cardId !== BigInt(0)) {
      writer.uint32(8).uint64(message.cardId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCardRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCardRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cardId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryCardRequest>): QueryCardRequest {
    const message = createBaseQueryCardRequest();
    message.cardId = object.cardId !== undefined && object.cardId !== null ? BigInt(object.cardId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryCardRequestAmino): QueryCardRequest {
    const message = createBaseQueryCardRequest();
    if (object.cardId !== undefined && object.cardId !== null) {
      message.cardId = BigInt(object.cardId);
    }
    return message;
  },
  toAmino(message: QueryCardRequest): QueryCardRequestAmino {
    const obj: any = {};
    obj.cardId = message.cardId !== BigInt(0) ? message.cardId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCardRequestAminoMsg): QueryCardRequest {
    return QueryCardRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCardRequestProtoMsg): QueryCardRequest {
    return QueryCardRequest.decode(message.value);
  },
  toProto(message: QueryCardRequest): Uint8Array {
    return QueryCardRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCardRequest): QueryCardRequestProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.QueryCardRequest",
      value: QueryCardRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCardResponse(): QueryCardResponse {
  return {
    card: undefined
  };
}
export const QueryCardResponse = {
  typeUrl: "/cardchain.cardchain.QueryCardResponse",
  encode(message: QueryCardResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.card !== undefined) {
      CardWithImage.encode(message.card, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCardResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCardResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.card = CardWithImage.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryCardResponse>): QueryCardResponse {
    const message = createBaseQueryCardResponse();
    message.card = object.card !== undefined && object.card !== null ? CardWithImage.fromPartial(object.card) : undefined;
    return message;
  },
  fromAmino(object: QueryCardResponseAmino): QueryCardResponse {
    const message = createBaseQueryCardResponse();
    if (object.card !== undefined && object.card !== null) {
      message.card = CardWithImage.fromAmino(object.card);
    }
    return message;
  },
  toAmino(message: QueryCardResponse): QueryCardResponseAmino {
    const obj: any = {};
    obj.card = message.card ? CardWithImage.toAmino(message.card) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCardResponseAminoMsg): QueryCardResponse {
    return QueryCardResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCardResponseProtoMsg): QueryCardResponse {
    return QueryCardResponse.decode(message.value);
  },
  toProto(message: QueryCardResponse): Uint8Array {
    return QueryCardResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCardResponse): QueryCardResponseProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.QueryCardResponse",
      value: QueryCardResponse.encode(message).finish()
    };
  }
};
function createBaseQueryUserRequest(): QueryUserRequest {
  return {
    address: ""
  };
}
export const QueryUserRequest = {
  typeUrl: "/cardchain.cardchain.QueryUserRequest",
  encode(message: QueryUserRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryUserRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryUserRequest>): QueryUserRequest {
    const message = createBaseQueryUserRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryUserRequestAmino): QueryUserRequest {
    const message = createBaseQueryUserRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryUserRequest): QueryUserRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryUserRequestAminoMsg): QueryUserRequest {
    return QueryUserRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryUserRequestProtoMsg): QueryUserRequest {
    return QueryUserRequest.decode(message.value);
  },
  toProto(message: QueryUserRequest): Uint8Array {
    return QueryUserRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryUserRequest): QueryUserRequestProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.QueryUserRequest",
      value: QueryUserRequest.encode(message).finish()
    };
  }
};
function createBaseQueryUserResponse(): QueryUserResponse {
  return {
    user: undefined
  };
}
export const QueryUserResponse = {
  typeUrl: "/cardchain.cardchain.QueryUserResponse",
  encode(message: QueryUserResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.user !== undefined) {
      User.encode(message.user, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryUserResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.user = User.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryUserResponse>): QueryUserResponse {
    const message = createBaseQueryUserResponse();
    message.user = object.user !== undefined && object.user !== null ? User.fromPartial(object.user) : undefined;
    return message;
  },
  fromAmino(object: QueryUserResponseAmino): QueryUserResponse {
    const message = createBaseQueryUserResponse();
    if (object.user !== undefined && object.user !== null) {
      message.user = User.fromAmino(object.user);
    }
    return message;
  },
  toAmino(message: QueryUserResponse): QueryUserResponseAmino {
    const obj: any = {};
    obj.user = message.user ? User.toAmino(message.user) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryUserResponseAminoMsg): QueryUserResponse {
    return QueryUserResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryUserResponseProtoMsg): QueryUserResponse {
    return QueryUserResponse.decode(message.value);
  },
  toProto(message: QueryUserResponse): Uint8Array {
    return QueryUserResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryUserResponse): QueryUserResponseProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.QueryUserResponse",
      value: QueryUserResponse.encode(message).finish()
    };
  }
};
function createBaseQueryCardsRequest(): QueryCardsRequest {
  return {
    owner: "",
    status: [],
    cardType: [],
    class: [],
    sortBy: "",
    nameContains: "",
    keywordsContains: "",
    notesContains: "",
    onlyStarterCard: false,
    onlyBalanceAnchors: false,
    rarities: [],
    multiClassOnly: false
  };
}
export const QueryCardsRequest = {
  typeUrl: "/cardchain.cardchain.QueryCardsRequest",
  encode(message: QueryCardsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    writer.uint32(18).fork();
    for (const v of message.status) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(26).fork();
    for (const v of message.cardType) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(34).fork();
    for (const v of message.class) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.sortBy !== "") {
      writer.uint32(42).string(message.sortBy);
    }
    if (message.nameContains !== "") {
      writer.uint32(50).string(message.nameContains);
    }
    if (message.keywordsContains !== "") {
      writer.uint32(58).string(message.keywordsContains);
    }
    if (message.notesContains !== "") {
      writer.uint32(66).string(message.notesContains);
    }
    if (message.onlyStarterCard === true) {
      writer.uint32(72).bool(message.onlyStarterCard);
    }
    if (message.onlyBalanceAnchors === true) {
      writer.uint32(80).bool(message.onlyBalanceAnchors);
    }
    writer.uint32(90).fork();
    for (const v of message.rarities) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.multiClassOnly === true) {
      writer.uint32(96).bool(message.multiClassOnly);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCardsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCardsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.status.push(reader.int32() as any);
            }
          } else {
            message.status.push(reader.int32() as any);
          }
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.cardType.push(reader.int32() as any);
            }
          } else {
            message.cardType.push(reader.int32() as any);
          }
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.class.push(reader.int32() as any);
            }
          } else {
            message.class.push(reader.int32() as any);
          }
          break;
        case 5:
          message.sortBy = reader.string();
          break;
        case 6:
          message.nameContains = reader.string();
          break;
        case 7:
          message.keywordsContains = reader.string();
          break;
        case 8:
          message.notesContains = reader.string();
          break;
        case 9:
          message.onlyStarterCard = reader.bool();
          break;
        case 10:
          message.onlyBalanceAnchors = reader.bool();
          break;
        case 11:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.rarities.push(reader.int32() as any);
            }
          } else {
            message.rarities.push(reader.int32() as any);
          }
          break;
        case 12:
          message.multiClassOnly = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryCardsRequest>): QueryCardsRequest {
    const message = createBaseQueryCardsRequest();
    message.owner = object.owner ?? "";
    message.status = object.status?.map(e => e) || [];
    message.cardType = object.cardType?.map(e => e) || [];
    message.class = object.class?.map(e => e) || [];
    message.sortBy = object.sortBy ?? "";
    message.nameContains = object.nameContains ?? "";
    message.keywordsContains = object.keywordsContains ?? "";
    message.notesContains = object.notesContains ?? "";
    message.onlyStarterCard = object.onlyStarterCard ?? false;
    message.onlyBalanceAnchors = object.onlyBalanceAnchors ?? false;
    message.rarities = object.rarities?.map(e => e) || [];
    message.multiClassOnly = object.multiClassOnly ?? false;
    return message;
  },
  fromAmino(object: QueryCardsRequestAmino): QueryCardsRequest {
    const message = createBaseQueryCardsRequest();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    message.status = object.status?.map(e => e) || [];
    message.cardType = object.cardType?.map(e => e) || [];
    message.class = object.class?.map(e => e) || [];
    if (object.sortBy !== undefined && object.sortBy !== null) {
      message.sortBy = object.sortBy;
    }
    if (object.nameContains !== undefined && object.nameContains !== null) {
      message.nameContains = object.nameContains;
    }
    if (object.keywordsContains !== undefined && object.keywordsContains !== null) {
      message.keywordsContains = object.keywordsContains;
    }
    if (object.notesContains !== undefined && object.notesContains !== null) {
      message.notesContains = object.notesContains;
    }
    if (object.onlyStarterCard !== undefined && object.onlyStarterCard !== null) {
      message.onlyStarterCard = object.onlyStarterCard;
    }
    if (object.onlyBalanceAnchors !== undefined && object.onlyBalanceAnchors !== null) {
      message.onlyBalanceAnchors = object.onlyBalanceAnchors;
    }
    message.rarities = object.rarities?.map(e => e) || [];
    if (object.multiClassOnly !== undefined && object.multiClassOnly !== null) {
      message.multiClassOnly = object.multiClassOnly;
    }
    return message;
  },
  toAmino(message: QueryCardsRequest): QueryCardsRequestAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    if (message.status) {
      obj.status = message.status.map(e => e);
    } else {
      obj.status = message.status;
    }
    if (message.cardType) {
      obj.cardType = message.cardType.map(e => e);
    } else {
      obj.cardType = message.cardType;
    }
    if (message.class) {
      obj.class = message.class.map(e => e);
    } else {
      obj.class = message.class;
    }
    obj.sortBy = message.sortBy === "" ? undefined : message.sortBy;
    obj.nameContains = message.nameContains === "" ? undefined : message.nameContains;
    obj.keywordsContains = message.keywordsContains === "" ? undefined : message.keywordsContains;
    obj.notesContains = message.notesContains === "" ? undefined : message.notesContains;
    obj.onlyStarterCard = message.onlyStarterCard === false ? undefined : message.onlyStarterCard;
    obj.onlyBalanceAnchors = message.onlyBalanceAnchors === false ? undefined : message.onlyBalanceAnchors;
    if (message.rarities) {
      obj.rarities = message.rarities.map(e => e);
    } else {
      obj.rarities = message.rarities;
    }
    obj.multiClassOnly = message.multiClassOnly === false ? undefined : message.multiClassOnly;
    return obj;
  },
  fromAminoMsg(object: QueryCardsRequestAminoMsg): QueryCardsRequest {
    return QueryCardsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCardsRequestProtoMsg): QueryCardsRequest {
    return QueryCardsRequest.decode(message.value);
  },
  toProto(message: QueryCardsRequest): Uint8Array {
    return QueryCardsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCardsRequest): QueryCardsRequestProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.QueryCardsRequest",
      value: QueryCardsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCardsResponse(): QueryCardsResponse {
  return {
    cardIds: []
  };
}
export const QueryCardsResponse = {
  typeUrl: "/cardchain.cardchain.QueryCardsResponse",
  encode(message: QueryCardsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.cardIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCardsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCardsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.cardIds.push(reader.uint64());
            }
          } else {
            message.cardIds.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryCardsResponse>): QueryCardsResponse {
    const message = createBaseQueryCardsResponse();
    message.cardIds = object.cardIds?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object: QueryCardsResponseAmino): QueryCardsResponse {
    const message = createBaseQueryCardsResponse();
    message.cardIds = object.cardIds?.map(e => BigInt(e)) || [];
    return message;
  },
  toAmino(message: QueryCardsResponse): QueryCardsResponseAmino {
    const obj: any = {};
    if (message.cardIds) {
      obj.cardIds = message.cardIds.map(e => e.toString());
    } else {
      obj.cardIds = message.cardIds;
    }
    return obj;
  },
  fromAminoMsg(object: QueryCardsResponseAminoMsg): QueryCardsResponse {
    return QueryCardsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCardsResponseProtoMsg): QueryCardsResponse {
    return QueryCardsResponse.decode(message.value);
  },
  toProto(message: QueryCardsResponse): Uint8Array {
    return QueryCardsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCardsResponse): QueryCardsResponseProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.QueryCardsResponse",
      value: QueryCardsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryMatchRequest(): QueryMatchRequest {
  return {
    matchId: BigInt(0)
  };
}
export const QueryMatchRequest = {
  typeUrl: "/cardchain.cardchain.QueryMatchRequest",
  encode(message: QueryMatchRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.matchId !== BigInt(0)) {
      writer.uint32(8).uint64(message.matchId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMatchRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMatchRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.matchId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryMatchRequest>): QueryMatchRequest {
    const message = createBaseQueryMatchRequest();
    message.matchId = object.matchId !== undefined && object.matchId !== null ? BigInt(object.matchId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryMatchRequestAmino): QueryMatchRequest {
    const message = createBaseQueryMatchRequest();
    if (object.matchId !== undefined && object.matchId !== null) {
      message.matchId = BigInt(object.matchId);
    }
    return message;
  },
  toAmino(message: QueryMatchRequest): QueryMatchRequestAmino {
    const obj: any = {};
    obj.matchId = message.matchId !== BigInt(0) ? message.matchId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryMatchRequestAminoMsg): QueryMatchRequest {
    return QueryMatchRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMatchRequestProtoMsg): QueryMatchRequest {
    return QueryMatchRequest.decode(message.value);
  },
  toProto(message: QueryMatchRequest): Uint8Array {
    return QueryMatchRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryMatchRequest): QueryMatchRequestProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.QueryMatchRequest",
      value: QueryMatchRequest.encode(message).finish()
    };
  }
};
function createBaseQueryMatchResponse(): QueryMatchResponse {
  return {
    match: undefined
  };
}
export const QueryMatchResponse = {
  typeUrl: "/cardchain.cardchain.QueryMatchResponse",
  encode(message: QueryMatchResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.match !== undefined) {
      Match.encode(message.match, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMatchResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMatchResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.match = Match.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryMatchResponse>): QueryMatchResponse {
    const message = createBaseQueryMatchResponse();
    message.match = object.match !== undefined && object.match !== null ? Match.fromPartial(object.match) : undefined;
    return message;
  },
  fromAmino(object: QueryMatchResponseAmino): QueryMatchResponse {
    const message = createBaseQueryMatchResponse();
    if (object.match !== undefined && object.match !== null) {
      message.match = Match.fromAmino(object.match);
    }
    return message;
  },
  toAmino(message: QueryMatchResponse): QueryMatchResponseAmino {
    const obj: any = {};
    obj.match = message.match ? Match.toAmino(message.match) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryMatchResponseAminoMsg): QueryMatchResponse {
    return QueryMatchResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMatchResponseProtoMsg): QueryMatchResponse {
    return QueryMatchResponse.decode(message.value);
  },
  toProto(message: QueryMatchResponse): Uint8Array {
    return QueryMatchResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryMatchResponse): QueryMatchResponseProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.QueryMatchResponse",
      value: QueryMatchResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySetRequest(): QuerySetRequest {
  return {
    setId: BigInt(0)
  };
}
export const QuerySetRequest = {
  typeUrl: "/cardchain.cardchain.QuerySetRequest",
  encode(message: QuerySetRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.setId !== BigInt(0)) {
      writer.uint32(8).uint64(message.setId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySetRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.setId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QuerySetRequest>): QuerySetRequest {
    const message = createBaseQuerySetRequest();
    message.setId = object.setId !== undefined && object.setId !== null ? BigInt(object.setId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QuerySetRequestAmino): QuerySetRequest {
    const message = createBaseQuerySetRequest();
    if (object.setId !== undefined && object.setId !== null) {
      message.setId = BigInt(object.setId);
    }
    return message;
  },
  toAmino(message: QuerySetRequest): QuerySetRequestAmino {
    const obj: any = {};
    obj.setId = message.setId !== BigInt(0) ? message.setId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySetRequestAminoMsg): QuerySetRequest {
    return QuerySetRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySetRequestProtoMsg): QuerySetRequest {
    return QuerySetRequest.decode(message.value);
  },
  toProto(message: QuerySetRequest): Uint8Array {
    return QuerySetRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySetRequest): QuerySetRequestProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.QuerySetRequest",
      value: QuerySetRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySetResponse(): QuerySetResponse {
  return {
    set: undefined
  };
}
export const QuerySetResponse = {
  typeUrl: "/cardchain.cardchain.QuerySetResponse",
  encode(message: QuerySetResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.set !== undefined) {
      SetWithArtwork.encode(message.set, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySetResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.set = SetWithArtwork.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QuerySetResponse>): QuerySetResponse {
    const message = createBaseQuerySetResponse();
    message.set = object.set !== undefined && object.set !== null ? SetWithArtwork.fromPartial(object.set) : undefined;
    return message;
  },
  fromAmino(object: QuerySetResponseAmino): QuerySetResponse {
    const message = createBaseQuerySetResponse();
    if (object.set !== undefined && object.set !== null) {
      message.set = SetWithArtwork.fromAmino(object.set);
    }
    return message;
  },
  toAmino(message: QuerySetResponse): QuerySetResponseAmino {
    const obj: any = {};
    obj.set = message.set ? SetWithArtwork.toAmino(message.set) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySetResponseAminoMsg): QuerySetResponse {
    return QuerySetResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySetResponseProtoMsg): QuerySetResponse {
    return QuerySetResponse.decode(message.value);
  },
  toProto(message: QuerySetResponse): Uint8Array {
    return QuerySetResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySetResponse): QuerySetResponseProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.QuerySetResponse",
      value: QuerySetResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySellOfferRequest(): QuerySellOfferRequest {
  return {
    sellOfferId: BigInt(0)
  };
}
export const QuerySellOfferRequest = {
  typeUrl: "/cardchain.cardchain.QuerySellOfferRequest",
  encode(message: QuerySellOfferRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sellOfferId !== BigInt(0)) {
      writer.uint32(8).uint64(message.sellOfferId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySellOfferRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySellOfferRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sellOfferId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QuerySellOfferRequest>): QuerySellOfferRequest {
    const message = createBaseQuerySellOfferRequest();
    message.sellOfferId = object.sellOfferId !== undefined && object.sellOfferId !== null ? BigInt(object.sellOfferId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QuerySellOfferRequestAmino): QuerySellOfferRequest {
    const message = createBaseQuerySellOfferRequest();
    if (object.sellOfferId !== undefined && object.sellOfferId !== null) {
      message.sellOfferId = BigInt(object.sellOfferId);
    }
    return message;
  },
  toAmino(message: QuerySellOfferRequest): QuerySellOfferRequestAmino {
    const obj: any = {};
    obj.sellOfferId = message.sellOfferId !== BigInt(0) ? message.sellOfferId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySellOfferRequestAminoMsg): QuerySellOfferRequest {
    return QuerySellOfferRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySellOfferRequestProtoMsg): QuerySellOfferRequest {
    return QuerySellOfferRequest.decode(message.value);
  },
  toProto(message: QuerySellOfferRequest): Uint8Array {
    return QuerySellOfferRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySellOfferRequest): QuerySellOfferRequestProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.QuerySellOfferRequest",
      value: QuerySellOfferRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySellOfferResponse(): QuerySellOfferResponse {
  return {
    sellOffer: undefined
  };
}
export const QuerySellOfferResponse = {
  typeUrl: "/cardchain.cardchain.QuerySellOfferResponse",
  encode(message: QuerySellOfferResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sellOffer !== undefined) {
      SellOffer.encode(message.sellOffer, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySellOfferResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySellOfferResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sellOffer = SellOffer.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QuerySellOfferResponse>): QuerySellOfferResponse {
    const message = createBaseQuerySellOfferResponse();
    message.sellOffer = object.sellOffer !== undefined && object.sellOffer !== null ? SellOffer.fromPartial(object.sellOffer) : undefined;
    return message;
  },
  fromAmino(object: QuerySellOfferResponseAmino): QuerySellOfferResponse {
    const message = createBaseQuerySellOfferResponse();
    if (object.sellOffer !== undefined && object.sellOffer !== null) {
      message.sellOffer = SellOffer.fromAmino(object.sellOffer);
    }
    return message;
  },
  toAmino(message: QuerySellOfferResponse): QuerySellOfferResponseAmino {
    const obj: any = {};
    obj.sellOffer = message.sellOffer ? SellOffer.toAmino(message.sellOffer) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySellOfferResponseAminoMsg): QuerySellOfferResponse {
    return QuerySellOfferResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySellOfferResponseProtoMsg): QuerySellOfferResponse {
    return QuerySellOfferResponse.decode(message.value);
  },
  toProto(message: QuerySellOfferResponse): Uint8Array {
    return QuerySellOfferResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySellOfferResponse): QuerySellOfferResponseProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.QuerySellOfferResponse",
      value: QuerySellOfferResponse.encode(message).finish()
    };
  }
};
function createBaseQueryCouncilRequest(): QueryCouncilRequest {
  return {
    councilId: BigInt(0)
  };
}
export const QueryCouncilRequest = {
  typeUrl: "/cardchain.cardchain.QueryCouncilRequest",
  encode(message: QueryCouncilRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.councilId !== BigInt(0)) {
      writer.uint32(8).uint64(message.councilId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCouncilRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCouncilRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.councilId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryCouncilRequest>): QueryCouncilRequest {
    const message = createBaseQueryCouncilRequest();
    message.councilId = object.councilId !== undefined && object.councilId !== null ? BigInt(object.councilId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryCouncilRequestAmino): QueryCouncilRequest {
    const message = createBaseQueryCouncilRequest();
    if (object.councilId !== undefined && object.councilId !== null) {
      message.councilId = BigInt(object.councilId);
    }
    return message;
  },
  toAmino(message: QueryCouncilRequest): QueryCouncilRequestAmino {
    const obj: any = {};
    obj.councilId = message.councilId !== BigInt(0) ? message.councilId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCouncilRequestAminoMsg): QueryCouncilRequest {
    return QueryCouncilRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCouncilRequestProtoMsg): QueryCouncilRequest {
    return QueryCouncilRequest.decode(message.value);
  },
  toProto(message: QueryCouncilRequest): Uint8Array {
    return QueryCouncilRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCouncilRequest): QueryCouncilRequestProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.QueryCouncilRequest",
      value: QueryCouncilRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCouncilResponse(): QueryCouncilResponse {
  return {
    council: undefined
  };
}
export const QueryCouncilResponse = {
  typeUrl: "/cardchain.cardchain.QueryCouncilResponse",
  encode(message: QueryCouncilResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.council !== undefined) {
      Council.encode(message.council, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCouncilResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCouncilResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.council = Council.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryCouncilResponse>): QueryCouncilResponse {
    const message = createBaseQueryCouncilResponse();
    message.council = object.council !== undefined && object.council !== null ? Council.fromPartial(object.council) : undefined;
    return message;
  },
  fromAmino(object: QueryCouncilResponseAmino): QueryCouncilResponse {
    const message = createBaseQueryCouncilResponse();
    if (object.council !== undefined && object.council !== null) {
      message.council = Council.fromAmino(object.council);
    }
    return message;
  },
  toAmino(message: QueryCouncilResponse): QueryCouncilResponseAmino {
    const obj: any = {};
    obj.council = message.council ? Council.toAmino(message.council) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCouncilResponseAminoMsg): QueryCouncilResponse {
    return QueryCouncilResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCouncilResponseProtoMsg): QueryCouncilResponse {
    return QueryCouncilResponse.decode(message.value);
  },
  toProto(message: QueryCouncilResponse): Uint8Array {
    return QueryCouncilResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCouncilResponse): QueryCouncilResponseProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.QueryCouncilResponse",
      value: QueryCouncilResponse.encode(message).finish()
    };
  }
};
function createBaseQueryServerRequest(): QueryServerRequest {
  return {
    serverId: BigInt(0)
  };
}
export const QueryServerRequest = {
  typeUrl: "/cardchain.cardchain.QueryServerRequest",
  encode(message: QueryServerRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.serverId !== BigInt(0)) {
      writer.uint32(8).uint64(message.serverId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryServerRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryServerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serverId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryServerRequest>): QueryServerRequest {
    const message = createBaseQueryServerRequest();
    message.serverId = object.serverId !== undefined && object.serverId !== null ? BigInt(object.serverId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryServerRequestAmino): QueryServerRequest {
    const message = createBaseQueryServerRequest();
    if (object.serverId !== undefined && object.serverId !== null) {
      message.serverId = BigInt(object.serverId);
    }
    return message;
  },
  toAmino(message: QueryServerRequest): QueryServerRequestAmino {
    const obj: any = {};
    obj.serverId = message.serverId !== BigInt(0) ? message.serverId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryServerRequestAminoMsg): QueryServerRequest {
    return QueryServerRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryServerRequestProtoMsg): QueryServerRequest {
    return QueryServerRequest.decode(message.value);
  },
  toProto(message: QueryServerRequest): Uint8Array {
    return QueryServerRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryServerRequest): QueryServerRequestProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.QueryServerRequest",
      value: QueryServerRequest.encode(message).finish()
    };
  }
};
function createBaseQueryServerResponse(): QueryServerResponse {
  return {
    server: undefined
  };
}
export const QueryServerResponse = {
  typeUrl: "/cardchain.cardchain.QueryServerResponse",
  encode(message: QueryServerResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.server !== undefined) {
      Server.encode(message.server, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryServerResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryServerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.server = Server.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryServerResponse>): QueryServerResponse {
    const message = createBaseQueryServerResponse();
    message.server = object.server !== undefined && object.server !== null ? Server.fromPartial(object.server) : undefined;
    return message;
  },
  fromAmino(object: QueryServerResponseAmino): QueryServerResponse {
    const message = createBaseQueryServerResponse();
    if (object.server !== undefined && object.server !== null) {
      message.server = Server.fromAmino(object.server);
    }
    return message;
  },
  toAmino(message: QueryServerResponse): QueryServerResponseAmino {
    const obj: any = {};
    obj.server = message.server ? Server.toAmino(message.server) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryServerResponseAminoMsg): QueryServerResponse {
    return QueryServerResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryServerResponseProtoMsg): QueryServerResponse {
    return QueryServerResponse.decode(message.value);
  },
  toProto(message: QueryServerResponse): Uint8Array {
    return QueryServerResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryServerResponse): QueryServerResponseProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.QueryServerResponse",
      value: QueryServerResponse.encode(message).finish()
    };
  }
};
function createBaseQueryEncounterRequest(): QueryEncounterRequest {
  return {
    encounterId: BigInt(0)
  };
}
export const QueryEncounterRequest = {
  typeUrl: "/cardchain.cardchain.QueryEncounterRequest",
  encode(message: QueryEncounterRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.encounterId !== BigInt(0)) {
      writer.uint32(8).uint64(message.encounterId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEncounterRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEncounterRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.encounterId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryEncounterRequest>): QueryEncounterRequest {
    const message = createBaseQueryEncounterRequest();
    message.encounterId = object.encounterId !== undefined && object.encounterId !== null ? BigInt(object.encounterId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryEncounterRequestAmino): QueryEncounterRequest {
    const message = createBaseQueryEncounterRequest();
    if (object.encounterId !== undefined && object.encounterId !== null) {
      message.encounterId = BigInt(object.encounterId);
    }
    return message;
  },
  toAmino(message: QueryEncounterRequest): QueryEncounterRequestAmino {
    const obj: any = {};
    obj.encounterId = message.encounterId !== BigInt(0) ? message.encounterId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryEncounterRequestAminoMsg): QueryEncounterRequest {
    return QueryEncounterRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEncounterRequestProtoMsg): QueryEncounterRequest {
    return QueryEncounterRequest.decode(message.value);
  },
  toProto(message: QueryEncounterRequest): Uint8Array {
    return QueryEncounterRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryEncounterRequest): QueryEncounterRequestProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.QueryEncounterRequest",
      value: QueryEncounterRequest.encode(message).finish()
    };
  }
};
function createBaseQueryEncounterResponse(): QueryEncounterResponse {
  return {
    encounter: undefined
  };
}
export const QueryEncounterResponse = {
  typeUrl: "/cardchain.cardchain.QueryEncounterResponse",
  encode(message: QueryEncounterResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.encounter !== undefined) {
      Encounter.encode(message.encounter, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEncounterResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEncounterResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.encounter = Encounter.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryEncounterResponse>): QueryEncounterResponse {
    const message = createBaseQueryEncounterResponse();
    message.encounter = object.encounter !== undefined && object.encounter !== null ? Encounter.fromPartial(object.encounter) : undefined;
    return message;
  },
  fromAmino(object: QueryEncounterResponseAmino): QueryEncounterResponse {
    const message = createBaseQueryEncounterResponse();
    if (object.encounter !== undefined && object.encounter !== null) {
      message.encounter = Encounter.fromAmino(object.encounter);
    }
    return message;
  },
  toAmino(message: QueryEncounterResponse): QueryEncounterResponseAmino {
    const obj: any = {};
    obj.encounter = message.encounter ? Encounter.toAmino(message.encounter) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryEncounterResponseAminoMsg): QueryEncounterResponse {
    return QueryEncounterResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEncounterResponseProtoMsg): QueryEncounterResponse {
    return QueryEncounterResponse.decode(message.value);
  },
  toProto(message: QueryEncounterResponse): Uint8Array {
    return QueryEncounterResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryEncounterResponse): QueryEncounterResponseProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.QueryEncounterResponse",
      value: QueryEncounterResponse.encode(message).finish()
    };
  }
};
function createBaseQueryEncountersRequest(): QueryEncountersRequest {
  return {};
}
export const QueryEncountersRequest = {
  typeUrl: "/cardchain.cardchain.QueryEncountersRequest",
  encode(_: QueryEncountersRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEncountersRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEncountersRequest();
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
  fromPartial(_: Partial<QueryEncountersRequest>): QueryEncountersRequest {
    const message = createBaseQueryEncountersRequest();
    return message;
  },
  fromAmino(_: QueryEncountersRequestAmino): QueryEncountersRequest {
    const message = createBaseQueryEncountersRequest();
    return message;
  },
  toAmino(_: QueryEncountersRequest): QueryEncountersRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryEncountersRequestAminoMsg): QueryEncountersRequest {
    return QueryEncountersRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEncountersRequestProtoMsg): QueryEncountersRequest {
    return QueryEncountersRequest.decode(message.value);
  },
  toProto(message: QueryEncountersRequest): Uint8Array {
    return QueryEncountersRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryEncountersRequest): QueryEncountersRequestProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.QueryEncountersRequest",
      value: QueryEncountersRequest.encode(message).finish()
    };
  }
};
function createBaseQueryEncountersResponse(): QueryEncountersResponse {
  return {
    encounters: []
  };
}
export const QueryEncountersResponse = {
  typeUrl: "/cardchain.cardchain.QueryEncountersResponse",
  encode(message: QueryEncountersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.encounters) {
      Encounter.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEncountersResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEncountersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.encounters.push(Encounter.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryEncountersResponse>): QueryEncountersResponse {
    const message = createBaseQueryEncountersResponse();
    message.encounters = object.encounters?.map(e => Encounter.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryEncountersResponseAmino): QueryEncountersResponse {
    const message = createBaseQueryEncountersResponse();
    message.encounters = object.encounters?.map(e => Encounter.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryEncountersResponse): QueryEncountersResponseAmino {
    const obj: any = {};
    if (message.encounters) {
      obj.encounters = message.encounters.map(e => e ? Encounter.toAmino(e) : undefined);
    } else {
      obj.encounters = message.encounters;
    }
    return obj;
  },
  fromAminoMsg(object: QueryEncountersResponseAminoMsg): QueryEncountersResponse {
    return QueryEncountersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEncountersResponseProtoMsg): QueryEncountersResponse {
    return QueryEncountersResponse.decode(message.value);
  },
  toProto(message: QueryEncountersResponse): Uint8Array {
    return QueryEncountersResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryEncountersResponse): QueryEncountersResponseProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.QueryEncountersResponse",
      value: QueryEncountersResponse.encode(message).finish()
    };
  }
};
function createBaseQueryEncounterWithImageRequest(): QueryEncounterWithImageRequest {
  return {
    encounterId: BigInt(0)
  };
}
export const QueryEncounterWithImageRequest = {
  typeUrl: "/cardchain.cardchain.QueryEncounterWithImageRequest",
  encode(message: QueryEncounterWithImageRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.encounterId !== BigInt(0)) {
      writer.uint32(8).uint64(message.encounterId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEncounterWithImageRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEncounterWithImageRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.encounterId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryEncounterWithImageRequest>): QueryEncounterWithImageRequest {
    const message = createBaseQueryEncounterWithImageRequest();
    message.encounterId = object.encounterId !== undefined && object.encounterId !== null ? BigInt(object.encounterId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryEncounterWithImageRequestAmino): QueryEncounterWithImageRequest {
    const message = createBaseQueryEncounterWithImageRequest();
    if (object.encounterId !== undefined && object.encounterId !== null) {
      message.encounterId = BigInt(object.encounterId);
    }
    return message;
  },
  toAmino(message: QueryEncounterWithImageRequest): QueryEncounterWithImageRequestAmino {
    const obj: any = {};
    obj.encounterId = message.encounterId !== BigInt(0) ? message.encounterId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryEncounterWithImageRequestAminoMsg): QueryEncounterWithImageRequest {
    return QueryEncounterWithImageRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEncounterWithImageRequestProtoMsg): QueryEncounterWithImageRequest {
    return QueryEncounterWithImageRequest.decode(message.value);
  },
  toProto(message: QueryEncounterWithImageRequest): Uint8Array {
    return QueryEncounterWithImageRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryEncounterWithImageRequest): QueryEncounterWithImageRequestProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.QueryEncounterWithImageRequest",
      value: QueryEncounterWithImageRequest.encode(message).finish()
    };
  }
};
function createBaseQueryEncounterWithImageResponse(): QueryEncounterWithImageResponse {
  return {
    encounter: undefined
  };
}
export const QueryEncounterWithImageResponse = {
  typeUrl: "/cardchain.cardchain.QueryEncounterWithImageResponse",
  encode(message: QueryEncounterWithImageResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.encounter !== undefined) {
      EncounterWithImage.encode(message.encounter, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEncounterWithImageResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEncounterWithImageResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.encounter = EncounterWithImage.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryEncounterWithImageResponse>): QueryEncounterWithImageResponse {
    const message = createBaseQueryEncounterWithImageResponse();
    message.encounter = object.encounter !== undefined && object.encounter !== null ? EncounterWithImage.fromPartial(object.encounter) : undefined;
    return message;
  },
  fromAmino(object: QueryEncounterWithImageResponseAmino): QueryEncounterWithImageResponse {
    const message = createBaseQueryEncounterWithImageResponse();
    if (object.encounter !== undefined && object.encounter !== null) {
      message.encounter = EncounterWithImage.fromAmino(object.encounter);
    }
    return message;
  },
  toAmino(message: QueryEncounterWithImageResponse): QueryEncounterWithImageResponseAmino {
    const obj: any = {};
    obj.encounter = message.encounter ? EncounterWithImage.toAmino(message.encounter) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryEncounterWithImageResponseAminoMsg): QueryEncounterWithImageResponse {
    return QueryEncounterWithImageResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEncounterWithImageResponseProtoMsg): QueryEncounterWithImageResponse {
    return QueryEncounterWithImageResponse.decode(message.value);
  },
  toProto(message: QueryEncounterWithImageResponse): Uint8Array {
    return QueryEncounterWithImageResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryEncounterWithImageResponse): QueryEncounterWithImageResponseProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.QueryEncounterWithImageResponse",
      value: QueryEncounterWithImageResponse.encode(message).finish()
    };
  }
};
function createBaseQueryEncountersWithImageRequest(): QueryEncountersWithImageRequest {
  return {};
}
export const QueryEncountersWithImageRequest = {
  typeUrl: "/cardchain.cardchain.QueryEncountersWithImageRequest",
  encode(_: QueryEncountersWithImageRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEncountersWithImageRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEncountersWithImageRequest();
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
  fromPartial(_: Partial<QueryEncountersWithImageRequest>): QueryEncountersWithImageRequest {
    const message = createBaseQueryEncountersWithImageRequest();
    return message;
  },
  fromAmino(_: QueryEncountersWithImageRequestAmino): QueryEncountersWithImageRequest {
    const message = createBaseQueryEncountersWithImageRequest();
    return message;
  },
  toAmino(_: QueryEncountersWithImageRequest): QueryEncountersWithImageRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryEncountersWithImageRequestAminoMsg): QueryEncountersWithImageRequest {
    return QueryEncountersWithImageRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEncountersWithImageRequestProtoMsg): QueryEncountersWithImageRequest {
    return QueryEncountersWithImageRequest.decode(message.value);
  },
  toProto(message: QueryEncountersWithImageRequest): Uint8Array {
    return QueryEncountersWithImageRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryEncountersWithImageRequest): QueryEncountersWithImageRequestProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.QueryEncountersWithImageRequest",
      value: QueryEncountersWithImageRequest.encode(message).finish()
    };
  }
};
function createBaseQueryEncountersWithImageResponse(): QueryEncountersWithImageResponse {
  return {
    encounters: []
  };
}
export const QueryEncountersWithImageResponse = {
  typeUrl: "/cardchain.cardchain.QueryEncountersWithImageResponse",
  encode(message: QueryEncountersWithImageResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.encounters) {
      EncounterWithImage.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEncountersWithImageResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEncountersWithImageResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.encounters.push(EncounterWithImage.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryEncountersWithImageResponse>): QueryEncountersWithImageResponse {
    const message = createBaseQueryEncountersWithImageResponse();
    message.encounters = object.encounters?.map(e => EncounterWithImage.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryEncountersWithImageResponseAmino): QueryEncountersWithImageResponse {
    const message = createBaseQueryEncountersWithImageResponse();
    message.encounters = object.encounters?.map(e => EncounterWithImage.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryEncountersWithImageResponse): QueryEncountersWithImageResponseAmino {
    const obj: any = {};
    if (message.encounters) {
      obj.encounters = message.encounters.map(e => e ? EncounterWithImage.toAmino(e) : undefined);
    } else {
      obj.encounters = message.encounters;
    }
    return obj;
  },
  fromAminoMsg(object: QueryEncountersWithImageResponseAminoMsg): QueryEncountersWithImageResponse {
    return QueryEncountersWithImageResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEncountersWithImageResponseProtoMsg): QueryEncountersWithImageResponse {
    return QueryEncountersWithImageResponse.decode(message.value);
  },
  toProto(message: QueryEncountersWithImageResponse): Uint8Array {
    return QueryEncountersWithImageResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryEncountersWithImageResponse): QueryEncountersWithImageResponseProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.QueryEncountersWithImageResponse",
      value: QueryEncountersWithImageResponse.encode(message).finish()
    };
  }
};
function createBaseQueryCardchainInfoRequest(): QueryCardchainInfoRequest {
  return {};
}
export const QueryCardchainInfoRequest = {
  typeUrl: "/cardchain.cardchain.QueryCardchainInfoRequest",
  encode(_: QueryCardchainInfoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCardchainInfoRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCardchainInfoRequest();
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
  fromPartial(_: Partial<QueryCardchainInfoRequest>): QueryCardchainInfoRequest {
    const message = createBaseQueryCardchainInfoRequest();
    return message;
  },
  fromAmino(_: QueryCardchainInfoRequestAmino): QueryCardchainInfoRequest {
    const message = createBaseQueryCardchainInfoRequest();
    return message;
  },
  toAmino(_: QueryCardchainInfoRequest): QueryCardchainInfoRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryCardchainInfoRequestAminoMsg): QueryCardchainInfoRequest {
    return QueryCardchainInfoRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCardchainInfoRequestProtoMsg): QueryCardchainInfoRequest {
    return QueryCardchainInfoRequest.decode(message.value);
  },
  toProto(message: QueryCardchainInfoRequest): Uint8Array {
    return QueryCardchainInfoRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCardchainInfoRequest): QueryCardchainInfoRequestProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.QueryCardchainInfoRequest",
      value: QueryCardchainInfoRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCardchainInfoResponse(): QueryCardchainInfoResponse {
  return {
    cardAuctionPrice: Coin.fromPartial({}),
    activeSets: [],
    cardsNumber: BigInt(0),
    matchesNumber: BigInt(0),
    sellOffersNumber: BigInt(0),
    councilsNumber: BigInt(0),
    lastCardModified: BigInt(0)
  };
}
export const QueryCardchainInfoResponse = {
  typeUrl: "/cardchain.cardchain.QueryCardchainInfoResponse",
  encode(message: QueryCardchainInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.cardAuctionPrice !== undefined) {
      Coin.encode(message.cardAuctionPrice, writer.uint32(10).fork()).ldelim();
    }
    writer.uint32(18).fork();
    for (const v of message.activeSets) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.cardsNumber !== BigInt(0)) {
      writer.uint32(24).uint64(message.cardsNumber);
    }
    if (message.matchesNumber !== BigInt(0)) {
      writer.uint32(32).uint64(message.matchesNumber);
    }
    if (message.sellOffersNumber !== BigInt(0)) {
      writer.uint32(40).uint64(message.sellOffersNumber);
    }
    if (message.councilsNumber !== BigInt(0)) {
      writer.uint32(48).uint64(message.councilsNumber);
    }
    if (message.lastCardModified !== BigInt(0)) {
      writer.uint32(56).uint64(message.lastCardModified);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCardchainInfoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCardchainInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cardAuctionPrice = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.activeSets.push(reader.uint64());
            }
          } else {
            message.activeSets.push(reader.uint64());
          }
          break;
        case 3:
          message.cardsNumber = reader.uint64();
          break;
        case 4:
          message.matchesNumber = reader.uint64();
          break;
        case 5:
          message.sellOffersNumber = reader.uint64();
          break;
        case 6:
          message.councilsNumber = reader.uint64();
          break;
        case 7:
          message.lastCardModified = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryCardchainInfoResponse>): QueryCardchainInfoResponse {
    const message = createBaseQueryCardchainInfoResponse();
    message.cardAuctionPrice = object.cardAuctionPrice !== undefined && object.cardAuctionPrice !== null ? Coin.fromPartial(object.cardAuctionPrice) : undefined;
    message.activeSets = object.activeSets?.map(e => BigInt(e.toString())) || [];
    message.cardsNumber = object.cardsNumber !== undefined && object.cardsNumber !== null ? BigInt(object.cardsNumber.toString()) : BigInt(0);
    message.matchesNumber = object.matchesNumber !== undefined && object.matchesNumber !== null ? BigInt(object.matchesNumber.toString()) : BigInt(0);
    message.sellOffersNumber = object.sellOffersNumber !== undefined && object.sellOffersNumber !== null ? BigInt(object.sellOffersNumber.toString()) : BigInt(0);
    message.councilsNumber = object.councilsNumber !== undefined && object.councilsNumber !== null ? BigInt(object.councilsNumber.toString()) : BigInt(0);
    message.lastCardModified = object.lastCardModified !== undefined && object.lastCardModified !== null ? BigInt(object.lastCardModified.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryCardchainInfoResponseAmino): QueryCardchainInfoResponse {
    const message = createBaseQueryCardchainInfoResponse();
    if (object.cardAuctionPrice !== undefined && object.cardAuctionPrice !== null) {
      message.cardAuctionPrice = Coin.fromAmino(object.cardAuctionPrice);
    }
    message.activeSets = object.activeSets?.map(e => BigInt(e)) || [];
    if (object.cardsNumber !== undefined && object.cardsNumber !== null) {
      message.cardsNumber = BigInt(object.cardsNumber);
    }
    if (object.matchesNumber !== undefined && object.matchesNumber !== null) {
      message.matchesNumber = BigInt(object.matchesNumber);
    }
    if (object.sellOffersNumber !== undefined && object.sellOffersNumber !== null) {
      message.sellOffersNumber = BigInt(object.sellOffersNumber);
    }
    if (object.councilsNumber !== undefined && object.councilsNumber !== null) {
      message.councilsNumber = BigInt(object.councilsNumber);
    }
    if (object.lastCardModified !== undefined && object.lastCardModified !== null) {
      message.lastCardModified = BigInt(object.lastCardModified);
    }
    return message;
  },
  toAmino(message: QueryCardchainInfoResponse): QueryCardchainInfoResponseAmino {
    const obj: any = {};
    obj.cardAuctionPrice = message.cardAuctionPrice ? Coin.toAmino(message.cardAuctionPrice) : undefined;
    if (message.activeSets) {
      obj.activeSets = message.activeSets.map(e => e.toString());
    } else {
      obj.activeSets = message.activeSets;
    }
    obj.cardsNumber = message.cardsNumber !== BigInt(0) ? message.cardsNumber?.toString() : undefined;
    obj.matchesNumber = message.matchesNumber !== BigInt(0) ? message.matchesNumber?.toString() : undefined;
    obj.sellOffersNumber = message.sellOffersNumber !== BigInt(0) ? message.sellOffersNumber?.toString() : undefined;
    obj.councilsNumber = message.councilsNumber !== BigInt(0) ? message.councilsNumber?.toString() : undefined;
    obj.lastCardModified = message.lastCardModified !== BigInt(0) ? message.lastCardModified?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCardchainInfoResponseAminoMsg): QueryCardchainInfoResponse {
    return QueryCardchainInfoResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCardchainInfoResponseProtoMsg): QueryCardchainInfoResponse {
    return QueryCardchainInfoResponse.decode(message.value);
  },
  toProto(message: QueryCardchainInfoResponse): Uint8Array {
    return QueryCardchainInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCardchainInfoResponse): QueryCardchainInfoResponseProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.QueryCardchainInfoResponse",
      value: QueryCardchainInfoResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySetRarityDistributionRequest(): QuerySetRarityDistributionRequest {
  return {
    setId: BigInt(0)
  };
}
export const QuerySetRarityDistributionRequest = {
  typeUrl: "/cardchain.cardchain.QuerySetRarityDistributionRequest",
  encode(message: QuerySetRarityDistributionRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.setId !== BigInt(0)) {
      writer.uint32(8).uint64(message.setId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySetRarityDistributionRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySetRarityDistributionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.setId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QuerySetRarityDistributionRequest>): QuerySetRarityDistributionRequest {
    const message = createBaseQuerySetRarityDistributionRequest();
    message.setId = object.setId !== undefined && object.setId !== null ? BigInt(object.setId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QuerySetRarityDistributionRequestAmino): QuerySetRarityDistributionRequest {
    const message = createBaseQuerySetRarityDistributionRequest();
    if (object.setId !== undefined && object.setId !== null) {
      message.setId = BigInt(object.setId);
    }
    return message;
  },
  toAmino(message: QuerySetRarityDistributionRequest): QuerySetRarityDistributionRequestAmino {
    const obj: any = {};
    obj.setId = message.setId !== BigInt(0) ? message.setId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySetRarityDistributionRequestAminoMsg): QuerySetRarityDistributionRequest {
    return QuerySetRarityDistributionRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySetRarityDistributionRequestProtoMsg): QuerySetRarityDistributionRequest {
    return QuerySetRarityDistributionRequest.decode(message.value);
  },
  toProto(message: QuerySetRarityDistributionRequest): Uint8Array {
    return QuerySetRarityDistributionRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySetRarityDistributionRequest): QuerySetRarityDistributionRequestProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.QuerySetRarityDistributionRequest",
      value: QuerySetRarityDistributionRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySetRarityDistributionResponse(): QuerySetRarityDistributionResponse {
  return {
    current: [],
    wanted: []
  };
}
export const QuerySetRarityDistributionResponse = {
  typeUrl: "/cardchain.cardchain.QuerySetRarityDistributionResponse",
  encode(message: QuerySetRarityDistributionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.current) {
      writer.uint64(v);
    }
    writer.ldelim();
    writer.uint32(18).fork();
    for (const v of message.wanted) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySetRarityDistributionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySetRarityDistributionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.current.push(reader.uint64());
            }
          } else {
            message.current.push(reader.uint64());
          }
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.wanted.push(reader.uint64());
            }
          } else {
            message.wanted.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QuerySetRarityDistributionResponse>): QuerySetRarityDistributionResponse {
    const message = createBaseQuerySetRarityDistributionResponse();
    message.current = object.current?.map(e => BigInt(e.toString())) || [];
    message.wanted = object.wanted?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object: QuerySetRarityDistributionResponseAmino): QuerySetRarityDistributionResponse {
    const message = createBaseQuerySetRarityDistributionResponse();
    message.current = object.current?.map(e => BigInt(e)) || [];
    message.wanted = object.wanted?.map(e => BigInt(e)) || [];
    return message;
  },
  toAmino(message: QuerySetRarityDistributionResponse): QuerySetRarityDistributionResponseAmino {
    const obj: any = {};
    if (message.current) {
      obj.current = message.current.map(e => e.toString());
    } else {
      obj.current = message.current;
    }
    if (message.wanted) {
      obj.wanted = message.wanted.map(e => e.toString());
    } else {
      obj.wanted = message.wanted;
    }
    return obj;
  },
  fromAminoMsg(object: QuerySetRarityDistributionResponseAminoMsg): QuerySetRarityDistributionResponse {
    return QuerySetRarityDistributionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySetRarityDistributionResponseProtoMsg): QuerySetRarityDistributionResponse {
    return QuerySetRarityDistributionResponse.decode(message.value);
  },
  toProto(message: QuerySetRarityDistributionResponse): Uint8Array {
    return QuerySetRarityDistributionResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySetRarityDistributionResponse): QuerySetRarityDistributionResponseProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.QuerySetRarityDistributionResponse",
      value: QuerySetRarityDistributionResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAccountFromZealyRequest(): QueryAccountFromZealyRequest {
  return {
    zealyId: ""
  };
}
export const QueryAccountFromZealyRequest = {
  typeUrl: "/cardchain.cardchain.QueryAccountFromZealyRequest",
  encode(message: QueryAccountFromZealyRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.zealyId !== "") {
      writer.uint32(10).string(message.zealyId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAccountFromZealyRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountFromZealyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.zealyId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAccountFromZealyRequest>): QueryAccountFromZealyRequest {
    const message = createBaseQueryAccountFromZealyRequest();
    message.zealyId = object.zealyId ?? "";
    return message;
  },
  fromAmino(object: QueryAccountFromZealyRequestAmino): QueryAccountFromZealyRequest {
    const message = createBaseQueryAccountFromZealyRequest();
    if (object.zealyId !== undefined && object.zealyId !== null) {
      message.zealyId = object.zealyId;
    }
    return message;
  },
  toAmino(message: QueryAccountFromZealyRequest): QueryAccountFromZealyRequestAmino {
    const obj: any = {};
    obj.zealyId = message.zealyId === "" ? undefined : message.zealyId;
    return obj;
  },
  fromAminoMsg(object: QueryAccountFromZealyRequestAminoMsg): QueryAccountFromZealyRequest {
    return QueryAccountFromZealyRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAccountFromZealyRequestProtoMsg): QueryAccountFromZealyRequest {
    return QueryAccountFromZealyRequest.decode(message.value);
  },
  toProto(message: QueryAccountFromZealyRequest): Uint8Array {
    return QueryAccountFromZealyRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAccountFromZealyRequest): QueryAccountFromZealyRequestProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.QueryAccountFromZealyRequest",
      value: QueryAccountFromZealyRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAccountFromZealyResponse(): QueryAccountFromZealyResponse {
  return {
    address: ""
  };
}
export const QueryAccountFromZealyResponse = {
  typeUrl: "/cardchain.cardchain.QueryAccountFromZealyResponse",
  encode(message: QueryAccountFromZealyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAccountFromZealyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountFromZealyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAccountFromZealyResponse>): QueryAccountFromZealyResponse {
    const message = createBaseQueryAccountFromZealyResponse();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryAccountFromZealyResponseAmino): QueryAccountFromZealyResponse {
    const message = createBaseQueryAccountFromZealyResponse();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryAccountFromZealyResponse): QueryAccountFromZealyResponseAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryAccountFromZealyResponseAminoMsg): QueryAccountFromZealyResponse {
    return QueryAccountFromZealyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAccountFromZealyResponseProtoMsg): QueryAccountFromZealyResponse {
    return QueryAccountFromZealyResponse.decode(message.value);
  },
  toProto(message: QueryAccountFromZealyResponse): Uint8Array {
    return QueryAccountFromZealyResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAccountFromZealyResponse): QueryAccountFromZealyResponseProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.QueryAccountFromZealyResponse",
      value: QueryAccountFromZealyResponse.encode(message).finish()
    };
  }
};
function createBaseQueryVotingResultsRequest(): QueryVotingResultsRequest {
  return {};
}
export const QueryVotingResultsRequest = {
  typeUrl: "/cardchain.cardchain.QueryVotingResultsRequest",
  encode(_: QueryVotingResultsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVotingResultsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVotingResultsRequest();
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
  fromPartial(_: Partial<QueryVotingResultsRequest>): QueryVotingResultsRequest {
    const message = createBaseQueryVotingResultsRequest();
    return message;
  },
  fromAmino(_: QueryVotingResultsRequestAmino): QueryVotingResultsRequest {
    const message = createBaseQueryVotingResultsRequest();
    return message;
  },
  toAmino(_: QueryVotingResultsRequest): QueryVotingResultsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryVotingResultsRequestAminoMsg): QueryVotingResultsRequest {
    return QueryVotingResultsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVotingResultsRequestProtoMsg): QueryVotingResultsRequest {
    return QueryVotingResultsRequest.decode(message.value);
  },
  toProto(message: QueryVotingResultsRequest): Uint8Array {
    return QueryVotingResultsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryVotingResultsRequest): QueryVotingResultsRequestProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.QueryVotingResultsRequest",
      value: QueryVotingResultsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryVotingResultsResponse(): QueryVotingResultsResponse {
  return {
    lastVotingResults: undefined
  };
}
export const QueryVotingResultsResponse = {
  typeUrl: "/cardchain.cardchain.QueryVotingResultsResponse",
  encode(message: QueryVotingResultsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.lastVotingResults !== undefined) {
      VotingResults.encode(message.lastVotingResults, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVotingResultsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVotingResultsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lastVotingResults = VotingResults.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryVotingResultsResponse>): QueryVotingResultsResponse {
    const message = createBaseQueryVotingResultsResponse();
    message.lastVotingResults = object.lastVotingResults !== undefined && object.lastVotingResults !== null ? VotingResults.fromPartial(object.lastVotingResults) : undefined;
    return message;
  },
  fromAmino(object: QueryVotingResultsResponseAmino): QueryVotingResultsResponse {
    const message = createBaseQueryVotingResultsResponse();
    if (object.lastVotingResults !== undefined && object.lastVotingResults !== null) {
      message.lastVotingResults = VotingResults.fromAmino(object.lastVotingResults);
    }
    return message;
  },
  toAmino(message: QueryVotingResultsResponse): QueryVotingResultsResponseAmino {
    const obj: any = {};
    obj.lastVotingResults = message.lastVotingResults ? VotingResults.toAmino(message.lastVotingResults) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryVotingResultsResponseAminoMsg): QueryVotingResultsResponse {
    return QueryVotingResultsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVotingResultsResponseProtoMsg): QueryVotingResultsResponse {
    return QueryVotingResultsResponse.decode(message.value);
  },
  toProto(message: QueryVotingResultsResponse): Uint8Array {
    return QueryVotingResultsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryVotingResultsResponse): QueryVotingResultsResponseProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.QueryVotingResultsResponse",
      value: QueryVotingResultsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryMatchesRequest(): QueryMatchesRequest {
  return {
    timestampDown: BigInt(0),
    timestampUp: BigInt(0),
    containsUsers: [],
    reporter: "",
    outcome: 0,
    cardsPlayed: []
  };
}
export const QueryMatchesRequest = {
  typeUrl: "/cardchain.cardchain.QueryMatchesRequest",
  encode(message: QueryMatchesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.timestampDown !== BigInt(0)) {
      writer.uint32(8).uint64(message.timestampDown);
    }
    if (message.timestampUp !== BigInt(0)) {
      writer.uint32(16).uint64(message.timestampUp);
    }
    for (const v of message.containsUsers) {
      writer.uint32(26).string(v!);
    }
    if (message.reporter !== "") {
      writer.uint32(34).string(message.reporter);
    }
    if (message.outcome !== 0) {
      writer.uint32(40).int32(message.outcome);
    }
    writer.uint32(50).fork();
    for (const v of message.cardsPlayed) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMatchesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMatchesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timestampDown = reader.uint64();
          break;
        case 2:
          message.timestampUp = reader.uint64();
          break;
        case 3:
          message.containsUsers.push(reader.string());
          break;
        case 4:
          message.reporter = reader.string();
          break;
        case 5:
          message.outcome = reader.int32() as any;
          break;
        case 6:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.cardsPlayed.push(reader.uint64());
            }
          } else {
            message.cardsPlayed.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryMatchesRequest>): QueryMatchesRequest {
    const message = createBaseQueryMatchesRequest();
    message.timestampDown = object.timestampDown !== undefined && object.timestampDown !== null ? BigInt(object.timestampDown.toString()) : BigInt(0);
    message.timestampUp = object.timestampUp !== undefined && object.timestampUp !== null ? BigInt(object.timestampUp.toString()) : BigInt(0);
    message.containsUsers = object.containsUsers?.map(e => e) || [];
    message.reporter = object.reporter ?? "";
    message.outcome = object.outcome ?? 0;
    message.cardsPlayed = object.cardsPlayed?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object: QueryMatchesRequestAmino): QueryMatchesRequest {
    const message = createBaseQueryMatchesRequest();
    if (object.timestampDown !== undefined && object.timestampDown !== null) {
      message.timestampDown = BigInt(object.timestampDown);
    }
    if (object.timestampUp !== undefined && object.timestampUp !== null) {
      message.timestampUp = BigInt(object.timestampUp);
    }
    message.containsUsers = object.containsUsers?.map(e => e) || [];
    if (object.reporter !== undefined && object.reporter !== null) {
      message.reporter = object.reporter;
    }
    if (object.outcome !== undefined && object.outcome !== null) {
      message.outcome = object.outcome;
    }
    message.cardsPlayed = object.cardsPlayed?.map(e => BigInt(e)) || [];
    return message;
  },
  toAmino(message: QueryMatchesRequest): QueryMatchesRequestAmino {
    const obj: any = {};
    obj.timestampDown = message.timestampDown !== BigInt(0) ? message.timestampDown?.toString() : undefined;
    obj.timestampUp = message.timestampUp !== BigInt(0) ? message.timestampUp?.toString() : undefined;
    if (message.containsUsers) {
      obj.containsUsers = message.containsUsers.map(e => e);
    } else {
      obj.containsUsers = message.containsUsers;
    }
    obj.reporter = message.reporter === "" ? undefined : message.reporter;
    obj.outcome = message.outcome === 0 ? undefined : message.outcome;
    if (message.cardsPlayed) {
      obj.cardsPlayed = message.cardsPlayed.map(e => e.toString());
    } else {
      obj.cardsPlayed = message.cardsPlayed;
    }
    return obj;
  },
  fromAminoMsg(object: QueryMatchesRequestAminoMsg): QueryMatchesRequest {
    return QueryMatchesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMatchesRequestProtoMsg): QueryMatchesRequest {
    return QueryMatchesRequest.decode(message.value);
  },
  toProto(message: QueryMatchesRequest): Uint8Array {
    return QueryMatchesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryMatchesRequest): QueryMatchesRequestProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.QueryMatchesRequest",
      value: QueryMatchesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryMatchesResponse(): QueryMatchesResponse {
  return {
    matches: [],
    matchIds: []
  };
}
export const QueryMatchesResponse = {
  typeUrl: "/cardchain.cardchain.QueryMatchesResponse",
  encode(message: QueryMatchesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.matches) {
      Match.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    writer.uint32(18).fork();
    for (const v of message.matchIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMatchesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMatchesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.matches.push(Match.decode(reader, reader.uint32()));
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.matchIds.push(reader.uint64());
            }
          } else {
            message.matchIds.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryMatchesResponse>): QueryMatchesResponse {
    const message = createBaseQueryMatchesResponse();
    message.matches = object.matches?.map(e => Match.fromPartial(e)) || [];
    message.matchIds = object.matchIds?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object: QueryMatchesResponseAmino): QueryMatchesResponse {
    const message = createBaseQueryMatchesResponse();
    message.matches = object.matches?.map(e => Match.fromAmino(e)) || [];
    message.matchIds = object.matchIds?.map(e => BigInt(e)) || [];
    return message;
  },
  toAmino(message: QueryMatchesResponse): QueryMatchesResponseAmino {
    const obj: any = {};
    if (message.matches) {
      obj.matches = message.matches.map(e => e ? Match.toAmino(e) : undefined);
    } else {
      obj.matches = message.matches;
    }
    if (message.matchIds) {
      obj.matchIds = message.matchIds.map(e => e.toString());
    } else {
      obj.matchIds = message.matchIds;
    }
    return obj;
  },
  fromAminoMsg(object: QueryMatchesResponseAminoMsg): QueryMatchesResponse {
    return QueryMatchesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMatchesResponseProtoMsg): QueryMatchesResponse {
    return QueryMatchesResponse.decode(message.value);
  },
  toProto(message: QueryMatchesResponse): Uint8Array {
    return QueryMatchesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryMatchesResponse): QueryMatchesResponseProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.QueryMatchesResponse",
      value: QueryMatchesResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySetsRequest(): QuerySetsRequest {
  return {
    status: 0,
    contributors: [],
    containsCards: [],
    owner: ""
  };
}
export const QuerySetsRequest = {
  typeUrl: "/cardchain.cardchain.QuerySetsRequest",
  encode(message: QuerySetsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    for (const v of message.contributors) {
      writer.uint32(18).string(v!);
    }
    writer.uint32(26).fork();
    for (const v of message.containsCards) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.owner !== "") {
      writer.uint32(34).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySetsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySetsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.int32() as any;
          break;
        case 2:
          message.contributors.push(reader.string());
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.containsCards.push(reader.uint64());
            }
          } else {
            message.containsCards.push(reader.uint64());
          }
          break;
        case 4:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QuerySetsRequest>): QuerySetsRequest {
    const message = createBaseQuerySetsRequest();
    message.status = object.status ?? 0;
    message.contributors = object.contributors?.map(e => e) || [];
    message.containsCards = object.containsCards?.map(e => BigInt(e.toString())) || [];
    message.owner = object.owner ?? "";
    return message;
  },
  fromAmino(object: QuerySetsRequestAmino): QuerySetsRequest {
    const message = createBaseQuerySetsRequest();
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    message.contributors = object.contributors?.map(e => e) || [];
    message.containsCards = object.containsCards?.map(e => BigInt(e)) || [];
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    return message;
  },
  toAmino(message: QuerySetsRequest): QuerySetsRequestAmino {
    const obj: any = {};
    obj.status = message.status === 0 ? undefined : message.status;
    if (message.contributors) {
      obj.contributors = message.contributors.map(e => e);
    } else {
      obj.contributors = message.contributors;
    }
    if (message.containsCards) {
      obj.containsCards = message.containsCards.map(e => e.toString());
    } else {
      obj.containsCards = message.containsCards;
    }
    obj.owner = message.owner === "" ? undefined : message.owner;
    return obj;
  },
  fromAminoMsg(object: QuerySetsRequestAminoMsg): QuerySetsRequest {
    return QuerySetsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySetsRequestProtoMsg): QuerySetsRequest {
    return QuerySetsRequest.decode(message.value);
  },
  toProto(message: QuerySetsRequest): Uint8Array {
    return QuerySetsRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySetsRequest): QuerySetsRequestProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.QuerySetsRequest",
      value: QuerySetsRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySetsResponse(): QuerySetsResponse {
  return {
    setIds: []
  };
}
export const QuerySetsResponse = {
  typeUrl: "/cardchain.cardchain.QuerySetsResponse",
  encode(message: QuerySetsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.setIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySetsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySetsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.setIds.push(reader.uint64());
            }
          } else {
            message.setIds.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QuerySetsResponse>): QuerySetsResponse {
    const message = createBaseQuerySetsResponse();
    message.setIds = object.setIds?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object: QuerySetsResponseAmino): QuerySetsResponse {
    const message = createBaseQuerySetsResponse();
    message.setIds = object.setIds?.map(e => BigInt(e)) || [];
    return message;
  },
  toAmino(message: QuerySetsResponse): QuerySetsResponseAmino {
    const obj: any = {};
    if (message.setIds) {
      obj.setIds = message.setIds.map(e => e.toString());
    } else {
      obj.setIds = message.setIds;
    }
    return obj;
  },
  fromAminoMsg(object: QuerySetsResponseAminoMsg): QuerySetsResponse {
    return QuerySetsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySetsResponseProtoMsg): QuerySetsResponse {
    return QuerySetsResponse.decode(message.value);
  },
  toProto(message: QuerySetsResponse): Uint8Array {
    return QuerySetsResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySetsResponse): QuerySetsResponseProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.QuerySetsResponse",
      value: QuerySetsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryCardContentRequest(): QueryCardContentRequest {
  return {
    cardId: BigInt(0)
  };
}
export const QueryCardContentRequest = {
  typeUrl: "/cardchain.cardchain.QueryCardContentRequest",
  encode(message: QueryCardContentRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.cardId !== BigInt(0)) {
      writer.uint32(8).uint64(message.cardId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCardContentRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCardContentRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cardId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryCardContentRequest>): QueryCardContentRequest {
    const message = createBaseQueryCardContentRequest();
    message.cardId = object.cardId !== undefined && object.cardId !== null ? BigInt(object.cardId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryCardContentRequestAmino): QueryCardContentRequest {
    const message = createBaseQueryCardContentRequest();
    if (object.cardId !== undefined && object.cardId !== null) {
      message.cardId = BigInt(object.cardId);
    }
    return message;
  },
  toAmino(message: QueryCardContentRequest): QueryCardContentRequestAmino {
    const obj: any = {};
    obj.cardId = message.cardId !== BigInt(0) ? message.cardId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCardContentRequestAminoMsg): QueryCardContentRequest {
    return QueryCardContentRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCardContentRequestProtoMsg): QueryCardContentRequest {
    return QueryCardContentRequest.decode(message.value);
  },
  toProto(message: QueryCardContentRequest): Uint8Array {
    return QueryCardContentRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCardContentRequest): QueryCardContentRequestProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.QueryCardContentRequest",
      value: QueryCardContentRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCardContentResponse(): QueryCardContentResponse {
  return {
    cardContent: undefined
  };
}
export const QueryCardContentResponse = {
  typeUrl: "/cardchain.cardchain.QueryCardContentResponse",
  encode(message: QueryCardContentResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.cardContent !== undefined) {
      CardContent.encode(message.cardContent, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCardContentResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCardContentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cardContent = CardContent.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryCardContentResponse>): QueryCardContentResponse {
    const message = createBaseQueryCardContentResponse();
    message.cardContent = object.cardContent !== undefined && object.cardContent !== null ? CardContent.fromPartial(object.cardContent) : undefined;
    return message;
  },
  fromAmino(object: QueryCardContentResponseAmino): QueryCardContentResponse {
    const message = createBaseQueryCardContentResponse();
    if (object.cardContent !== undefined && object.cardContent !== null) {
      message.cardContent = CardContent.fromAmino(object.cardContent);
    }
    return message;
  },
  toAmino(message: QueryCardContentResponse): QueryCardContentResponseAmino {
    const obj: any = {};
    obj.cardContent = message.cardContent ? CardContent.toAmino(message.cardContent) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCardContentResponseAminoMsg): QueryCardContentResponse {
    return QueryCardContentResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCardContentResponseProtoMsg): QueryCardContentResponse {
    return QueryCardContentResponse.decode(message.value);
  },
  toProto(message: QueryCardContentResponse): Uint8Array {
    return QueryCardContentResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCardContentResponse): QueryCardContentResponseProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.QueryCardContentResponse",
      value: QueryCardContentResponse.encode(message).finish()
    };
  }
};
function createBaseQueryCardContentsRequest(): QueryCardContentsRequest {
  return {
    cardIds: []
  };
}
export const QueryCardContentsRequest = {
  typeUrl: "/cardchain.cardchain.QueryCardContentsRequest",
  encode(message: QueryCardContentsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.cardIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCardContentsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCardContentsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.cardIds.push(reader.uint64());
            }
          } else {
            message.cardIds.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryCardContentsRequest>): QueryCardContentsRequest {
    const message = createBaseQueryCardContentsRequest();
    message.cardIds = object.cardIds?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object: QueryCardContentsRequestAmino): QueryCardContentsRequest {
    const message = createBaseQueryCardContentsRequest();
    message.cardIds = object.cardIds?.map(e => BigInt(e)) || [];
    return message;
  },
  toAmino(message: QueryCardContentsRequest): QueryCardContentsRequestAmino {
    const obj: any = {};
    if (message.cardIds) {
      obj.cardIds = message.cardIds.map(e => e.toString());
    } else {
      obj.cardIds = message.cardIds;
    }
    return obj;
  },
  fromAminoMsg(object: QueryCardContentsRequestAminoMsg): QueryCardContentsRequest {
    return QueryCardContentsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCardContentsRequestProtoMsg): QueryCardContentsRequest {
    return QueryCardContentsRequest.decode(message.value);
  },
  toProto(message: QueryCardContentsRequest): Uint8Array {
    return QueryCardContentsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCardContentsRequest): QueryCardContentsRequestProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.QueryCardContentsRequest",
      value: QueryCardContentsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCardContentsResponse(): QueryCardContentsResponse {
  return {
    cardContents: []
  };
}
export const QueryCardContentsResponse = {
  typeUrl: "/cardchain.cardchain.QueryCardContentsResponse",
  encode(message: QueryCardContentsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.cardContents) {
      CardContent.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCardContentsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCardContentsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cardContents.push(CardContent.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryCardContentsResponse>): QueryCardContentsResponse {
    const message = createBaseQueryCardContentsResponse();
    message.cardContents = object.cardContents?.map(e => CardContent.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryCardContentsResponseAmino): QueryCardContentsResponse {
    const message = createBaseQueryCardContentsResponse();
    message.cardContents = object.cardContents?.map(e => CardContent.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryCardContentsResponse): QueryCardContentsResponseAmino {
    const obj: any = {};
    if (message.cardContents) {
      obj.cardContents = message.cardContents.map(e => e ? CardContent.toAmino(e) : undefined);
    } else {
      obj.cardContents = message.cardContents;
    }
    return obj;
  },
  fromAminoMsg(object: QueryCardContentsResponseAminoMsg): QueryCardContentsResponse {
    return QueryCardContentsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCardContentsResponseProtoMsg): QueryCardContentsResponse {
    return QueryCardContentsResponse.decode(message.value);
  },
  toProto(message: QueryCardContentsResponse): Uint8Array {
    return QueryCardContentsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCardContentsResponse): QueryCardContentsResponseProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.QueryCardContentsResponse",
      value: QueryCardContentsResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySellOffersRequest(): QuerySellOffersRequest {
  return {
    priceDown: Coin.fromPartial({}),
    priceUp: Coin.fromPartial({}),
    seller: "",
    buyer: "",
    card: BigInt(0),
    status: 0
  };
}
export const QuerySellOffersRequest = {
  typeUrl: "/cardchain.cardchain.QuerySellOffersRequest",
  encode(message: QuerySellOffersRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.priceDown !== undefined) {
      Coin.encode(message.priceDown, writer.uint32(10).fork()).ldelim();
    }
    if (message.priceUp !== undefined) {
      Coin.encode(message.priceUp, writer.uint32(18).fork()).ldelim();
    }
    if (message.seller !== "") {
      writer.uint32(26).string(message.seller);
    }
    if (message.buyer !== "") {
      writer.uint32(34).string(message.buyer);
    }
    if (message.card !== BigInt(0)) {
      writer.uint32(40).uint64(message.card);
    }
    if (message.status !== 0) {
      writer.uint32(48).int32(message.status);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySellOffersRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySellOffersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.priceDown = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.priceUp = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.seller = reader.string();
          break;
        case 4:
          message.buyer = reader.string();
          break;
        case 5:
          message.card = reader.uint64();
          break;
        case 6:
          message.status = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QuerySellOffersRequest>): QuerySellOffersRequest {
    const message = createBaseQuerySellOffersRequest();
    message.priceDown = object.priceDown !== undefined && object.priceDown !== null ? Coin.fromPartial(object.priceDown) : undefined;
    message.priceUp = object.priceUp !== undefined && object.priceUp !== null ? Coin.fromPartial(object.priceUp) : undefined;
    message.seller = object.seller ?? "";
    message.buyer = object.buyer ?? "";
    message.card = object.card !== undefined && object.card !== null ? BigInt(object.card.toString()) : BigInt(0);
    message.status = object.status ?? 0;
    return message;
  },
  fromAmino(object: QuerySellOffersRequestAmino): QuerySellOffersRequest {
    const message = createBaseQuerySellOffersRequest();
    if (object.priceDown !== undefined && object.priceDown !== null) {
      message.priceDown = Coin.fromAmino(object.priceDown);
    }
    if (object.priceUp !== undefined && object.priceUp !== null) {
      message.priceUp = Coin.fromAmino(object.priceUp);
    }
    if (object.seller !== undefined && object.seller !== null) {
      message.seller = object.seller;
    }
    if (object.buyer !== undefined && object.buyer !== null) {
      message.buyer = object.buyer;
    }
    if (object.card !== undefined && object.card !== null) {
      message.card = BigInt(object.card);
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    return message;
  },
  toAmino(message: QuerySellOffersRequest): QuerySellOffersRequestAmino {
    const obj: any = {};
    obj.priceDown = message.priceDown ? Coin.toAmino(message.priceDown) : undefined;
    obj.priceUp = message.priceUp ? Coin.toAmino(message.priceUp) : undefined;
    obj.seller = message.seller === "" ? undefined : message.seller;
    obj.buyer = message.buyer === "" ? undefined : message.buyer;
    obj.card = message.card !== BigInt(0) ? message.card?.toString() : undefined;
    obj.status = message.status === 0 ? undefined : message.status;
    return obj;
  },
  fromAminoMsg(object: QuerySellOffersRequestAminoMsg): QuerySellOffersRequest {
    return QuerySellOffersRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySellOffersRequestProtoMsg): QuerySellOffersRequest {
    return QuerySellOffersRequest.decode(message.value);
  },
  toProto(message: QuerySellOffersRequest): Uint8Array {
    return QuerySellOffersRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySellOffersRequest): QuerySellOffersRequestProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.QuerySellOffersRequest",
      value: QuerySellOffersRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySellOffersResponse(): QuerySellOffersResponse {
  return {
    sellOffers: [],
    sellOfferIds: []
  };
}
export const QuerySellOffersResponse = {
  typeUrl: "/cardchain.cardchain.QuerySellOffersResponse",
  encode(message: QuerySellOffersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.sellOffers) {
      SellOffer.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    writer.uint32(18).fork();
    for (const v of message.sellOfferIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySellOffersResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySellOffersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sellOffers.push(SellOffer.decode(reader, reader.uint32()));
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.sellOfferIds.push(reader.uint64());
            }
          } else {
            message.sellOfferIds.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QuerySellOffersResponse>): QuerySellOffersResponse {
    const message = createBaseQuerySellOffersResponse();
    message.sellOffers = object.sellOffers?.map(e => SellOffer.fromPartial(e)) || [];
    message.sellOfferIds = object.sellOfferIds?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object: QuerySellOffersResponseAmino): QuerySellOffersResponse {
    const message = createBaseQuerySellOffersResponse();
    message.sellOffers = object.sellOffers?.map(e => SellOffer.fromAmino(e)) || [];
    message.sellOfferIds = object.sellOfferIds?.map(e => BigInt(e)) || [];
    return message;
  },
  toAmino(message: QuerySellOffersResponse): QuerySellOffersResponseAmino {
    const obj: any = {};
    if (message.sellOffers) {
      obj.sellOffers = message.sellOffers.map(e => e ? SellOffer.toAmino(e) : undefined);
    } else {
      obj.sellOffers = message.sellOffers;
    }
    if (message.sellOfferIds) {
      obj.sellOfferIds = message.sellOfferIds.map(e => e.toString());
    } else {
      obj.sellOfferIds = message.sellOfferIds;
    }
    return obj;
  },
  fromAminoMsg(object: QuerySellOffersResponseAminoMsg): QuerySellOffersResponse {
    return QuerySellOffersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySellOffersResponseProtoMsg): QuerySellOffersResponse {
    return QuerySellOffersResponse.decode(message.value);
  },
  toProto(message: QuerySellOffersResponse): Uint8Array {
    return QuerySellOffersResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySellOffersResponse): QuerySellOffersResponseProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.QuerySellOffersResponse",
      value: QuerySellOffersResponse.encode(message).finish()
    };
  }
};