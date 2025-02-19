//@ts-nocheck
import { UnaryMethodDefinitionish } from "../../grpc-web";
import { DeepPartial } from "../../helpers";
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import { MsgUpdateParams, MsgUpdateParamsResponse, MsgUserCreate, MsgUserCreateResponse, MsgCardSchemeBuy, MsgCardSchemeBuyResponse, MsgCardSaveContent, MsgCardSaveContentResponse, MsgCardVote, MsgCardVoteResponse, MsgCardTransfer, MsgCardTransferResponse, MsgCardDonate, MsgCardDonateResponse, MsgCardArtworkAdd, MsgCardArtworkAddResponse, MsgCardArtistChange, MsgCardArtistChangeResponse, MsgCouncilRegister, MsgCouncilRegisterResponse, MsgCouncilDeregister, MsgCouncilDeregisterResponse, MsgMatchReport, MsgMatchReportResponse, MsgCouncilCreate, MsgCouncilCreateResponse, MsgMatchReporterAppoint, MsgMatchReporterAppointResponse, MsgSetCreate, MsgSetCreateResponse, MsgSetCardAdd, MsgSetCardAddResponse, MsgSetCardRemove, MsgSetCardRemoveResponse, MsgSetContributorAdd, MsgSetContributorAddResponse, MsgSetContributorRemove, MsgSetContributorRemoveResponse, MsgSetFinalize, MsgSetFinalizeResponse, MsgSetArtworkAdd, MsgSetArtworkAddResponse, MsgSetStoryAdd, MsgSetStoryAddResponse, MsgBoosterPackBuy, MsgBoosterPackBuyResponse, MsgSellOfferCreate, MsgSellOfferCreateResponse, MsgSellOfferBuy, MsgSellOfferBuyResponse, MsgSellOfferRemove, MsgSellOfferRemoveResponse, MsgCardRaritySet, MsgCardRaritySetResponse, MsgCouncilResponseCommit, MsgCouncilResponseCommitResponse, MsgCouncilResponseReveal, MsgCouncilResponseRevealResponse, MsgCouncilRestart, MsgCouncilRestartResponse, MsgMatchConfirm, MsgMatchConfirmResponse, MsgProfileCardSet, MsgProfileCardSetResponse, MsgProfileWebsiteSet, MsgProfileWebsiteSetResponse, MsgProfileBioSet, MsgProfileBioSetResponse, MsgBoosterPackOpen, MsgBoosterPackOpenResponse, MsgBoosterPackTransfer, MsgBoosterPackTransferResponse, MsgSetStoryWriterSet, MsgSetStoryWriterSetResponse, MsgSetArtistSet, MsgSetArtistSetResponse, MsgCardVoteMulti, MsgCardVoteMultiResponse, MsgMatchOpen, MsgMatchOpenResponse, MsgSetNameSet, MsgSetNameSetResponse, MsgProfileAliasSet, MsgProfileAliasSetResponse, MsgEarlyAccessInvite, MsgEarlyAccessInviteResponse, MsgZealyConnect, MsgZealyConnectResponse, MsgEncounterCreate, MsgEncounterCreateResponse, MsgEncounterDo, MsgEncounterDoResponse, MsgEncounterClose, MsgEncounterCloseResponse, MsgEarlyAccessDisinvite, MsgEarlyAccessDisinviteResponse, MsgCardBan, MsgCardBanResponse, MsgEarlyAccessGrant, MsgEarlyAccessGrantResponse, MsgSetActivate, MsgSetActivateResponse, MsgCardCopyrightClaim, MsgCardCopyrightClaimResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  /**
   * UpdateParams defines a (governance) operation for updating the module
   * parameters. The authority defaults to the x/gov module account.
   */
  updateParams(request: DeepPartial<MsgUpdateParams>, metadata?: grpc.Metadata): Promise<MsgUpdateParamsResponse>;
  userCreate(request: DeepPartial<MsgUserCreate>, metadata?: grpc.Metadata): Promise<MsgUserCreateResponse>;
  cardSchemeBuy(request: DeepPartial<MsgCardSchemeBuy>, metadata?: grpc.Metadata): Promise<MsgCardSchemeBuyResponse>;
  cardSaveContent(request: DeepPartial<MsgCardSaveContent>, metadata?: grpc.Metadata): Promise<MsgCardSaveContentResponse>;
  cardVote(request: DeepPartial<MsgCardVote>, metadata?: grpc.Metadata): Promise<MsgCardVoteResponse>;
  cardTransfer(request: DeepPartial<MsgCardTransfer>, metadata?: grpc.Metadata): Promise<MsgCardTransferResponse>;
  cardDonate(request: DeepPartial<MsgCardDonate>, metadata?: grpc.Metadata): Promise<MsgCardDonateResponse>;
  cardArtworkAdd(request: DeepPartial<MsgCardArtworkAdd>, metadata?: grpc.Metadata): Promise<MsgCardArtworkAddResponse>;
  cardArtistChange(request: DeepPartial<MsgCardArtistChange>, metadata?: grpc.Metadata): Promise<MsgCardArtistChangeResponse>;
  councilRegister(request: DeepPartial<MsgCouncilRegister>, metadata?: grpc.Metadata): Promise<MsgCouncilRegisterResponse>;
  councilDeregister(request: DeepPartial<MsgCouncilDeregister>, metadata?: grpc.Metadata): Promise<MsgCouncilDeregisterResponse>;
  matchReport(request: DeepPartial<MsgMatchReport>, metadata?: grpc.Metadata): Promise<MsgMatchReportResponse>;
  councilCreate(request: DeepPartial<MsgCouncilCreate>, metadata?: grpc.Metadata): Promise<MsgCouncilCreateResponse>;
  matchReporterAppoint(request: DeepPartial<MsgMatchReporterAppoint>, metadata?: grpc.Metadata): Promise<MsgMatchReporterAppointResponse>;
  setCreate(request: DeepPartial<MsgSetCreate>, metadata?: grpc.Metadata): Promise<MsgSetCreateResponse>;
  setCardAdd(request: DeepPartial<MsgSetCardAdd>, metadata?: grpc.Metadata): Promise<MsgSetCardAddResponse>;
  setCardRemove(request: DeepPartial<MsgSetCardRemove>, metadata?: grpc.Metadata): Promise<MsgSetCardRemoveResponse>;
  setContributorAdd(request: DeepPartial<MsgSetContributorAdd>, metadata?: grpc.Metadata): Promise<MsgSetContributorAddResponse>;
  setContributorRemove(request: DeepPartial<MsgSetContributorRemove>, metadata?: grpc.Metadata): Promise<MsgSetContributorRemoveResponse>;
  setFinalize(request: DeepPartial<MsgSetFinalize>, metadata?: grpc.Metadata): Promise<MsgSetFinalizeResponse>;
  setArtworkAdd(request: DeepPartial<MsgSetArtworkAdd>, metadata?: grpc.Metadata): Promise<MsgSetArtworkAddResponse>;
  setStoryAdd(request: DeepPartial<MsgSetStoryAdd>, metadata?: grpc.Metadata): Promise<MsgSetStoryAddResponse>;
  boosterPackBuy(request: DeepPartial<MsgBoosterPackBuy>, metadata?: grpc.Metadata): Promise<MsgBoosterPackBuyResponse>;
  sellOfferCreate(request: DeepPartial<MsgSellOfferCreate>, metadata?: grpc.Metadata): Promise<MsgSellOfferCreateResponse>;
  sellOfferBuy(request: DeepPartial<MsgSellOfferBuy>, metadata?: grpc.Metadata): Promise<MsgSellOfferBuyResponse>;
  sellOfferRemove(request: DeepPartial<MsgSellOfferRemove>, metadata?: grpc.Metadata): Promise<MsgSellOfferRemoveResponse>;
  cardRaritySet(request: DeepPartial<MsgCardRaritySet>, metadata?: grpc.Metadata): Promise<MsgCardRaritySetResponse>;
  councilResponseCommit(request: DeepPartial<MsgCouncilResponseCommit>, metadata?: grpc.Metadata): Promise<MsgCouncilResponseCommitResponse>;
  councilResponseReveal(request: DeepPartial<MsgCouncilResponseReveal>, metadata?: grpc.Metadata): Promise<MsgCouncilResponseRevealResponse>;
  councilRestart(request: DeepPartial<MsgCouncilRestart>, metadata?: grpc.Metadata): Promise<MsgCouncilRestartResponse>;
  matchConfirm(request: DeepPartial<MsgMatchConfirm>, metadata?: grpc.Metadata): Promise<MsgMatchConfirmResponse>;
  profileCardSet(request: DeepPartial<MsgProfileCardSet>, metadata?: grpc.Metadata): Promise<MsgProfileCardSetResponse>;
  profileWebsiteSet(request: DeepPartial<MsgProfileWebsiteSet>, metadata?: grpc.Metadata): Promise<MsgProfileWebsiteSetResponse>;
  profileBioSet(request: DeepPartial<MsgProfileBioSet>, metadata?: grpc.Metadata): Promise<MsgProfileBioSetResponse>;
  boosterPackOpen(request: DeepPartial<MsgBoosterPackOpen>, metadata?: grpc.Metadata): Promise<MsgBoosterPackOpenResponse>;
  boosterPackTransfer(request: DeepPartial<MsgBoosterPackTransfer>, metadata?: grpc.Metadata): Promise<MsgBoosterPackTransferResponse>;
  setStoryWriterSet(request: DeepPartial<MsgSetStoryWriterSet>, metadata?: grpc.Metadata): Promise<MsgSetStoryWriterSetResponse>;
  setArtistSet(request: DeepPartial<MsgSetArtistSet>, metadata?: grpc.Metadata): Promise<MsgSetArtistSetResponse>;
  cardVoteMulti(request: DeepPartial<MsgCardVoteMulti>, metadata?: grpc.Metadata): Promise<MsgCardVoteMultiResponse>;
  matchOpen(request: DeepPartial<MsgMatchOpen>, metadata?: grpc.Metadata): Promise<MsgMatchOpenResponse>;
  setNameSet(request: DeepPartial<MsgSetNameSet>, metadata?: grpc.Metadata): Promise<MsgSetNameSetResponse>;
  profileAliasSet(request: DeepPartial<MsgProfileAliasSet>, metadata?: grpc.Metadata): Promise<MsgProfileAliasSetResponse>;
  earlyAccessInvite(request: DeepPartial<MsgEarlyAccessInvite>, metadata?: grpc.Metadata): Promise<MsgEarlyAccessInviteResponse>;
  zealyConnect(request: DeepPartial<MsgZealyConnect>, metadata?: grpc.Metadata): Promise<MsgZealyConnectResponse>;
  encounterCreate(request: DeepPartial<MsgEncounterCreate>, metadata?: grpc.Metadata): Promise<MsgEncounterCreateResponse>;
  encounterDo(request: DeepPartial<MsgEncounterDo>, metadata?: grpc.Metadata): Promise<MsgEncounterDoResponse>;
  encounterClose(request: DeepPartial<MsgEncounterClose>, metadata?: grpc.Metadata): Promise<MsgEncounterCloseResponse>;
  earlyAccessDisinvite(request: DeepPartial<MsgEarlyAccessDisinvite>, metadata?: grpc.Metadata): Promise<MsgEarlyAccessDisinviteResponse>;
  cardBan(request: DeepPartial<MsgCardBan>, metadata?: grpc.Metadata): Promise<MsgCardBanResponse>;
  earlyAccessGrant(request: DeepPartial<MsgEarlyAccessGrant>, metadata?: grpc.Metadata): Promise<MsgEarlyAccessGrantResponse>;
  setActivate(request: DeepPartial<MsgSetActivate>, metadata?: grpc.Metadata): Promise<MsgSetActivateResponse>;
  cardCopyrightClaim(request: DeepPartial<MsgCardCopyrightClaim>, metadata?: grpc.Metadata): Promise<MsgCardCopyrightClaimResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.updateParams = this.updateParams.bind(this);
    this.userCreate = this.userCreate.bind(this);
    this.cardSchemeBuy = this.cardSchemeBuy.bind(this);
    this.cardSaveContent = this.cardSaveContent.bind(this);
    this.cardVote = this.cardVote.bind(this);
    this.cardTransfer = this.cardTransfer.bind(this);
    this.cardDonate = this.cardDonate.bind(this);
    this.cardArtworkAdd = this.cardArtworkAdd.bind(this);
    this.cardArtistChange = this.cardArtistChange.bind(this);
    this.councilRegister = this.councilRegister.bind(this);
    this.councilDeregister = this.councilDeregister.bind(this);
    this.matchReport = this.matchReport.bind(this);
    this.councilCreate = this.councilCreate.bind(this);
    this.matchReporterAppoint = this.matchReporterAppoint.bind(this);
    this.setCreate = this.setCreate.bind(this);
    this.setCardAdd = this.setCardAdd.bind(this);
    this.setCardRemove = this.setCardRemove.bind(this);
    this.setContributorAdd = this.setContributorAdd.bind(this);
    this.setContributorRemove = this.setContributorRemove.bind(this);
    this.setFinalize = this.setFinalize.bind(this);
    this.setArtworkAdd = this.setArtworkAdd.bind(this);
    this.setStoryAdd = this.setStoryAdd.bind(this);
    this.boosterPackBuy = this.boosterPackBuy.bind(this);
    this.sellOfferCreate = this.sellOfferCreate.bind(this);
    this.sellOfferBuy = this.sellOfferBuy.bind(this);
    this.sellOfferRemove = this.sellOfferRemove.bind(this);
    this.cardRaritySet = this.cardRaritySet.bind(this);
    this.councilResponseCommit = this.councilResponseCommit.bind(this);
    this.councilResponseReveal = this.councilResponseReveal.bind(this);
    this.councilRestart = this.councilRestart.bind(this);
    this.matchConfirm = this.matchConfirm.bind(this);
    this.profileCardSet = this.profileCardSet.bind(this);
    this.profileWebsiteSet = this.profileWebsiteSet.bind(this);
    this.profileBioSet = this.profileBioSet.bind(this);
    this.boosterPackOpen = this.boosterPackOpen.bind(this);
    this.boosterPackTransfer = this.boosterPackTransfer.bind(this);
    this.setStoryWriterSet = this.setStoryWriterSet.bind(this);
    this.setArtistSet = this.setArtistSet.bind(this);
    this.cardVoteMulti = this.cardVoteMulti.bind(this);
    this.matchOpen = this.matchOpen.bind(this);
    this.setNameSet = this.setNameSet.bind(this);
    this.profileAliasSet = this.profileAliasSet.bind(this);
    this.earlyAccessInvite = this.earlyAccessInvite.bind(this);
    this.zealyConnect = this.zealyConnect.bind(this);
    this.encounterCreate = this.encounterCreate.bind(this);
    this.encounterDo = this.encounterDo.bind(this);
    this.encounterClose = this.encounterClose.bind(this);
    this.earlyAccessDisinvite = this.earlyAccessDisinvite.bind(this);
    this.cardBan = this.cardBan.bind(this);
    this.earlyAccessGrant = this.earlyAccessGrant.bind(this);
    this.setActivate = this.setActivate.bind(this);
    this.cardCopyrightClaim = this.cardCopyrightClaim.bind(this);
  }
  updateParams(request: DeepPartial<MsgUpdateParams>, metadata?: grpc.Metadata): Promise<MsgUpdateParamsResponse> {
    return this.rpc.unary(MsgUpdateParamsDesc, MsgUpdateParams.fromPartial(request), metadata);
  }
  userCreate(request: DeepPartial<MsgUserCreate>, metadata?: grpc.Metadata): Promise<MsgUserCreateResponse> {
    return this.rpc.unary(MsgUserCreateDesc, MsgUserCreate.fromPartial(request), metadata);
  }
  cardSchemeBuy(request: DeepPartial<MsgCardSchemeBuy>, metadata?: grpc.Metadata): Promise<MsgCardSchemeBuyResponse> {
    return this.rpc.unary(MsgCardSchemeBuyDesc, MsgCardSchemeBuy.fromPartial(request), metadata);
  }
  cardSaveContent(request: DeepPartial<MsgCardSaveContent>, metadata?: grpc.Metadata): Promise<MsgCardSaveContentResponse> {
    return this.rpc.unary(MsgCardSaveContentDesc, MsgCardSaveContent.fromPartial(request), metadata);
  }
  cardVote(request: DeepPartial<MsgCardVote>, metadata?: grpc.Metadata): Promise<MsgCardVoteResponse> {
    return this.rpc.unary(MsgCardVoteDesc, MsgCardVote.fromPartial(request), metadata);
  }
  cardTransfer(request: DeepPartial<MsgCardTransfer>, metadata?: grpc.Metadata): Promise<MsgCardTransferResponse> {
    return this.rpc.unary(MsgCardTransferDesc, MsgCardTransfer.fromPartial(request), metadata);
  }
  cardDonate(request: DeepPartial<MsgCardDonate>, metadata?: grpc.Metadata): Promise<MsgCardDonateResponse> {
    return this.rpc.unary(MsgCardDonateDesc, MsgCardDonate.fromPartial(request), metadata);
  }
  cardArtworkAdd(request: DeepPartial<MsgCardArtworkAdd>, metadata?: grpc.Metadata): Promise<MsgCardArtworkAddResponse> {
    return this.rpc.unary(MsgCardArtworkAddDesc, MsgCardArtworkAdd.fromPartial(request), metadata);
  }
  cardArtistChange(request: DeepPartial<MsgCardArtistChange>, metadata?: grpc.Metadata): Promise<MsgCardArtistChangeResponse> {
    return this.rpc.unary(MsgCardArtistChangeDesc, MsgCardArtistChange.fromPartial(request), metadata);
  }
  councilRegister(request: DeepPartial<MsgCouncilRegister>, metadata?: grpc.Metadata): Promise<MsgCouncilRegisterResponse> {
    return this.rpc.unary(MsgCouncilRegisterDesc, MsgCouncilRegister.fromPartial(request), metadata);
  }
  councilDeregister(request: DeepPartial<MsgCouncilDeregister>, metadata?: grpc.Metadata): Promise<MsgCouncilDeregisterResponse> {
    return this.rpc.unary(MsgCouncilDeregisterDesc, MsgCouncilDeregister.fromPartial(request), metadata);
  }
  matchReport(request: DeepPartial<MsgMatchReport>, metadata?: grpc.Metadata): Promise<MsgMatchReportResponse> {
    return this.rpc.unary(MsgMatchReportDesc, MsgMatchReport.fromPartial(request), metadata);
  }
  councilCreate(request: DeepPartial<MsgCouncilCreate>, metadata?: grpc.Metadata): Promise<MsgCouncilCreateResponse> {
    return this.rpc.unary(MsgCouncilCreateDesc, MsgCouncilCreate.fromPartial(request), metadata);
  }
  matchReporterAppoint(request: DeepPartial<MsgMatchReporterAppoint>, metadata?: grpc.Metadata): Promise<MsgMatchReporterAppointResponse> {
    return this.rpc.unary(MsgMatchReporterAppointDesc, MsgMatchReporterAppoint.fromPartial(request), metadata);
  }
  setCreate(request: DeepPartial<MsgSetCreate>, metadata?: grpc.Metadata): Promise<MsgSetCreateResponse> {
    return this.rpc.unary(MsgSetCreateDesc, MsgSetCreate.fromPartial(request), metadata);
  }
  setCardAdd(request: DeepPartial<MsgSetCardAdd>, metadata?: grpc.Metadata): Promise<MsgSetCardAddResponse> {
    return this.rpc.unary(MsgSetCardAddDesc, MsgSetCardAdd.fromPartial(request), metadata);
  }
  setCardRemove(request: DeepPartial<MsgSetCardRemove>, metadata?: grpc.Metadata): Promise<MsgSetCardRemoveResponse> {
    return this.rpc.unary(MsgSetCardRemoveDesc, MsgSetCardRemove.fromPartial(request), metadata);
  }
  setContributorAdd(request: DeepPartial<MsgSetContributorAdd>, metadata?: grpc.Metadata): Promise<MsgSetContributorAddResponse> {
    return this.rpc.unary(MsgSetContributorAddDesc, MsgSetContributorAdd.fromPartial(request), metadata);
  }
  setContributorRemove(request: DeepPartial<MsgSetContributorRemove>, metadata?: grpc.Metadata): Promise<MsgSetContributorRemoveResponse> {
    return this.rpc.unary(MsgSetContributorRemoveDesc, MsgSetContributorRemove.fromPartial(request), metadata);
  }
  setFinalize(request: DeepPartial<MsgSetFinalize>, metadata?: grpc.Metadata): Promise<MsgSetFinalizeResponse> {
    return this.rpc.unary(MsgSetFinalizeDesc, MsgSetFinalize.fromPartial(request), metadata);
  }
  setArtworkAdd(request: DeepPartial<MsgSetArtworkAdd>, metadata?: grpc.Metadata): Promise<MsgSetArtworkAddResponse> {
    return this.rpc.unary(MsgSetArtworkAddDesc, MsgSetArtworkAdd.fromPartial(request), metadata);
  }
  setStoryAdd(request: DeepPartial<MsgSetStoryAdd>, metadata?: grpc.Metadata): Promise<MsgSetStoryAddResponse> {
    return this.rpc.unary(MsgSetStoryAddDesc, MsgSetStoryAdd.fromPartial(request), metadata);
  }
  boosterPackBuy(request: DeepPartial<MsgBoosterPackBuy>, metadata?: grpc.Metadata): Promise<MsgBoosterPackBuyResponse> {
    return this.rpc.unary(MsgBoosterPackBuyDesc, MsgBoosterPackBuy.fromPartial(request), metadata);
  }
  sellOfferCreate(request: DeepPartial<MsgSellOfferCreate>, metadata?: grpc.Metadata): Promise<MsgSellOfferCreateResponse> {
    return this.rpc.unary(MsgSellOfferCreateDesc, MsgSellOfferCreate.fromPartial(request), metadata);
  }
  sellOfferBuy(request: DeepPartial<MsgSellOfferBuy>, metadata?: grpc.Metadata): Promise<MsgSellOfferBuyResponse> {
    return this.rpc.unary(MsgSellOfferBuyDesc, MsgSellOfferBuy.fromPartial(request), metadata);
  }
  sellOfferRemove(request: DeepPartial<MsgSellOfferRemove>, metadata?: grpc.Metadata): Promise<MsgSellOfferRemoveResponse> {
    return this.rpc.unary(MsgSellOfferRemoveDesc, MsgSellOfferRemove.fromPartial(request), metadata);
  }
  cardRaritySet(request: DeepPartial<MsgCardRaritySet>, metadata?: grpc.Metadata): Promise<MsgCardRaritySetResponse> {
    return this.rpc.unary(MsgCardRaritySetDesc, MsgCardRaritySet.fromPartial(request), metadata);
  }
  councilResponseCommit(request: DeepPartial<MsgCouncilResponseCommit>, metadata?: grpc.Metadata): Promise<MsgCouncilResponseCommitResponse> {
    return this.rpc.unary(MsgCouncilResponseCommitDesc, MsgCouncilResponseCommit.fromPartial(request), metadata);
  }
  councilResponseReveal(request: DeepPartial<MsgCouncilResponseReveal>, metadata?: grpc.Metadata): Promise<MsgCouncilResponseRevealResponse> {
    return this.rpc.unary(MsgCouncilResponseRevealDesc, MsgCouncilResponseReveal.fromPartial(request), metadata);
  }
  councilRestart(request: DeepPartial<MsgCouncilRestart>, metadata?: grpc.Metadata): Promise<MsgCouncilRestartResponse> {
    return this.rpc.unary(MsgCouncilRestartDesc, MsgCouncilRestart.fromPartial(request), metadata);
  }
  matchConfirm(request: DeepPartial<MsgMatchConfirm>, metadata?: grpc.Metadata): Promise<MsgMatchConfirmResponse> {
    return this.rpc.unary(MsgMatchConfirmDesc, MsgMatchConfirm.fromPartial(request), metadata);
  }
  profileCardSet(request: DeepPartial<MsgProfileCardSet>, metadata?: grpc.Metadata): Promise<MsgProfileCardSetResponse> {
    return this.rpc.unary(MsgProfileCardSetDesc, MsgProfileCardSet.fromPartial(request), metadata);
  }
  profileWebsiteSet(request: DeepPartial<MsgProfileWebsiteSet>, metadata?: grpc.Metadata): Promise<MsgProfileWebsiteSetResponse> {
    return this.rpc.unary(MsgProfileWebsiteSetDesc, MsgProfileWebsiteSet.fromPartial(request), metadata);
  }
  profileBioSet(request: DeepPartial<MsgProfileBioSet>, metadata?: grpc.Metadata): Promise<MsgProfileBioSetResponse> {
    return this.rpc.unary(MsgProfileBioSetDesc, MsgProfileBioSet.fromPartial(request), metadata);
  }
  boosterPackOpen(request: DeepPartial<MsgBoosterPackOpen>, metadata?: grpc.Metadata): Promise<MsgBoosterPackOpenResponse> {
    return this.rpc.unary(MsgBoosterPackOpenDesc, MsgBoosterPackOpen.fromPartial(request), metadata);
  }
  boosterPackTransfer(request: DeepPartial<MsgBoosterPackTransfer>, metadata?: grpc.Metadata): Promise<MsgBoosterPackTransferResponse> {
    return this.rpc.unary(MsgBoosterPackTransferDesc, MsgBoosterPackTransfer.fromPartial(request), metadata);
  }
  setStoryWriterSet(request: DeepPartial<MsgSetStoryWriterSet>, metadata?: grpc.Metadata): Promise<MsgSetStoryWriterSetResponse> {
    return this.rpc.unary(MsgSetStoryWriterSetDesc, MsgSetStoryWriterSet.fromPartial(request), metadata);
  }
  setArtistSet(request: DeepPartial<MsgSetArtistSet>, metadata?: grpc.Metadata): Promise<MsgSetArtistSetResponse> {
    return this.rpc.unary(MsgSetArtistSetDesc, MsgSetArtistSet.fromPartial(request), metadata);
  }
  cardVoteMulti(request: DeepPartial<MsgCardVoteMulti>, metadata?: grpc.Metadata): Promise<MsgCardVoteMultiResponse> {
    return this.rpc.unary(MsgCardVoteMultiDesc, MsgCardVoteMulti.fromPartial(request), metadata);
  }
  matchOpen(request: DeepPartial<MsgMatchOpen>, metadata?: grpc.Metadata): Promise<MsgMatchOpenResponse> {
    return this.rpc.unary(MsgMatchOpenDesc, MsgMatchOpen.fromPartial(request), metadata);
  }
  setNameSet(request: DeepPartial<MsgSetNameSet>, metadata?: grpc.Metadata): Promise<MsgSetNameSetResponse> {
    return this.rpc.unary(MsgSetNameSetDesc, MsgSetNameSet.fromPartial(request), metadata);
  }
  profileAliasSet(request: DeepPartial<MsgProfileAliasSet>, metadata?: grpc.Metadata): Promise<MsgProfileAliasSetResponse> {
    return this.rpc.unary(MsgProfileAliasSetDesc, MsgProfileAliasSet.fromPartial(request), metadata);
  }
  earlyAccessInvite(request: DeepPartial<MsgEarlyAccessInvite>, metadata?: grpc.Metadata): Promise<MsgEarlyAccessInviteResponse> {
    return this.rpc.unary(MsgEarlyAccessInviteDesc, MsgEarlyAccessInvite.fromPartial(request), metadata);
  }
  zealyConnect(request: DeepPartial<MsgZealyConnect>, metadata?: grpc.Metadata): Promise<MsgZealyConnectResponse> {
    return this.rpc.unary(MsgZealyConnectDesc, MsgZealyConnect.fromPartial(request), metadata);
  }
  encounterCreate(request: DeepPartial<MsgEncounterCreate>, metadata?: grpc.Metadata): Promise<MsgEncounterCreateResponse> {
    return this.rpc.unary(MsgEncounterCreateDesc, MsgEncounterCreate.fromPartial(request), metadata);
  }
  encounterDo(request: DeepPartial<MsgEncounterDo>, metadata?: grpc.Metadata): Promise<MsgEncounterDoResponse> {
    return this.rpc.unary(MsgEncounterDoDesc, MsgEncounterDo.fromPartial(request), metadata);
  }
  encounterClose(request: DeepPartial<MsgEncounterClose>, metadata?: grpc.Metadata): Promise<MsgEncounterCloseResponse> {
    return this.rpc.unary(MsgEncounterCloseDesc, MsgEncounterClose.fromPartial(request), metadata);
  }
  earlyAccessDisinvite(request: DeepPartial<MsgEarlyAccessDisinvite>, metadata?: grpc.Metadata): Promise<MsgEarlyAccessDisinviteResponse> {
    return this.rpc.unary(MsgEarlyAccessDisinviteDesc, MsgEarlyAccessDisinvite.fromPartial(request), metadata);
  }
  cardBan(request: DeepPartial<MsgCardBan>, metadata?: grpc.Metadata): Promise<MsgCardBanResponse> {
    return this.rpc.unary(MsgCardBanDesc, MsgCardBan.fromPartial(request), metadata);
  }
  earlyAccessGrant(request: DeepPartial<MsgEarlyAccessGrant>, metadata?: grpc.Metadata): Promise<MsgEarlyAccessGrantResponse> {
    return this.rpc.unary(MsgEarlyAccessGrantDesc, MsgEarlyAccessGrant.fromPartial(request), metadata);
  }
  setActivate(request: DeepPartial<MsgSetActivate>, metadata?: grpc.Metadata): Promise<MsgSetActivateResponse> {
    return this.rpc.unary(MsgSetActivateDesc, MsgSetActivate.fromPartial(request), metadata);
  }
  cardCopyrightClaim(request: DeepPartial<MsgCardCopyrightClaim>, metadata?: grpc.Metadata): Promise<MsgCardCopyrightClaimResponse> {
    return this.rpc.unary(MsgCardCopyrightClaimDesc, MsgCardCopyrightClaim.fromPartial(request), metadata);
  }
}
export const MsgDesc = {
  serviceName: "cardchain.cardchain.Msg"
};
export const MsgUpdateParamsDesc: UnaryMethodDefinitionish = {
  methodName: "UpdateParams",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgUpdateParams.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgUpdateParamsResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgUserCreateDesc: UnaryMethodDefinitionish = {
  methodName: "UserCreate",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgUserCreate.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgUserCreateResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgCardSchemeBuyDesc: UnaryMethodDefinitionish = {
  methodName: "CardSchemeBuy",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgCardSchemeBuy.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgCardSchemeBuyResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgCardSaveContentDesc: UnaryMethodDefinitionish = {
  methodName: "CardSaveContent",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgCardSaveContent.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgCardSaveContentResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgCardVoteDesc: UnaryMethodDefinitionish = {
  methodName: "CardVote",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgCardVote.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgCardVoteResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgCardTransferDesc: UnaryMethodDefinitionish = {
  methodName: "CardTransfer",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgCardTransfer.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgCardTransferResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgCardDonateDesc: UnaryMethodDefinitionish = {
  methodName: "CardDonate",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgCardDonate.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgCardDonateResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgCardArtworkAddDesc: UnaryMethodDefinitionish = {
  methodName: "CardArtworkAdd",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgCardArtworkAdd.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgCardArtworkAddResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgCardArtistChangeDesc: UnaryMethodDefinitionish = {
  methodName: "CardArtistChange",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgCardArtistChange.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgCardArtistChangeResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgCouncilRegisterDesc: UnaryMethodDefinitionish = {
  methodName: "CouncilRegister",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgCouncilRegister.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgCouncilRegisterResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgCouncilDeregisterDesc: UnaryMethodDefinitionish = {
  methodName: "CouncilDeregister",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgCouncilDeregister.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgCouncilDeregisterResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgMatchReportDesc: UnaryMethodDefinitionish = {
  methodName: "MatchReport",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgMatchReport.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgMatchReportResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgCouncilCreateDesc: UnaryMethodDefinitionish = {
  methodName: "CouncilCreate",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgCouncilCreate.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgCouncilCreateResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgMatchReporterAppointDesc: UnaryMethodDefinitionish = {
  methodName: "MatchReporterAppoint",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgMatchReporterAppoint.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgMatchReporterAppointResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgSetCreateDesc: UnaryMethodDefinitionish = {
  methodName: "SetCreate",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgSetCreate.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgSetCreateResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgSetCardAddDesc: UnaryMethodDefinitionish = {
  methodName: "SetCardAdd",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgSetCardAdd.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgSetCardAddResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgSetCardRemoveDesc: UnaryMethodDefinitionish = {
  methodName: "SetCardRemove",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgSetCardRemove.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgSetCardRemoveResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgSetContributorAddDesc: UnaryMethodDefinitionish = {
  methodName: "SetContributorAdd",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgSetContributorAdd.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgSetContributorAddResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgSetContributorRemoveDesc: UnaryMethodDefinitionish = {
  methodName: "SetContributorRemove",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgSetContributorRemove.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgSetContributorRemoveResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgSetFinalizeDesc: UnaryMethodDefinitionish = {
  methodName: "SetFinalize",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgSetFinalize.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgSetFinalizeResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgSetArtworkAddDesc: UnaryMethodDefinitionish = {
  methodName: "SetArtworkAdd",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgSetArtworkAdd.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgSetArtworkAddResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgSetStoryAddDesc: UnaryMethodDefinitionish = {
  methodName: "SetStoryAdd",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgSetStoryAdd.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgSetStoryAddResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgBoosterPackBuyDesc: UnaryMethodDefinitionish = {
  methodName: "BoosterPackBuy",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgBoosterPackBuy.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgBoosterPackBuyResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgSellOfferCreateDesc: UnaryMethodDefinitionish = {
  methodName: "SellOfferCreate",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgSellOfferCreate.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgSellOfferCreateResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgSellOfferBuyDesc: UnaryMethodDefinitionish = {
  methodName: "SellOfferBuy",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgSellOfferBuy.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgSellOfferBuyResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgSellOfferRemoveDesc: UnaryMethodDefinitionish = {
  methodName: "SellOfferRemove",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgSellOfferRemove.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgSellOfferRemoveResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgCardRaritySetDesc: UnaryMethodDefinitionish = {
  methodName: "CardRaritySet",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgCardRaritySet.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgCardRaritySetResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgCouncilResponseCommitDesc: UnaryMethodDefinitionish = {
  methodName: "CouncilResponseCommit",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgCouncilResponseCommit.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgCouncilResponseCommitResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgCouncilResponseRevealDesc: UnaryMethodDefinitionish = {
  methodName: "CouncilResponseReveal",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgCouncilResponseReveal.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgCouncilResponseRevealResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgCouncilRestartDesc: UnaryMethodDefinitionish = {
  methodName: "CouncilRestart",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgCouncilRestart.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgCouncilRestartResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgMatchConfirmDesc: UnaryMethodDefinitionish = {
  methodName: "MatchConfirm",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgMatchConfirm.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgMatchConfirmResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgProfileCardSetDesc: UnaryMethodDefinitionish = {
  methodName: "ProfileCardSet",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgProfileCardSet.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgProfileCardSetResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgProfileWebsiteSetDesc: UnaryMethodDefinitionish = {
  methodName: "ProfileWebsiteSet",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgProfileWebsiteSet.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgProfileWebsiteSetResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgProfileBioSetDesc: UnaryMethodDefinitionish = {
  methodName: "ProfileBioSet",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgProfileBioSet.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgProfileBioSetResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgBoosterPackOpenDesc: UnaryMethodDefinitionish = {
  methodName: "BoosterPackOpen",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgBoosterPackOpen.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgBoosterPackOpenResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgBoosterPackTransferDesc: UnaryMethodDefinitionish = {
  methodName: "BoosterPackTransfer",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgBoosterPackTransfer.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgBoosterPackTransferResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgSetStoryWriterSetDesc: UnaryMethodDefinitionish = {
  methodName: "SetStoryWriterSet",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgSetStoryWriterSet.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgSetStoryWriterSetResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgSetArtistSetDesc: UnaryMethodDefinitionish = {
  methodName: "SetArtistSet",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgSetArtistSet.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgSetArtistSetResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgCardVoteMultiDesc: UnaryMethodDefinitionish = {
  methodName: "CardVoteMulti",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgCardVoteMulti.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgCardVoteMultiResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgMatchOpenDesc: UnaryMethodDefinitionish = {
  methodName: "MatchOpen",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgMatchOpen.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgMatchOpenResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgSetNameSetDesc: UnaryMethodDefinitionish = {
  methodName: "SetNameSet",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgSetNameSet.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgSetNameSetResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgProfileAliasSetDesc: UnaryMethodDefinitionish = {
  methodName: "ProfileAliasSet",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgProfileAliasSet.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgProfileAliasSetResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgEarlyAccessInviteDesc: UnaryMethodDefinitionish = {
  methodName: "EarlyAccessInvite",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgEarlyAccessInvite.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgEarlyAccessInviteResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgZealyConnectDesc: UnaryMethodDefinitionish = {
  methodName: "ZealyConnect",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgZealyConnect.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgZealyConnectResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgEncounterCreateDesc: UnaryMethodDefinitionish = {
  methodName: "EncounterCreate",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgEncounterCreate.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgEncounterCreateResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgEncounterDoDesc: UnaryMethodDefinitionish = {
  methodName: "EncounterDo",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgEncounterDo.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgEncounterDoResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgEncounterCloseDesc: UnaryMethodDefinitionish = {
  methodName: "EncounterClose",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgEncounterClose.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgEncounterCloseResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgEarlyAccessDisinviteDesc: UnaryMethodDefinitionish = {
  methodName: "EarlyAccessDisinvite",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgEarlyAccessDisinvite.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgEarlyAccessDisinviteResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgCardBanDesc: UnaryMethodDefinitionish = {
  methodName: "CardBan",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgCardBan.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgCardBanResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgEarlyAccessGrantDesc: UnaryMethodDefinitionish = {
  methodName: "EarlyAccessGrant",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgEarlyAccessGrant.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgEarlyAccessGrantResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgSetActivateDesc: UnaryMethodDefinitionish = {
  methodName: "SetActivate",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgSetActivate.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgSetActivateResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgCardCopyrightClaimDesc: UnaryMethodDefinitionish = {
  methodName: "CardCopyrightClaim",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgCardCopyrightClaim.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgCardCopyrightClaimResponse.decode(data),
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