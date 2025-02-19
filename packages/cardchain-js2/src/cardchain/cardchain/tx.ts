//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { SingleVote, SingleVoteAmino, SingleVoteSDKType } from "./voting";
import { Outcome } from "./match";
import { CardRarity } from "./card";
import { Response } from "./council";
import { BinaryReader, BinaryWriter } from "../../binary";
import { bytesFromBase64, base64FromBytes } from "../../helpers";
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
  typeUrl: "/cardchain.cardchain.MsgUpdateParams";
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
  type: "cardchain/x/cardchain/MsgUpdateParams";
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
  typeUrl: "/cardchain.cardchain.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/cardchain.cardchain.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponseSDKType {}
export interface MsgUserCreate {
  creator: string;
  newUser: string;
  alias: string;
}
export interface MsgUserCreateProtoMsg {
  typeUrl: "/cardchain.cardchain.MsgUserCreate";
  value: Uint8Array;
}
export interface MsgUserCreateAmino {
  creator?: string;
  newUser?: string;
  alias?: string;
}
export interface MsgUserCreateAminoMsg {
  type: "/cardchain.cardchain.MsgUserCreate";
  value: MsgUserCreateAmino;
}
export interface MsgUserCreateSDKType {
  creator: string;
  newUser: string;
  alias: string;
}
export interface MsgUserCreateResponse {}
export interface MsgUserCreateResponseProtoMsg {
  typeUrl: "/cardchain.cardchain.MsgUserCreateResponse";
  value: Uint8Array;
}
export interface MsgUserCreateResponseAmino {}
export interface MsgUserCreateResponseAminoMsg {
  type: "/cardchain.cardchain.MsgUserCreateResponse";
  value: MsgUserCreateResponseAmino;
}
export interface MsgUserCreateResponseSDKType {}
export interface MsgCardSchemeBuy {
  creator: string;
  bid: Coin;
}
export interface MsgCardSchemeBuyProtoMsg {
  typeUrl: "/cardchain.cardchain.MsgCardSchemeBuy";
  value: Uint8Array;
}
export interface MsgCardSchemeBuyAmino {
  creator?: string;
  bid?: CoinAmino;
}
export interface MsgCardSchemeBuyAminoMsg {
  type: "/cardchain.cardchain.MsgCardSchemeBuy";
  value: MsgCardSchemeBuyAmino;
}
export interface MsgCardSchemeBuySDKType {
  creator: string;
  bid: CoinSDKType;
}
export interface MsgCardSchemeBuyResponse {
  cardId: bigint;
}
export interface MsgCardSchemeBuyResponseProtoMsg {
  typeUrl: "/cardchain.cardchain.MsgCardSchemeBuyResponse";
  value: Uint8Array;
}
export interface MsgCardSchemeBuyResponseAmino {
  cardId?: string;
}
export interface MsgCardSchemeBuyResponseAminoMsg {
  type: "/cardchain.cardchain.MsgCardSchemeBuyResponse";
  value: MsgCardSchemeBuyResponseAmino;
}
export interface MsgCardSchemeBuyResponseSDKType {
  cardId: bigint;
}
export interface MsgCardSaveContent {
  creator: string;
  cardId: bigint;
  content: Uint8Array;
  notes: string;
  artist: string;
  balanceAnchor: boolean;
}
export interface MsgCardSaveContentProtoMsg {
  typeUrl: "/cardchain.cardchain.MsgCardSaveContent";
  value: Uint8Array;
}
export interface MsgCardSaveContentAmino {
  creator?: string;
  cardId?: string;
  content?: string;
  notes?: string;
  artist?: string;
  balanceAnchor?: boolean;
}
export interface MsgCardSaveContentAminoMsg {
  type: "/cardchain.cardchain.MsgCardSaveContent";
  value: MsgCardSaveContentAmino;
}
export interface MsgCardSaveContentSDKType {
  creator: string;
  cardId: bigint;
  content: Uint8Array;
  notes: string;
  artist: string;
  balanceAnchor: boolean;
}
export interface MsgCardSaveContentResponse {
  airdropClaimed: boolean;
}
export interface MsgCardSaveContentResponseProtoMsg {
  typeUrl: "/cardchain.cardchain.MsgCardSaveContentResponse";
  value: Uint8Array;
}
export interface MsgCardSaveContentResponseAmino {
  airdropClaimed?: boolean;
}
export interface MsgCardSaveContentResponseAminoMsg {
  type: "/cardchain.cardchain.MsgCardSaveContentResponse";
  value: MsgCardSaveContentResponseAmino;
}
export interface MsgCardSaveContentResponseSDKType {
  airdropClaimed: boolean;
}
export interface MsgCardVote {
  creator: string;
  vote?: SingleVote;
}
export interface MsgCardVoteProtoMsg {
  typeUrl: "/cardchain.cardchain.MsgCardVote";
  value: Uint8Array;
}
export interface MsgCardVoteAmino {
  creator?: string;
  vote?: SingleVoteAmino;
}
export interface MsgCardVoteAminoMsg {
  type: "/cardchain.cardchain.MsgCardVote";
  value: MsgCardVoteAmino;
}
export interface MsgCardVoteSDKType {
  creator: string;
  vote?: SingleVoteSDKType;
}
export interface MsgCardVoteResponse {
  airdropClaimed: boolean;
}
export interface MsgCardVoteResponseProtoMsg {
  typeUrl: "/cardchain.cardchain.MsgCardVoteResponse";
  value: Uint8Array;
}
export interface MsgCardVoteResponseAmino {
  airdropClaimed?: boolean;
}
export interface MsgCardVoteResponseAminoMsg {
  type: "/cardchain.cardchain.MsgCardVoteResponse";
  value: MsgCardVoteResponseAmino;
}
export interface MsgCardVoteResponseSDKType {
  airdropClaimed: boolean;
}
export interface MsgCardTransfer {
  creator: string;
  cardId: bigint;
  receiver: string;
}
export interface MsgCardTransferProtoMsg {
  typeUrl: "/cardchain.cardchain.MsgCardTransfer";
  value: Uint8Array;
}
export interface MsgCardTransferAmino {
  creator?: string;
  cardId?: string;
  receiver?: string;
}
export interface MsgCardTransferAminoMsg {
  type: "/cardchain.cardchain.MsgCardTransfer";
  value: MsgCardTransferAmino;
}
export interface MsgCardTransferSDKType {
  creator: string;
  cardId: bigint;
  receiver: string;
}
export interface MsgCardTransferResponse {}
export interface MsgCardTransferResponseProtoMsg {
  typeUrl: "/cardchain.cardchain.MsgCardTransferResponse";
  value: Uint8Array;
}
export interface MsgCardTransferResponseAmino {}
export interface MsgCardTransferResponseAminoMsg {
  type: "/cardchain.cardchain.MsgCardTransferResponse";
  value: MsgCardTransferResponseAmino;
}
export interface MsgCardTransferResponseSDKType {}
export interface MsgCardDonate {
  creator: string;
  cardId: bigint;
  amount: Coin;
}
export interface MsgCardDonateProtoMsg {
  typeUrl: "/cardchain.cardchain.MsgCardDonate";
  value: Uint8Array;
}
export interface MsgCardDonateAmino {
  creator?: string;
  cardId?: string;
  amount?: CoinAmino;
}
export interface MsgCardDonateAminoMsg {
  type: "/cardchain.cardchain.MsgCardDonate";
  value: MsgCardDonateAmino;
}
export interface MsgCardDonateSDKType {
  creator: string;
  cardId: bigint;
  amount: CoinSDKType;
}
export interface MsgCardDonateResponse {}
export interface MsgCardDonateResponseProtoMsg {
  typeUrl: "/cardchain.cardchain.MsgCardDonateResponse";
  value: Uint8Array;
}
export interface MsgCardDonateResponseAmino {}
export interface MsgCardDonateResponseAminoMsg {
  type: "/cardchain.cardchain.MsgCardDonateResponse";
  value: MsgCardDonateResponseAmino;
}
export interface MsgCardDonateResponseSDKType {}
export interface MsgCardArtworkAdd {
  creator: string;
  cardId: bigint;
  image: Uint8Array;
  fullArt: boolean;
}
export interface MsgCardArtworkAddProtoMsg {
  typeUrl: "/cardchain.cardchain.MsgCardArtworkAdd";
  value: Uint8Array;
}
export interface MsgCardArtworkAddAmino {
  creator?: string;
  cardId?: string;
  image?: string;
  fullArt?: boolean;
}
export interface MsgCardArtworkAddAminoMsg {
  type: "/cardchain.cardchain.MsgCardArtworkAdd";
  value: MsgCardArtworkAddAmino;
}
export interface MsgCardArtworkAddSDKType {
  creator: string;
  cardId: bigint;
  image: Uint8Array;
  fullArt: boolean;
}
export interface MsgCardArtworkAddResponse {}
export interface MsgCardArtworkAddResponseProtoMsg {
  typeUrl: "/cardchain.cardchain.MsgCardArtworkAddResponse";
  value: Uint8Array;
}
export interface MsgCardArtworkAddResponseAmino {}
export interface MsgCardArtworkAddResponseAminoMsg {
  type: "/cardchain.cardchain.MsgCardArtworkAddResponse";
  value: MsgCardArtworkAddResponseAmino;
}
export interface MsgCardArtworkAddResponseSDKType {}
export interface MsgCardArtistChange {
  creator: string;
  cardId: bigint;
  artist: string;
}
export interface MsgCardArtistChangeProtoMsg {
  typeUrl: "/cardchain.cardchain.MsgCardArtistChange";
  value: Uint8Array;
}
export interface MsgCardArtistChangeAmino {
  creator?: string;
  cardId?: string;
  artist?: string;
}
export interface MsgCardArtistChangeAminoMsg {
  type: "/cardchain.cardchain.MsgCardArtistChange";
  value: MsgCardArtistChangeAmino;
}
export interface MsgCardArtistChangeSDKType {
  creator: string;
  cardId: bigint;
  artist: string;
}
export interface MsgCardArtistChangeResponse {}
export interface MsgCardArtistChangeResponseProtoMsg {
  typeUrl: "/cardchain.cardchain.MsgCardArtistChangeResponse";
  value: Uint8Array;
}
export interface MsgCardArtistChangeResponseAmino {}
export interface MsgCardArtistChangeResponseAminoMsg {
  type: "/cardchain.cardchain.MsgCardArtistChangeResponse";
  value: MsgCardArtistChangeResponseAmino;
}
export interface MsgCardArtistChangeResponseSDKType {}
export interface MsgCouncilRegister {
  creator: string;
}
export interface MsgCouncilRegisterProtoMsg {
  typeUrl: "/cardchain.cardchain.MsgCouncilRegister";
  value: Uint8Array;
}
export interface MsgCouncilRegisterAmino {
  creator?: string;
}
export interface MsgCouncilRegisterAminoMsg {
  type: "/cardchain.cardchain.MsgCouncilRegister";
  value: MsgCouncilRegisterAmino;
}
export interface MsgCouncilRegisterSDKType {
  creator: string;
}
export interface MsgCouncilRegisterResponse {}
export interface MsgCouncilRegisterResponseProtoMsg {
  typeUrl: "/cardchain.cardchain.MsgCouncilRegisterResponse";
  value: Uint8Array;
}
export interface MsgCouncilRegisterResponseAmino {}
export interface MsgCouncilRegisterResponseAminoMsg {
  type: "/cardchain.cardchain.MsgCouncilRegisterResponse";
  value: MsgCouncilRegisterResponseAmino;
}
export interface MsgCouncilRegisterResponseSDKType {}
export interface MsgCouncilDeregister {
  creator: string;
}
export interface MsgCouncilDeregisterProtoMsg {
  typeUrl: "/cardchain.cardchain.MsgCouncilDeregister";
  value: Uint8Array;
}
export interface MsgCouncilDeregisterAmino {
  creator?: string;
}
export interface MsgCouncilDeregisterAminoMsg {
  type: "/cardchain.cardchain.MsgCouncilDeregister";
  value: MsgCouncilDeregisterAmino;
}
export interface MsgCouncilDeregisterSDKType {
  creator: string;
}
export interface MsgCouncilDeregisterResponse {}
export interface MsgCouncilDeregisterResponseProtoMsg {
  typeUrl: "/cardchain.cardchain.MsgCouncilDeregisterResponse";
  value: Uint8Array;
}
export interface MsgCouncilDeregisterResponseAmino {}
export interface MsgCouncilDeregisterResponseAminoMsg {
  type: "/cardchain.cardchain.MsgCouncilDeregisterResponse";
  value: MsgCouncilDeregisterResponseAmino;
}
export interface MsgCouncilDeregisterResponseSDKType {}
export interface MsgMatchReport {
  creator: string;
  matchId: bigint;
  playedCardsA: bigint[];
  playedCardsB: bigint[];
  outcome: Outcome;
}
export interface MsgMatchReportProtoMsg {
  typeUrl: "/cardchain.cardchain.MsgMatchReport";
  value: Uint8Array;
}
export interface MsgMatchReportAmino {
  creator?: string;
  matchId?: string;
  playedCardsA?: string[];
  playedCardsB?: string[];
  outcome?: Outcome;
}
export interface MsgMatchReportAminoMsg {
  type: "/cardchain.cardchain.MsgMatchReport";
  value: MsgMatchReportAmino;
}
export interface MsgMatchReportSDKType {
  creator: string;
  matchId: bigint;
  playedCardsA: bigint[];
  playedCardsB: bigint[];
  outcome: Outcome;
}
export interface MsgMatchReportResponse {}
export interface MsgMatchReportResponseProtoMsg {
  typeUrl: "/cardchain.cardchain.MsgMatchReportResponse";
  value: Uint8Array;
}
export interface MsgMatchReportResponseAmino {}
export interface MsgMatchReportResponseAminoMsg {
  type: "/cardchain.cardchain.MsgMatchReportResponse";
  value: MsgMatchReportResponseAmino;
}
export interface MsgMatchReportResponseSDKType {}
export interface MsgCouncilCreate {
  creator: string;
  cardId: bigint;
}
export interface MsgCouncilCreateProtoMsg {
  typeUrl: "/cardchain.cardchain.MsgCouncilCreate";
  value: Uint8Array;
}
export interface MsgCouncilCreateAmino {
  creator?: string;
  cardId?: string;
}
export interface MsgCouncilCreateAminoMsg {
  type: "/cardchain.cardchain.MsgCouncilCreate";
  value: MsgCouncilCreateAmino;
}
export interface MsgCouncilCreateSDKType {
  creator: string;
  cardId: bigint;
}
export interface MsgCouncilCreateResponse {}
export interface MsgCouncilCreateResponseProtoMsg {
  typeUrl: "/cardchain.cardchain.MsgCouncilCreateResponse";
  value: Uint8Array;
}
export interface MsgCouncilCreateResponseAmino {}
export interface MsgCouncilCreateResponseAminoMsg {
  type: "/cardchain.cardchain.MsgCouncilCreateResponse";
  value: MsgCouncilCreateResponseAmino;
}
export interface MsgCouncilCreateResponseSDKType {}
export interface MsgMatchReporterAppoint {
  authority: string;
  reporter: string;
}
export interface MsgMatchReporterAppointProtoMsg {
  typeUrl: "/cardchain.cardchain.MsgMatchReporterAppoint";
  value: Uint8Array;
}
export interface MsgMatchReporterAppointAmino {
  authority?: string;
  reporter?: string;
}
export interface MsgMatchReporterAppointAminoMsg {
  type: "/cardchain.cardchain.MsgMatchReporterAppoint";
  value: MsgMatchReporterAppointAmino;
}
export interface MsgMatchReporterAppointSDKType {
  authority: string;
  reporter: string;
}
export interface MsgMatchReporterAppointResponse {}
export interface MsgMatchReporterAppointResponseProtoMsg {
  typeUrl: "/cardchain.cardchain.MsgMatchReporterAppointResponse";
  value: Uint8Array;
}
export interface MsgMatchReporterAppointResponseAmino {}
export interface MsgMatchReporterAppointResponseAminoMsg {
  type: "/cardchain.cardchain.MsgMatchReporterAppointResponse";
  value: MsgMatchReporterAppointResponseAmino;
}
export interface MsgMatchReporterAppointResponseSDKType {}
export interface MsgSetCreate {
  creator: string;
  name: string;
  artist: string;
  storyWriter: string;
  contributors: string[];
}
export interface MsgSetCreateProtoMsg {
  typeUrl: "/cardchain.cardchain.MsgSetCreate";
  value: Uint8Array;
}
export interface MsgSetCreateAmino {
  creator?: string;
  name?: string;
  artist?: string;
  storyWriter?: string;
  contributors?: string[];
}
export interface MsgSetCreateAminoMsg {
  type: "/cardchain.cardchain.MsgSetCreate";
  value: MsgSetCreateAmino;
}
export interface MsgSetCreateSDKType {
  creator: string;
  name: string;
  artist: string;
  storyWriter: string;
  contributors: string[];
}
export interface MsgSetCreateResponse {}
export interface MsgSetCreateResponseProtoMsg {
  typeUrl: "/cardchain.cardchain.MsgSetCreateResponse";
  value: Uint8Array;
}
export interface MsgSetCreateResponseAmino {}
export interface MsgSetCreateResponseAminoMsg {
  type: "/cardchain.cardchain.MsgSetCreateResponse";
  value: MsgSetCreateResponseAmino;
}
export interface MsgSetCreateResponseSDKType {}
export interface MsgSetCardAdd {
  creator: string;
  setId: bigint;
  cardId: bigint;
}
export interface MsgSetCardAddProtoMsg {
  typeUrl: "/cardchain.cardchain.MsgSetCardAdd";
  value: Uint8Array;
}
export interface MsgSetCardAddAmino {
  creator?: string;
  setId?: string;
  cardId?: string;
}
export interface MsgSetCardAddAminoMsg {
  type: "/cardchain.cardchain.MsgSetCardAdd";
  value: MsgSetCardAddAmino;
}
export interface MsgSetCardAddSDKType {
  creator: string;
  setId: bigint;
  cardId: bigint;
}
export interface MsgSetCardAddResponse {}
export interface MsgSetCardAddResponseProtoMsg {
  typeUrl: "/cardchain.cardchain.MsgSetCardAddResponse";
  value: Uint8Array;
}
export interface MsgSetCardAddResponseAmino {}
export interface MsgSetCardAddResponseAminoMsg {
  type: "/cardchain.cardchain.MsgSetCardAddResponse";
  value: MsgSetCardAddResponseAmino;
}
export interface MsgSetCardAddResponseSDKType {}
export interface MsgSetCardRemove {
  creator: string;
  setId: bigint;
  cardId: bigint;
}
export interface MsgSetCardRemoveProtoMsg {
  typeUrl: "/cardchain.cardchain.MsgSetCardRemove";
  value: Uint8Array;
}
export interface MsgSetCardRemoveAmino {
  creator?: string;
  setId?: string;
  cardId?: string;
}
export interface MsgSetCardRemoveAminoMsg {
  type: "/cardchain.cardchain.MsgSetCardRemove";
  value: MsgSetCardRemoveAmino;
}
export interface MsgSetCardRemoveSDKType {
  creator: string;
  setId: bigint;
  cardId: bigint;
}
export interface MsgSetCardRemoveResponse {}
export interface MsgSetCardRemoveResponseProtoMsg {
  typeUrl: "/cardchain.cardchain.MsgSetCardRemoveResponse";
  value: Uint8Array;
}
export interface MsgSetCardRemoveResponseAmino {}
export interface MsgSetCardRemoveResponseAminoMsg {
  type: "/cardchain.cardchain.MsgSetCardRemoveResponse";
  value: MsgSetCardRemoveResponseAmino;
}
export interface MsgSetCardRemoveResponseSDKType {}
export interface MsgSetContributorAdd {
  creator: string;
  setId: bigint;
  user: string;
}
export interface MsgSetContributorAddProtoMsg {
  typeUrl: "/cardchain.cardchain.MsgSetContributorAdd";
  value: Uint8Array;
}
export interface MsgSetContributorAddAmino {
  creator?: string;
  setId?: string;
  user?: string;
}
export interface MsgSetContributorAddAminoMsg {
  type: "/cardchain.cardchain.MsgSetContributorAdd";
  value: MsgSetContributorAddAmino;
}
export interface MsgSetContributorAddSDKType {
  creator: string;
  setId: bigint;
  user: string;
}
export interface MsgSetContributorAddResponse {}
export interface MsgSetContributorAddResponseProtoMsg {
  typeUrl: "/cardchain.cardchain.MsgSetContributorAddResponse";
  value: Uint8Array;
}
export interface MsgSetContributorAddResponseAmino {}
export interface MsgSetContributorAddResponseAminoMsg {
  type: "/cardchain.cardchain.MsgSetContributorAddResponse";
  value: MsgSetContributorAddResponseAmino;
}
export interface MsgSetContributorAddResponseSDKType {}
export interface MsgSetContributorRemove {
  creator: string;
  setId: bigint;
  user: string;
}
export interface MsgSetContributorRemoveProtoMsg {
  typeUrl: "/cardchain.cardchain.MsgSetContributorRemove";
  value: Uint8Array;
}
export interface MsgSetContributorRemoveAmino {
  creator?: string;
  setId?: string;
  user?: string;
}
export interface MsgSetContributorRemoveAminoMsg {
  type: "/cardchain.cardchain.MsgSetContributorRemove";
  value: MsgSetContributorRemoveAmino;
}
export interface MsgSetContributorRemoveSDKType {
  creator: string;
  setId: bigint;
  user: string;
}
export interface MsgSetContributorRemoveResponse {}
export interface MsgSetContributorRemoveResponseProtoMsg {
  typeUrl: "/cardchain.cardchain.MsgSetContributorRemoveResponse";
  value: Uint8Array;
}
export interface MsgSetContributorRemoveResponseAmino {}
export interface MsgSetContributorRemoveResponseAminoMsg {
  type: "/cardchain.cardchain.MsgSetContributorRemoveResponse";
  value: MsgSetContributorRemoveResponseAmino;
}
export interface MsgSetContributorRemoveResponseSDKType {}
export interface MsgSetFinalize {
  creator: string;
  setId: bigint;
}
export interface MsgSetFinalizeProtoMsg {
  typeUrl: "/cardchain.cardchain.MsgSetFinalize";
  value: Uint8Array;
}
export interface MsgSetFinalizeAmino {
  creator?: string;
  setId?: string;
}
export interface MsgSetFinalizeAminoMsg {
  type: "/cardchain.cardchain.MsgSetFinalize";
  value: MsgSetFinalizeAmino;
}
export interface MsgSetFinalizeSDKType {
  creator: string;
  setId: bigint;
}
export interface MsgSetFinalizeResponse {}
export interface MsgSetFinalizeResponseProtoMsg {
  typeUrl: "/cardchain.cardchain.MsgSetFinalizeResponse";
  value: Uint8Array;
}
export interface MsgSetFinalizeResponseAmino {}
export interface MsgSetFinalizeResponseAminoMsg {
  type: "/cardchain.cardchain.MsgSetFinalizeResponse";
  value: MsgSetFinalizeResponseAmino;
}
export interface MsgSetFinalizeResponseSDKType {}
export interface MsgSetArtworkAdd {
  creator: string;
  setId: bigint;
  image: Uint8Array;
}
export interface MsgSetArtworkAddProtoMsg {
  typeUrl: "/cardchain.cardchain.MsgSetArtworkAdd";
  value: Uint8Array;
}
export interface MsgSetArtworkAddAmino {
  creator?: string;
  setId?: string;
  image?: string;
}
export interface MsgSetArtworkAddAminoMsg {
  type: "/cardchain.cardchain.MsgSetArtworkAdd";
  value: MsgSetArtworkAddAmino;
}
export interface MsgSetArtworkAddSDKType {
  creator: string;
  setId: bigint;
  image: Uint8Array;
}
export interface MsgSetArtworkAddResponse {}
export interface MsgSetArtworkAddResponseProtoMsg {
  typeUrl: "/cardchain.cardchain.MsgSetArtworkAddResponse";
  value: Uint8Array;
}
export interface MsgSetArtworkAddResponseAmino {}
export interface MsgSetArtworkAddResponseAminoMsg {
  type: "/cardchain.cardchain.MsgSetArtworkAddResponse";
  value: MsgSetArtworkAddResponseAmino;
}
export interface MsgSetArtworkAddResponseSDKType {}
export interface MsgSetStoryAdd {
  creator: string;
  setId: bigint;
  story: string;
}
export interface MsgSetStoryAddProtoMsg {
  typeUrl: "/cardchain.cardchain.MsgSetStoryAdd";
  value: Uint8Array;
}
export interface MsgSetStoryAddAmino {
  creator?: string;
  setId?: string;
  story?: string;
}
export interface MsgSetStoryAddAminoMsg {
  type: "/cardchain.cardchain.MsgSetStoryAdd";
  value: MsgSetStoryAddAmino;
}
export interface MsgSetStoryAddSDKType {
  creator: string;
  setId: bigint;
  story: string;
}
export interface MsgSetStoryAddResponse {}
export interface MsgSetStoryAddResponseProtoMsg {
  typeUrl: "/cardchain.cardchain.MsgSetStoryAddResponse";
  value: Uint8Array;
}
export interface MsgSetStoryAddResponseAmino {}
export interface MsgSetStoryAddResponseAminoMsg {
  type: "/cardchain.cardchain.MsgSetStoryAddResponse";
  value: MsgSetStoryAddResponseAmino;
}
export interface MsgSetStoryAddResponseSDKType {}
export interface MsgBoosterPackBuy {
  creator: string;
  setId: bigint;
}
export interface MsgBoosterPackBuyProtoMsg {
  typeUrl: "/cardchain.cardchain.MsgBoosterPackBuy";
  value: Uint8Array;
}
export interface MsgBoosterPackBuyAmino {
  creator?: string;
  setId?: string;
}
export interface MsgBoosterPackBuyAminoMsg {
  type: "/cardchain.cardchain.MsgBoosterPackBuy";
  value: MsgBoosterPackBuyAmino;
}
export interface MsgBoosterPackBuySDKType {
  creator: string;
  setId: bigint;
}
export interface MsgBoosterPackBuyResponse {
  airdropClaimed: boolean;
}
export interface MsgBoosterPackBuyResponseProtoMsg {
  typeUrl: "/cardchain.cardchain.MsgBoosterPackBuyResponse";
  value: Uint8Array;
}
export interface MsgBoosterPackBuyResponseAmino {
  airdropClaimed?: boolean;
}
export interface MsgBoosterPackBuyResponseAminoMsg {
  type: "/cardchain.cardchain.MsgBoosterPackBuyResponse";
  value: MsgBoosterPackBuyResponseAmino;
}
export interface MsgBoosterPackBuyResponseSDKType {
  airdropClaimed: boolean;
}
export interface MsgSellOfferCreate {
  creator: string;
  cardId: bigint;
  price: Coin;
}
export interface MsgSellOfferCreateProtoMsg {
  typeUrl: "/cardchain.cardchain.MsgSellOfferCreate";
  value: Uint8Array;
}
export interface MsgSellOfferCreateAmino {
  creator?: string;
  cardId?: string;
  price?: CoinAmino;
}
export interface MsgSellOfferCreateAminoMsg {
  type: "/cardchain.cardchain.MsgSellOfferCreate";
  value: MsgSellOfferCreateAmino;
}
export interface MsgSellOfferCreateSDKType {
  creator: string;
  cardId: bigint;
  price: CoinSDKType;
}
export interface MsgSellOfferCreateResponse {}
export interface MsgSellOfferCreateResponseProtoMsg {
  typeUrl: "/cardchain.cardchain.MsgSellOfferCreateResponse";
  value: Uint8Array;
}
export interface MsgSellOfferCreateResponseAmino {}
export interface MsgSellOfferCreateResponseAminoMsg {
  type: "/cardchain.cardchain.MsgSellOfferCreateResponse";
  value: MsgSellOfferCreateResponseAmino;
}
export interface MsgSellOfferCreateResponseSDKType {}
export interface MsgSellOfferBuy {
  creator: string;
  sellOfferId: bigint;
}
export interface MsgSellOfferBuyProtoMsg {
  typeUrl: "/cardchain.cardchain.MsgSellOfferBuy";
  value: Uint8Array;
}
export interface MsgSellOfferBuyAmino {
  creator?: string;
  sellOfferId?: string;
}
export interface MsgSellOfferBuyAminoMsg {
  type: "/cardchain.cardchain.MsgSellOfferBuy";
  value: MsgSellOfferBuyAmino;
}
export interface MsgSellOfferBuySDKType {
  creator: string;
  sellOfferId: bigint;
}
export interface MsgSellOfferBuyResponse {}
export interface MsgSellOfferBuyResponseProtoMsg {
  typeUrl: "/cardchain.cardchain.MsgSellOfferBuyResponse";
  value: Uint8Array;
}
export interface MsgSellOfferBuyResponseAmino {}
export interface MsgSellOfferBuyResponseAminoMsg {
  type: "/cardchain.cardchain.MsgSellOfferBuyResponse";
  value: MsgSellOfferBuyResponseAmino;
}
export interface MsgSellOfferBuyResponseSDKType {}
export interface MsgSellOfferRemove {
  creator: string;
  sellOfferId: bigint;
}
export interface MsgSellOfferRemoveProtoMsg {
  typeUrl: "/cardchain.cardchain.MsgSellOfferRemove";
  value: Uint8Array;
}
export interface MsgSellOfferRemoveAmino {
  creator?: string;
  sellOfferId?: string;
}
export interface MsgSellOfferRemoveAminoMsg {
  type: "/cardchain.cardchain.MsgSellOfferRemove";
  value: MsgSellOfferRemoveAmino;
}
export interface MsgSellOfferRemoveSDKType {
  creator: string;
  sellOfferId: bigint;
}
export interface MsgSellOfferRemoveResponse {}
export interface MsgSellOfferRemoveResponseProtoMsg {
  typeUrl: "/cardchain.cardchain.MsgSellOfferRemoveResponse";
  value: Uint8Array;
}
export interface MsgSellOfferRemoveResponseAmino {}
export interface MsgSellOfferRemoveResponseAminoMsg {
  type: "/cardchain.cardchain.MsgSellOfferRemoveResponse";
  value: MsgSellOfferRemoveResponseAmino;
}
export interface MsgSellOfferRemoveResponseSDKType {}
export interface MsgCardRaritySet {
  creator: string;
  cardId: bigint;
  setId: bigint;
  rarity: CardRarity;
}
export interface MsgCardRaritySetProtoMsg {
  typeUrl: "/cardchain.cardchain.MsgCardRaritySet";
  value: Uint8Array;
}
export interface MsgCardRaritySetAmino {
  creator?: string;
  cardId?: string;
  setId?: string;
  rarity?: CardRarity;
}
export interface MsgCardRaritySetAminoMsg {
  type: "/cardchain.cardchain.MsgCardRaritySet";
  value: MsgCardRaritySetAmino;
}
export interface MsgCardRaritySetSDKType {
  creator: string;
  cardId: bigint;
  setId: bigint;
  rarity: CardRarity;
}
export interface MsgCardRaritySetResponse {}
export interface MsgCardRaritySetResponseProtoMsg {
  typeUrl: "/cardchain.cardchain.MsgCardRaritySetResponse";
  value: Uint8Array;
}
export interface MsgCardRaritySetResponseAmino {}
export interface MsgCardRaritySetResponseAminoMsg {
  type: "/cardchain.cardchain.MsgCardRaritySetResponse";
  value: MsgCardRaritySetResponseAmino;
}
export interface MsgCardRaritySetResponseSDKType {}
export interface MsgCouncilResponseCommit {
  creator: string;
  councilId: bigint;
  response: string;
  suggestion: string;
}
export interface MsgCouncilResponseCommitProtoMsg {
  typeUrl: "/cardchain.cardchain.MsgCouncilResponseCommit";
  value: Uint8Array;
}
export interface MsgCouncilResponseCommitAmino {
  creator?: string;
  councilId?: string;
  response?: string;
  suggestion?: string;
}
export interface MsgCouncilResponseCommitAminoMsg {
  type: "/cardchain.cardchain.MsgCouncilResponseCommit";
  value: MsgCouncilResponseCommitAmino;
}
export interface MsgCouncilResponseCommitSDKType {
  creator: string;
  councilId: bigint;
  response: string;
  suggestion: string;
}
export interface MsgCouncilResponseCommitResponse {}
export interface MsgCouncilResponseCommitResponseProtoMsg {
  typeUrl: "/cardchain.cardchain.MsgCouncilResponseCommitResponse";
  value: Uint8Array;
}
export interface MsgCouncilResponseCommitResponseAmino {}
export interface MsgCouncilResponseCommitResponseAminoMsg {
  type: "/cardchain.cardchain.MsgCouncilResponseCommitResponse";
  value: MsgCouncilResponseCommitResponseAmino;
}
export interface MsgCouncilResponseCommitResponseSDKType {}
export interface MsgCouncilResponseReveal {
  creator: string;
  councilId: bigint;
  response: Response;
  secret: string;
}
export interface MsgCouncilResponseRevealProtoMsg {
  typeUrl: "/cardchain.cardchain.MsgCouncilResponseReveal";
  value: Uint8Array;
}
export interface MsgCouncilResponseRevealAmino {
  creator?: string;
  councilId?: string;
  response?: Response;
  secret?: string;
}
export interface MsgCouncilResponseRevealAminoMsg {
  type: "/cardchain.cardchain.MsgCouncilResponseReveal";
  value: MsgCouncilResponseRevealAmino;
}
export interface MsgCouncilResponseRevealSDKType {
  creator: string;
  councilId: bigint;
  response: Response;
  secret: string;
}
export interface MsgCouncilResponseRevealResponse {}
export interface MsgCouncilResponseRevealResponseProtoMsg {
  typeUrl: "/cardchain.cardchain.MsgCouncilResponseRevealResponse";
  value: Uint8Array;
}
export interface MsgCouncilResponseRevealResponseAmino {}
export interface MsgCouncilResponseRevealResponseAminoMsg {
  type: "/cardchain.cardchain.MsgCouncilResponseRevealResponse";
  value: MsgCouncilResponseRevealResponseAmino;
}
export interface MsgCouncilResponseRevealResponseSDKType {}
export interface MsgCouncilRestart {
  creator: string;
  councilId: bigint;
}
export interface MsgCouncilRestartProtoMsg {
  typeUrl: "/cardchain.cardchain.MsgCouncilRestart";
  value: Uint8Array;
}
export interface MsgCouncilRestartAmino {
  creator?: string;
  councilId?: string;
}
export interface MsgCouncilRestartAminoMsg {
  type: "/cardchain.cardchain.MsgCouncilRestart";
  value: MsgCouncilRestartAmino;
}
export interface MsgCouncilRestartSDKType {
  creator: string;
  councilId: bigint;
}
export interface MsgCouncilRestartResponse {}
export interface MsgCouncilRestartResponseProtoMsg {
  typeUrl: "/cardchain.cardchain.MsgCouncilRestartResponse";
  value: Uint8Array;
}
export interface MsgCouncilRestartResponseAmino {}
export interface MsgCouncilRestartResponseAminoMsg {
  type: "/cardchain.cardchain.MsgCouncilRestartResponse";
  value: MsgCouncilRestartResponseAmino;
}
export interface MsgCouncilRestartResponseSDKType {}
export interface MsgMatchConfirm {
  creator: string;
  matchId: bigint;
  outcome: Outcome;
  votedCards: SingleVote[];
}
export interface MsgMatchConfirmProtoMsg {
  typeUrl: "/cardchain.cardchain.MsgMatchConfirm";
  value: Uint8Array;
}
export interface MsgMatchConfirmAmino {
  creator?: string;
  matchId?: string;
  outcome?: Outcome;
  votedCards?: SingleVoteAmino[];
}
export interface MsgMatchConfirmAminoMsg {
  type: "/cardchain.cardchain.MsgMatchConfirm";
  value: MsgMatchConfirmAmino;
}
export interface MsgMatchConfirmSDKType {
  creator: string;
  matchId: bigint;
  outcome: Outcome;
  votedCards: SingleVoteSDKType[];
}
export interface MsgMatchConfirmResponse {}
export interface MsgMatchConfirmResponseProtoMsg {
  typeUrl: "/cardchain.cardchain.MsgMatchConfirmResponse";
  value: Uint8Array;
}
export interface MsgMatchConfirmResponseAmino {}
export interface MsgMatchConfirmResponseAminoMsg {
  type: "/cardchain.cardchain.MsgMatchConfirmResponse";
  value: MsgMatchConfirmResponseAmino;
}
export interface MsgMatchConfirmResponseSDKType {}
export interface MsgProfileCardSet {
  creator: string;
  cardId: bigint;
}
export interface MsgProfileCardSetProtoMsg {
  typeUrl: "/cardchain.cardchain.MsgProfileCardSet";
  value: Uint8Array;
}
export interface MsgProfileCardSetAmino {
  creator?: string;
  cardId?: string;
}
export interface MsgProfileCardSetAminoMsg {
  type: "/cardchain.cardchain.MsgProfileCardSet";
  value: MsgProfileCardSetAmino;
}
export interface MsgProfileCardSetSDKType {
  creator: string;
  cardId: bigint;
}
export interface MsgProfileCardSetResponse {}
export interface MsgProfileCardSetResponseProtoMsg {
  typeUrl: "/cardchain.cardchain.MsgProfileCardSetResponse";
  value: Uint8Array;
}
export interface MsgProfileCardSetResponseAmino {}
export interface MsgProfileCardSetResponseAminoMsg {
  type: "/cardchain.cardchain.MsgProfileCardSetResponse";
  value: MsgProfileCardSetResponseAmino;
}
export interface MsgProfileCardSetResponseSDKType {}
export interface MsgProfileWebsiteSet {
  creator: string;
  website: string;
}
export interface MsgProfileWebsiteSetProtoMsg {
  typeUrl: "/cardchain.cardchain.MsgProfileWebsiteSet";
  value: Uint8Array;
}
export interface MsgProfileWebsiteSetAmino {
  creator?: string;
  website?: string;
}
export interface MsgProfileWebsiteSetAminoMsg {
  type: "/cardchain.cardchain.MsgProfileWebsiteSet";
  value: MsgProfileWebsiteSetAmino;
}
export interface MsgProfileWebsiteSetSDKType {
  creator: string;
  website: string;
}
export interface MsgProfileWebsiteSetResponse {}
export interface MsgProfileWebsiteSetResponseProtoMsg {
  typeUrl: "/cardchain.cardchain.MsgProfileWebsiteSetResponse";
  value: Uint8Array;
}
export interface MsgProfileWebsiteSetResponseAmino {}
export interface MsgProfileWebsiteSetResponseAminoMsg {
  type: "/cardchain.cardchain.MsgProfileWebsiteSetResponse";
  value: MsgProfileWebsiteSetResponseAmino;
}
export interface MsgProfileWebsiteSetResponseSDKType {}
export interface MsgProfileBioSet {
  creator: string;
  bio: string;
}
export interface MsgProfileBioSetProtoMsg {
  typeUrl: "/cardchain.cardchain.MsgProfileBioSet";
  value: Uint8Array;
}
export interface MsgProfileBioSetAmino {
  creator?: string;
  bio?: string;
}
export interface MsgProfileBioSetAminoMsg {
  type: "/cardchain.cardchain.MsgProfileBioSet";
  value: MsgProfileBioSetAmino;
}
export interface MsgProfileBioSetSDKType {
  creator: string;
  bio: string;
}
export interface MsgProfileBioSetResponse {}
export interface MsgProfileBioSetResponseProtoMsg {
  typeUrl: "/cardchain.cardchain.MsgProfileBioSetResponse";
  value: Uint8Array;
}
export interface MsgProfileBioSetResponseAmino {}
export interface MsgProfileBioSetResponseAminoMsg {
  type: "/cardchain.cardchain.MsgProfileBioSetResponse";
  value: MsgProfileBioSetResponseAmino;
}
export interface MsgProfileBioSetResponseSDKType {}
export interface MsgBoosterPackOpen {
  creator: string;
  boosterPackId: bigint;
}
export interface MsgBoosterPackOpenProtoMsg {
  typeUrl: "/cardchain.cardchain.MsgBoosterPackOpen";
  value: Uint8Array;
}
export interface MsgBoosterPackOpenAmino {
  creator?: string;
  boosterPackId?: string;
}
export interface MsgBoosterPackOpenAminoMsg {
  type: "/cardchain.cardchain.MsgBoosterPackOpen";
  value: MsgBoosterPackOpenAmino;
}
export interface MsgBoosterPackOpenSDKType {
  creator: string;
  boosterPackId: bigint;
}
export interface MsgBoosterPackOpenResponse {
  cardIds: bigint[];
}
export interface MsgBoosterPackOpenResponseProtoMsg {
  typeUrl: "/cardchain.cardchain.MsgBoosterPackOpenResponse";
  value: Uint8Array;
}
export interface MsgBoosterPackOpenResponseAmino {
  cardIds?: string[];
}
export interface MsgBoosterPackOpenResponseAminoMsg {
  type: "/cardchain.cardchain.MsgBoosterPackOpenResponse";
  value: MsgBoosterPackOpenResponseAmino;
}
export interface MsgBoosterPackOpenResponseSDKType {
  cardIds: bigint[];
}
export interface MsgBoosterPackTransfer {
  creator: string;
  boosterPackId: bigint;
  receiver: string;
}
export interface MsgBoosterPackTransferProtoMsg {
  typeUrl: "/cardchain.cardchain.MsgBoosterPackTransfer";
  value: Uint8Array;
}
export interface MsgBoosterPackTransferAmino {
  creator?: string;
  boosterPackId?: string;
  receiver?: string;
}
export interface MsgBoosterPackTransferAminoMsg {
  type: "/cardchain.cardchain.MsgBoosterPackTransfer";
  value: MsgBoosterPackTransferAmino;
}
export interface MsgBoosterPackTransferSDKType {
  creator: string;
  boosterPackId: bigint;
  receiver: string;
}
export interface MsgBoosterPackTransferResponse {}
export interface MsgBoosterPackTransferResponseProtoMsg {
  typeUrl: "/cardchain.cardchain.MsgBoosterPackTransferResponse";
  value: Uint8Array;
}
export interface MsgBoosterPackTransferResponseAmino {}
export interface MsgBoosterPackTransferResponseAminoMsg {
  type: "/cardchain.cardchain.MsgBoosterPackTransferResponse";
  value: MsgBoosterPackTransferResponseAmino;
}
export interface MsgBoosterPackTransferResponseSDKType {}
export interface MsgSetStoryWriterSet {
  creator: string;
  setId: bigint;
  storyWriter: string;
}
export interface MsgSetStoryWriterSetProtoMsg {
  typeUrl: "/cardchain.cardchain.MsgSetStoryWriterSet";
  value: Uint8Array;
}
export interface MsgSetStoryWriterSetAmino {
  creator?: string;
  setId?: string;
  storyWriter?: string;
}
export interface MsgSetStoryWriterSetAminoMsg {
  type: "/cardchain.cardchain.MsgSetStoryWriterSet";
  value: MsgSetStoryWriterSetAmino;
}
export interface MsgSetStoryWriterSetSDKType {
  creator: string;
  setId: bigint;
  storyWriter: string;
}
export interface MsgSetStoryWriterSetResponse {}
export interface MsgSetStoryWriterSetResponseProtoMsg {
  typeUrl: "/cardchain.cardchain.MsgSetStoryWriterSetResponse";
  value: Uint8Array;
}
export interface MsgSetStoryWriterSetResponseAmino {}
export interface MsgSetStoryWriterSetResponseAminoMsg {
  type: "/cardchain.cardchain.MsgSetStoryWriterSetResponse";
  value: MsgSetStoryWriterSetResponseAmino;
}
export interface MsgSetStoryWriterSetResponseSDKType {}
export interface MsgSetArtistSet {
  creator: string;
  setId: bigint;
  artist: string;
}
export interface MsgSetArtistSetProtoMsg {
  typeUrl: "/cardchain.cardchain.MsgSetArtistSet";
  value: Uint8Array;
}
export interface MsgSetArtistSetAmino {
  creator?: string;
  setId?: string;
  artist?: string;
}
export interface MsgSetArtistSetAminoMsg {
  type: "/cardchain.cardchain.MsgSetArtistSet";
  value: MsgSetArtistSetAmino;
}
export interface MsgSetArtistSetSDKType {
  creator: string;
  setId: bigint;
  artist: string;
}
export interface MsgSetArtistSetResponse {}
export interface MsgSetArtistSetResponseProtoMsg {
  typeUrl: "/cardchain.cardchain.MsgSetArtistSetResponse";
  value: Uint8Array;
}
export interface MsgSetArtistSetResponseAmino {}
export interface MsgSetArtistSetResponseAminoMsg {
  type: "/cardchain.cardchain.MsgSetArtistSetResponse";
  value: MsgSetArtistSetResponseAmino;
}
export interface MsgSetArtistSetResponseSDKType {}
export interface MsgCardVoteMulti {
  creator: string;
  votes: SingleVote[];
}
export interface MsgCardVoteMultiProtoMsg {
  typeUrl: "/cardchain.cardchain.MsgCardVoteMulti";
  value: Uint8Array;
}
export interface MsgCardVoteMultiAmino {
  creator?: string;
  votes?: SingleVoteAmino[];
}
export interface MsgCardVoteMultiAminoMsg {
  type: "/cardchain.cardchain.MsgCardVoteMulti";
  value: MsgCardVoteMultiAmino;
}
export interface MsgCardVoteMultiSDKType {
  creator: string;
  votes: SingleVoteSDKType[];
}
export interface MsgCardVoteMultiResponse {
  airdropClaimed: boolean;
}
export interface MsgCardVoteMultiResponseProtoMsg {
  typeUrl: "/cardchain.cardchain.MsgCardVoteMultiResponse";
  value: Uint8Array;
}
export interface MsgCardVoteMultiResponseAmino {
  airdropClaimed?: boolean;
}
export interface MsgCardVoteMultiResponseAminoMsg {
  type: "/cardchain.cardchain.MsgCardVoteMultiResponse";
  value: MsgCardVoteMultiResponseAmino;
}
export interface MsgCardVoteMultiResponseSDKType {
  airdropClaimed: boolean;
}
export interface MsgMatchOpen {
  creator: string;
  playerA: string;
  playerB: string;
  playerADeck: bigint[];
  playerBDeck: bigint[];
}
export interface MsgMatchOpenProtoMsg {
  typeUrl: "/cardchain.cardchain.MsgMatchOpen";
  value: Uint8Array;
}
export interface MsgMatchOpenAmino {
  creator?: string;
  playerA?: string;
  playerB?: string;
  playerADeck?: string[];
  playerBDeck?: string[];
}
export interface MsgMatchOpenAminoMsg {
  type: "/cardchain.cardchain.MsgMatchOpen";
  value: MsgMatchOpenAmino;
}
export interface MsgMatchOpenSDKType {
  creator: string;
  playerA: string;
  playerB: string;
  playerADeck: bigint[];
  playerBDeck: bigint[];
}
export interface MsgMatchOpenResponse {
  matchId: bigint;
}
export interface MsgMatchOpenResponseProtoMsg {
  typeUrl: "/cardchain.cardchain.MsgMatchOpenResponse";
  value: Uint8Array;
}
export interface MsgMatchOpenResponseAmino {
  matchId?: string;
}
export interface MsgMatchOpenResponseAminoMsg {
  type: "/cardchain.cardchain.MsgMatchOpenResponse";
  value: MsgMatchOpenResponseAmino;
}
export interface MsgMatchOpenResponseSDKType {
  matchId: bigint;
}
export interface MsgSetNameSet {
  creator: string;
  setId: bigint;
  name: string;
}
export interface MsgSetNameSetProtoMsg {
  typeUrl: "/cardchain.cardchain.MsgSetNameSet";
  value: Uint8Array;
}
export interface MsgSetNameSetAmino {
  creator?: string;
  setId?: string;
  name?: string;
}
export interface MsgSetNameSetAminoMsg {
  type: "/cardchain.cardchain.MsgSetNameSet";
  value: MsgSetNameSetAmino;
}
export interface MsgSetNameSetSDKType {
  creator: string;
  setId: bigint;
  name: string;
}
export interface MsgSetNameSetResponse {}
export interface MsgSetNameSetResponseProtoMsg {
  typeUrl: "/cardchain.cardchain.MsgSetNameSetResponse";
  value: Uint8Array;
}
export interface MsgSetNameSetResponseAmino {}
export interface MsgSetNameSetResponseAminoMsg {
  type: "/cardchain.cardchain.MsgSetNameSetResponse";
  value: MsgSetNameSetResponseAmino;
}
export interface MsgSetNameSetResponseSDKType {}
export interface MsgProfileAliasSet {
  creator: string;
  alias: string;
}
export interface MsgProfileAliasSetProtoMsg {
  typeUrl: "/cardchain.cardchain.MsgProfileAliasSet";
  value: Uint8Array;
}
export interface MsgProfileAliasSetAmino {
  creator?: string;
  alias?: string;
}
export interface MsgProfileAliasSetAminoMsg {
  type: "/cardchain.cardchain.MsgProfileAliasSet";
  value: MsgProfileAliasSetAmino;
}
export interface MsgProfileAliasSetSDKType {
  creator: string;
  alias: string;
}
export interface MsgProfileAliasSetResponse {}
export interface MsgProfileAliasSetResponseProtoMsg {
  typeUrl: "/cardchain.cardchain.MsgProfileAliasSetResponse";
  value: Uint8Array;
}
export interface MsgProfileAliasSetResponseAmino {}
export interface MsgProfileAliasSetResponseAminoMsg {
  type: "/cardchain.cardchain.MsgProfileAliasSetResponse";
  value: MsgProfileAliasSetResponseAmino;
}
export interface MsgProfileAliasSetResponseSDKType {}
export interface MsgEarlyAccessInvite {
  creator: string;
  user: string;
}
export interface MsgEarlyAccessInviteProtoMsg {
  typeUrl: "/cardchain.cardchain.MsgEarlyAccessInvite";
  value: Uint8Array;
}
export interface MsgEarlyAccessInviteAmino {
  creator?: string;
  user?: string;
}
export interface MsgEarlyAccessInviteAminoMsg {
  type: "/cardchain.cardchain.MsgEarlyAccessInvite";
  value: MsgEarlyAccessInviteAmino;
}
export interface MsgEarlyAccessInviteSDKType {
  creator: string;
  user: string;
}
export interface MsgEarlyAccessInviteResponse {}
export interface MsgEarlyAccessInviteResponseProtoMsg {
  typeUrl: "/cardchain.cardchain.MsgEarlyAccessInviteResponse";
  value: Uint8Array;
}
export interface MsgEarlyAccessInviteResponseAmino {}
export interface MsgEarlyAccessInviteResponseAminoMsg {
  type: "/cardchain.cardchain.MsgEarlyAccessInviteResponse";
  value: MsgEarlyAccessInviteResponseAmino;
}
export interface MsgEarlyAccessInviteResponseSDKType {}
export interface MsgZealyConnect {
  creator: string;
  zealyId: string;
}
export interface MsgZealyConnectProtoMsg {
  typeUrl: "/cardchain.cardchain.MsgZealyConnect";
  value: Uint8Array;
}
export interface MsgZealyConnectAmino {
  creator?: string;
  zealyId?: string;
}
export interface MsgZealyConnectAminoMsg {
  type: "/cardchain.cardchain.MsgZealyConnect";
  value: MsgZealyConnectAmino;
}
export interface MsgZealyConnectSDKType {
  creator: string;
  zealyId: string;
}
export interface MsgZealyConnectResponse {}
export interface MsgZealyConnectResponseProtoMsg {
  typeUrl: "/cardchain.cardchain.MsgZealyConnectResponse";
  value: Uint8Array;
}
export interface MsgZealyConnectResponseAmino {}
export interface MsgZealyConnectResponseAminoMsg {
  type: "/cardchain.cardchain.MsgZealyConnectResponse";
  value: MsgZealyConnectResponseAmino;
}
export interface MsgZealyConnectResponseSDKType {}
export interface MsgEncounterCreate_ParametersEntry {
  key: string;
  value: string;
}
export interface MsgEncounterCreate_ParametersEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
export interface MsgEncounterCreate_ParametersEntryAmino {
  key?: string;
  value?: string;
}
export interface MsgEncounterCreate_ParametersEntryAminoMsg {
  type: string;
  value: MsgEncounterCreate_ParametersEntryAmino;
}
export interface MsgEncounterCreate_ParametersEntrySDKType {
  key: string;
  value: string;
}
export interface MsgEncounterCreate {
  creator: string;
  name: string;
  drawlist: bigint[];
  parameters: {
    [key: string]: string;
  };
  image: Uint8Array;
}
export interface MsgEncounterCreateProtoMsg {
  typeUrl: "/cardchain.cardchain.MsgEncounterCreate";
  value: Uint8Array;
}
export interface MsgEncounterCreateAmino {
  creator?: string;
  name?: string;
  drawlist?: string[];
  parameters?: {
    [key: string]: string;
  };
  image?: string;
}
export interface MsgEncounterCreateAminoMsg {
  type: "/cardchain.cardchain.MsgEncounterCreate";
  value: MsgEncounterCreateAmino;
}
export interface MsgEncounterCreateSDKType {
  creator: string;
  name: string;
  drawlist: bigint[];
  parameters: {
    [key: string]: string;
  };
  image: Uint8Array;
}
export interface MsgEncounterCreateResponse {}
export interface MsgEncounterCreateResponseProtoMsg {
  typeUrl: "/cardchain.cardchain.MsgEncounterCreateResponse";
  value: Uint8Array;
}
export interface MsgEncounterCreateResponseAmino {}
export interface MsgEncounterCreateResponseAminoMsg {
  type: "/cardchain.cardchain.MsgEncounterCreateResponse";
  value: MsgEncounterCreateResponseAmino;
}
export interface MsgEncounterCreateResponseSDKType {}
export interface MsgEncounterDo {
  creator: string;
  encounterId: bigint;
  user: string;
}
export interface MsgEncounterDoProtoMsg {
  typeUrl: "/cardchain.cardchain.MsgEncounterDo";
  value: Uint8Array;
}
export interface MsgEncounterDoAmino {
  creator?: string;
  encounterId?: string;
  user?: string;
}
export interface MsgEncounterDoAminoMsg {
  type: "/cardchain.cardchain.MsgEncounterDo";
  value: MsgEncounterDoAmino;
}
export interface MsgEncounterDoSDKType {
  creator: string;
  encounterId: bigint;
  user: string;
}
export interface MsgEncounterDoResponse {}
export interface MsgEncounterDoResponseProtoMsg {
  typeUrl: "/cardchain.cardchain.MsgEncounterDoResponse";
  value: Uint8Array;
}
export interface MsgEncounterDoResponseAmino {}
export interface MsgEncounterDoResponseAminoMsg {
  type: "/cardchain.cardchain.MsgEncounterDoResponse";
  value: MsgEncounterDoResponseAmino;
}
export interface MsgEncounterDoResponseSDKType {}
export interface MsgEncounterClose {
  creator: string;
  encounterId: bigint;
  user: string;
  won: boolean;
}
export interface MsgEncounterCloseProtoMsg {
  typeUrl: "/cardchain.cardchain.MsgEncounterClose";
  value: Uint8Array;
}
export interface MsgEncounterCloseAmino {
  creator?: string;
  encounterId?: string;
  user?: string;
  won?: boolean;
}
export interface MsgEncounterCloseAminoMsg {
  type: "/cardchain.cardchain.MsgEncounterClose";
  value: MsgEncounterCloseAmino;
}
export interface MsgEncounterCloseSDKType {
  creator: string;
  encounterId: bigint;
  user: string;
  won: boolean;
}
export interface MsgEncounterCloseResponse {}
export interface MsgEncounterCloseResponseProtoMsg {
  typeUrl: "/cardchain.cardchain.MsgEncounterCloseResponse";
  value: Uint8Array;
}
export interface MsgEncounterCloseResponseAmino {}
export interface MsgEncounterCloseResponseAminoMsg {
  type: "/cardchain.cardchain.MsgEncounterCloseResponse";
  value: MsgEncounterCloseResponseAmino;
}
export interface MsgEncounterCloseResponseSDKType {}
export interface MsgEarlyAccessDisinvite {
  creator: string;
  user: string;
}
export interface MsgEarlyAccessDisinviteProtoMsg {
  typeUrl: "/cardchain.cardchain.MsgEarlyAccessDisinvite";
  value: Uint8Array;
}
export interface MsgEarlyAccessDisinviteAmino {
  creator?: string;
  user?: string;
}
export interface MsgEarlyAccessDisinviteAminoMsg {
  type: "/cardchain.cardchain.MsgEarlyAccessDisinvite";
  value: MsgEarlyAccessDisinviteAmino;
}
export interface MsgEarlyAccessDisinviteSDKType {
  creator: string;
  user: string;
}
export interface MsgEarlyAccessDisinviteResponse {}
export interface MsgEarlyAccessDisinviteResponseProtoMsg {
  typeUrl: "/cardchain.cardchain.MsgEarlyAccessDisinviteResponse";
  value: Uint8Array;
}
export interface MsgEarlyAccessDisinviteResponseAmino {}
export interface MsgEarlyAccessDisinviteResponseAminoMsg {
  type: "/cardchain.cardchain.MsgEarlyAccessDisinviteResponse";
  value: MsgEarlyAccessDisinviteResponseAmino;
}
export interface MsgEarlyAccessDisinviteResponseSDKType {}
export interface MsgCardBan {
  authority: string;
  cardId: bigint;
}
export interface MsgCardBanProtoMsg {
  typeUrl: "/cardchain.cardchain.MsgCardBan";
  value: Uint8Array;
}
export interface MsgCardBanAmino {
  authority?: string;
  cardId?: string;
}
export interface MsgCardBanAminoMsg {
  type: "/cardchain.cardchain.MsgCardBan";
  value: MsgCardBanAmino;
}
export interface MsgCardBanSDKType {
  authority: string;
  cardId: bigint;
}
export interface MsgCardBanResponse {}
export interface MsgCardBanResponseProtoMsg {
  typeUrl: "/cardchain.cardchain.MsgCardBanResponse";
  value: Uint8Array;
}
export interface MsgCardBanResponseAmino {}
export interface MsgCardBanResponseAminoMsg {
  type: "/cardchain.cardchain.MsgCardBanResponse";
  value: MsgCardBanResponseAmino;
}
export interface MsgCardBanResponseSDKType {}
export interface MsgEarlyAccessGrant {
  authority: string;
  users: string[];
}
export interface MsgEarlyAccessGrantProtoMsg {
  typeUrl: "/cardchain.cardchain.MsgEarlyAccessGrant";
  value: Uint8Array;
}
export interface MsgEarlyAccessGrantAmino {
  authority?: string;
  users?: string[];
}
export interface MsgEarlyAccessGrantAminoMsg {
  type: "/cardchain.cardchain.MsgEarlyAccessGrant";
  value: MsgEarlyAccessGrantAmino;
}
export interface MsgEarlyAccessGrantSDKType {
  authority: string;
  users: string[];
}
export interface MsgEarlyAccessGrantResponse {}
export interface MsgEarlyAccessGrantResponseProtoMsg {
  typeUrl: "/cardchain.cardchain.MsgEarlyAccessGrantResponse";
  value: Uint8Array;
}
export interface MsgEarlyAccessGrantResponseAmino {}
export interface MsgEarlyAccessGrantResponseAminoMsg {
  type: "/cardchain.cardchain.MsgEarlyAccessGrantResponse";
  value: MsgEarlyAccessGrantResponseAmino;
}
export interface MsgEarlyAccessGrantResponseSDKType {}
export interface MsgSetActivate {
  authority: string;
  setId: bigint;
}
export interface MsgSetActivateProtoMsg {
  typeUrl: "/cardchain.cardchain.MsgSetActivate";
  value: Uint8Array;
}
export interface MsgSetActivateAmino {
  authority?: string;
  setId?: string;
}
export interface MsgSetActivateAminoMsg {
  type: "/cardchain.cardchain.MsgSetActivate";
  value: MsgSetActivateAmino;
}
export interface MsgSetActivateSDKType {
  authority: string;
  setId: bigint;
}
export interface MsgSetActivateResponse {}
export interface MsgSetActivateResponseProtoMsg {
  typeUrl: "/cardchain.cardchain.MsgSetActivateResponse";
  value: Uint8Array;
}
export interface MsgSetActivateResponseAmino {}
export interface MsgSetActivateResponseAminoMsg {
  type: "/cardchain.cardchain.MsgSetActivateResponse";
  value: MsgSetActivateResponseAmino;
}
export interface MsgSetActivateResponseSDKType {}
export interface MsgCardCopyrightClaim {
  authority: string;
  cardId: bigint;
}
export interface MsgCardCopyrightClaimProtoMsg {
  typeUrl: "/cardchain.cardchain.MsgCardCopyrightClaim";
  value: Uint8Array;
}
export interface MsgCardCopyrightClaimAmino {
  authority?: string;
  cardId?: string;
}
export interface MsgCardCopyrightClaimAminoMsg {
  type: "/cardchain.cardchain.MsgCardCopyrightClaim";
  value: MsgCardCopyrightClaimAmino;
}
export interface MsgCardCopyrightClaimSDKType {
  authority: string;
  cardId: bigint;
}
export interface MsgCardCopyrightClaimResponse {}
export interface MsgCardCopyrightClaimResponseProtoMsg {
  typeUrl: "/cardchain.cardchain.MsgCardCopyrightClaimResponse";
  value: Uint8Array;
}
export interface MsgCardCopyrightClaimResponseAmino {}
export interface MsgCardCopyrightClaimResponseAminoMsg {
  type: "/cardchain.cardchain.MsgCardCopyrightClaimResponse";
  value: MsgCardCopyrightClaimResponseAmino;
}
export interface MsgCardCopyrightClaimResponseSDKType {}
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: "/cardchain.cardchain.MsgUpdateParams",
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
      type: "cardchain/x/cardchain/MsgUpdateParams",
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
      typeUrl: "/cardchain.cardchain.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/cardchain.cardchain.MsgUpdateParamsResponse",
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
      typeUrl: "/cardchain.cardchain.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUserCreate(): MsgUserCreate {
  return {
    creator: "",
    newUser: "",
    alias: ""
  };
}
export const MsgUserCreate = {
  typeUrl: "/cardchain.cardchain.MsgUserCreate",
  encode(message: MsgUserCreate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.newUser !== "") {
      writer.uint32(18).string(message.newUser);
    }
    if (message.alias !== "") {
      writer.uint32(26).string(message.alias);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUserCreate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUserCreate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.newUser = reader.string();
          break;
        case 3:
          message.alias = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUserCreate>): MsgUserCreate {
    const message = createBaseMsgUserCreate();
    message.creator = object.creator ?? "";
    message.newUser = object.newUser ?? "";
    message.alias = object.alias ?? "";
    return message;
  },
  fromAmino(object: MsgUserCreateAmino): MsgUserCreate {
    const message = createBaseMsgUserCreate();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.newUser !== undefined && object.newUser !== null) {
      message.newUser = object.newUser;
    }
    if (object.alias !== undefined && object.alias !== null) {
      message.alias = object.alias;
    }
    return message;
  },
  toAmino(message: MsgUserCreate): MsgUserCreateAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.newUser = message.newUser === "" ? undefined : message.newUser;
    obj.alias = message.alias === "" ? undefined : message.alias;
    return obj;
  },
  fromAminoMsg(object: MsgUserCreateAminoMsg): MsgUserCreate {
    return MsgUserCreate.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUserCreateProtoMsg): MsgUserCreate {
    return MsgUserCreate.decode(message.value);
  },
  toProto(message: MsgUserCreate): Uint8Array {
    return MsgUserCreate.encode(message).finish();
  },
  toProtoMsg(message: MsgUserCreate): MsgUserCreateProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.MsgUserCreate",
      value: MsgUserCreate.encode(message).finish()
    };
  }
};
function createBaseMsgUserCreateResponse(): MsgUserCreateResponse {
  return {};
}
export const MsgUserCreateResponse = {
  typeUrl: "/cardchain.cardchain.MsgUserCreateResponse",
  encode(_: MsgUserCreateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUserCreateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUserCreateResponse();
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
  fromPartial(_: Partial<MsgUserCreateResponse>): MsgUserCreateResponse {
    const message = createBaseMsgUserCreateResponse();
    return message;
  },
  fromAmino(_: MsgUserCreateResponseAmino): MsgUserCreateResponse {
    const message = createBaseMsgUserCreateResponse();
    return message;
  },
  toAmino(_: MsgUserCreateResponse): MsgUserCreateResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUserCreateResponseAminoMsg): MsgUserCreateResponse {
    return MsgUserCreateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUserCreateResponseProtoMsg): MsgUserCreateResponse {
    return MsgUserCreateResponse.decode(message.value);
  },
  toProto(message: MsgUserCreateResponse): Uint8Array {
    return MsgUserCreateResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUserCreateResponse): MsgUserCreateResponseProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.MsgUserCreateResponse",
      value: MsgUserCreateResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCardSchemeBuy(): MsgCardSchemeBuy {
  return {
    creator: "",
    bid: Coin.fromPartial({})
  };
}
export const MsgCardSchemeBuy = {
  typeUrl: "/cardchain.cardchain.MsgCardSchemeBuy",
  encode(message: MsgCardSchemeBuy, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.bid !== undefined) {
      Coin.encode(message.bid, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCardSchemeBuy {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCardSchemeBuy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.bid = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCardSchemeBuy>): MsgCardSchemeBuy {
    const message = createBaseMsgCardSchemeBuy();
    message.creator = object.creator ?? "";
    message.bid = object.bid !== undefined && object.bid !== null ? Coin.fromPartial(object.bid) : undefined;
    return message;
  },
  fromAmino(object: MsgCardSchemeBuyAmino): MsgCardSchemeBuy {
    const message = createBaseMsgCardSchemeBuy();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.bid !== undefined && object.bid !== null) {
      message.bid = Coin.fromAmino(object.bid);
    }
    return message;
  },
  toAmino(message: MsgCardSchemeBuy): MsgCardSchemeBuyAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.bid = message.bid ? Coin.toAmino(message.bid) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCardSchemeBuyAminoMsg): MsgCardSchemeBuy {
    return MsgCardSchemeBuy.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCardSchemeBuyProtoMsg): MsgCardSchemeBuy {
    return MsgCardSchemeBuy.decode(message.value);
  },
  toProto(message: MsgCardSchemeBuy): Uint8Array {
    return MsgCardSchemeBuy.encode(message).finish();
  },
  toProtoMsg(message: MsgCardSchemeBuy): MsgCardSchemeBuyProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.MsgCardSchemeBuy",
      value: MsgCardSchemeBuy.encode(message).finish()
    };
  }
};
function createBaseMsgCardSchemeBuyResponse(): MsgCardSchemeBuyResponse {
  return {
    cardId: BigInt(0)
  };
}
export const MsgCardSchemeBuyResponse = {
  typeUrl: "/cardchain.cardchain.MsgCardSchemeBuyResponse",
  encode(message: MsgCardSchemeBuyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.cardId !== BigInt(0)) {
      writer.uint32(8).uint64(message.cardId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCardSchemeBuyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCardSchemeBuyResponse();
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
  fromPartial(object: Partial<MsgCardSchemeBuyResponse>): MsgCardSchemeBuyResponse {
    const message = createBaseMsgCardSchemeBuyResponse();
    message.cardId = object.cardId !== undefined && object.cardId !== null ? BigInt(object.cardId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgCardSchemeBuyResponseAmino): MsgCardSchemeBuyResponse {
    const message = createBaseMsgCardSchemeBuyResponse();
    if (object.cardId !== undefined && object.cardId !== null) {
      message.cardId = BigInt(object.cardId);
    }
    return message;
  },
  toAmino(message: MsgCardSchemeBuyResponse): MsgCardSchemeBuyResponseAmino {
    const obj: any = {};
    obj.cardId = message.cardId !== BigInt(0) ? message.cardId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCardSchemeBuyResponseAminoMsg): MsgCardSchemeBuyResponse {
    return MsgCardSchemeBuyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCardSchemeBuyResponseProtoMsg): MsgCardSchemeBuyResponse {
    return MsgCardSchemeBuyResponse.decode(message.value);
  },
  toProto(message: MsgCardSchemeBuyResponse): Uint8Array {
    return MsgCardSchemeBuyResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCardSchemeBuyResponse): MsgCardSchemeBuyResponseProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.MsgCardSchemeBuyResponse",
      value: MsgCardSchemeBuyResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCardSaveContent(): MsgCardSaveContent {
  return {
    creator: "",
    cardId: BigInt(0),
    content: new Uint8Array(),
    notes: "",
    artist: "",
    balanceAnchor: false
  };
}
export const MsgCardSaveContent = {
  typeUrl: "/cardchain.cardchain.MsgCardSaveContent",
  encode(message: MsgCardSaveContent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.cardId !== BigInt(0)) {
      writer.uint32(16).uint64(message.cardId);
    }
    if (message.content.length !== 0) {
      writer.uint32(26).bytes(message.content);
    }
    if (message.notes !== "") {
      writer.uint32(34).string(message.notes);
    }
    if (message.artist !== "") {
      writer.uint32(42).string(message.artist);
    }
    if (message.balanceAnchor === true) {
      writer.uint32(48).bool(message.balanceAnchor);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCardSaveContent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCardSaveContent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.cardId = reader.uint64();
          break;
        case 3:
          message.content = reader.bytes();
          break;
        case 4:
          message.notes = reader.string();
          break;
        case 5:
          message.artist = reader.string();
          break;
        case 6:
          message.balanceAnchor = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCardSaveContent>): MsgCardSaveContent {
    const message = createBaseMsgCardSaveContent();
    message.creator = object.creator ?? "";
    message.cardId = object.cardId !== undefined && object.cardId !== null ? BigInt(object.cardId.toString()) : BigInt(0);
    message.content = object.content ?? new Uint8Array();
    message.notes = object.notes ?? "";
    message.artist = object.artist ?? "";
    message.balanceAnchor = object.balanceAnchor ?? false;
    return message;
  },
  fromAmino(object: MsgCardSaveContentAmino): MsgCardSaveContent {
    const message = createBaseMsgCardSaveContent();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.cardId !== undefined && object.cardId !== null) {
      message.cardId = BigInt(object.cardId);
    }
    if (object.content !== undefined && object.content !== null) {
      message.content = bytesFromBase64(object.content);
    }
    if (object.notes !== undefined && object.notes !== null) {
      message.notes = object.notes;
    }
    if (object.artist !== undefined && object.artist !== null) {
      message.artist = object.artist;
    }
    if (object.balanceAnchor !== undefined && object.balanceAnchor !== null) {
      message.balanceAnchor = object.balanceAnchor;
    }
    return message;
  },
  toAmino(message: MsgCardSaveContent): MsgCardSaveContentAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.cardId = message.cardId !== BigInt(0) ? message.cardId?.toString() : undefined;
    obj.content = message.content ? base64FromBytes(message.content) : undefined;
    obj.notes = message.notes === "" ? undefined : message.notes;
    obj.artist = message.artist === "" ? undefined : message.artist;
    obj.balanceAnchor = message.balanceAnchor === false ? undefined : message.balanceAnchor;
    return obj;
  },
  fromAminoMsg(object: MsgCardSaveContentAminoMsg): MsgCardSaveContent {
    return MsgCardSaveContent.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCardSaveContentProtoMsg): MsgCardSaveContent {
    return MsgCardSaveContent.decode(message.value);
  },
  toProto(message: MsgCardSaveContent): Uint8Array {
    return MsgCardSaveContent.encode(message).finish();
  },
  toProtoMsg(message: MsgCardSaveContent): MsgCardSaveContentProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.MsgCardSaveContent",
      value: MsgCardSaveContent.encode(message).finish()
    };
  }
};
function createBaseMsgCardSaveContentResponse(): MsgCardSaveContentResponse {
  return {
    airdropClaimed: false
  };
}
export const MsgCardSaveContentResponse = {
  typeUrl: "/cardchain.cardchain.MsgCardSaveContentResponse",
  encode(message: MsgCardSaveContentResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.airdropClaimed === true) {
      writer.uint32(8).bool(message.airdropClaimed);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCardSaveContentResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCardSaveContentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.airdropClaimed = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCardSaveContentResponse>): MsgCardSaveContentResponse {
    const message = createBaseMsgCardSaveContentResponse();
    message.airdropClaimed = object.airdropClaimed ?? false;
    return message;
  },
  fromAmino(object: MsgCardSaveContentResponseAmino): MsgCardSaveContentResponse {
    const message = createBaseMsgCardSaveContentResponse();
    if (object.airdropClaimed !== undefined && object.airdropClaimed !== null) {
      message.airdropClaimed = object.airdropClaimed;
    }
    return message;
  },
  toAmino(message: MsgCardSaveContentResponse): MsgCardSaveContentResponseAmino {
    const obj: any = {};
    obj.airdropClaimed = message.airdropClaimed === false ? undefined : message.airdropClaimed;
    return obj;
  },
  fromAminoMsg(object: MsgCardSaveContentResponseAminoMsg): MsgCardSaveContentResponse {
    return MsgCardSaveContentResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCardSaveContentResponseProtoMsg): MsgCardSaveContentResponse {
    return MsgCardSaveContentResponse.decode(message.value);
  },
  toProto(message: MsgCardSaveContentResponse): Uint8Array {
    return MsgCardSaveContentResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCardSaveContentResponse): MsgCardSaveContentResponseProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.MsgCardSaveContentResponse",
      value: MsgCardSaveContentResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCardVote(): MsgCardVote {
  return {
    creator: "",
    vote: undefined
  };
}
export const MsgCardVote = {
  typeUrl: "/cardchain.cardchain.MsgCardVote",
  encode(message: MsgCardVote, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.vote !== undefined) {
      SingleVote.encode(message.vote, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCardVote {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCardVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.vote = SingleVote.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCardVote>): MsgCardVote {
    const message = createBaseMsgCardVote();
    message.creator = object.creator ?? "";
    message.vote = object.vote !== undefined && object.vote !== null ? SingleVote.fromPartial(object.vote) : undefined;
    return message;
  },
  fromAmino(object: MsgCardVoteAmino): MsgCardVote {
    const message = createBaseMsgCardVote();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.vote !== undefined && object.vote !== null) {
      message.vote = SingleVote.fromAmino(object.vote);
    }
    return message;
  },
  toAmino(message: MsgCardVote): MsgCardVoteAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.vote = message.vote ? SingleVote.toAmino(message.vote) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCardVoteAminoMsg): MsgCardVote {
    return MsgCardVote.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCardVoteProtoMsg): MsgCardVote {
    return MsgCardVote.decode(message.value);
  },
  toProto(message: MsgCardVote): Uint8Array {
    return MsgCardVote.encode(message).finish();
  },
  toProtoMsg(message: MsgCardVote): MsgCardVoteProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.MsgCardVote",
      value: MsgCardVote.encode(message).finish()
    };
  }
};
function createBaseMsgCardVoteResponse(): MsgCardVoteResponse {
  return {
    airdropClaimed: false
  };
}
export const MsgCardVoteResponse = {
  typeUrl: "/cardchain.cardchain.MsgCardVoteResponse",
  encode(message: MsgCardVoteResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.airdropClaimed === true) {
      writer.uint32(8).bool(message.airdropClaimed);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCardVoteResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCardVoteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.airdropClaimed = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCardVoteResponse>): MsgCardVoteResponse {
    const message = createBaseMsgCardVoteResponse();
    message.airdropClaimed = object.airdropClaimed ?? false;
    return message;
  },
  fromAmino(object: MsgCardVoteResponseAmino): MsgCardVoteResponse {
    const message = createBaseMsgCardVoteResponse();
    if (object.airdropClaimed !== undefined && object.airdropClaimed !== null) {
      message.airdropClaimed = object.airdropClaimed;
    }
    return message;
  },
  toAmino(message: MsgCardVoteResponse): MsgCardVoteResponseAmino {
    const obj: any = {};
    obj.airdropClaimed = message.airdropClaimed === false ? undefined : message.airdropClaimed;
    return obj;
  },
  fromAminoMsg(object: MsgCardVoteResponseAminoMsg): MsgCardVoteResponse {
    return MsgCardVoteResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCardVoteResponseProtoMsg): MsgCardVoteResponse {
    return MsgCardVoteResponse.decode(message.value);
  },
  toProto(message: MsgCardVoteResponse): Uint8Array {
    return MsgCardVoteResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCardVoteResponse): MsgCardVoteResponseProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.MsgCardVoteResponse",
      value: MsgCardVoteResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCardTransfer(): MsgCardTransfer {
  return {
    creator: "",
    cardId: BigInt(0),
    receiver: ""
  };
}
export const MsgCardTransfer = {
  typeUrl: "/cardchain.cardchain.MsgCardTransfer",
  encode(message: MsgCardTransfer, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.cardId !== BigInt(0)) {
      writer.uint32(16).uint64(message.cardId);
    }
    if (message.receiver !== "") {
      writer.uint32(26).string(message.receiver);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCardTransfer {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCardTransfer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.cardId = reader.uint64();
          break;
        case 3:
          message.receiver = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCardTransfer>): MsgCardTransfer {
    const message = createBaseMsgCardTransfer();
    message.creator = object.creator ?? "";
    message.cardId = object.cardId !== undefined && object.cardId !== null ? BigInt(object.cardId.toString()) : BigInt(0);
    message.receiver = object.receiver ?? "";
    return message;
  },
  fromAmino(object: MsgCardTransferAmino): MsgCardTransfer {
    const message = createBaseMsgCardTransfer();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.cardId !== undefined && object.cardId !== null) {
      message.cardId = BigInt(object.cardId);
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = object.receiver;
    }
    return message;
  },
  toAmino(message: MsgCardTransfer): MsgCardTransferAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.cardId = message.cardId !== BigInt(0) ? message.cardId?.toString() : undefined;
    obj.receiver = message.receiver === "" ? undefined : message.receiver;
    return obj;
  },
  fromAminoMsg(object: MsgCardTransferAminoMsg): MsgCardTransfer {
    return MsgCardTransfer.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCardTransferProtoMsg): MsgCardTransfer {
    return MsgCardTransfer.decode(message.value);
  },
  toProto(message: MsgCardTransfer): Uint8Array {
    return MsgCardTransfer.encode(message).finish();
  },
  toProtoMsg(message: MsgCardTransfer): MsgCardTransferProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.MsgCardTransfer",
      value: MsgCardTransfer.encode(message).finish()
    };
  }
};
function createBaseMsgCardTransferResponse(): MsgCardTransferResponse {
  return {};
}
export const MsgCardTransferResponse = {
  typeUrl: "/cardchain.cardchain.MsgCardTransferResponse",
  encode(_: MsgCardTransferResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCardTransferResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCardTransferResponse();
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
  fromPartial(_: Partial<MsgCardTransferResponse>): MsgCardTransferResponse {
    const message = createBaseMsgCardTransferResponse();
    return message;
  },
  fromAmino(_: MsgCardTransferResponseAmino): MsgCardTransferResponse {
    const message = createBaseMsgCardTransferResponse();
    return message;
  },
  toAmino(_: MsgCardTransferResponse): MsgCardTransferResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCardTransferResponseAminoMsg): MsgCardTransferResponse {
    return MsgCardTransferResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCardTransferResponseProtoMsg): MsgCardTransferResponse {
    return MsgCardTransferResponse.decode(message.value);
  },
  toProto(message: MsgCardTransferResponse): Uint8Array {
    return MsgCardTransferResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCardTransferResponse): MsgCardTransferResponseProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.MsgCardTransferResponse",
      value: MsgCardTransferResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCardDonate(): MsgCardDonate {
  return {
    creator: "",
    cardId: BigInt(0),
    amount: Coin.fromPartial({})
  };
}
export const MsgCardDonate = {
  typeUrl: "/cardchain.cardchain.MsgCardDonate",
  encode(message: MsgCardDonate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.cardId !== BigInt(0)) {
      writer.uint32(16).uint64(message.cardId);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCardDonate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCardDonate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.cardId = reader.uint64();
          break;
        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCardDonate>): MsgCardDonate {
    const message = createBaseMsgCardDonate();
    message.creator = object.creator ?? "";
    message.cardId = object.cardId !== undefined && object.cardId !== null ? BigInt(object.cardId.toString()) : BigInt(0);
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: MsgCardDonateAmino): MsgCardDonate {
    const message = createBaseMsgCardDonate();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.cardId !== undefined && object.cardId !== null) {
      message.cardId = BigInt(object.cardId);
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: MsgCardDonate): MsgCardDonateAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.cardId = message.cardId !== BigInt(0) ? message.cardId?.toString() : undefined;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCardDonateAminoMsg): MsgCardDonate {
    return MsgCardDonate.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCardDonateProtoMsg): MsgCardDonate {
    return MsgCardDonate.decode(message.value);
  },
  toProto(message: MsgCardDonate): Uint8Array {
    return MsgCardDonate.encode(message).finish();
  },
  toProtoMsg(message: MsgCardDonate): MsgCardDonateProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.MsgCardDonate",
      value: MsgCardDonate.encode(message).finish()
    };
  }
};
function createBaseMsgCardDonateResponse(): MsgCardDonateResponse {
  return {};
}
export const MsgCardDonateResponse = {
  typeUrl: "/cardchain.cardchain.MsgCardDonateResponse",
  encode(_: MsgCardDonateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCardDonateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCardDonateResponse();
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
  fromPartial(_: Partial<MsgCardDonateResponse>): MsgCardDonateResponse {
    const message = createBaseMsgCardDonateResponse();
    return message;
  },
  fromAmino(_: MsgCardDonateResponseAmino): MsgCardDonateResponse {
    const message = createBaseMsgCardDonateResponse();
    return message;
  },
  toAmino(_: MsgCardDonateResponse): MsgCardDonateResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCardDonateResponseAminoMsg): MsgCardDonateResponse {
    return MsgCardDonateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCardDonateResponseProtoMsg): MsgCardDonateResponse {
    return MsgCardDonateResponse.decode(message.value);
  },
  toProto(message: MsgCardDonateResponse): Uint8Array {
    return MsgCardDonateResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCardDonateResponse): MsgCardDonateResponseProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.MsgCardDonateResponse",
      value: MsgCardDonateResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCardArtworkAdd(): MsgCardArtworkAdd {
  return {
    creator: "",
    cardId: BigInt(0),
    image: new Uint8Array(),
    fullArt: false
  };
}
export const MsgCardArtworkAdd = {
  typeUrl: "/cardchain.cardchain.MsgCardArtworkAdd",
  encode(message: MsgCardArtworkAdd, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.cardId !== BigInt(0)) {
      writer.uint32(16).uint64(message.cardId);
    }
    if (message.image.length !== 0) {
      writer.uint32(26).bytes(message.image);
    }
    if (message.fullArt === true) {
      writer.uint32(32).bool(message.fullArt);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCardArtworkAdd {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCardArtworkAdd();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.cardId = reader.uint64();
          break;
        case 3:
          message.image = reader.bytes();
          break;
        case 4:
          message.fullArt = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCardArtworkAdd>): MsgCardArtworkAdd {
    const message = createBaseMsgCardArtworkAdd();
    message.creator = object.creator ?? "";
    message.cardId = object.cardId !== undefined && object.cardId !== null ? BigInt(object.cardId.toString()) : BigInt(0);
    message.image = object.image ?? new Uint8Array();
    message.fullArt = object.fullArt ?? false;
    return message;
  },
  fromAmino(object: MsgCardArtworkAddAmino): MsgCardArtworkAdd {
    const message = createBaseMsgCardArtworkAdd();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.cardId !== undefined && object.cardId !== null) {
      message.cardId = BigInt(object.cardId);
    }
    if (object.image !== undefined && object.image !== null) {
      message.image = bytesFromBase64(object.image);
    }
    if (object.fullArt !== undefined && object.fullArt !== null) {
      message.fullArt = object.fullArt;
    }
    return message;
  },
  toAmino(message: MsgCardArtworkAdd): MsgCardArtworkAddAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.cardId = message.cardId !== BigInt(0) ? message.cardId?.toString() : undefined;
    obj.image = message.image ? base64FromBytes(message.image) : undefined;
    obj.fullArt = message.fullArt === false ? undefined : message.fullArt;
    return obj;
  },
  fromAminoMsg(object: MsgCardArtworkAddAminoMsg): MsgCardArtworkAdd {
    return MsgCardArtworkAdd.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCardArtworkAddProtoMsg): MsgCardArtworkAdd {
    return MsgCardArtworkAdd.decode(message.value);
  },
  toProto(message: MsgCardArtworkAdd): Uint8Array {
    return MsgCardArtworkAdd.encode(message).finish();
  },
  toProtoMsg(message: MsgCardArtworkAdd): MsgCardArtworkAddProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.MsgCardArtworkAdd",
      value: MsgCardArtworkAdd.encode(message).finish()
    };
  }
};
function createBaseMsgCardArtworkAddResponse(): MsgCardArtworkAddResponse {
  return {};
}
export const MsgCardArtworkAddResponse = {
  typeUrl: "/cardchain.cardchain.MsgCardArtworkAddResponse",
  encode(_: MsgCardArtworkAddResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCardArtworkAddResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCardArtworkAddResponse();
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
  fromPartial(_: Partial<MsgCardArtworkAddResponse>): MsgCardArtworkAddResponse {
    const message = createBaseMsgCardArtworkAddResponse();
    return message;
  },
  fromAmino(_: MsgCardArtworkAddResponseAmino): MsgCardArtworkAddResponse {
    const message = createBaseMsgCardArtworkAddResponse();
    return message;
  },
  toAmino(_: MsgCardArtworkAddResponse): MsgCardArtworkAddResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCardArtworkAddResponseAminoMsg): MsgCardArtworkAddResponse {
    return MsgCardArtworkAddResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCardArtworkAddResponseProtoMsg): MsgCardArtworkAddResponse {
    return MsgCardArtworkAddResponse.decode(message.value);
  },
  toProto(message: MsgCardArtworkAddResponse): Uint8Array {
    return MsgCardArtworkAddResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCardArtworkAddResponse): MsgCardArtworkAddResponseProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.MsgCardArtworkAddResponse",
      value: MsgCardArtworkAddResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCardArtistChange(): MsgCardArtistChange {
  return {
    creator: "",
    cardId: BigInt(0),
    artist: ""
  };
}
export const MsgCardArtistChange = {
  typeUrl: "/cardchain.cardchain.MsgCardArtistChange",
  encode(message: MsgCardArtistChange, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.cardId !== BigInt(0)) {
      writer.uint32(16).uint64(message.cardId);
    }
    if (message.artist !== "") {
      writer.uint32(26).string(message.artist);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCardArtistChange {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCardArtistChange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.cardId = reader.uint64();
          break;
        case 3:
          message.artist = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCardArtistChange>): MsgCardArtistChange {
    const message = createBaseMsgCardArtistChange();
    message.creator = object.creator ?? "";
    message.cardId = object.cardId !== undefined && object.cardId !== null ? BigInt(object.cardId.toString()) : BigInt(0);
    message.artist = object.artist ?? "";
    return message;
  },
  fromAmino(object: MsgCardArtistChangeAmino): MsgCardArtistChange {
    const message = createBaseMsgCardArtistChange();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.cardId !== undefined && object.cardId !== null) {
      message.cardId = BigInt(object.cardId);
    }
    if (object.artist !== undefined && object.artist !== null) {
      message.artist = object.artist;
    }
    return message;
  },
  toAmino(message: MsgCardArtistChange): MsgCardArtistChangeAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.cardId = message.cardId !== BigInt(0) ? message.cardId?.toString() : undefined;
    obj.artist = message.artist === "" ? undefined : message.artist;
    return obj;
  },
  fromAminoMsg(object: MsgCardArtistChangeAminoMsg): MsgCardArtistChange {
    return MsgCardArtistChange.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCardArtistChangeProtoMsg): MsgCardArtistChange {
    return MsgCardArtistChange.decode(message.value);
  },
  toProto(message: MsgCardArtistChange): Uint8Array {
    return MsgCardArtistChange.encode(message).finish();
  },
  toProtoMsg(message: MsgCardArtistChange): MsgCardArtistChangeProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.MsgCardArtistChange",
      value: MsgCardArtistChange.encode(message).finish()
    };
  }
};
function createBaseMsgCardArtistChangeResponse(): MsgCardArtistChangeResponse {
  return {};
}
export const MsgCardArtistChangeResponse = {
  typeUrl: "/cardchain.cardchain.MsgCardArtistChangeResponse",
  encode(_: MsgCardArtistChangeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCardArtistChangeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCardArtistChangeResponse();
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
  fromPartial(_: Partial<MsgCardArtistChangeResponse>): MsgCardArtistChangeResponse {
    const message = createBaseMsgCardArtistChangeResponse();
    return message;
  },
  fromAmino(_: MsgCardArtistChangeResponseAmino): MsgCardArtistChangeResponse {
    const message = createBaseMsgCardArtistChangeResponse();
    return message;
  },
  toAmino(_: MsgCardArtistChangeResponse): MsgCardArtistChangeResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCardArtistChangeResponseAminoMsg): MsgCardArtistChangeResponse {
    return MsgCardArtistChangeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCardArtistChangeResponseProtoMsg): MsgCardArtistChangeResponse {
    return MsgCardArtistChangeResponse.decode(message.value);
  },
  toProto(message: MsgCardArtistChangeResponse): Uint8Array {
    return MsgCardArtistChangeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCardArtistChangeResponse): MsgCardArtistChangeResponseProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.MsgCardArtistChangeResponse",
      value: MsgCardArtistChangeResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCouncilRegister(): MsgCouncilRegister {
  return {
    creator: ""
  };
}
export const MsgCouncilRegister = {
  typeUrl: "/cardchain.cardchain.MsgCouncilRegister",
  encode(message: MsgCouncilRegister, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCouncilRegister {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCouncilRegister();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCouncilRegister>): MsgCouncilRegister {
    const message = createBaseMsgCouncilRegister();
    message.creator = object.creator ?? "";
    return message;
  },
  fromAmino(object: MsgCouncilRegisterAmino): MsgCouncilRegister {
    const message = createBaseMsgCouncilRegister();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    return message;
  },
  toAmino(message: MsgCouncilRegister): MsgCouncilRegisterAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    return obj;
  },
  fromAminoMsg(object: MsgCouncilRegisterAminoMsg): MsgCouncilRegister {
    return MsgCouncilRegister.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCouncilRegisterProtoMsg): MsgCouncilRegister {
    return MsgCouncilRegister.decode(message.value);
  },
  toProto(message: MsgCouncilRegister): Uint8Array {
    return MsgCouncilRegister.encode(message).finish();
  },
  toProtoMsg(message: MsgCouncilRegister): MsgCouncilRegisterProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.MsgCouncilRegister",
      value: MsgCouncilRegister.encode(message).finish()
    };
  }
};
function createBaseMsgCouncilRegisterResponse(): MsgCouncilRegisterResponse {
  return {};
}
export const MsgCouncilRegisterResponse = {
  typeUrl: "/cardchain.cardchain.MsgCouncilRegisterResponse",
  encode(_: MsgCouncilRegisterResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCouncilRegisterResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCouncilRegisterResponse();
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
  fromPartial(_: Partial<MsgCouncilRegisterResponse>): MsgCouncilRegisterResponse {
    const message = createBaseMsgCouncilRegisterResponse();
    return message;
  },
  fromAmino(_: MsgCouncilRegisterResponseAmino): MsgCouncilRegisterResponse {
    const message = createBaseMsgCouncilRegisterResponse();
    return message;
  },
  toAmino(_: MsgCouncilRegisterResponse): MsgCouncilRegisterResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCouncilRegisterResponseAminoMsg): MsgCouncilRegisterResponse {
    return MsgCouncilRegisterResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCouncilRegisterResponseProtoMsg): MsgCouncilRegisterResponse {
    return MsgCouncilRegisterResponse.decode(message.value);
  },
  toProto(message: MsgCouncilRegisterResponse): Uint8Array {
    return MsgCouncilRegisterResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCouncilRegisterResponse): MsgCouncilRegisterResponseProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.MsgCouncilRegisterResponse",
      value: MsgCouncilRegisterResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCouncilDeregister(): MsgCouncilDeregister {
  return {
    creator: ""
  };
}
export const MsgCouncilDeregister = {
  typeUrl: "/cardchain.cardchain.MsgCouncilDeregister",
  encode(message: MsgCouncilDeregister, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCouncilDeregister {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCouncilDeregister();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCouncilDeregister>): MsgCouncilDeregister {
    const message = createBaseMsgCouncilDeregister();
    message.creator = object.creator ?? "";
    return message;
  },
  fromAmino(object: MsgCouncilDeregisterAmino): MsgCouncilDeregister {
    const message = createBaseMsgCouncilDeregister();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    return message;
  },
  toAmino(message: MsgCouncilDeregister): MsgCouncilDeregisterAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    return obj;
  },
  fromAminoMsg(object: MsgCouncilDeregisterAminoMsg): MsgCouncilDeregister {
    return MsgCouncilDeregister.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCouncilDeregisterProtoMsg): MsgCouncilDeregister {
    return MsgCouncilDeregister.decode(message.value);
  },
  toProto(message: MsgCouncilDeregister): Uint8Array {
    return MsgCouncilDeregister.encode(message).finish();
  },
  toProtoMsg(message: MsgCouncilDeregister): MsgCouncilDeregisterProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.MsgCouncilDeregister",
      value: MsgCouncilDeregister.encode(message).finish()
    };
  }
};
function createBaseMsgCouncilDeregisterResponse(): MsgCouncilDeregisterResponse {
  return {};
}
export const MsgCouncilDeregisterResponse = {
  typeUrl: "/cardchain.cardchain.MsgCouncilDeregisterResponse",
  encode(_: MsgCouncilDeregisterResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCouncilDeregisterResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCouncilDeregisterResponse();
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
  fromPartial(_: Partial<MsgCouncilDeregisterResponse>): MsgCouncilDeregisterResponse {
    const message = createBaseMsgCouncilDeregisterResponse();
    return message;
  },
  fromAmino(_: MsgCouncilDeregisterResponseAmino): MsgCouncilDeregisterResponse {
    const message = createBaseMsgCouncilDeregisterResponse();
    return message;
  },
  toAmino(_: MsgCouncilDeregisterResponse): MsgCouncilDeregisterResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCouncilDeregisterResponseAminoMsg): MsgCouncilDeregisterResponse {
    return MsgCouncilDeregisterResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCouncilDeregisterResponseProtoMsg): MsgCouncilDeregisterResponse {
    return MsgCouncilDeregisterResponse.decode(message.value);
  },
  toProto(message: MsgCouncilDeregisterResponse): Uint8Array {
    return MsgCouncilDeregisterResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCouncilDeregisterResponse): MsgCouncilDeregisterResponseProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.MsgCouncilDeregisterResponse",
      value: MsgCouncilDeregisterResponse.encode(message).finish()
    };
  }
};
function createBaseMsgMatchReport(): MsgMatchReport {
  return {
    creator: "",
    matchId: BigInt(0),
    playedCardsA: [],
    playedCardsB: [],
    outcome: 0
  };
}
export const MsgMatchReport = {
  typeUrl: "/cardchain.cardchain.MsgMatchReport",
  encode(message: MsgMatchReport, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.matchId !== BigInt(0)) {
      writer.uint32(16).uint64(message.matchId);
    }
    writer.uint32(26).fork();
    for (const v of message.playedCardsA) {
      writer.uint64(v);
    }
    writer.ldelim();
    writer.uint32(34).fork();
    for (const v of message.playedCardsB) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.outcome !== 0) {
      writer.uint32(40).int32(message.outcome);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgMatchReport {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMatchReport();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.matchId = reader.uint64();
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.playedCardsA.push(reader.uint64());
            }
          } else {
            message.playedCardsA.push(reader.uint64());
          }
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.playedCardsB.push(reader.uint64());
            }
          } else {
            message.playedCardsB.push(reader.uint64());
          }
          break;
        case 5:
          message.outcome = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgMatchReport>): MsgMatchReport {
    const message = createBaseMsgMatchReport();
    message.creator = object.creator ?? "";
    message.matchId = object.matchId !== undefined && object.matchId !== null ? BigInt(object.matchId.toString()) : BigInt(0);
    message.playedCardsA = object.playedCardsA?.map(e => BigInt(e.toString())) || [];
    message.playedCardsB = object.playedCardsB?.map(e => BigInt(e.toString())) || [];
    message.outcome = object.outcome ?? 0;
    return message;
  },
  fromAmino(object: MsgMatchReportAmino): MsgMatchReport {
    const message = createBaseMsgMatchReport();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.matchId !== undefined && object.matchId !== null) {
      message.matchId = BigInt(object.matchId);
    }
    message.playedCardsA = object.playedCardsA?.map(e => BigInt(e)) || [];
    message.playedCardsB = object.playedCardsB?.map(e => BigInt(e)) || [];
    if (object.outcome !== undefined && object.outcome !== null) {
      message.outcome = object.outcome;
    }
    return message;
  },
  toAmino(message: MsgMatchReport): MsgMatchReportAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.matchId = message.matchId !== BigInt(0) ? message.matchId?.toString() : undefined;
    if (message.playedCardsA) {
      obj.playedCardsA = message.playedCardsA.map(e => e.toString());
    } else {
      obj.playedCardsA = message.playedCardsA;
    }
    if (message.playedCardsB) {
      obj.playedCardsB = message.playedCardsB.map(e => e.toString());
    } else {
      obj.playedCardsB = message.playedCardsB;
    }
    obj.outcome = message.outcome === 0 ? undefined : message.outcome;
    return obj;
  },
  fromAminoMsg(object: MsgMatchReportAminoMsg): MsgMatchReport {
    return MsgMatchReport.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgMatchReportProtoMsg): MsgMatchReport {
    return MsgMatchReport.decode(message.value);
  },
  toProto(message: MsgMatchReport): Uint8Array {
    return MsgMatchReport.encode(message).finish();
  },
  toProtoMsg(message: MsgMatchReport): MsgMatchReportProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.MsgMatchReport",
      value: MsgMatchReport.encode(message).finish()
    };
  }
};
function createBaseMsgMatchReportResponse(): MsgMatchReportResponse {
  return {};
}
export const MsgMatchReportResponse = {
  typeUrl: "/cardchain.cardchain.MsgMatchReportResponse",
  encode(_: MsgMatchReportResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgMatchReportResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMatchReportResponse();
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
  fromPartial(_: Partial<MsgMatchReportResponse>): MsgMatchReportResponse {
    const message = createBaseMsgMatchReportResponse();
    return message;
  },
  fromAmino(_: MsgMatchReportResponseAmino): MsgMatchReportResponse {
    const message = createBaseMsgMatchReportResponse();
    return message;
  },
  toAmino(_: MsgMatchReportResponse): MsgMatchReportResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgMatchReportResponseAminoMsg): MsgMatchReportResponse {
    return MsgMatchReportResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgMatchReportResponseProtoMsg): MsgMatchReportResponse {
    return MsgMatchReportResponse.decode(message.value);
  },
  toProto(message: MsgMatchReportResponse): Uint8Array {
    return MsgMatchReportResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgMatchReportResponse): MsgMatchReportResponseProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.MsgMatchReportResponse",
      value: MsgMatchReportResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCouncilCreate(): MsgCouncilCreate {
  return {
    creator: "",
    cardId: BigInt(0)
  };
}
export const MsgCouncilCreate = {
  typeUrl: "/cardchain.cardchain.MsgCouncilCreate",
  encode(message: MsgCouncilCreate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.cardId !== BigInt(0)) {
      writer.uint32(16).uint64(message.cardId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCouncilCreate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCouncilCreate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.cardId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCouncilCreate>): MsgCouncilCreate {
    const message = createBaseMsgCouncilCreate();
    message.creator = object.creator ?? "";
    message.cardId = object.cardId !== undefined && object.cardId !== null ? BigInt(object.cardId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgCouncilCreateAmino): MsgCouncilCreate {
    const message = createBaseMsgCouncilCreate();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.cardId !== undefined && object.cardId !== null) {
      message.cardId = BigInt(object.cardId);
    }
    return message;
  },
  toAmino(message: MsgCouncilCreate): MsgCouncilCreateAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.cardId = message.cardId !== BigInt(0) ? message.cardId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCouncilCreateAminoMsg): MsgCouncilCreate {
    return MsgCouncilCreate.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCouncilCreateProtoMsg): MsgCouncilCreate {
    return MsgCouncilCreate.decode(message.value);
  },
  toProto(message: MsgCouncilCreate): Uint8Array {
    return MsgCouncilCreate.encode(message).finish();
  },
  toProtoMsg(message: MsgCouncilCreate): MsgCouncilCreateProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.MsgCouncilCreate",
      value: MsgCouncilCreate.encode(message).finish()
    };
  }
};
function createBaseMsgCouncilCreateResponse(): MsgCouncilCreateResponse {
  return {};
}
export const MsgCouncilCreateResponse = {
  typeUrl: "/cardchain.cardchain.MsgCouncilCreateResponse",
  encode(_: MsgCouncilCreateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCouncilCreateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCouncilCreateResponse();
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
  fromPartial(_: Partial<MsgCouncilCreateResponse>): MsgCouncilCreateResponse {
    const message = createBaseMsgCouncilCreateResponse();
    return message;
  },
  fromAmino(_: MsgCouncilCreateResponseAmino): MsgCouncilCreateResponse {
    const message = createBaseMsgCouncilCreateResponse();
    return message;
  },
  toAmino(_: MsgCouncilCreateResponse): MsgCouncilCreateResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCouncilCreateResponseAminoMsg): MsgCouncilCreateResponse {
    return MsgCouncilCreateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCouncilCreateResponseProtoMsg): MsgCouncilCreateResponse {
    return MsgCouncilCreateResponse.decode(message.value);
  },
  toProto(message: MsgCouncilCreateResponse): Uint8Array {
    return MsgCouncilCreateResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCouncilCreateResponse): MsgCouncilCreateResponseProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.MsgCouncilCreateResponse",
      value: MsgCouncilCreateResponse.encode(message).finish()
    };
  }
};
function createBaseMsgMatchReporterAppoint(): MsgMatchReporterAppoint {
  return {
    authority: "",
    reporter: ""
  };
}
export const MsgMatchReporterAppoint = {
  typeUrl: "/cardchain.cardchain.MsgMatchReporterAppoint",
  encode(message: MsgMatchReporterAppoint, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.reporter !== "") {
      writer.uint32(18).string(message.reporter);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgMatchReporterAppoint {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMatchReporterAppoint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.reporter = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgMatchReporterAppoint>): MsgMatchReporterAppoint {
    const message = createBaseMsgMatchReporterAppoint();
    message.authority = object.authority ?? "";
    message.reporter = object.reporter ?? "";
    return message;
  },
  fromAmino(object: MsgMatchReporterAppointAmino): MsgMatchReporterAppoint {
    const message = createBaseMsgMatchReporterAppoint();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.reporter !== undefined && object.reporter !== null) {
      message.reporter = object.reporter;
    }
    return message;
  },
  toAmino(message: MsgMatchReporterAppoint): MsgMatchReporterAppointAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.reporter = message.reporter === "" ? undefined : message.reporter;
    return obj;
  },
  fromAminoMsg(object: MsgMatchReporterAppointAminoMsg): MsgMatchReporterAppoint {
    return MsgMatchReporterAppoint.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgMatchReporterAppointProtoMsg): MsgMatchReporterAppoint {
    return MsgMatchReporterAppoint.decode(message.value);
  },
  toProto(message: MsgMatchReporterAppoint): Uint8Array {
    return MsgMatchReporterAppoint.encode(message).finish();
  },
  toProtoMsg(message: MsgMatchReporterAppoint): MsgMatchReporterAppointProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.MsgMatchReporterAppoint",
      value: MsgMatchReporterAppoint.encode(message).finish()
    };
  }
};
function createBaseMsgMatchReporterAppointResponse(): MsgMatchReporterAppointResponse {
  return {};
}
export const MsgMatchReporterAppointResponse = {
  typeUrl: "/cardchain.cardchain.MsgMatchReporterAppointResponse",
  encode(_: MsgMatchReporterAppointResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgMatchReporterAppointResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMatchReporterAppointResponse();
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
  fromPartial(_: Partial<MsgMatchReporterAppointResponse>): MsgMatchReporterAppointResponse {
    const message = createBaseMsgMatchReporterAppointResponse();
    return message;
  },
  fromAmino(_: MsgMatchReporterAppointResponseAmino): MsgMatchReporterAppointResponse {
    const message = createBaseMsgMatchReporterAppointResponse();
    return message;
  },
  toAmino(_: MsgMatchReporterAppointResponse): MsgMatchReporterAppointResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgMatchReporterAppointResponseAminoMsg): MsgMatchReporterAppointResponse {
    return MsgMatchReporterAppointResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgMatchReporterAppointResponseProtoMsg): MsgMatchReporterAppointResponse {
    return MsgMatchReporterAppointResponse.decode(message.value);
  },
  toProto(message: MsgMatchReporterAppointResponse): Uint8Array {
    return MsgMatchReporterAppointResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgMatchReporterAppointResponse): MsgMatchReporterAppointResponseProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.MsgMatchReporterAppointResponse",
      value: MsgMatchReporterAppointResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSetCreate(): MsgSetCreate {
  return {
    creator: "",
    name: "",
    artist: "",
    storyWriter: "",
    contributors: []
  };
}
export const MsgSetCreate = {
  typeUrl: "/cardchain.cardchain.MsgSetCreate",
  encode(message: MsgSetCreate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.artist !== "") {
      writer.uint32(26).string(message.artist);
    }
    if (message.storyWriter !== "") {
      writer.uint32(34).string(message.storyWriter);
    }
    for (const v of message.contributors) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetCreate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetCreate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.artist = reader.string();
          break;
        case 4:
          message.storyWriter = reader.string();
          break;
        case 5:
          message.contributors.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSetCreate>): MsgSetCreate {
    const message = createBaseMsgSetCreate();
    message.creator = object.creator ?? "";
    message.name = object.name ?? "";
    message.artist = object.artist ?? "";
    message.storyWriter = object.storyWriter ?? "";
    message.contributors = object.contributors?.map(e => e) || [];
    return message;
  },
  fromAmino(object: MsgSetCreateAmino): MsgSetCreate {
    const message = createBaseMsgSetCreate();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.artist !== undefined && object.artist !== null) {
      message.artist = object.artist;
    }
    if (object.storyWriter !== undefined && object.storyWriter !== null) {
      message.storyWriter = object.storyWriter;
    }
    message.contributors = object.contributors?.map(e => e) || [];
    return message;
  },
  toAmino(message: MsgSetCreate): MsgSetCreateAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.name = message.name === "" ? undefined : message.name;
    obj.artist = message.artist === "" ? undefined : message.artist;
    obj.storyWriter = message.storyWriter === "" ? undefined : message.storyWriter;
    if (message.contributors) {
      obj.contributors = message.contributors.map(e => e);
    } else {
      obj.contributors = message.contributors;
    }
    return obj;
  },
  fromAminoMsg(object: MsgSetCreateAminoMsg): MsgSetCreate {
    return MsgSetCreate.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetCreateProtoMsg): MsgSetCreate {
    return MsgSetCreate.decode(message.value);
  },
  toProto(message: MsgSetCreate): Uint8Array {
    return MsgSetCreate.encode(message).finish();
  },
  toProtoMsg(message: MsgSetCreate): MsgSetCreateProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.MsgSetCreate",
      value: MsgSetCreate.encode(message).finish()
    };
  }
};
function createBaseMsgSetCreateResponse(): MsgSetCreateResponse {
  return {};
}
export const MsgSetCreateResponse = {
  typeUrl: "/cardchain.cardchain.MsgSetCreateResponse",
  encode(_: MsgSetCreateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetCreateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetCreateResponse();
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
  fromPartial(_: Partial<MsgSetCreateResponse>): MsgSetCreateResponse {
    const message = createBaseMsgSetCreateResponse();
    return message;
  },
  fromAmino(_: MsgSetCreateResponseAmino): MsgSetCreateResponse {
    const message = createBaseMsgSetCreateResponse();
    return message;
  },
  toAmino(_: MsgSetCreateResponse): MsgSetCreateResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetCreateResponseAminoMsg): MsgSetCreateResponse {
    return MsgSetCreateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetCreateResponseProtoMsg): MsgSetCreateResponse {
    return MsgSetCreateResponse.decode(message.value);
  },
  toProto(message: MsgSetCreateResponse): Uint8Array {
    return MsgSetCreateResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetCreateResponse): MsgSetCreateResponseProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.MsgSetCreateResponse",
      value: MsgSetCreateResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSetCardAdd(): MsgSetCardAdd {
  return {
    creator: "",
    setId: BigInt(0),
    cardId: BigInt(0)
  };
}
export const MsgSetCardAdd = {
  typeUrl: "/cardchain.cardchain.MsgSetCardAdd",
  encode(message: MsgSetCardAdd, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.setId !== BigInt(0)) {
      writer.uint32(16).uint64(message.setId);
    }
    if (message.cardId !== BigInt(0)) {
      writer.uint32(24).uint64(message.cardId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetCardAdd {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetCardAdd();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.setId = reader.uint64();
          break;
        case 3:
          message.cardId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSetCardAdd>): MsgSetCardAdd {
    const message = createBaseMsgSetCardAdd();
    message.creator = object.creator ?? "";
    message.setId = object.setId !== undefined && object.setId !== null ? BigInt(object.setId.toString()) : BigInt(0);
    message.cardId = object.cardId !== undefined && object.cardId !== null ? BigInt(object.cardId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgSetCardAddAmino): MsgSetCardAdd {
    const message = createBaseMsgSetCardAdd();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.setId !== undefined && object.setId !== null) {
      message.setId = BigInt(object.setId);
    }
    if (object.cardId !== undefined && object.cardId !== null) {
      message.cardId = BigInt(object.cardId);
    }
    return message;
  },
  toAmino(message: MsgSetCardAdd): MsgSetCardAddAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.setId = message.setId !== BigInt(0) ? message.setId?.toString() : undefined;
    obj.cardId = message.cardId !== BigInt(0) ? message.cardId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSetCardAddAminoMsg): MsgSetCardAdd {
    return MsgSetCardAdd.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetCardAddProtoMsg): MsgSetCardAdd {
    return MsgSetCardAdd.decode(message.value);
  },
  toProto(message: MsgSetCardAdd): Uint8Array {
    return MsgSetCardAdd.encode(message).finish();
  },
  toProtoMsg(message: MsgSetCardAdd): MsgSetCardAddProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.MsgSetCardAdd",
      value: MsgSetCardAdd.encode(message).finish()
    };
  }
};
function createBaseMsgSetCardAddResponse(): MsgSetCardAddResponse {
  return {};
}
export const MsgSetCardAddResponse = {
  typeUrl: "/cardchain.cardchain.MsgSetCardAddResponse",
  encode(_: MsgSetCardAddResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetCardAddResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetCardAddResponse();
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
  fromPartial(_: Partial<MsgSetCardAddResponse>): MsgSetCardAddResponse {
    const message = createBaseMsgSetCardAddResponse();
    return message;
  },
  fromAmino(_: MsgSetCardAddResponseAmino): MsgSetCardAddResponse {
    const message = createBaseMsgSetCardAddResponse();
    return message;
  },
  toAmino(_: MsgSetCardAddResponse): MsgSetCardAddResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetCardAddResponseAminoMsg): MsgSetCardAddResponse {
    return MsgSetCardAddResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetCardAddResponseProtoMsg): MsgSetCardAddResponse {
    return MsgSetCardAddResponse.decode(message.value);
  },
  toProto(message: MsgSetCardAddResponse): Uint8Array {
    return MsgSetCardAddResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetCardAddResponse): MsgSetCardAddResponseProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.MsgSetCardAddResponse",
      value: MsgSetCardAddResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSetCardRemove(): MsgSetCardRemove {
  return {
    creator: "",
    setId: BigInt(0),
    cardId: BigInt(0)
  };
}
export const MsgSetCardRemove = {
  typeUrl: "/cardchain.cardchain.MsgSetCardRemove",
  encode(message: MsgSetCardRemove, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.setId !== BigInt(0)) {
      writer.uint32(16).uint64(message.setId);
    }
    if (message.cardId !== BigInt(0)) {
      writer.uint32(24).uint64(message.cardId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetCardRemove {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetCardRemove();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.setId = reader.uint64();
          break;
        case 3:
          message.cardId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSetCardRemove>): MsgSetCardRemove {
    const message = createBaseMsgSetCardRemove();
    message.creator = object.creator ?? "";
    message.setId = object.setId !== undefined && object.setId !== null ? BigInt(object.setId.toString()) : BigInt(0);
    message.cardId = object.cardId !== undefined && object.cardId !== null ? BigInt(object.cardId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgSetCardRemoveAmino): MsgSetCardRemove {
    const message = createBaseMsgSetCardRemove();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.setId !== undefined && object.setId !== null) {
      message.setId = BigInt(object.setId);
    }
    if (object.cardId !== undefined && object.cardId !== null) {
      message.cardId = BigInt(object.cardId);
    }
    return message;
  },
  toAmino(message: MsgSetCardRemove): MsgSetCardRemoveAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.setId = message.setId !== BigInt(0) ? message.setId?.toString() : undefined;
    obj.cardId = message.cardId !== BigInt(0) ? message.cardId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSetCardRemoveAminoMsg): MsgSetCardRemove {
    return MsgSetCardRemove.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetCardRemoveProtoMsg): MsgSetCardRemove {
    return MsgSetCardRemove.decode(message.value);
  },
  toProto(message: MsgSetCardRemove): Uint8Array {
    return MsgSetCardRemove.encode(message).finish();
  },
  toProtoMsg(message: MsgSetCardRemove): MsgSetCardRemoveProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.MsgSetCardRemove",
      value: MsgSetCardRemove.encode(message).finish()
    };
  }
};
function createBaseMsgSetCardRemoveResponse(): MsgSetCardRemoveResponse {
  return {};
}
export const MsgSetCardRemoveResponse = {
  typeUrl: "/cardchain.cardchain.MsgSetCardRemoveResponse",
  encode(_: MsgSetCardRemoveResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetCardRemoveResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetCardRemoveResponse();
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
  fromPartial(_: Partial<MsgSetCardRemoveResponse>): MsgSetCardRemoveResponse {
    const message = createBaseMsgSetCardRemoveResponse();
    return message;
  },
  fromAmino(_: MsgSetCardRemoveResponseAmino): MsgSetCardRemoveResponse {
    const message = createBaseMsgSetCardRemoveResponse();
    return message;
  },
  toAmino(_: MsgSetCardRemoveResponse): MsgSetCardRemoveResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetCardRemoveResponseAminoMsg): MsgSetCardRemoveResponse {
    return MsgSetCardRemoveResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetCardRemoveResponseProtoMsg): MsgSetCardRemoveResponse {
    return MsgSetCardRemoveResponse.decode(message.value);
  },
  toProto(message: MsgSetCardRemoveResponse): Uint8Array {
    return MsgSetCardRemoveResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetCardRemoveResponse): MsgSetCardRemoveResponseProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.MsgSetCardRemoveResponse",
      value: MsgSetCardRemoveResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSetContributorAdd(): MsgSetContributorAdd {
  return {
    creator: "",
    setId: BigInt(0),
    user: ""
  };
}
export const MsgSetContributorAdd = {
  typeUrl: "/cardchain.cardchain.MsgSetContributorAdd",
  encode(message: MsgSetContributorAdd, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.setId !== BigInt(0)) {
      writer.uint32(16).uint64(message.setId);
    }
    if (message.user !== "") {
      writer.uint32(26).string(message.user);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetContributorAdd {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetContributorAdd();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.setId = reader.uint64();
          break;
        case 3:
          message.user = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSetContributorAdd>): MsgSetContributorAdd {
    const message = createBaseMsgSetContributorAdd();
    message.creator = object.creator ?? "";
    message.setId = object.setId !== undefined && object.setId !== null ? BigInt(object.setId.toString()) : BigInt(0);
    message.user = object.user ?? "";
    return message;
  },
  fromAmino(object: MsgSetContributorAddAmino): MsgSetContributorAdd {
    const message = createBaseMsgSetContributorAdd();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.setId !== undefined && object.setId !== null) {
      message.setId = BigInt(object.setId);
    }
    if (object.user !== undefined && object.user !== null) {
      message.user = object.user;
    }
    return message;
  },
  toAmino(message: MsgSetContributorAdd): MsgSetContributorAddAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.setId = message.setId !== BigInt(0) ? message.setId?.toString() : undefined;
    obj.user = message.user === "" ? undefined : message.user;
    return obj;
  },
  fromAminoMsg(object: MsgSetContributorAddAminoMsg): MsgSetContributorAdd {
    return MsgSetContributorAdd.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetContributorAddProtoMsg): MsgSetContributorAdd {
    return MsgSetContributorAdd.decode(message.value);
  },
  toProto(message: MsgSetContributorAdd): Uint8Array {
    return MsgSetContributorAdd.encode(message).finish();
  },
  toProtoMsg(message: MsgSetContributorAdd): MsgSetContributorAddProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.MsgSetContributorAdd",
      value: MsgSetContributorAdd.encode(message).finish()
    };
  }
};
function createBaseMsgSetContributorAddResponse(): MsgSetContributorAddResponse {
  return {};
}
export const MsgSetContributorAddResponse = {
  typeUrl: "/cardchain.cardchain.MsgSetContributorAddResponse",
  encode(_: MsgSetContributorAddResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetContributorAddResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetContributorAddResponse();
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
  fromPartial(_: Partial<MsgSetContributorAddResponse>): MsgSetContributorAddResponse {
    const message = createBaseMsgSetContributorAddResponse();
    return message;
  },
  fromAmino(_: MsgSetContributorAddResponseAmino): MsgSetContributorAddResponse {
    const message = createBaseMsgSetContributorAddResponse();
    return message;
  },
  toAmino(_: MsgSetContributorAddResponse): MsgSetContributorAddResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetContributorAddResponseAminoMsg): MsgSetContributorAddResponse {
    return MsgSetContributorAddResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetContributorAddResponseProtoMsg): MsgSetContributorAddResponse {
    return MsgSetContributorAddResponse.decode(message.value);
  },
  toProto(message: MsgSetContributorAddResponse): Uint8Array {
    return MsgSetContributorAddResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetContributorAddResponse): MsgSetContributorAddResponseProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.MsgSetContributorAddResponse",
      value: MsgSetContributorAddResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSetContributorRemove(): MsgSetContributorRemove {
  return {
    creator: "",
    setId: BigInt(0),
    user: ""
  };
}
export const MsgSetContributorRemove = {
  typeUrl: "/cardchain.cardchain.MsgSetContributorRemove",
  encode(message: MsgSetContributorRemove, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.setId !== BigInt(0)) {
      writer.uint32(16).uint64(message.setId);
    }
    if (message.user !== "") {
      writer.uint32(26).string(message.user);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetContributorRemove {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetContributorRemove();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.setId = reader.uint64();
          break;
        case 3:
          message.user = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSetContributorRemove>): MsgSetContributorRemove {
    const message = createBaseMsgSetContributorRemove();
    message.creator = object.creator ?? "";
    message.setId = object.setId !== undefined && object.setId !== null ? BigInt(object.setId.toString()) : BigInt(0);
    message.user = object.user ?? "";
    return message;
  },
  fromAmino(object: MsgSetContributorRemoveAmino): MsgSetContributorRemove {
    const message = createBaseMsgSetContributorRemove();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.setId !== undefined && object.setId !== null) {
      message.setId = BigInt(object.setId);
    }
    if (object.user !== undefined && object.user !== null) {
      message.user = object.user;
    }
    return message;
  },
  toAmino(message: MsgSetContributorRemove): MsgSetContributorRemoveAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.setId = message.setId !== BigInt(0) ? message.setId?.toString() : undefined;
    obj.user = message.user === "" ? undefined : message.user;
    return obj;
  },
  fromAminoMsg(object: MsgSetContributorRemoveAminoMsg): MsgSetContributorRemove {
    return MsgSetContributorRemove.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetContributorRemoveProtoMsg): MsgSetContributorRemove {
    return MsgSetContributorRemove.decode(message.value);
  },
  toProto(message: MsgSetContributorRemove): Uint8Array {
    return MsgSetContributorRemove.encode(message).finish();
  },
  toProtoMsg(message: MsgSetContributorRemove): MsgSetContributorRemoveProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.MsgSetContributorRemove",
      value: MsgSetContributorRemove.encode(message).finish()
    };
  }
};
function createBaseMsgSetContributorRemoveResponse(): MsgSetContributorRemoveResponse {
  return {};
}
export const MsgSetContributorRemoveResponse = {
  typeUrl: "/cardchain.cardchain.MsgSetContributorRemoveResponse",
  encode(_: MsgSetContributorRemoveResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetContributorRemoveResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetContributorRemoveResponse();
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
  fromPartial(_: Partial<MsgSetContributorRemoveResponse>): MsgSetContributorRemoveResponse {
    const message = createBaseMsgSetContributorRemoveResponse();
    return message;
  },
  fromAmino(_: MsgSetContributorRemoveResponseAmino): MsgSetContributorRemoveResponse {
    const message = createBaseMsgSetContributorRemoveResponse();
    return message;
  },
  toAmino(_: MsgSetContributorRemoveResponse): MsgSetContributorRemoveResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetContributorRemoveResponseAminoMsg): MsgSetContributorRemoveResponse {
    return MsgSetContributorRemoveResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetContributorRemoveResponseProtoMsg): MsgSetContributorRemoveResponse {
    return MsgSetContributorRemoveResponse.decode(message.value);
  },
  toProto(message: MsgSetContributorRemoveResponse): Uint8Array {
    return MsgSetContributorRemoveResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetContributorRemoveResponse): MsgSetContributorRemoveResponseProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.MsgSetContributorRemoveResponse",
      value: MsgSetContributorRemoveResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSetFinalize(): MsgSetFinalize {
  return {
    creator: "",
    setId: BigInt(0)
  };
}
export const MsgSetFinalize = {
  typeUrl: "/cardchain.cardchain.MsgSetFinalize",
  encode(message: MsgSetFinalize, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.setId !== BigInt(0)) {
      writer.uint32(16).uint64(message.setId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetFinalize {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetFinalize();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.setId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSetFinalize>): MsgSetFinalize {
    const message = createBaseMsgSetFinalize();
    message.creator = object.creator ?? "";
    message.setId = object.setId !== undefined && object.setId !== null ? BigInt(object.setId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgSetFinalizeAmino): MsgSetFinalize {
    const message = createBaseMsgSetFinalize();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.setId !== undefined && object.setId !== null) {
      message.setId = BigInt(object.setId);
    }
    return message;
  },
  toAmino(message: MsgSetFinalize): MsgSetFinalizeAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.setId = message.setId !== BigInt(0) ? message.setId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSetFinalizeAminoMsg): MsgSetFinalize {
    return MsgSetFinalize.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetFinalizeProtoMsg): MsgSetFinalize {
    return MsgSetFinalize.decode(message.value);
  },
  toProto(message: MsgSetFinalize): Uint8Array {
    return MsgSetFinalize.encode(message).finish();
  },
  toProtoMsg(message: MsgSetFinalize): MsgSetFinalizeProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.MsgSetFinalize",
      value: MsgSetFinalize.encode(message).finish()
    };
  }
};
function createBaseMsgSetFinalizeResponse(): MsgSetFinalizeResponse {
  return {};
}
export const MsgSetFinalizeResponse = {
  typeUrl: "/cardchain.cardchain.MsgSetFinalizeResponse",
  encode(_: MsgSetFinalizeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetFinalizeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetFinalizeResponse();
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
  fromPartial(_: Partial<MsgSetFinalizeResponse>): MsgSetFinalizeResponse {
    const message = createBaseMsgSetFinalizeResponse();
    return message;
  },
  fromAmino(_: MsgSetFinalizeResponseAmino): MsgSetFinalizeResponse {
    const message = createBaseMsgSetFinalizeResponse();
    return message;
  },
  toAmino(_: MsgSetFinalizeResponse): MsgSetFinalizeResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetFinalizeResponseAminoMsg): MsgSetFinalizeResponse {
    return MsgSetFinalizeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetFinalizeResponseProtoMsg): MsgSetFinalizeResponse {
    return MsgSetFinalizeResponse.decode(message.value);
  },
  toProto(message: MsgSetFinalizeResponse): Uint8Array {
    return MsgSetFinalizeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetFinalizeResponse): MsgSetFinalizeResponseProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.MsgSetFinalizeResponse",
      value: MsgSetFinalizeResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSetArtworkAdd(): MsgSetArtworkAdd {
  return {
    creator: "",
    setId: BigInt(0),
    image: new Uint8Array()
  };
}
export const MsgSetArtworkAdd = {
  typeUrl: "/cardchain.cardchain.MsgSetArtworkAdd",
  encode(message: MsgSetArtworkAdd, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.setId !== BigInt(0)) {
      writer.uint32(16).uint64(message.setId);
    }
    if (message.image.length !== 0) {
      writer.uint32(26).bytes(message.image);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetArtworkAdd {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetArtworkAdd();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.setId = reader.uint64();
          break;
        case 3:
          message.image = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSetArtworkAdd>): MsgSetArtworkAdd {
    const message = createBaseMsgSetArtworkAdd();
    message.creator = object.creator ?? "";
    message.setId = object.setId !== undefined && object.setId !== null ? BigInt(object.setId.toString()) : BigInt(0);
    message.image = object.image ?? new Uint8Array();
    return message;
  },
  fromAmino(object: MsgSetArtworkAddAmino): MsgSetArtworkAdd {
    const message = createBaseMsgSetArtworkAdd();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.setId !== undefined && object.setId !== null) {
      message.setId = BigInt(object.setId);
    }
    if (object.image !== undefined && object.image !== null) {
      message.image = bytesFromBase64(object.image);
    }
    return message;
  },
  toAmino(message: MsgSetArtworkAdd): MsgSetArtworkAddAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.setId = message.setId !== BigInt(0) ? message.setId?.toString() : undefined;
    obj.image = message.image ? base64FromBytes(message.image) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSetArtworkAddAminoMsg): MsgSetArtworkAdd {
    return MsgSetArtworkAdd.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetArtworkAddProtoMsg): MsgSetArtworkAdd {
    return MsgSetArtworkAdd.decode(message.value);
  },
  toProto(message: MsgSetArtworkAdd): Uint8Array {
    return MsgSetArtworkAdd.encode(message).finish();
  },
  toProtoMsg(message: MsgSetArtworkAdd): MsgSetArtworkAddProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.MsgSetArtworkAdd",
      value: MsgSetArtworkAdd.encode(message).finish()
    };
  }
};
function createBaseMsgSetArtworkAddResponse(): MsgSetArtworkAddResponse {
  return {};
}
export const MsgSetArtworkAddResponse = {
  typeUrl: "/cardchain.cardchain.MsgSetArtworkAddResponse",
  encode(_: MsgSetArtworkAddResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetArtworkAddResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetArtworkAddResponse();
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
  fromPartial(_: Partial<MsgSetArtworkAddResponse>): MsgSetArtworkAddResponse {
    const message = createBaseMsgSetArtworkAddResponse();
    return message;
  },
  fromAmino(_: MsgSetArtworkAddResponseAmino): MsgSetArtworkAddResponse {
    const message = createBaseMsgSetArtworkAddResponse();
    return message;
  },
  toAmino(_: MsgSetArtworkAddResponse): MsgSetArtworkAddResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetArtworkAddResponseAminoMsg): MsgSetArtworkAddResponse {
    return MsgSetArtworkAddResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetArtworkAddResponseProtoMsg): MsgSetArtworkAddResponse {
    return MsgSetArtworkAddResponse.decode(message.value);
  },
  toProto(message: MsgSetArtworkAddResponse): Uint8Array {
    return MsgSetArtworkAddResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetArtworkAddResponse): MsgSetArtworkAddResponseProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.MsgSetArtworkAddResponse",
      value: MsgSetArtworkAddResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSetStoryAdd(): MsgSetStoryAdd {
  return {
    creator: "",
    setId: BigInt(0),
    story: ""
  };
}
export const MsgSetStoryAdd = {
  typeUrl: "/cardchain.cardchain.MsgSetStoryAdd",
  encode(message: MsgSetStoryAdd, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.setId !== BigInt(0)) {
      writer.uint32(16).uint64(message.setId);
    }
    if (message.story !== "") {
      writer.uint32(26).string(message.story);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetStoryAdd {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetStoryAdd();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.setId = reader.uint64();
          break;
        case 3:
          message.story = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSetStoryAdd>): MsgSetStoryAdd {
    const message = createBaseMsgSetStoryAdd();
    message.creator = object.creator ?? "";
    message.setId = object.setId !== undefined && object.setId !== null ? BigInt(object.setId.toString()) : BigInt(0);
    message.story = object.story ?? "";
    return message;
  },
  fromAmino(object: MsgSetStoryAddAmino): MsgSetStoryAdd {
    const message = createBaseMsgSetStoryAdd();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.setId !== undefined && object.setId !== null) {
      message.setId = BigInt(object.setId);
    }
    if (object.story !== undefined && object.story !== null) {
      message.story = object.story;
    }
    return message;
  },
  toAmino(message: MsgSetStoryAdd): MsgSetStoryAddAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.setId = message.setId !== BigInt(0) ? message.setId?.toString() : undefined;
    obj.story = message.story === "" ? undefined : message.story;
    return obj;
  },
  fromAminoMsg(object: MsgSetStoryAddAminoMsg): MsgSetStoryAdd {
    return MsgSetStoryAdd.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetStoryAddProtoMsg): MsgSetStoryAdd {
    return MsgSetStoryAdd.decode(message.value);
  },
  toProto(message: MsgSetStoryAdd): Uint8Array {
    return MsgSetStoryAdd.encode(message).finish();
  },
  toProtoMsg(message: MsgSetStoryAdd): MsgSetStoryAddProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.MsgSetStoryAdd",
      value: MsgSetStoryAdd.encode(message).finish()
    };
  }
};
function createBaseMsgSetStoryAddResponse(): MsgSetStoryAddResponse {
  return {};
}
export const MsgSetStoryAddResponse = {
  typeUrl: "/cardchain.cardchain.MsgSetStoryAddResponse",
  encode(_: MsgSetStoryAddResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetStoryAddResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetStoryAddResponse();
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
  fromPartial(_: Partial<MsgSetStoryAddResponse>): MsgSetStoryAddResponse {
    const message = createBaseMsgSetStoryAddResponse();
    return message;
  },
  fromAmino(_: MsgSetStoryAddResponseAmino): MsgSetStoryAddResponse {
    const message = createBaseMsgSetStoryAddResponse();
    return message;
  },
  toAmino(_: MsgSetStoryAddResponse): MsgSetStoryAddResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetStoryAddResponseAminoMsg): MsgSetStoryAddResponse {
    return MsgSetStoryAddResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetStoryAddResponseProtoMsg): MsgSetStoryAddResponse {
    return MsgSetStoryAddResponse.decode(message.value);
  },
  toProto(message: MsgSetStoryAddResponse): Uint8Array {
    return MsgSetStoryAddResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetStoryAddResponse): MsgSetStoryAddResponseProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.MsgSetStoryAddResponse",
      value: MsgSetStoryAddResponse.encode(message).finish()
    };
  }
};
function createBaseMsgBoosterPackBuy(): MsgBoosterPackBuy {
  return {
    creator: "",
    setId: BigInt(0)
  };
}
export const MsgBoosterPackBuy = {
  typeUrl: "/cardchain.cardchain.MsgBoosterPackBuy",
  encode(message: MsgBoosterPackBuy, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.setId !== BigInt(0)) {
      writer.uint32(16).uint64(message.setId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBoosterPackBuy {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBoosterPackBuy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.setId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgBoosterPackBuy>): MsgBoosterPackBuy {
    const message = createBaseMsgBoosterPackBuy();
    message.creator = object.creator ?? "";
    message.setId = object.setId !== undefined && object.setId !== null ? BigInt(object.setId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgBoosterPackBuyAmino): MsgBoosterPackBuy {
    const message = createBaseMsgBoosterPackBuy();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.setId !== undefined && object.setId !== null) {
      message.setId = BigInt(object.setId);
    }
    return message;
  },
  toAmino(message: MsgBoosterPackBuy): MsgBoosterPackBuyAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.setId = message.setId !== BigInt(0) ? message.setId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgBoosterPackBuyAminoMsg): MsgBoosterPackBuy {
    return MsgBoosterPackBuy.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBoosterPackBuyProtoMsg): MsgBoosterPackBuy {
    return MsgBoosterPackBuy.decode(message.value);
  },
  toProto(message: MsgBoosterPackBuy): Uint8Array {
    return MsgBoosterPackBuy.encode(message).finish();
  },
  toProtoMsg(message: MsgBoosterPackBuy): MsgBoosterPackBuyProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.MsgBoosterPackBuy",
      value: MsgBoosterPackBuy.encode(message).finish()
    };
  }
};
function createBaseMsgBoosterPackBuyResponse(): MsgBoosterPackBuyResponse {
  return {
    airdropClaimed: false
  };
}
export const MsgBoosterPackBuyResponse = {
  typeUrl: "/cardchain.cardchain.MsgBoosterPackBuyResponse",
  encode(message: MsgBoosterPackBuyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.airdropClaimed === true) {
      writer.uint32(8).bool(message.airdropClaimed);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBoosterPackBuyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBoosterPackBuyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.airdropClaimed = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgBoosterPackBuyResponse>): MsgBoosterPackBuyResponse {
    const message = createBaseMsgBoosterPackBuyResponse();
    message.airdropClaimed = object.airdropClaimed ?? false;
    return message;
  },
  fromAmino(object: MsgBoosterPackBuyResponseAmino): MsgBoosterPackBuyResponse {
    const message = createBaseMsgBoosterPackBuyResponse();
    if (object.airdropClaimed !== undefined && object.airdropClaimed !== null) {
      message.airdropClaimed = object.airdropClaimed;
    }
    return message;
  },
  toAmino(message: MsgBoosterPackBuyResponse): MsgBoosterPackBuyResponseAmino {
    const obj: any = {};
    obj.airdropClaimed = message.airdropClaimed === false ? undefined : message.airdropClaimed;
    return obj;
  },
  fromAminoMsg(object: MsgBoosterPackBuyResponseAminoMsg): MsgBoosterPackBuyResponse {
    return MsgBoosterPackBuyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBoosterPackBuyResponseProtoMsg): MsgBoosterPackBuyResponse {
    return MsgBoosterPackBuyResponse.decode(message.value);
  },
  toProto(message: MsgBoosterPackBuyResponse): Uint8Array {
    return MsgBoosterPackBuyResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgBoosterPackBuyResponse): MsgBoosterPackBuyResponseProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.MsgBoosterPackBuyResponse",
      value: MsgBoosterPackBuyResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSellOfferCreate(): MsgSellOfferCreate {
  return {
    creator: "",
    cardId: BigInt(0),
    price: Coin.fromPartial({})
  };
}
export const MsgSellOfferCreate = {
  typeUrl: "/cardchain.cardchain.MsgSellOfferCreate",
  encode(message: MsgSellOfferCreate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.cardId !== BigInt(0)) {
      writer.uint32(16).uint64(message.cardId);
    }
    if (message.price !== undefined) {
      Coin.encode(message.price, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSellOfferCreate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSellOfferCreate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.cardId = reader.uint64();
          break;
        case 3:
          message.price = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSellOfferCreate>): MsgSellOfferCreate {
    const message = createBaseMsgSellOfferCreate();
    message.creator = object.creator ?? "";
    message.cardId = object.cardId !== undefined && object.cardId !== null ? BigInt(object.cardId.toString()) : BigInt(0);
    message.price = object.price !== undefined && object.price !== null ? Coin.fromPartial(object.price) : undefined;
    return message;
  },
  fromAmino(object: MsgSellOfferCreateAmino): MsgSellOfferCreate {
    const message = createBaseMsgSellOfferCreate();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.cardId !== undefined && object.cardId !== null) {
      message.cardId = BigInt(object.cardId);
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = Coin.fromAmino(object.price);
    }
    return message;
  },
  toAmino(message: MsgSellOfferCreate): MsgSellOfferCreateAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.cardId = message.cardId !== BigInt(0) ? message.cardId?.toString() : undefined;
    obj.price = message.price ? Coin.toAmino(message.price) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSellOfferCreateAminoMsg): MsgSellOfferCreate {
    return MsgSellOfferCreate.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSellOfferCreateProtoMsg): MsgSellOfferCreate {
    return MsgSellOfferCreate.decode(message.value);
  },
  toProto(message: MsgSellOfferCreate): Uint8Array {
    return MsgSellOfferCreate.encode(message).finish();
  },
  toProtoMsg(message: MsgSellOfferCreate): MsgSellOfferCreateProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.MsgSellOfferCreate",
      value: MsgSellOfferCreate.encode(message).finish()
    };
  }
};
function createBaseMsgSellOfferCreateResponse(): MsgSellOfferCreateResponse {
  return {};
}
export const MsgSellOfferCreateResponse = {
  typeUrl: "/cardchain.cardchain.MsgSellOfferCreateResponse",
  encode(_: MsgSellOfferCreateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSellOfferCreateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSellOfferCreateResponse();
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
  fromPartial(_: Partial<MsgSellOfferCreateResponse>): MsgSellOfferCreateResponse {
    const message = createBaseMsgSellOfferCreateResponse();
    return message;
  },
  fromAmino(_: MsgSellOfferCreateResponseAmino): MsgSellOfferCreateResponse {
    const message = createBaseMsgSellOfferCreateResponse();
    return message;
  },
  toAmino(_: MsgSellOfferCreateResponse): MsgSellOfferCreateResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSellOfferCreateResponseAminoMsg): MsgSellOfferCreateResponse {
    return MsgSellOfferCreateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSellOfferCreateResponseProtoMsg): MsgSellOfferCreateResponse {
    return MsgSellOfferCreateResponse.decode(message.value);
  },
  toProto(message: MsgSellOfferCreateResponse): Uint8Array {
    return MsgSellOfferCreateResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSellOfferCreateResponse): MsgSellOfferCreateResponseProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.MsgSellOfferCreateResponse",
      value: MsgSellOfferCreateResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSellOfferBuy(): MsgSellOfferBuy {
  return {
    creator: "",
    sellOfferId: BigInt(0)
  };
}
export const MsgSellOfferBuy = {
  typeUrl: "/cardchain.cardchain.MsgSellOfferBuy",
  encode(message: MsgSellOfferBuy, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.sellOfferId !== BigInt(0)) {
      writer.uint32(16).uint64(message.sellOfferId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSellOfferBuy {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSellOfferBuy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.sellOfferId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSellOfferBuy>): MsgSellOfferBuy {
    const message = createBaseMsgSellOfferBuy();
    message.creator = object.creator ?? "";
    message.sellOfferId = object.sellOfferId !== undefined && object.sellOfferId !== null ? BigInt(object.sellOfferId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgSellOfferBuyAmino): MsgSellOfferBuy {
    const message = createBaseMsgSellOfferBuy();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.sellOfferId !== undefined && object.sellOfferId !== null) {
      message.sellOfferId = BigInt(object.sellOfferId);
    }
    return message;
  },
  toAmino(message: MsgSellOfferBuy): MsgSellOfferBuyAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.sellOfferId = message.sellOfferId !== BigInt(0) ? message.sellOfferId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSellOfferBuyAminoMsg): MsgSellOfferBuy {
    return MsgSellOfferBuy.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSellOfferBuyProtoMsg): MsgSellOfferBuy {
    return MsgSellOfferBuy.decode(message.value);
  },
  toProto(message: MsgSellOfferBuy): Uint8Array {
    return MsgSellOfferBuy.encode(message).finish();
  },
  toProtoMsg(message: MsgSellOfferBuy): MsgSellOfferBuyProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.MsgSellOfferBuy",
      value: MsgSellOfferBuy.encode(message).finish()
    };
  }
};
function createBaseMsgSellOfferBuyResponse(): MsgSellOfferBuyResponse {
  return {};
}
export const MsgSellOfferBuyResponse = {
  typeUrl: "/cardchain.cardchain.MsgSellOfferBuyResponse",
  encode(_: MsgSellOfferBuyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSellOfferBuyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSellOfferBuyResponse();
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
  fromPartial(_: Partial<MsgSellOfferBuyResponse>): MsgSellOfferBuyResponse {
    const message = createBaseMsgSellOfferBuyResponse();
    return message;
  },
  fromAmino(_: MsgSellOfferBuyResponseAmino): MsgSellOfferBuyResponse {
    const message = createBaseMsgSellOfferBuyResponse();
    return message;
  },
  toAmino(_: MsgSellOfferBuyResponse): MsgSellOfferBuyResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSellOfferBuyResponseAminoMsg): MsgSellOfferBuyResponse {
    return MsgSellOfferBuyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSellOfferBuyResponseProtoMsg): MsgSellOfferBuyResponse {
    return MsgSellOfferBuyResponse.decode(message.value);
  },
  toProto(message: MsgSellOfferBuyResponse): Uint8Array {
    return MsgSellOfferBuyResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSellOfferBuyResponse): MsgSellOfferBuyResponseProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.MsgSellOfferBuyResponse",
      value: MsgSellOfferBuyResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSellOfferRemove(): MsgSellOfferRemove {
  return {
    creator: "",
    sellOfferId: BigInt(0)
  };
}
export const MsgSellOfferRemove = {
  typeUrl: "/cardchain.cardchain.MsgSellOfferRemove",
  encode(message: MsgSellOfferRemove, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.sellOfferId !== BigInt(0)) {
      writer.uint32(16).uint64(message.sellOfferId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSellOfferRemove {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSellOfferRemove();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.sellOfferId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSellOfferRemove>): MsgSellOfferRemove {
    const message = createBaseMsgSellOfferRemove();
    message.creator = object.creator ?? "";
    message.sellOfferId = object.sellOfferId !== undefined && object.sellOfferId !== null ? BigInt(object.sellOfferId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgSellOfferRemoveAmino): MsgSellOfferRemove {
    const message = createBaseMsgSellOfferRemove();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.sellOfferId !== undefined && object.sellOfferId !== null) {
      message.sellOfferId = BigInt(object.sellOfferId);
    }
    return message;
  },
  toAmino(message: MsgSellOfferRemove): MsgSellOfferRemoveAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.sellOfferId = message.sellOfferId !== BigInt(0) ? message.sellOfferId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSellOfferRemoveAminoMsg): MsgSellOfferRemove {
    return MsgSellOfferRemove.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSellOfferRemoveProtoMsg): MsgSellOfferRemove {
    return MsgSellOfferRemove.decode(message.value);
  },
  toProto(message: MsgSellOfferRemove): Uint8Array {
    return MsgSellOfferRemove.encode(message).finish();
  },
  toProtoMsg(message: MsgSellOfferRemove): MsgSellOfferRemoveProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.MsgSellOfferRemove",
      value: MsgSellOfferRemove.encode(message).finish()
    };
  }
};
function createBaseMsgSellOfferRemoveResponse(): MsgSellOfferRemoveResponse {
  return {};
}
export const MsgSellOfferRemoveResponse = {
  typeUrl: "/cardchain.cardchain.MsgSellOfferRemoveResponse",
  encode(_: MsgSellOfferRemoveResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSellOfferRemoveResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSellOfferRemoveResponse();
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
  fromPartial(_: Partial<MsgSellOfferRemoveResponse>): MsgSellOfferRemoveResponse {
    const message = createBaseMsgSellOfferRemoveResponse();
    return message;
  },
  fromAmino(_: MsgSellOfferRemoveResponseAmino): MsgSellOfferRemoveResponse {
    const message = createBaseMsgSellOfferRemoveResponse();
    return message;
  },
  toAmino(_: MsgSellOfferRemoveResponse): MsgSellOfferRemoveResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSellOfferRemoveResponseAminoMsg): MsgSellOfferRemoveResponse {
    return MsgSellOfferRemoveResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSellOfferRemoveResponseProtoMsg): MsgSellOfferRemoveResponse {
    return MsgSellOfferRemoveResponse.decode(message.value);
  },
  toProto(message: MsgSellOfferRemoveResponse): Uint8Array {
    return MsgSellOfferRemoveResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSellOfferRemoveResponse): MsgSellOfferRemoveResponseProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.MsgSellOfferRemoveResponse",
      value: MsgSellOfferRemoveResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCardRaritySet(): MsgCardRaritySet {
  return {
    creator: "",
    cardId: BigInt(0),
    setId: BigInt(0),
    rarity: 0
  };
}
export const MsgCardRaritySet = {
  typeUrl: "/cardchain.cardchain.MsgCardRaritySet",
  encode(message: MsgCardRaritySet, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.cardId !== BigInt(0)) {
      writer.uint32(16).uint64(message.cardId);
    }
    if (message.setId !== BigInt(0)) {
      writer.uint32(24).uint64(message.setId);
    }
    if (message.rarity !== 0) {
      writer.uint32(32).int32(message.rarity);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCardRaritySet {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCardRaritySet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.cardId = reader.uint64();
          break;
        case 3:
          message.setId = reader.uint64();
          break;
        case 4:
          message.rarity = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCardRaritySet>): MsgCardRaritySet {
    const message = createBaseMsgCardRaritySet();
    message.creator = object.creator ?? "";
    message.cardId = object.cardId !== undefined && object.cardId !== null ? BigInt(object.cardId.toString()) : BigInt(0);
    message.setId = object.setId !== undefined && object.setId !== null ? BigInt(object.setId.toString()) : BigInt(0);
    message.rarity = object.rarity ?? 0;
    return message;
  },
  fromAmino(object: MsgCardRaritySetAmino): MsgCardRaritySet {
    const message = createBaseMsgCardRaritySet();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.cardId !== undefined && object.cardId !== null) {
      message.cardId = BigInt(object.cardId);
    }
    if (object.setId !== undefined && object.setId !== null) {
      message.setId = BigInt(object.setId);
    }
    if (object.rarity !== undefined && object.rarity !== null) {
      message.rarity = object.rarity;
    }
    return message;
  },
  toAmino(message: MsgCardRaritySet): MsgCardRaritySetAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.cardId = message.cardId !== BigInt(0) ? message.cardId?.toString() : undefined;
    obj.setId = message.setId !== BigInt(0) ? message.setId?.toString() : undefined;
    obj.rarity = message.rarity === 0 ? undefined : message.rarity;
    return obj;
  },
  fromAminoMsg(object: MsgCardRaritySetAminoMsg): MsgCardRaritySet {
    return MsgCardRaritySet.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCardRaritySetProtoMsg): MsgCardRaritySet {
    return MsgCardRaritySet.decode(message.value);
  },
  toProto(message: MsgCardRaritySet): Uint8Array {
    return MsgCardRaritySet.encode(message).finish();
  },
  toProtoMsg(message: MsgCardRaritySet): MsgCardRaritySetProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.MsgCardRaritySet",
      value: MsgCardRaritySet.encode(message).finish()
    };
  }
};
function createBaseMsgCardRaritySetResponse(): MsgCardRaritySetResponse {
  return {};
}
export const MsgCardRaritySetResponse = {
  typeUrl: "/cardchain.cardchain.MsgCardRaritySetResponse",
  encode(_: MsgCardRaritySetResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCardRaritySetResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCardRaritySetResponse();
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
  fromPartial(_: Partial<MsgCardRaritySetResponse>): MsgCardRaritySetResponse {
    const message = createBaseMsgCardRaritySetResponse();
    return message;
  },
  fromAmino(_: MsgCardRaritySetResponseAmino): MsgCardRaritySetResponse {
    const message = createBaseMsgCardRaritySetResponse();
    return message;
  },
  toAmino(_: MsgCardRaritySetResponse): MsgCardRaritySetResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCardRaritySetResponseAminoMsg): MsgCardRaritySetResponse {
    return MsgCardRaritySetResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCardRaritySetResponseProtoMsg): MsgCardRaritySetResponse {
    return MsgCardRaritySetResponse.decode(message.value);
  },
  toProto(message: MsgCardRaritySetResponse): Uint8Array {
    return MsgCardRaritySetResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCardRaritySetResponse): MsgCardRaritySetResponseProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.MsgCardRaritySetResponse",
      value: MsgCardRaritySetResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCouncilResponseCommit(): MsgCouncilResponseCommit {
  return {
    creator: "",
    councilId: BigInt(0),
    response: "",
    suggestion: ""
  };
}
export const MsgCouncilResponseCommit = {
  typeUrl: "/cardchain.cardchain.MsgCouncilResponseCommit",
  encode(message: MsgCouncilResponseCommit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.councilId !== BigInt(0)) {
      writer.uint32(16).uint64(message.councilId);
    }
    if (message.response !== "") {
      writer.uint32(26).string(message.response);
    }
    if (message.suggestion !== "") {
      writer.uint32(34).string(message.suggestion);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCouncilResponseCommit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCouncilResponseCommit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.councilId = reader.uint64();
          break;
        case 3:
          message.response = reader.string();
          break;
        case 4:
          message.suggestion = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCouncilResponseCommit>): MsgCouncilResponseCommit {
    const message = createBaseMsgCouncilResponseCommit();
    message.creator = object.creator ?? "";
    message.councilId = object.councilId !== undefined && object.councilId !== null ? BigInt(object.councilId.toString()) : BigInt(0);
    message.response = object.response ?? "";
    message.suggestion = object.suggestion ?? "";
    return message;
  },
  fromAmino(object: MsgCouncilResponseCommitAmino): MsgCouncilResponseCommit {
    const message = createBaseMsgCouncilResponseCommit();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.councilId !== undefined && object.councilId !== null) {
      message.councilId = BigInt(object.councilId);
    }
    if (object.response !== undefined && object.response !== null) {
      message.response = object.response;
    }
    if (object.suggestion !== undefined && object.suggestion !== null) {
      message.suggestion = object.suggestion;
    }
    return message;
  },
  toAmino(message: MsgCouncilResponseCommit): MsgCouncilResponseCommitAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.councilId = message.councilId !== BigInt(0) ? message.councilId?.toString() : undefined;
    obj.response = message.response === "" ? undefined : message.response;
    obj.suggestion = message.suggestion === "" ? undefined : message.suggestion;
    return obj;
  },
  fromAminoMsg(object: MsgCouncilResponseCommitAminoMsg): MsgCouncilResponseCommit {
    return MsgCouncilResponseCommit.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCouncilResponseCommitProtoMsg): MsgCouncilResponseCommit {
    return MsgCouncilResponseCommit.decode(message.value);
  },
  toProto(message: MsgCouncilResponseCommit): Uint8Array {
    return MsgCouncilResponseCommit.encode(message).finish();
  },
  toProtoMsg(message: MsgCouncilResponseCommit): MsgCouncilResponseCommitProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.MsgCouncilResponseCommit",
      value: MsgCouncilResponseCommit.encode(message).finish()
    };
  }
};
function createBaseMsgCouncilResponseCommitResponse(): MsgCouncilResponseCommitResponse {
  return {};
}
export const MsgCouncilResponseCommitResponse = {
  typeUrl: "/cardchain.cardchain.MsgCouncilResponseCommitResponse",
  encode(_: MsgCouncilResponseCommitResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCouncilResponseCommitResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCouncilResponseCommitResponse();
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
  fromPartial(_: Partial<MsgCouncilResponseCommitResponse>): MsgCouncilResponseCommitResponse {
    const message = createBaseMsgCouncilResponseCommitResponse();
    return message;
  },
  fromAmino(_: MsgCouncilResponseCommitResponseAmino): MsgCouncilResponseCommitResponse {
    const message = createBaseMsgCouncilResponseCommitResponse();
    return message;
  },
  toAmino(_: MsgCouncilResponseCommitResponse): MsgCouncilResponseCommitResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCouncilResponseCommitResponseAminoMsg): MsgCouncilResponseCommitResponse {
    return MsgCouncilResponseCommitResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCouncilResponseCommitResponseProtoMsg): MsgCouncilResponseCommitResponse {
    return MsgCouncilResponseCommitResponse.decode(message.value);
  },
  toProto(message: MsgCouncilResponseCommitResponse): Uint8Array {
    return MsgCouncilResponseCommitResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCouncilResponseCommitResponse): MsgCouncilResponseCommitResponseProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.MsgCouncilResponseCommitResponse",
      value: MsgCouncilResponseCommitResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCouncilResponseReveal(): MsgCouncilResponseReveal {
  return {
    creator: "",
    councilId: BigInt(0),
    response: 0,
    secret: ""
  };
}
export const MsgCouncilResponseReveal = {
  typeUrl: "/cardchain.cardchain.MsgCouncilResponseReveal",
  encode(message: MsgCouncilResponseReveal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.councilId !== BigInt(0)) {
      writer.uint32(16).uint64(message.councilId);
    }
    if (message.response !== 0) {
      writer.uint32(24).int32(message.response);
    }
    if (message.secret !== "") {
      writer.uint32(34).string(message.secret);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCouncilResponseReveal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCouncilResponseReveal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.councilId = reader.uint64();
          break;
        case 3:
          message.response = reader.int32() as any;
          break;
        case 4:
          message.secret = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCouncilResponseReveal>): MsgCouncilResponseReveal {
    const message = createBaseMsgCouncilResponseReveal();
    message.creator = object.creator ?? "";
    message.councilId = object.councilId !== undefined && object.councilId !== null ? BigInt(object.councilId.toString()) : BigInt(0);
    message.response = object.response ?? 0;
    message.secret = object.secret ?? "";
    return message;
  },
  fromAmino(object: MsgCouncilResponseRevealAmino): MsgCouncilResponseReveal {
    const message = createBaseMsgCouncilResponseReveal();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.councilId !== undefined && object.councilId !== null) {
      message.councilId = BigInt(object.councilId);
    }
    if (object.response !== undefined && object.response !== null) {
      message.response = object.response;
    }
    if (object.secret !== undefined && object.secret !== null) {
      message.secret = object.secret;
    }
    return message;
  },
  toAmino(message: MsgCouncilResponseReveal): MsgCouncilResponseRevealAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.councilId = message.councilId !== BigInt(0) ? message.councilId?.toString() : undefined;
    obj.response = message.response === 0 ? undefined : message.response;
    obj.secret = message.secret === "" ? undefined : message.secret;
    return obj;
  },
  fromAminoMsg(object: MsgCouncilResponseRevealAminoMsg): MsgCouncilResponseReveal {
    return MsgCouncilResponseReveal.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCouncilResponseRevealProtoMsg): MsgCouncilResponseReveal {
    return MsgCouncilResponseReveal.decode(message.value);
  },
  toProto(message: MsgCouncilResponseReveal): Uint8Array {
    return MsgCouncilResponseReveal.encode(message).finish();
  },
  toProtoMsg(message: MsgCouncilResponseReveal): MsgCouncilResponseRevealProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.MsgCouncilResponseReveal",
      value: MsgCouncilResponseReveal.encode(message).finish()
    };
  }
};
function createBaseMsgCouncilResponseRevealResponse(): MsgCouncilResponseRevealResponse {
  return {};
}
export const MsgCouncilResponseRevealResponse = {
  typeUrl: "/cardchain.cardchain.MsgCouncilResponseRevealResponse",
  encode(_: MsgCouncilResponseRevealResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCouncilResponseRevealResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCouncilResponseRevealResponse();
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
  fromPartial(_: Partial<MsgCouncilResponseRevealResponse>): MsgCouncilResponseRevealResponse {
    const message = createBaseMsgCouncilResponseRevealResponse();
    return message;
  },
  fromAmino(_: MsgCouncilResponseRevealResponseAmino): MsgCouncilResponseRevealResponse {
    const message = createBaseMsgCouncilResponseRevealResponse();
    return message;
  },
  toAmino(_: MsgCouncilResponseRevealResponse): MsgCouncilResponseRevealResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCouncilResponseRevealResponseAminoMsg): MsgCouncilResponseRevealResponse {
    return MsgCouncilResponseRevealResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCouncilResponseRevealResponseProtoMsg): MsgCouncilResponseRevealResponse {
    return MsgCouncilResponseRevealResponse.decode(message.value);
  },
  toProto(message: MsgCouncilResponseRevealResponse): Uint8Array {
    return MsgCouncilResponseRevealResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCouncilResponseRevealResponse): MsgCouncilResponseRevealResponseProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.MsgCouncilResponseRevealResponse",
      value: MsgCouncilResponseRevealResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCouncilRestart(): MsgCouncilRestart {
  return {
    creator: "",
    councilId: BigInt(0)
  };
}
export const MsgCouncilRestart = {
  typeUrl: "/cardchain.cardchain.MsgCouncilRestart",
  encode(message: MsgCouncilRestart, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.councilId !== BigInt(0)) {
      writer.uint32(16).uint64(message.councilId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCouncilRestart {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCouncilRestart();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.councilId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCouncilRestart>): MsgCouncilRestart {
    const message = createBaseMsgCouncilRestart();
    message.creator = object.creator ?? "";
    message.councilId = object.councilId !== undefined && object.councilId !== null ? BigInt(object.councilId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgCouncilRestartAmino): MsgCouncilRestart {
    const message = createBaseMsgCouncilRestart();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.councilId !== undefined && object.councilId !== null) {
      message.councilId = BigInt(object.councilId);
    }
    return message;
  },
  toAmino(message: MsgCouncilRestart): MsgCouncilRestartAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.councilId = message.councilId !== BigInt(0) ? message.councilId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCouncilRestartAminoMsg): MsgCouncilRestart {
    return MsgCouncilRestart.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCouncilRestartProtoMsg): MsgCouncilRestart {
    return MsgCouncilRestart.decode(message.value);
  },
  toProto(message: MsgCouncilRestart): Uint8Array {
    return MsgCouncilRestart.encode(message).finish();
  },
  toProtoMsg(message: MsgCouncilRestart): MsgCouncilRestartProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.MsgCouncilRestart",
      value: MsgCouncilRestart.encode(message).finish()
    };
  }
};
function createBaseMsgCouncilRestartResponse(): MsgCouncilRestartResponse {
  return {};
}
export const MsgCouncilRestartResponse = {
  typeUrl: "/cardchain.cardchain.MsgCouncilRestartResponse",
  encode(_: MsgCouncilRestartResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCouncilRestartResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCouncilRestartResponse();
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
  fromPartial(_: Partial<MsgCouncilRestartResponse>): MsgCouncilRestartResponse {
    const message = createBaseMsgCouncilRestartResponse();
    return message;
  },
  fromAmino(_: MsgCouncilRestartResponseAmino): MsgCouncilRestartResponse {
    const message = createBaseMsgCouncilRestartResponse();
    return message;
  },
  toAmino(_: MsgCouncilRestartResponse): MsgCouncilRestartResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCouncilRestartResponseAminoMsg): MsgCouncilRestartResponse {
    return MsgCouncilRestartResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCouncilRestartResponseProtoMsg): MsgCouncilRestartResponse {
    return MsgCouncilRestartResponse.decode(message.value);
  },
  toProto(message: MsgCouncilRestartResponse): Uint8Array {
    return MsgCouncilRestartResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCouncilRestartResponse): MsgCouncilRestartResponseProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.MsgCouncilRestartResponse",
      value: MsgCouncilRestartResponse.encode(message).finish()
    };
  }
};
function createBaseMsgMatchConfirm(): MsgMatchConfirm {
  return {
    creator: "",
    matchId: BigInt(0),
    outcome: 0,
    votedCards: []
  };
}
export const MsgMatchConfirm = {
  typeUrl: "/cardchain.cardchain.MsgMatchConfirm",
  encode(message: MsgMatchConfirm, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.matchId !== BigInt(0)) {
      writer.uint32(16).uint64(message.matchId);
    }
    if (message.outcome !== 0) {
      writer.uint32(24).int32(message.outcome);
    }
    for (const v of message.votedCards) {
      SingleVote.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgMatchConfirm {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMatchConfirm();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.matchId = reader.uint64();
          break;
        case 3:
          message.outcome = reader.int32() as any;
          break;
        case 4:
          message.votedCards.push(SingleVote.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgMatchConfirm>): MsgMatchConfirm {
    const message = createBaseMsgMatchConfirm();
    message.creator = object.creator ?? "";
    message.matchId = object.matchId !== undefined && object.matchId !== null ? BigInt(object.matchId.toString()) : BigInt(0);
    message.outcome = object.outcome ?? 0;
    message.votedCards = object.votedCards?.map(e => SingleVote.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgMatchConfirmAmino): MsgMatchConfirm {
    const message = createBaseMsgMatchConfirm();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.matchId !== undefined && object.matchId !== null) {
      message.matchId = BigInt(object.matchId);
    }
    if (object.outcome !== undefined && object.outcome !== null) {
      message.outcome = object.outcome;
    }
    message.votedCards = object.votedCards?.map(e => SingleVote.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgMatchConfirm): MsgMatchConfirmAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.matchId = message.matchId !== BigInt(0) ? message.matchId?.toString() : undefined;
    obj.outcome = message.outcome === 0 ? undefined : message.outcome;
    if (message.votedCards) {
      obj.votedCards = message.votedCards.map(e => e ? SingleVote.toAmino(e) : undefined);
    } else {
      obj.votedCards = message.votedCards;
    }
    return obj;
  },
  fromAminoMsg(object: MsgMatchConfirmAminoMsg): MsgMatchConfirm {
    return MsgMatchConfirm.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgMatchConfirmProtoMsg): MsgMatchConfirm {
    return MsgMatchConfirm.decode(message.value);
  },
  toProto(message: MsgMatchConfirm): Uint8Array {
    return MsgMatchConfirm.encode(message).finish();
  },
  toProtoMsg(message: MsgMatchConfirm): MsgMatchConfirmProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.MsgMatchConfirm",
      value: MsgMatchConfirm.encode(message).finish()
    };
  }
};
function createBaseMsgMatchConfirmResponse(): MsgMatchConfirmResponse {
  return {};
}
export const MsgMatchConfirmResponse = {
  typeUrl: "/cardchain.cardchain.MsgMatchConfirmResponse",
  encode(_: MsgMatchConfirmResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgMatchConfirmResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMatchConfirmResponse();
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
  fromPartial(_: Partial<MsgMatchConfirmResponse>): MsgMatchConfirmResponse {
    const message = createBaseMsgMatchConfirmResponse();
    return message;
  },
  fromAmino(_: MsgMatchConfirmResponseAmino): MsgMatchConfirmResponse {
    const message = createBaseMsgMatchConfirmResponse();
    return message;
  },
  toAmino(_: MsgMatchConfirmResponse): MsgMatchConfirmResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgMatchConfirmResponseAminoMsg): MsgMatchConfirmResponse {
    return MsgMatchConfirmResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgMatchConfirmResponseProtoMsg): MsgMatchConfirmResponse {
    return MsgMatchConfirmResponse.decode(message.value);
  },
  toProto(message: MsgMatchConfirmResponse): Uint8Array {
    return MsgMatchConfirmResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgMatchConfirmResponse): MsgMatchConfirmResponseProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.MsgMatchConfirmResponse",
      value: MsgMatchConfirmResponse.encode(message).finish()
    };
  }
};
function createBaseMsgProfileCardSet(): MsgProfileCardSet {
  return {
    creator: "",
    cardId: BigInt(0)
  };
}
export const MsgProfileCardSet = {
  typeUrl: "/cardchain.cardchain.MsgProfileCardSet",
  encode(message: MsgProfileCardSet, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.cardId !== BigInt(0)) {
      writer.uint32(16).uint64(message.cardId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgProfileCardSet {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgProfileCardSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.cardId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgProfileCardSet>): MsgProfileCardSet {
    const message = createBaseMsgProfileCardSet();
    message.creator = object.creator ?? "";
    message.cardId = object.cardId !== undefined && object.cardId !== null ? BigInt(object.cardId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgProfileCardSetAmino): MsgProfileCardSet {
    const message = createBaseMsgProfileCardSet();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.cardId !== undefined && object.cardId !== null) {
      message.cardId = BigInt(object.cardId);
    }
    return message;
  },
  toAmino(message: MsgProfileCardSet): MsgProfileCardSetAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.cardId = message.cardId !== BigInt(0) ? message.cardId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgProfileCardSetAminoMsg): MsgProfileCardSet {
    return MsgProfileCardSet.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgProfileCardSetProtoMsg): MsgProfileCardSet {
    return MsgProfileCardSet.decode(message.value);
  },
  toProto(message: MsgProfileCardSet): Uint8Array {
    return MsgProfileCardSet.encode(message).finish();
  },
  toProtoMsg(message: MsgProfileCardSet): MsgProfileCardSetProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.MsgProfileCardSet",
      value: MsgProfileCardSet.encode(message).finish()
    };
  }
};
function createBaseMsgProfileCardSetResponse(): MsgProfileCardSetResponse {
  return {};
}
export const MsgProfileCardSetResponse = {
  typeUrl: "/cardchain.cardchain.MsgProfileCardSetResponse",
  encode(_: MsgProfileCardSetResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgProfileCardSetResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgProfileCardSetResponse();
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
  fromPartial(_: Partial<MsgProfileCardSetResponse>): MsgProfileCardSetResponse {
    const message = createBaseMsgProfileCardSetResponse();
    return message;
  },
  fromAmino(_: MsgProfileCardSetResponseAmino): MsgProfileCardSetResponse {
    const message = createBaseMsgProfileCardSetResponse();
    return message;
  },
  toAmino(_: MsgProfileCardSetResponse): MsgProfileCardSetResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgProfileCardSetResponseAminoMsg): MsgProfileCardSetResponse {
    return MsgProfileCardSetResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgProfileCardSetResponseProtoMsg): MsgProfileCardSetResponse {
    return MsgProfileCardSetResponse.decode(message.value);
  },
  toProto(message: MsgProfileCardSetResponse): Uint8Array {
    return MsgProfileCardSetResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgProfileCardSetResponse): MsgProfileCardSetResponseProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.MsgProfileCardSetResponse",
      value: MsgProfileCardSetResponse.encode(message).finish()
    };
  }
};
function createBaseMsgProfileWebsiteSet(): MsgProfileWebsiteSet {
  return {
    creator: "",
    website: ""
  };
}
export const MsgProfileWebsiteSet = {
  typeUrl: "/cardchain.cardchain.MsgProfileWebsiteSet",
  encode(message: MsgProfileWebsiteSet, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.website !== "") {
      writer.uint32(18).string(message.website);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgProfileWebsiteSet {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgProfileWebsiteSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.website = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgProfileWebsiteSet>): MsgProfileWebsiteSet {
    const message = createBaseMsgProfileWebsiteSet();
    message.creator = object.creator ?? "";
    message.website = object.website ?? "";
    return message;
  },
  fromAmino(object: MsgProfileWebsiteSetAmino): MsgProfileWebsiteSet {
    const message = createBaseMsgProfileWebsiteSet();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.website !== undefined && object.website !== null) {
      message.website = object.website;
    }
    return message;
  },
  toAmino(message: MsgProfileWebsiteSet): MsgProfileWebsiteSetAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.website = message.website === "" ? undefined : message.website;
    return obj;
  },
  fromAminoMsg(object: MsgProfileWebsiteSetAminoMsg): MsgProfileWebsiteSet {
    return MsgProfileWebsiteSet.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgProfileWebsiteSetProtoMsg): MsgProfileWebsiteSet {
    return MsgProfileWebsiteSet.decode(message.value);
  },
  toProto(message: MsgProfileWebsiteSet): Uint8Array {
    return MsgProfileWebsiteSet.encode(message).finish();
  },
  toProtoMsg(message: MsgProfileWebsiteSet): MsgProfileWebsiteSetProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.MsgProfileWebsiteSet",
      value: MsgProfileWebsiteSet.encode(message).finish()
    };
  }
};
function createBaseMsgProfileWebsiteSetResponse(): MsgProfileWebsiteSetResponse {
  return {};
}
export const MsgProfileWebsiteSetResponse = {
  typeUrl: "/cardchain.cardchain.MsgProfileWebsiteSetResponse",
  encode(_: MsgProfileWebsiteSetResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgProfileWebsiteSetResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgProfileWebsiteSetResponse();
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
  fromPartial(_: Partial<MsgProfileWebsiteSetResponse>): MsgProfileWebsiteSetResponse {
    const message = createBaseMsgProfileWebsiteSetResponse();
    return message;
  },
  fromAmino(_: MsgProfileWebsiteSetResponseAmino): MsgProfileWebsiteSetResponse {
    const message = createBaseMsgProfileWebsiteSetResponse();
    return message;
  },
  toAmino(_: MsgProfileWebsiteSetResponse): MsgProfileWebsiteSetResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgProfileWebsiteSetResponseAminoMsg): MsgProfileWebsiteSetResponse {
    return MsgProfileWebsiteSetResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgProfileWebsiteSetResponseProtoMsg): MsgProfileWebsiteSetResponse {
    return MsgProfileWebsiteSetResponse.decode(message.value);
  },
  toProto(message: MsgProfileWebsiteSetResponse): Uint8Array {
    return MsgProfileWebsiteSetResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgProfileWebsiteSetResponse): MsgProfileWebsiteSetResponseProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.MsgProfileWebsiteSetResponse",
      value: MsgProfileWebsiteSetResponse.encode(message).finish()
    };
  }
};
function createBaseMsgProfileBioSet(): MsgProfileBioSet {
  return {
    creator: "",
    bio: ""
  };
}
export const MsgProfileBioSet = {
  typeUrl: "/cardchain.cardchain.MsgProfileBioSet",
  encode(message: MsgProfileBioSet, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.bio !== "") {
      writer.uint32(18).string(message.bio);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgProfileBioSet {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgProfileBioSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.bio = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgProfileBioSet>): MsgProfileBioSet {
    const message = createBaseMsgProfileBioSet();
    message.creator = object.creator ?? "";
    message.bio = object.bio ?? "";
    return message;
  },
  fromAmino(object: MsgProfileBioSetAmino): MsgProfileBioSet {
    const message = createBaseMsgProfileBioSet();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.bio !== undefined && object.bio !== null) {
      message.bio = object.bio;
    }
    return message;
  },
  toAmino(message: MsgProfileBioSet): MsgProfileBioSetAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.bio = message.bio === "" ? undefined : message.bio;
    return obj;
  },
  fromAminoMsg(object: MsgProfileBioSetAminoMsg): MsgProfileBioSet {
    return MsgProfileBioSet.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgProfileBioSetProtoMsg): MsgProfileBioSet {
    return MsgProfileBioSet.decode(message.value);
  },
  toProto(message: MsgProfileBioSet): Uint8Array {
    return MsgProfileBioSet.encode(message).finish();
  },
  toProtoMsg(message: MsgProfileBioSet): MsgProfileBioSetProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.MsgProfileBioSet",
      value: MsgProfileBioSet.encode(message).finish()
    };
  }
};
function createBaseMsgProfileBioSetResponse(): MsgProfileBioSetResponse {
  return {};
}
export const MsgProfileBioSetResponse = {
  typeUrl: "/cardchain.cardchain.MsgProfileBioSetResponse",
  encode(_: MsgProfileBioSetResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgProfileBioSetResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgProfileBioSetResponse();
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
  fromPartial(_: Partial<MsgProfileBioSetResponse>): MsgProfileBioSetResponse {
    const message = createBaseMsgProfileBioSetResponse();
    return message;
  },
  fromAmino(_: MsgProfileBioSetResponseAmino): MsgProfileBioSetResponse {
    const message = createBaseMsgProfileBioSetResponse();
    return message;
  },
  toAmino(_: MsgProfileBioSetResponse): MsgProfileBioSetResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgProfileBioSetResponseAminoMsg): MsgProfileBioSetResponse {
    return MsgProfileBioSetResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgProfileBioSetResponseProtoMsg): MsgProfileBioSetResponse {
    return MsgProfileBioSetResponse.decode(message.value);
  },
  toProto(message: MsgProfileBioSetResponse): Uint8Array {
    return MsgProfileBioSetResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgProfileBioSetResponse): MsgProfileBioSetResponseProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.MsgProfileBioSetResponse",
      value: MsgProfileBioSetResponse.encode(message).finish()
    };
  }
};
function createBaseMsgBoosterPackOpen(): MsgBoosterPackOpen {
  return {
    creator: "",
    boosterPackId: BigInt(0)
  };
}
export const MsgBoosterPackOpen = {
  typeUrl: "/cardchain.cardchain.MsgBoosterPackOpen",
  encode(message: MsgBoosterPackOpen, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.boosterPackId !== BigInt(0)) {
      writer.uint32(16).uint64(message.boosterPackId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBoosterPackOpen {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBoosterPackOpen();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.boosterPackId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgBoosterPackOpen>): MsgBoosterPackOpen {
    const message = createBaseMsgBoosterPackOpen();
    message.creator = object.creator ?? "";
    message.boosterPackId = object.boosterPackId !== undefined && object.boosterPackId !== null ? BigInt(object.boosterPackId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgBoosterPackOpenAmino): MsgBoosterPackOpen {
    const message = createBaseMsgBoosterPackOpen();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.boosterPackId !== undefined && object.boosterPackId !== null) {
      message.boosterPackId = BigInt(object.boosterPackId);
    }
    return message;
  },
  toAmino(message: MsgBoosterPackOpen): MsgBoosterPackOpenAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.boosterPackId = message.boosterPackId !== BigInt(0) ? message.boosterPackId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgBoosterPackOpenAminoMsg): MsgBoosterPackOpen {
    return MsgBoosterPackOpen.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBoosterPackOpenProtoMsg): MsgBoosterPackOpen {
    return MsgBoosterPackOpen.decode(message.value);
  },
  toProto(message: MsgBoosterPackOpen): Uint8Array {
    return MsgBoosterPackOpen.encode(message).finish();
  },
  toProtoMsg(message: MsgBoosterPackOpen): MsgBoosterPackOpenProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.MsgBoosterPackOpen",
      value: MsgBoosterPackOpen.encode(message).finish()
    };
  }
};
function createBaseMsgBoosterPackOpenResponse(): MsgBoosterPackOpenResponse {
  return {
    cardIds: []
  };
}
export const MsgBoosterPackOpenResponse = {
  typeUrl: "/cardchain.cardchain.MsgBoosterPackOpenResponse",
  encode(message: MsgBoosterPackOpenResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.cardIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBoosterPackOpenResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBoosterPackOpenResponse();
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
  fromPartial(object: Partial<MsgBoosterPackOpenResponse>): MsgBoosterPackOpenResponse {
    const message = createBaseMsgBoosterPackOpenResponse();
    message.cardIds = object.cardIds?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object: MsgBoosterPackOpenResponseAmino): MsgBoosterPackOpenResponse {
    const message = createBaseMsgBoosterPackOpenResponse();
    message.cardIds = object.cardIds?.map(e => BigInt(e)) || [];
    return message;
  },
  toAmino(message: MsgBoosterPackOpenResponse): MsgBoosterPackOpenResponseAmino {
    const obj: any = {};
    if (message.cardIds) {
      obj.cardIds = message.cardIds.map(e => e.toString());
    } else {
      obj.cardIds = message.cardIds;
    }
    return obj;
  },
  fromAminoMsg(object: MsgBoosterPackOpenResponseAminoMsg): MsgBoosterPackOpenResponse {
    return MsgBoosterPackOpenResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBoosterPackOpenResponseProtoMsg): MsgBoosterPackOpenResponse {
    return MsgBoosterPackOpenResponse.decode(message.value);
  },
  toProto(message: MsgBoosterPackOpenResponse): Uint8Array {
    return MsgBoosterPackOpenResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgBoosterPackOpenResponse): MsgBoosterPackOpenResponseProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.MsgBoosterPackOpenResponse",
      value: MsgBoosterPackOpenResponse.encode(message).finish()
    };
  }
};
function createBaseMsgBoosterPackTransfer(): MsgBoosterPackTransfer {
  return {
    creator: "",
    boosterPackId: BigInt(0),
    receiver: ""
  };
}
export const MsgBoosterPackTransfer = {
  typeUrl: "/cardchain.cardchain.MsgBoosterPackTransfer",
  encode(message: MsgBoosterPackTransfer, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.boosterPackId !== BigInt(0)) {
      writer.uint32(16).uint64(message.boosterPackId);
    }
    if (message.receiver !== "") {
      writer.uint32(26).string(message.receiver);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBoosterPackTransfer {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBoosterPackTransfer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.boosterPackId = reader.uint64();
          break;
        case 3:
          message.receiver = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgBoosterPackTransfer>): MsgBoosterPackTransfer {
    const message = createBaseMsgBoosterPackTransfer();
    message.creator = object.creator ?? "";
    message.boosterPackId = object.boosterPackId !== undefined && object.boosterPackId !== null ? BigInt(object.boosterPackId.toString()) : BigInt(0);
    message.receiver = object.receiver ?? "";
    return message;
  },
  fromAmino(object: MsgBoosterPackTransferAmino): MsgBoosterPackTransfer {
    const message = createBaseMsgBoosterPackTransfer();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.boosterPackId !== undefined && object.boosterPackId !== null) {
      message.boosterPackId = BigInt(object.boosterPackId);
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = object.receiver;
    }
    return message;
  },
  toAmino(message: MsgBoosterPackTransfer): MsgBoosterPackTransferAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.boosterPackId = message.boosterPackId !== BigInt(0) ? message.boosterPackId?.toString() : undefined;
    obj.receiver = message.receiver === "" ? undefined : message.receiver;
    return obj;
  },
  fromAminoMsg(object: MsgBoosterPackTransferAminoMsg): MsgBoosterPackTransfer {
    return MsgBoosterPackTransfer.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBoosterPackTransferProtoMsg): MsgBoosterPackTransfer {
    return MsgBoosterPackTransfer.decode(message.value);
  },
  toProto(message: MsgBoosterPackTransfer): Uint8Array {
    return MsgBoosterPackTransfer.encode(message).finish();
  },
  toProtoMsg(message: MsgBoosterPackTransfer): MsgBoosterPackTransferProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.MsgBoosterPackTransfer",
      value: MsgBoosterPackTransfer.encode(message).finish()
    };
  }
};
function createBaseMsgBoosterPackTransferResponse(): MsgBoosterPackTransferResponse {
  return {};
}
export const MsgBoosterPackTransferResponse = {
  typeUrl: "/cardchain.cardchain.MsgBoosterPackTransferResponse",
  encode(_: MsgBoosterPackTransferResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBoosterPackTransferResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBoosterPackTransferResponse();
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
  fromPartial(_: Partial<MsgBoosterPackTransferResponse>): MsgBoosterPackTransferResponse {
    const message = createBaseMsgBoosterPackTransferResponse();
    return message;
  },
  fromAmino(_: MsgBoosterPackTransferResponseAmino): MsgBoosterPackTransferResponse {
    const message = createBaseMsgBoosterPackTransferResponse();
    return message;
  },
  toAmino(_: MsgBoosterPackTransferResponse): MsgBoosterPackTransferResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgBoosterPackTransferResponseAminoMsg): MsgBoosterPackTransferResponse {
    return MsgBoosterPackTransferResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBoosterPackTransferResponseProtoMsg): MsgBoosterPackTransferResponse {
    return MsgBoosterPackTransferResponse.decode(message.value);
  },
  toProto(message: MsgBoosterPackTransferResponse): Uint8Array {
    return MsgBoosterPackTransferResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgBoosterPackTransferResponse): MsgBoosterPackTransferResponseProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.MsgBoosterPackTransferResponse",
      value: MsgBoosterPackTransferResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSetStoryWriterSet(): MsgSetStoryWriterSet {
  return {
    creator: "",
    setId: BigInt(0),
    storyWriter: ""
  };
}
export const MsgSetStoryWriterSet = {
  typeUrl: "/cardchain.cardchain.MsgSetStoryWriterSet",
  encode(message: MsgSetStoryWriterSet, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.setId !== BigInt(0)) {
      writer.uint32(16).uint64(message.setId);
    }
    if (message.storyWriter !== "") {
      writer.uint32(26).string(message.storyWriter);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetStoryWriterSet {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetStoryWriterSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.setId = reader.uint64();
          break;
        case 3:
          message.storyWriter = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSetStoryWriterSet>): MsgSetStoryWriterSet {
    const message = createBaseMsgSetStoryWriterSet();
    message.creator = object.creator ?? "";
    message.setId = object.setId !== undefined && object.setId !== null ? BigInt(object.setId.toString()) : BigInt(0);
    message.storyWriter = object.storyWriter ?? "";
    return message;
  },
  fromAmino(object: MsgSetStoryWriterSetAmino): MsgSetStoryWriterSet {
    const message = createBaseMsgSetStoryWriterSet();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.setId !== undefined && object.setId !== null) {
      message.setId = BigInt(object.setId);
    }
    if (object.storyWriter !== undefined && object.storyWriter !== null) {
      message.storyWriter = object.storyWriter;
    }
    return message;
  },
  toAmino(message: MsgSetStoryWriterSet): MsgSetStoryWriterSetAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.setId = message.setId !== BigInt(0) ? message.setId?.toString() : undefined;
    obj.storyWriter = message.storyWriter === "" ? undefined : message.storyWriter;
    return obj;
  },
  fromAminoMsg(object: MsgSetStoryWriterSetAminoMsg): MsgSetStoryWriterSet {
    return MsgSetStoryWriterSet.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetStoryWriterSetProtoMsg): MsgSetStoryWriterSet {
    return MsgSetStoryWriterSet.decode(message.value);
  },
  toProto(message: MsgSetStoryWriterSet): Uint8Array {
    return MsgSetStoryWriterSet.encode(message).finish();
  },
  toProtoMsg(message: MsgSetStoryWriterSet): MsgSetStoryWriterSetProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.MsgSetStoryWriterSet",
      value: MsgSetStoryWriterSet.encode(message).finish()
    };
  }
};
function createBaseMsgSetStoryWriterSetResponse(): MsgSetStoryWriterSetResponse {
  return {};
}
export const MsgSetStoryWriterSetResponse = {
  typeUrl: "/cardchain.cardchain.MsgSetStoryWriterSetResponse",
  encode(_: MsgSetStoryWriterSetResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetStoryWriterSetResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetStoryWriterSetResponse();
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
  fromPartial(_: Partial<MsgSetStoryWriterSetResponse>): MsgSetStoryWriterSetResponse {
    const message = createBaseMsgSetStoryWriterSetResponse();
    return message;
  },
  fromAmino(_: MsgSetStoryWriterSetResponseAmino): MsgSetStoryWriterSetResponse {
    const message = createBaseMsgSetStoryWriterSetResponse();
    return message;
  },
  toAmino(_: MsgSetStoryWriterSetResponse): MsgSetStoryWriterSetResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetStoryWriterSetResponseAminoMsg): MsgSetStoryWriterSetResponse {
    return MsgSetStoryWriterSetResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetStoryWriterSetResponseProtoMsg): MsgSetStoryWriterSetResponse {
    return MsgSetStoryWriterSetResponse.decode(message.value);
  },
  toProto(message: MsgSetStoryWriterSetResponse): Uint8Array {
    return MsgSetStoryWriterSetResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetStoryWriterSetResponse): MsgSetStoryWriterSetResponseProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.MsgSetStoryWriterSetResponse",
      value: MsgSetStoryWriterSetResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSetArtistSet(): MsgSetArtistSet {
  return {
    creator: "",
    setId: BigInt(0),
    artist: ""
  };
}
export const MsgSetArtistSet = {
  typeUrl: "/cardchain.cardchain.MsgSetArtistSet",
  encode(message: MsgSetArtistSet, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.setId !== BigInt(0)) {
      writer.uint32(16).uint64(message.setId);
    }
    if (message.artist !== "") {
      writer.uint32(26).string(message.artist);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetArtistSet {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetArtistSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.setId = reader.uint64();
          break;
        case 3:
          message.artist = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSetArtistSet>): MsgSetArtistSet {
    const message = createBaseMsgSetArtistSet();
    message.creator = object.creator ?? "";
    message.setId = object.setId !== undefined && object.setId !== null ? BigInt(object.setId.toString()) : BigInt(0);
    message.artist = object.artist ?? "";
    return message;
  },
  fromAmino(object: MsgSetArtistSetAmino): MsgSetArtistSet {
    const message = createBaseMsgSetArtistSet();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.setId !== undefined && object.setId !== null) {
      message.setId = BigInt(object.setId);
    }
    if (object.artist !== undefined && object.artist !== null) {
      message.artist = object.artist;
    }
    return message;
  },
  toAmino(message: MsgSetArtistSet): MsgSetArtistSetAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.setId = message.setId !== BigInt(0) ? message.setId?.toString() : undefined;
    obj.artist = message.artist === "" ? undefined : message.artist;
    return obj;
  },
  fromAminoMsg(object: MsgSetArtistSetAminoMsg): MsgSetArtistSet {
    return MsgSetArtistSet.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetArtistSetProtoMsg): MsgSetArtistSet {
    return MsgSetArtistSet.decode(message.value);
  },
  toProto(message: MsgSetArtistSet): Uint8Array {
    return MsgSetArtistSet.encode(message).finish();
  },
  toProtoMsg(message: MsgSetArtistSet): MsgSetArtistSetProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.MsgSetArtistSet",
      value: MsgSetArtistSet.encode(message).finish()
    };
  }
};
function createBaseMsgSetArtistSetResponse(): MsgSetArtistSetResponse {
  return {};
}
export const MsgSetArtistSetResponse = {
  typeUrl: "/cardchain.cardchain.MsgSetArtistSetResponse",
  encode(_: MsgSetArtistSetResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetArtistSetResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetArtistSetResponse();
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
  fromPartial(_: Partial<MsgSetArtistSetResponse>): MsgSetArtistSetResponse {
    const message = createBaseMsgSetArtistSetResponse();
    return message;
  },
  fromAmino(_: MsgSetArtistSetResponseAmino): MsgSetArtistSetResponse {
    const message = createBaseMsgSetArtistSetResponse();
    return message;
  },
  toAmino(_: MsgSetArtistSetResponse): MsgSetArtistSetResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetArtistSetResponseAminoMsg): MsgSetArtistSetResponse {
    return MsgSetArtistSetResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetArtistSetResponseProtoMsg): MsgSetArtistSetResponse {
    return MsgSetArtistSetResponse.decode(message.value);
  },
  toProto(message: MsgSetArtistSetResponse): Uint8Array {
    return MsgSetArtistSetResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetArtistSetResponse): MsgSetArtistSetResponseProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.MsgSetArtistSetResponse",
      value: MsgSetArtistSetResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCardVoteMulti(): MsgCardVoteMulti {
  return {
    creator: "",
    votes: []
  };
}
export const MsgCardVoteMulti = {
  typeUrl: "/cardchain.cardchain.MsgCardVoteMulti",
  encode(message: MsgCardVoteMulti, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    for (const v of message.votes) {
      SingleVote.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCardVoteMulti {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCardVoteMulti();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.votes.push(SingleVote.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCardVoteMulti>): MsgCardVoteMulti {
    const message = createBaseMsgCardVoteMulti();
    message.creator = object.creator ?? "";
    message.votes = object.votes?.map(e => SingleVote.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgCardVoteMultiAmino): MsgCardVoteMulti {
    const message = createBaseMsgCardVoteMulti();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    message.votes = object.votes?.map(e => SingleVote.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgCardVoteMulti): MsgCardVoteMultiAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    if (message.votes) {
      obj.votes = message.votes.map(e => e ? SingleVote.toAmino(e) : undefined);
    } else {
      obj.votes = message.votes;
    }
    return obj;
  },
  fromAminoMsg(object: MsgCardVoteMultiAminoMsg): MsgCardVoteMulti {
    return MsgCardVoteMulti.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCardVoteMultiProtoMsg): MsgCardVoteMulti {
    return MsgCardVoteMulti.decode(message.value);
  },
  toProto(message: MsgCardVoteMulti): Uint8Array {
    return MsgCardVoteMulti.encode(message).finish();
  },
  toProtoMsg(message: MsgCardVoteMulti): MsgCardVoteMultiProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.MsgCardVoteMulti",
      value: MsgCardVoteMulti.encode(message).finish()
    };
  }
};
function createBaseMsgCardVoteMultiResponse(): MsgCardVoteMultiResponse {
  return {
    airdropClaimed: false
  };
}
export const MsgCardVoteMultiResponse = {
  typeUrl: "/cardchain.cardchain.MsgCardVoteMultiResponse",
  encode(message: MsgCardVoteMultiResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.airdropClaimed === true) {
      writer.uint32(8).bool(message.airdropClaimed);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCardVoteMultiResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCardVoteMultiResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.airdropClaimed = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCardVoteMultiResponse>): MsgCardVoteMultiResponse {
    const message = createBaseMsgCardVoteMultiResponse();
    message.airdropClaimed = object.airdropClaimed ?? false;
    return message;
  },
  fromAmino(object: MsgCardVoteMultiResponseAmino): MsgCardVoteMultiResponse {
    const message = createBaseMsgCardVoteMultiResponse();
    if (object.airdropClaimed !== undefined && object.airdropClaimed !== null) {
      message.airdropClaimed = object.airdropClaimed;
    }
    return message;
  },
  toAmino(message: MsgCardVoteMultiResponse): MsgCardVoteMultiResponseAmino {
    const obj: any = {};
    obj.airdropClaimed = message.airdropClaimed === false ? undefined : message.airdropClaimed;
    return obj;
  },
  fromAminoMsg(object: MsgCardVoteMultiResponseAminoMsg): MsgCardVoteMultiResponse {
    return MsgCardVoteMultiResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCardVoteMultiResponseProtoMsg): MsgCardVoteMultiResponse {
    return MsgCardVoteMultiResponse.decode(message.value);
  },
  toProto(message: MsgCardVoteMultiResponse): Uint8Array {
    return MsgCardVoteMultiResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCardVoteMultiResponse): MsgCardVoteMultiResponseProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.MsgCardVoteMultiResponse",
      value: MsgCardVoteMultiResponse.encode(message).finish()
    };
  }
};
function createBaseMsgMatchOpen(): MsgMatchOpen {
  return {
    creator: "",
    playerA: "",
    playerB: "",
    playerADeck: [],
    playerBDeck: []
  };
}
export const MsgMatchOpen = {
  typeUrl: "/cardchain.cardchain.MsgMatchOpen",
  encode(message: MsgMatchOpen, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.playerA !== "") {
      writer.uint32(18).string(message.playerA);
    }
    if (message.playerB !== "") {
      writer.uint32(26).string(message.playerB);
    }
    writer.uint32(34).fork();
    for (const v of message.playerADeck) {
      writer.uint64(v);
    }
    writer.ldelim();
    writer.uint32(42).fork();
    for (const v of message.playerBDeck) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgMatchOpen {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMatchOpen();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.playerA = reader.string();
          break;
        case 3:
          message.playerB = reader.string();
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.playerADeck.push(reader.uint64());
            }
          } else {
            message.playerADeck.push(reader.uint64());
          }
          break;
        case 5:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.playerBDeck.push(reader.uint64());
            }
          } else {
            message.playerBDeck.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgMatchOpen>): MsgMatchOpen {
    const message = createBaseMsgMatchOpen();
    message.creator = object.creator ?? "";
    message.playerA = object.playerA ?? "";
    message.playerB = object.playerB ?? "";
    message.playerADeck = object.playerADeck?.map(e => BigInt(e.toString())) || [];
    message.playerBDeck = object.playerBDeck?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object: MsgMatchOpenAmino): MsgMatchOpen {
    const message = createBaseMsgMatchOpen();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.playerA !== undefined && object.playerA !== null) {
      message.playerA = object.playerA;
    }
    if (object.playerB !== undefined && object.playerB !== null) {
      message.playerB = object.playerB;
    }
    message.playerADeck = object.playerADeck?.map(e => BigInt(e)) || [];
    message.playerBDeck = object.playerBDeck?.map(e => BigInt(e)) || [];
    return message;
  },
  toAmino(message: MsgMatchOpen): MsgMatchOpenAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.playerA = message.playerA === "" ? undefined : message.playerA;
    obj.playerB = message.playerB === "" ? undefined : message.playerB;
    if (message.playerADeck) {
      obj.playerADeck = message.playerADeck.map(e => e.toString());
    } else {
      obj.playerADeck = message.playerADeck;
    }
    if (message.playerBDeck) {
      obj.playerBDeck = message.playerBDeck.map(e => e.toString());
    } else {
      obj.playerBDeck = message.playerBDeck;
    }
    return obj;
  },
  fromAminoMsg(object: MsgMatchOpenAminoMsg): MsgMatchOpen {
    return MsgMatchOpen.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgMatchOpenProtoMsg): MsgMatchOpen {
    return MsgMatchOpen.decode(message.value);
  },
  toProto(message: MsgMatchOpen): Uint8Array {
    return MsgMatchOpen.encode(message).finish();
  },
  toProtoMsg(message: MsgMatchOpen): MsgMatchOpenProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.MsgMatchOpen",
      value: MsgMatchOpen.encode(message).finish()
    };
  }
};
function createBaseMsgMatchOpenResponse(): MsgMatchOpenResponse {
  return {
    matchId: BigInt(0)
  };
}
export const MsgMatchOpenResponse = {
  typeUrl: "/cardchain.cardchain.MsgMatchOpenResponse",
  encode(message: MsgMatchOpenResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.matchId !== BigInt(0)) {
      writer.uint32(8).uint64(message.matchId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgMatchOpenResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMatchOpenResponse();
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
  fromPartial(object: Partial<MsgMatchOpenResponse>): MsgMatchOpenResponse {
    const message = createBaseMsgMatchOpenResponse();
    message.matchId = object.matchId !== undefined && object.matchId !== null ? BigInt(object.matchId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgMatchOpenResponseAmino): MsgMatchOpenResponse {
    const message = createBaseMsgMatchOpenResponse();
    if (object.matchId !== undefined && object.matchId !== null) {
      message.matchId = BigInt(object.matchId);
    }
    return message;
  },
  toAmino(message: MsgMatchOpenResponse): MsgMatchOpenResponseAmino {
    const obj: any = {};
    obj.matchId = message.matchId !== BigInt(0) ? message.matchId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgMatchOpenResponseAminoMsg): MsgMatchOpenResponse {
    return MsgMatchOpenResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgMatchOpenResponseProtoMsg): MsgMatchOpenResponse {
    return MsgMatchOpenResponse.decode(message.value);
  },
  toProto(message: MsgMatchOpenResponse): Uint8Array {
    return MsgMatchOpenResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgMatchOpenResponse): MsgMatchOpenResponseProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.MsgMatchOpenResponse",
      value: MsgMatchOpenResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSetNameSet(): MsgSetNameSet {
  return {
    creator: "",
    setId: BigInt(0),
    name: ""
  };
}
export const MsgSetNameSet = {
  typeUrl: "/cardchain.cardchain.MsgSetNameSet",
  encode(message: MsgSetNameSet, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.setId !== BigInt(0)) {
      writer.uint32(16).uint64(message.setId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetNameSet {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetNameSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.setId = reader.uint64();
          break;
        case 3:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSetNameSet>): MsgSetNameSet {
    const message = createBaseMsgSetNameSet();
    message.creator = object.creator ?? "";
    message.setId = object.setId !== undefined && object.setId !== null ? BigInt(object.setId.toString()) : BigInt(0);
    message.name = object.name ?? "";
    return message;
  },
  fromAmino(object: MsgSetNameSetAmino): MsgSetNameSet {
    const message = createBaseMsgSetNameSet();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.setId !== undefined && object.setId !== null) {
      message.setId = BigInt(object.setId);
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    return message;
  },
  toAmino(message: MsgSetNameSet): MsgSetNameSetAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.setId = message.setId !== BigInt(0) ? message.setId?.toString() : undefined;
    obj.name = message.name === "" ? undefined : message.name;
    return obj;
  },
  fromAminoMsg(object: MsgSetNameSetAminoMsg): MsgSetNameSet {
    return MsgSetNameSet.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetNameSetProtoMsg): MsgSetNameSet {
    return MsgSetNameSet.decode(message.value);
  },
  toProto(message: MsgSetNameSet): Uint8Array {
    return MsgSetNameSet.encode(message).finish();
  },
  toProtoMsg(message: MsgSetNameSet): MsgSetNameSetProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.MsgSetNameSet",
      value: MsgSetNameSet.encode(message).finish()
    };
  }
};
function createBaseMsgSetNameSetResponse(): MsgSetNameSetResponse {
  return {};
}
export const MsgSetNameSetResponse = {
  typeUrl: "/cardchain.cardchain.MsgSetNameSetResponse",
  encode(_: MsgSetNameSetResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetNameSetResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetNameSetResponse();
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
  fromPartial(_: Partial<MsgSetNameSetResponse>): MsgSetNameSetResponse {
    const message = createBaseMsgSetNameSetResponse();
    return message;
  },
  fromAmino(_: MsgSetNameSetResponseAmino): MsgSetNameSetResponse {
    const message = createBaseMsgSetNameSetResponse();
    return message;
  },
  toAmino(_: MsgSetNameSetResponse): MsgSetNameSetResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetNameSetResponseAminoMsg): MsgSetNameSetResponse {
    return MsgSetNameSetResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetNameSetResponseProtoMsg): MsgSetNameSetResponse {
    return MsgSetNameSetResponse.decode(message.value);
  },
  toProto(message: MsgSetNameSetResponse): Uint8Array {
    return MsgSetNameSetResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetNameSetResponse): MsgSetNameSetResponseProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.MsgSetNameSetResponse",
      value: MsgSetNameSetResponse.encode(message).finish()
    };
  }
};
function createBaseMsgProfileAliasSet(): MsgProfileAliasSet {
  return {
    creator: "",
    alias: ""
  };
}
export const MsgProfileAliasSet = {
  typeUrl: "/cardchain.cardchain.MsgProfileAliasSet",
  encode(message: MsgProfileAliasSet, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.alias !== "") {
      writer.uint32(18).string(message.alias);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgProfileAliasSet {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgProfileAliasSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.alias = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgProfileAliasSet>): MsgProfileAliasSet {
    const message = createBaseMsgProfileAliasSet();
    message.creator = object.creator ?? "";
    message.alias = object.alias ?? "";
    return message;
  },
  fromAmino(object: MsgProfileAliasSetAmino): MsgProfileAliasSet {
    const message = createBaseMsgProfileAliasSet();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.alias !== undefined && object.alias !== null) {
      message.alias = object.alias;
    }
    return message;
  },
  toAmino(message: MsgProfileAliasSet): MsgProfileAliasSetAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.alias = message.alias === "" ? undefined : message.alias;
    return obj;
  },
  fromAminoMsg(object: MsgProfileAliasSetAminoMsg): MsgProfileAliasSet {
    return MsgProfileAliasSet.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgProfileAliasSetProtoMsg): MsgProfileAliasSet {
    return MsgProfileAliasSet.decode(message.value);
  },
  toProto(message: MsgProfileAliasSet): Uint8Array {
    return MsgProfileAliasSet.encode(message).finish();
  },
  toProtoMsg(message: MsgProfileAliasSet): MsgProfileAliasSetProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.MsgProfileAliasSet",
      value: MsgProfileAliasSet.encode(message).finish()
    };
  }
};
function createBaseMsgProfileAliasSetResponse(): MsgProfileAliasSetResponse {
  return {};
}
export const MsgProfileAliasSetResponse = {
  typeUrl: "/cardchain.cardchain.MsgProfileAliasSetResponse",
  encode(_: MsgProfileAliasSetResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgProfileAliasSetResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgProfileAliasSetResponse();
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
  fromPartial(_: Partial<MsgProfileAliasSetResponse>): MsgProfileAliasSetResponse {
    const message = createBaseMsgProfileAliasSetResponse();
    return message;
  },
  fromAmino(_: MsgProfileAliasSetResponseAmino): MsgProfileAliasSetResponse {
    const message = createBaseMsgProfileAliasSetResponse();
    return message;
  },
  toAmino(_: MsgProfileAliasSetResponse): MsgProfileAliasSetResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgProfileAliasSetResponseAminoMsg): MsgProfileAliasSetResponse {
    return MsgProfileAliasSetResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgProfileAliasSetResponseProtoMsg): MsgProfileAliasSetResponse {
    return MsgProfileAliasSetResponse.decode(message.value);
  },
  toProto(message: MsgProfileAliasSetResponse): Uint8Array {
    return MsgProfileAliasSetResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgProfileAliasSetResponse): MsgProfileAliasSetResponseProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.MsgProfileAliasSetResponse",
      value: MsgProfileAliasSetResponse.encode(message).finish()
    };
  }
};
function createBaseMsgEarlyAccessInvite(): MsgEarlyAccessInvite {
  return {
    creator: "",
    user: ""
  };
}
export const MsgEarlyAccessInvite = {
  typeUrl: "/cardchain.cardchain.MsgEarlyAccessInvite",
  encode(message: MsgEarlyAccessInvite, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.user !== "") {
      writer.uint32(18).string(message.user);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgEarlyAccessInvite {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEarlyAccessInvite();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.user = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgEarlyAccessInvite>): MsgEarlyAccessInvite {
    const message = createBaseMsgEarlyAccessInvite();
    message.creator = object.creator ?? "";
    message.user = object.user ?? "";
    return message;
  },
  fromAmino(object: MsgEarlyAccessInviteAmino): MsgEarlyAccessInvite {
    const message = createBaseMsgEarlyAccessInvite();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.user !== undefined && object.user !== null) {
      message.user = object.user;
    }
    return message;
  },
  toAmino(message: MsgEarlyAccessInvite): MsgEarlyAccessInviteAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.user = message.user === "" ? undefined : message.user;
    return obj;
  },
  fromAminoMsg(object: MsgEarlyAccessInviteAminoMsg): MsgEarlyAccessInvite {
    return MsgEarlyAccessInvite.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgEarlyAccessInviteProtoMsg): MsgEarlyAccessInvite {
    return MsgEarlyAccessInvite.decode(message.value);
  },
  toProto(message: MsgEarlyAccessInvite): Uint8Array {
    return MsgEarlyAccessInvite.encode(message).finish();
  },
  toProtoMsg(message: MsgEarlyAccessInvite): MsgEarlyAccessInviteProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.MsgEarlyAccessInvite",
      value: MsgEarlyAccessInvite.encode(message).finish()
    };
  }
};
function createBaseMsgEarlyAccessInviteResponse(): MsgEarlyAccessInviteResponse {
  return {};
}
export const MsgEarlyAccessInviteResponse = {
  typeUrl: "/cardchain.cardchain.MsgEarlyAccessInviteResponse",
  encode(_: MsgEarlyAccessInviteResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgEarlyAccessInviteResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEarlyAccessInviteResponse();
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
  fromPartial(_: Partial<MsgEarlyAccessInviteResponse>): MsgEarlyAccessInviteResponse {
    const message = createBaseMsgEarlyAccessInviteResponse();
    return message;
  },
  fromAmino(_: MsgEarlyAccessInviteResponseAmino): MsgEarlyAccessInviteResponse {
    const message = createBaseMsgEarlyAccessInviteResponse();
    return message;
  },
  toAmino(_: MsgEarlyAccessInviteResponse): MsgEarlyAccessInviteResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgEarlyAccessInviteResponseAminoMsg): MsgEarlyAccessInviteResponse {
    return MsgEarlyAccessInviteResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgEarlyAccessInviteResponseProtoMsg): MsgEarlyAccessInviteResponse {
    return MsgEarlyAccessInviteResponse.decode(message.value);
  },
  toProto(message: MsgEarlyAccessInviteResponse): Uint8Array {
    return MsgEarlyAccessInviteResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgEarlyAccessInviteResponse): MsgEarlyAccessInviteResponseProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.MsgEarlyAccessInviteResponse",
      value: MsgEarlyAccessInviteResponse.encode(message).finish()
    };
  }
};
function createBaseMsgZealyConnect(): MsgZealyConnect {
  return {
    creator: "",
    zealyId: ""
  };
}
export const MsgZealyConnect = {
  typeUrl: "/cardchain.cardchain.MsgZealyConnect",
  encode(message: MsgZealyConnect, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.zealyId !== "") {
      writer.uint32(18).string(message.zealyId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgZealyConnect {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgZealyConnect();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.zealyId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgZealyConnect>): MsgZealyConnect {
    const message = createBaseMsgZealyConnect();
    message.creator = object.creator ?? "";
    message.zealyId = object.zealyId ?? "";
    return message;
  },
  fromAmino(object: MsgZealyConnectAmino): MsgZealyConnect {
    const message = createBaseMsgZealyConnect();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.zealyId !== undefined && object.zealyId !== null) {
      message.zealyId = object.zealyId;
    }
    return message;
  },
  toAmino(message: MsgZealyConnect): MsgZealyConnectAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.zealyId = message.zealyId === "" ? undefined : message.zealyId;
    return obj;
  },
  fromAminoMsg(object: MsgZealyConnectAminoMsg): MsgZealyConnect {
    return MsgZealyConnect.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgZealyConnectProtoMsg): MsgZealyConnect {
    return MsgZealyConnect.decode(message.value);
  },
  toProto(message: MsgZealyConnect): Uint8Array {
    return MsgZealyConnect.encode(message).finish();
  },
  toProtoMsg(message: MsgZealyConnect): MsgZealyConnectProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.MsgZealyConnect",
      value: MsgZealyConnect.encode(message).finish()
    };
  }
};
function createBaseMsgZealyConnectResponse(): MsgZealyConnectResponse {
  return {};
}
export const MsgZealyConnectResponse = {
  typeUrl: "/cardchain.cardchain.MsgZealyConnectResponse",
  encode(_: MsgZealyConnectResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgZealyConnectResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgZealyConnectResponse();
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
  fromPartial(_: Partial<MsgZealyConnectResponse>): MsgZealyConnectResponse {
    const message = createBaseMsgZealyConnectResponse();
    return message;
  },
  fromAmino(_: MsgZealyConnectResponseAmino): MsgZealyConnectResponse {
    const message = createBaseMsgZealyConnectResponse();
    return message;
  },
  toAmino(_: MsgZealyConnectResponse): MsgZealyConnectResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgZealyConnectResponseAminoMsg): MsgZealyConnectResponse {
    return MsgZealyConnectResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgZealyConnectResponseProtoMsg): MsgZealyConnectResponse {
    return MsgZealyConnectResponse.decode(message.value);
  },
  toProto(message: MsgZealyConnectResponse): Uint8Array {
    return MsgZealyConnectResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgZealyConnectResponse): MsgZealyConnectResponseProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.MsgZealyConnectResponse",
      value: MsgZealyConnectResponse.encode(message).finish()
    };
  }
};
function createBaseMsgEncounterCreate_ParametersEntry(): MsgEncounterCreate_ParametersEntry {
  return {
    key: "",
    value: ""
  };
}
export const MsgEncounterCreate_ParametersEntry = {
  encode(message: MsgEncounterCreate_ParametersEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgEncounterCreate_ParametersEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEncounterCreate_ParametersEntry();
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
  fromPartial(object: Partial<MsgEncounterCreate_ParametersEntry>): MsgEncounterCreate_ParametersEntry {
    const message = createBaseMsgEncounterCreate_ParametersEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
  fromAmino(object: MsgEncounterCreate_ParametersEntryAmino): MsgEncounterCreate_ParametersEntry {
    const message = createBaseMsgEncounterCreate_ParametersEntry();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
  toAmino(message: MsgEncounterCreate_ParametersEntry): MsgEncounterCreate_ParametersEntryAmino {
    const obj: any = {};
    obj.key = message.key === "" ? undefined : message.key;
    obj.value = message.value === "" ? undefined : message.value;
    return obj;
  },
  fromAminoMsg(object: MsgEncounterCreate_ParametersEntryAminoMsg): MsgEncounterCreate_ParametersEntry {
    return MsgEncounterCreate_ParametersEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgEncounterCreate_ParametersEntryProtoMsg): MsgEncounterCreate_ParametersEntry {
    return MsgEncounterCreate_ParametersEntry.decode(message.value);
  },
  toProto(message: MsgEncounterCreate_ParametersEntry): Uint8Array {
    return MsgEncounterCreate_ParametersEntry.encode(message).finish();
  }
};
function createBaseMsgEncounterCreate(): MsgEncounterCreate {
  return {
    creator: "",
    name: "",
    drawlist: [],
    parameters: {},
    image: new Uint8Array()
  };
}
export const MsgEncounterCreate = {
  typeUrl: "/cardchain.cardchain.MsgEncounterCreate",
  encode(message: MsgEncounterCreate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    writer.uint32(26).fork();
    for (const v of message.drawlist) {
      writer.uint64(v);
    }
    writer.ldelim();
    Object.entries(message.parameters).forEach(([key, value]) => {
      MsgEncounterCreate_ParametersEntry.encode({
        key: key as any,
        value
      }, writer.uint32(34).fork()).ldelim();
    });
    if (message.image.length !== 0) {
      writer.uint32(42).bytes(message.image);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgEncounterCreate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEncounterCreate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.drawlist.push(reader.uint64());
            }
          } else {
            message.drawlist.push(reader.uint64());
          }
          break;
        case 4:
          const entry4 = MsgEncounterCreate_ParametersEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.parameters[entry4.key] = entry4.value;
          }
          break;
        case 5:
          message.image = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgEncounterCreate>): MsgEncounterCreate {
    const message = createBaseMsgEncounterCreate();
    message.creator = object.creator ?? "";
    message.name = object.name ?? "";
    message.drawlist = object.drawlist?.map(e => BigInt(e.toString())) || [];
    message.parameters = Object.entries(object.parameters ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.image = object.image ?? new Uint8Array();
    return message;
  },
  fromAmino(object: MsgEncounterCreateAmino): MsgEncounterCreate {
    const message = createBaseMsgEncounterCreate();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    message.drawlist = object.drawlist?.map(e => BigInt(e)) || [];
    message.parameters = Object.entries(object.parameters ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    if (object.image !== undefined && object.image !== null) {
      message.image = bytesFromBase64(object.image);
    }
    return message;
  },
  toAmino(message: MsgEncounterCreate): MsgEncounterCreateAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.name = message.name === "" ? undefined : message.name;
    if (message.drawlist) {
      obj.drawlist = message.drawlist.map(e => e.toString());
    } else {
      obj.drawlist = message.drawlist;
    }
    obj.parameters = {};
    if (message.parameters) {
      Object.entries(message.parameters).forEach(([k, v]) => {
        obj.parameters[k] = v;
      });
    }
    obj.image = message.image ? base64FromBytes(message.image) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgEncounterCreateAminoMsg): MsgEncounterCreate {
    return MsgEncounterCreate.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgEncounterCreateProtoMsg): MsgEncounterCreate {
    return MsgEncounterCreate.decode(message.value);
  },
  toProto(message: MsgEncounterCreate): Uint8Array {
    return MsgEncounterCreate.encode(message).finish();
  },
  toProtoMsg(message: MsgEncounterCreate): MsgEncounterCreateProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.MsgEncounterCreate",
      value: MsgEncounterCreate.encode(message).finish()
    };
  }
};
function createBaseMsgEncounterCreateResponse(): MsgEncounterCreateResponse {
  return {};
}
export const MsgEncounterCreateResponse = {
  typeUrl: "/cardchain.cardchain.MsgEncounterCreateResponse",
  encode(_: MsgEncounterCreateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgEncounterCreateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEncounterCreateResponse();
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
  fromPartial(_: Partial<MsgEncounterCreateResponse>): MsgEncounterCreateResponse {
    const message = createBaseMsgEncounterCreateResponse();
    return message;
  },
  fromAmino(_: MsgEncounterCreateResponseAmino): MsgEncounterCreateResponse {
    const message = createBaseMsgEncounterCreateResponse();
    return message;
  },
  toAmino(_: MsgEncounterCreateResponse): MsgEncounterCreateResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgEncounterCreateResponseAminoMsg): MsgEncounterCreateResponse {
    return MsgEncounterCreateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgEncounterCreateResponseProtoMsg): MsgEncounterCreateResponse {
    return MsgEncounterCreateResponse.decode(message.value);
  },
  toProto(message: MsgEncounterCreateResponse): Uint8Array {
    return MsgEncounterCreateResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgEncounterCreateResponse): MsgEncounterCreateResponseProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.MsgEncounterCreateResponse",
      value: MsgEncounterCreateResponse.encode(message).finish()
    };
  }
};
function createBaseMsgEncounterDo(): MsgEncounterDo {
  return {
    creator: "",
    encounterId: BigInt(0),
    user: ""
  };
}
export const MsgEncounterDo = {
  typeUrl: "/cardchain.cardchain.MsgEncounterDo",
  encode(message: MsgEncounterDo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.encounterId !== BigInt(0)) {
      writer.uint32(16).uint64(message.encounterId);
    }
    if (message.user !== "") {
      writer.uint32(26).string(message.user);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgEncounterDo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEncounterDo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.encounterId = reader.uint64();
          break;
        case 3:
          message.user = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgEncounterDo>): MsgEncounterDo {
    const message = createBaseMsgEncounterDo();
    message.creator = object.creator ?? "";
    message.encounterId = object.encounterId !== undefined && object.encounterId !== null ? BigInt(object.encounterId.toString()) : BigInt(0);
    message.user = object.user ?? "";
    return message;
  },
  fromAmino(object: MsgEncounterDoAmino): MsgEncounterDo {
    const message = createBaseMsgEncounterDo();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.encounterId !== undefined && object.encounterId !== null) {
      message.encounterId = BigInt(object.encounterId);
    }
    if (object.user !== undefined && object.user !== null) {
      message.user = object.user;
    }
    return message;
  },
  toAmino(message: MsgEncounterDo): MsgEncounterDoAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.encounterId = message.encounterId !== BigInt(0) ? message.encounterId?.toString() : undefined;
    obj.user = message.user === "" ? undefined : message.user;
    return obj;
  },
  fromAminoMsg(object: MsgEncounterDoAminoMsg): MsgEncounterDo {
    return MsgEncounterDo.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgEncounterDoProtoMsg): MsgEncounterDo {
    return MsgEncounterDo.decode(message.value);
  },
  toProto(message: MsgEncounterDo): Uint8Array {
    return MsgEncounterDo.encode(message).finish();
  },
  toProtoMsg(message: MsgEncounterDo): MsgEncounterDoProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.MsgEncounterDo",
      value: MsgEncounterDo.encode(message).finish()
    };
  }
};
function createBaseMsgEncounterDoResponse(): MsgEncounterDoResponse {
  return {};
}
export const MsgEncounterDoResponse = {
  typeUrl: "/cardchain.cardchain.MsgEncounterDoResponse",
  encode(_: MsgEncounterDoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgEncounterDoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEncounterDoResponse();
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
  fromPartial(_: Partial<MsgEncounterDoResponse>): MsgEncounterDoResponse {
    const message = createBaseMsgEncounterDoResponse();
    return message;
  },
  fromAmino(_: MsgEncounterDoResponseAmino): MsgEncounterDoResponse {
    const message = createBaseMsgEncounterDoResponse();
    return message;
  },
  toAmino(_: MsgEncounterDoResponse): MsgEncounterDoResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgEncounterDoResponseAminoMsg): MsgEncounterDoResponse {
    return MsgEncounterDoResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgEncounterDoResponseProtoMsg): MsgEncounterDoResponse {
    return MsgEncounterDoResponse.decode(message.value);
  },
  toProto(message: MsgEncounterDoResponse): Uint8Array {
    return MsgEncounterDoResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgEncounterDoResponse): MsgEncounterDoResponseProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.MsgEncounterDoResponse",
      value: MsgEncounterDoResponse.encode(message).finish()
    };
  }
};
function createBaseMsgEncounterClose(): MsgEncounterClose {
  return {
    creator: "",
    encounterId: BigInt(0),
    user: "",
    won: false
  };
}
export const MsgEncounterClose = {
  typeUrl: "/cardchain.cardchain.MsgEncounterClose",
  encode(message: MsgEncounterClose, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.encounterId !== BigInt(0)) {
      writer.uint32(16).uint64(message.encounterId);
    }
    if (message.user !== "") {
      writer.uint32(26).string(message.user);
    }
    if (message.won === true) {
      writer.uint32(32).bool(message.won);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgEncounterClose {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEncounterClose();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.encounterId = reader.uint64();
          break;
        case 3:
          message.user = reader.string();
          break;
        case 4:
          message.won = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgEncounterClose>): MsgEncounterClose {
    const message = createBaseMsgEncounterClose();
    message.creator = object.creator ?? "";
    message.encounterId = object.encounterId !== undefined && object.encounterId !== null ? BigInt(object.encounterId.toString()) : BigInt(0);
    message.user = object.user ?? "";
    message.won = object.won ?? false;
    return message;
  },
  fromAmino(object: MsgEncounterCloseAmino): MsgEncounterClose {
    const message = createBaseMsgEncounterClose();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.encounterId !== undefined && object.encounterId !== null) {
      message.encounterId = BigInt(object.encounterId);
    }
    if (object.user !== undefined && object.user !== null) {
      message.user = object.user;
    }
    if (object.won !== undefined && object.won !== null) {
      message.won = object.won;
    }
    return message;
  },
  toAmino(message: MsgEncounterClose): MsgEncounterCloseAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.encounterId = message.encounterId !== BigInt(0) ? message.encounterId?.toString() : undefined;
    obj.user = message.user === "" ? undefined : message.user;
    obj.won = message.won === false ? undefined : message.won;
    return obj;
  },
  fromAminoMsg(object: MsgEncounterCloseAminoMsg): MsgEncounterClose {
    return MsgEncounterClose.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgEncounterCloseProtoMsg): MsgEncounterClose {
    return MsgEncounterClose.decode(message.value);
  },
  toProto(message: MsgEncounterClose): Uint8Array {
    return MsgEncounterClose.encode(message).finish();
  },
  toProtoMsg(message: MsgEncounterClose): MsgEncounterCloseProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.MsgEncounterClose",
      value: MsgEncounterClose.encode(message).finish()
    };
  }
};
function createBaseMsgEncounterCloseResponse(): MsgEncounterCloseResponse {
  return {};
}
export const MsgEncounterCloseResponse = {
  typeUrl: "/cardchain.cardchain.MsgEncounterCloseResponse",
  encode(_: MsgEncounterCloseResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgEncounterCloseResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEncounterCloseResponse();
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
  fromPartial(_: Partial<MsgEncounterCloseResponse>): MsgEncounterCloseResponse {
    const message = createBaseMsgEncounterCloseResponse();
    return message;
  },
  fromAmino(_: MsgEncounterCloseResponseAmino): MsgEncounterCloseResponse {
    const message = createBaseMsgEncounterCloseResponse();
    return message;
  },
  toAmino(_: MsgEncounterCloseResponse): MsgEncounterCloseResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgEncounterCloseResponseAminoMsg): MsgEncounterCloseResponse {
    return MsgEncounterCloseResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgEncounterCloseResponseProtoMsg): MsgEncounterCloseResponse {
    return MsgEncounterCloseResponse.decode(message.value);
  },
  toProto(message: MsgEncounterCloseResponse): Uint8Array {
    return MsgEncounterCloseResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgEncounterCloseResponse): MsgEncounterCloseResponseProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.MsgEncounterCloseResponse",
      value: MsgEncounterCloseResponse.encode(message).finish()
    };
  }
};
function createBaseMsgEarlyAccessDisinvite(): MsgEarlyAccessDisinvite {
  return {
    creator: "",
    user: ""
  };
}
export const MsgEarlyAccessDisinvite = {
  typeUrl: "/cardchain.cardchain.MsgEarlyAccessDisinvite",
  encode(message: MsgEarlyAccessDisinvite, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.user !== "") {
      writer.uint32(18).string(message.user);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgEarlyAccessDisinvite {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEarlyAccessDisinvite();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.user = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgEarlyAccessDisinvite>): MsgEarlyAccessDisinvite {
    const message = createBaseMsgEarlyAccessDisinvite();
    message.creator = object.creator ?? "";
    message.user = object.user ?? "";
    return message;
  },
  fromAmino(object: MsgEarlyAccessDisinviteAmino): MsgEarlyAccessDisinvite {
    const message = createBaseMsgEarlyAccessDisinvite();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.user !== undefined && object.user !== null) {
      message.user = object.user;
    }
    return message;
  },
  toAmino(message: MsgEarlyAccessDisinvite): MsgEarlyAccessDisinviteAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.user = message.user === "" ? undefined : message.user;
    return obj;
  },
  fromAminoMsg(object: MsgEarlyAccessDisinviteAminoMsg): MsgEarlyAccessDisinvite {
    return MsgEarlyAccessDisinvite.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgEarlyAccessDisinviteProtoMsg): MsgEarlyAccessDisinvite {
    return MsgEarlyAccessDisinvite.decode(message.value);
  },
  toProto(message: MsgEarlyAccessDisinvite): Uint8Array {
    return MsgEarlyAccessDisinvite.encode(message).finish();
  },
  toProtoMsg(message: MsgEarlyAccessDisinvite): MsgEarlyAccessDisinviteProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.MsgEarlyAccessDisinvite",
      value: MsgEarlyAccessDisinvite.encode(message).finish()
    };
  }
};
function createBaseMsgEarlyAccessDisinviteResponse(): MsgEarlyAccessDisinviteResponse {
  return {};
}
export const MsgEarlyAccessDisinviteResponse = {
  typeUrl: "/cardchain.cardchain.MsgEarlyAccessDisinviteResponse",
  encode(_: MsgEarlyAccessDisinviteResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgEarlyAccessDisinviteResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEarlyAccessDisinviteResponse();
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
  fromPartial(_: Partial<MsgEarlyAccessDisinviteResponse>): MsgEarlyAccessDisinviteResponse {
    const message = createBaseMsgEarlyAccessDisinviteResponse();
    return message;
  },
  fromAmino(_: MsgEarlyAccessDisinviteResponseAmino): MsgEarlyAccessDisinviteResponse {
    const message = createBaseMsgEarlyAccessDisinviteResponse();
    return message;
  },
  toAmino(_: MsgEarlyAccessDisinviteResponse): MsgEarlyAccessDisinviteResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgEarlyAccessDisinviteResponseAminoMsg): MsgEarlyAccessDisinviteResponse {
    return MsgEarlyAccessDisinviteResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgEarlyAccessDisinviteResponseProtoMsg): MsgEarlyAccessDisinviteResponse {
    return MsgEarlyAccessDisinviteResponse.decode(message.value);
  },
  toProto(message: MsgEarlyAccessDisinviteResponse): Uint8Array {
    return MsgEarlyAccessDisinviteResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgEarlyAccessDisinviteResponse): MsgEarlyAccessDisinviteResponseProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.MsgEarlyAccessDisinviteResponse",
      value: MsgEarlyAccessDisinviteResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCardBan(): MsgCardBan {
  return {
    authority: "",
    cardId: BigInt(0)
  };
}
export const MsgCardBan = {
  typeUrl: "/cardchain.cardchain.MsgCardBan",
  encode(message: MsgCardBan, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.cardId !== BigInt(0)) {
      writer.uint32(16).uint64(message.cardId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCardBan {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCardBan();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.cardId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCardBan>): MsgCardBan {
    const message = createBaseMsgCardBan();
    message.authority = object.authority ?? "";
    message.cardId = object.cardId !== undefined && object.cardId !== null ? BigInt(object.cardId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgCardBanAmino): MsgCardBan {
    const message = createBaseMsgCardBan();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.cardId !== undefined && object.cardId !== null) {
      message.cardId = BigInt(object.cardId);
    }
    return message;
  },
  toAmino(message: MsgCardBan): MsgCardBanAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.cardId = message.cardId !== BigInt(0) ? message.cardId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCardBanAminoMsg): MsgCardBan {
    return MsgCardBan.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCardBanProtoMsg): MsgCardBan {
    return MsgCardBan.decode(message.value);
  },
  toProto(message: MsgCardBan): Uint8Array {
    return MsgCardBan.encode(message).finish();
  },
  toProtoMsg(message: MsgCardBan): MsgCardBanProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.MsgCardBan",
      value: MsgCardBan.encode(message).finish()
    };
  }
};
function createBaseMsgCardBanResponse(): MsgCardBanResponse {
  return {};
}
export const MsgCardBanResponse = {
  typeUrl: "/cardchain.cardchain.MsgCardBanResponse",
  encode(_: MsgCardBanResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCardBanResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCardBanResponse();
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
  fromPartial(_: Partial<MsgCardBanResponse>): MsgCardBanResponse {
    const message = createBaseMsgCardBanResponse();
    return message;
  },
  fromAmino(_: MsgCardBanResponseAmino): MsgCardBanResponse {
    const message = createBaseMsgCardBanResponse();
    return message;
  },
  toAmino(_: MsgCardBanResponse): MsgCardBanResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCardBanResponseAminoMsg): MsgCardBanResponse {
    return MsgCardBanResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCardBanResponseProtoMsg): MsgCardBanResponse {
    return MsgCardBanResponse.decode(message.value);
  },
  toProto(message: MsgCardBanResponse): Uint8Array {
    return MsgCardBanResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCardBanResponse): MsgCardBanResponseProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.MsgCardBanResponse",
      value: MsgCardBanResponse.encode(message).finish()
    };
  }
};
function createBaseMsgEarlyAccessGrant(): MsgEarlyAccessGrant {
  return {
    authority: "",
    users: []
  };
}
export const MsgEarlyAccessGrant = {
  typeUrl: "/cardchain.cardchain.MsgEarlyAccessGrant",
  encode(message: MsgEarlyAccessGrant, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    for (const v of message.users) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgEarlyAccessGrant {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEarlyAccessGrant();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.users.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgEarlyAccessGrant>): MsgEarlyAccessGrant {
    const message = createBaseMsgEarlyAccessGrant();
    message.authority = object.authority ?? "";
    message.users = object.users?.map(e => e) || [];
    return message;
  },
  fromAmino(object: MsgEarlyAccessGrantAmino): MsgEarlyAccessGrant {
    const message = createBaseMsgEarlyAccessGrant();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    message.users = object.users?.map(e => e) || [];
    return message;
  },
  toAmino(message: MsgEarlyAccessGrant): MsgEarlyAccessGrantAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    if (message.users) {
      obj.users = message.users.map(e => e);
    } else {
      obj.users = message.users;
    }
    return obj;
  },
  fromAminoMsg(object: MsgEarlyAccessGrantAminoMsg): MsgEarlyAccessGrant {
    return MsgEarlyAccessGrant.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgEarlyAccessGrantProtoMsg): MsgEarlyAccessGrant {
    return MsgEarlyAccessGrant.decode(message.value);
  },
  toProto(message: MsgEarlyAccessGrant): Uint8Array {
    return MsgEarlyAccessGrant.encode(message).finish();
  },
  toProtoMsg(message: MsgEarlyAccessGrant): MsgEarlyAccessGrantProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.MsgEarlyAccessGrant",
      value: MsgEarlyAccessGrant.encode(message).finish()
    };
  }
};
function createBaseMsgEarlyAccessGrantResponse(): MsgEarlyAccessGrantResponse {
  return {};
}
export const MsgEarlyAccessGrantResponse = {
  typeUrl: "/cardchain.cardchain.MsgEarlyAccessGrantResponse",
  encode(_: MsgEarlyAccessGrantResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgEarlyAccessGrantResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEarlyAccessGrantResponse();
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
  fromPartial(_: Partial<MsgEarlyAccessGrantResponse>): MsgEarlyAccessGrantResponse {
    const message = createBaseMsgEarlyAccessGrantResponse();
    return message;
  },
  fromAmino(_: MsgEarlyAccessGrantResponseAmino): MsgEarlyAccessGrantResponse {
    const message = createBaseMsgEarlyAccessGrantResponse();
    return message;
  },
  toAmino(_: MsgEarlyAccessGrantResponse): MsgEarlyAccessGrantResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgEarlyAccessGrantResponseAminoMsg): MsgEarlyAccessGrantResponse {
    return MsgEarlyAccessGrantResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgEarlyAccessGrantResponseProtoMsg): MsgEarlyAccessGrantResponse {
    return MsgEarlyAccessGrantResponse.decode(message.value);
  },
  toProto(message: MsgEarlyAccessGrantResponse): Uint8Array {
    return MsgEarlyAccessGrantResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgEarlyAccessGrantResponse): MsgEarlyAccessGrantResponseProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.MsgEarlyAccessGrantResponse",
      value: MsgEarlyAccessGrantResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSetActivate(): MsgSetActivate {
  return {
    authority: "",
    setId: BigInt(0)
  };
}
export const MsgSetActivate = {
  typeUrl: "/cardchain.cardchain.MsgSetActivate",
  encode(message: MsgSetActivate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.setId !== BigInt(0)) {
      writer.uint32(16).uint64(message.setId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetActivate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetActivate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.setId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSetActivate>): MsgSetActivate {
    const message = createBaseMsgSetActivate();
    message.authority = object.authority ?? "";
    message.setId = object.setId !== undefined && object.setId !== null ? BigInt(object.setId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgSetActivateAmino): MsgSetActivate {
    const message = createBaseMsgSetActivate();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.setId !== undefined && object.setId !== null) {
      message.setId = BigInt(object.setId);
    }
    return message;
  },
  toAmino(message: MsgSetActivate): MsgSetActivateAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.setId = message.setId !== BigInt(0) ? message.setId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSetActivateAminoMsg): MsgSetActivate {
    return MsgSetActivate.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetActivateProtoMsg): MsgSetActivate {
    return MsgSetActivate.decode(message.value);
  },
  toProto(message: MsgSetActivate): Uint8Array {
    return MsgSetActivate.encode(message).finish();
  },
  toProtoMsg(message: MsgSetActivate): MsgSetActivateProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.MsgSetActivate",
      value: MsgSetActivate.encode(message).finish()
    };
  }
};
function createBaseMsgSetActivateResponse(): MsgSetActivateResponse {
  return {};
}
export const MsgSetActivateResponse = {
  typeUrl: "/cardchain.cardchain.MsgSetActivateResponse",
  encode(_: MsgSetActivateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetActivateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetActivateResponse();
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
  fromPartial(_: Partial<MsgSetActivateResponse>): MsgSetActivateResponse {
    const message = createBaseMsgSetActivateResponse();
    return message;
  },
  fromAmino(_: MsgSetActivateResponseAmino): MsgSetActivateResponse {
    const message = createBaseMsgSetActivateResponse();
    return message;
  },
  toAmino(_: MsgSetActivateResponse): MsgSetActivateResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetActivateResponseAminoMsg): MsgSetActivateResponse {
    return MsgSetActivateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetActivateResponseProtoMsg): MsgSetActivateResponse {
    return MsgSetActivateResponse.decode(message.value);
  },
  toProto(message: MsgSetActivateResponse): Uint8Array {
    return MsgSetActivateResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetActivateResponse): MsgSetActivateResponseProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.MsgSetActivateResponse",
      value: MsgSetActivateResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCardCopyrightClaim(): MsgCardCopyrightClaim {
  return {
    authority: "",
    cardId: BigInt(0)
  };
}
export const MsgCardCopyrightClaim = {
  typeUrl: "/cardchain.cardchain.MsgCardCopyrightClaim",
  encode(message: MsgCardCopyrightClaim, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.cardId !== BigInt(0)) {
      writer.uint32(16).uint64(message.cardId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCardCopyrightClaim {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCardCopyrightClaim();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.cardId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCardCopyrightClaim>): MsgCardCopyrightClaim {
    const message = createBaseMsgCardCopyrightClaim();
    message.authority = object.authority ?? "";
    message.cardId = object.cardId !== undefined && object.cardId !== null ? BigInt(object.cardId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgCardCopyrightClaimAmino): MsgCardCopyrightClaim {
    const message = createBaseMsgCardCopyrightClaim();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.cardId !== undefined && object.cardId !== null) {
      message.cardId = BigInt(object.cardId);
    }
    return message;
  },
  toAmino(message: MsgCardCopyrightClaim): MsgCardCopyrightClaimAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.cardId = message.cardId !== BigInt(0) ? message.cardId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCardCopyrightClaimAminoMsg): MsgCardCopyrightClaim {
    return MsgCardCopyrightClaim.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCardCopyrightClaimProtoMsg): MsgCardCopyrightClaim {
    return MsgCardCopyrightClaim.decode(message.value);
  },
  toProto(message: MsgCardCopyrightClaim): Uint8Array {
    return MsgCardCopyrightClaim.encode(message).finish();
  },
  toProtoMsg(message: MsgCardCopyrightClaim): MsgCardCopyrightClaimProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.MsgCardCopyrightClaim",
      value: MsgCardCopyrightClaim.encode(message).finish()
    };
  }
};
function createBaseMsgCardCopyrightClaimResponse(): MsgCardCopyrightClaimResponse {
  return {};
}
export const MsgCardCopyrightClaimResponse = {
  typeUrl: "/cardchain.cardchain.MsgCardCopyrightClaimResponse",
  encode(_: MsgCardCopyrightClaimResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCardCopyrightClaimResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCardCopyrightClaimResponse();
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
  fromPartial(_: Partial<MsgCardCopyrightClaimResponse>): MsgCardCopyrightClaimResponse {
    const message = createBaseMsgCardCopyrightClaimResponse();
    return message;
  },
  fromAmino(_: MsgCardCopyrightClaimResponseAmino): MsgCardCopyrightClaimResponse {
    const message = createBaseMsgCardCopyrightClaimResponse();
    return message;
  },
  toAmino(_: MsgCardCopyrightClaimResponse): MsgCardCopyrightClaimResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCardCopyrightClaimResponseAminoMsg): MsgCardCopyrightClaimResponse {
    return MsgCardCopyrightClaimResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCardCopyrightClaimResponseProtoMsg): MsgCardCopyrightClaimResponse {
    return MsgCardCopyrightClaimResponse.decode(message.value);
  },
  toProto(message: MsgCardCopyrightClaimResponse): Uint8Array {
    return MsgCardCopyrightClaimResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCardCopyrightClaimResponse): MsgCardCopyrightClaimResponseProtoMsg {
    return {
      typeUrl: "/cardchain.cardchain.MsgCardCopyrightClaimResponse",
      value: MsgCardCopyrightClaimResponse.encode(message).finish()
    };
  }
};