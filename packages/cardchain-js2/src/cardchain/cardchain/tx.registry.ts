//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgUpdateParams, MsgUserCreate, MsgCardSchemeBuy, MsgCardSaveContent, MsgCardVote, MsgCardTransfer, MsgCardDonate, MsgCardArtworkAdd, MsgCardArtistChange, MsgCouncilRegister, MsgCouncilDeregister, MsgMatchReport, MsgCouncilCreate, MsgMatchReporterAppoint, MsgSetCreate, MsgSetCardAdd, MsgSetCardRemove, MsgSetContributorAdd, MsgSetContributorRemove, MsgSetFinalize, MsgSetArtworkAdd, MsgSetStoryAdd, MsgBoosterPackBuy, MsgSellOfferCreate, MsgSellOfferBuy, MsgSellOfferRemove, MsgCardRaritySet, MsgCouncilResponseCommit, MsgCouncilResponseReveal, MsgCouncilRestart, MsgMatchConfirm, MsgProfileCardSet, MsgProfileWebsiteSet, MsgProfileBioSet, MsgBoosterPackOpen, MsgBoosterPackTransfer, MsgSetStoryWriterSet, MsgSetArtistSet, MsgCardVoteMulti, MsgMatchOpen, MsgSetNameSet, MsgProfileAliasSet, MsgEarlyAccessInvite, MsgZealyConnect, MsgEncounterCreate, MsgEncounterDo, MsgEncounterClose, MsgEarlyAccessDisinvite, MsgCardBan, MsgEarlyAccessGrant, MsgSetActivate, MsgCardCopyrightClaim } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/cardchain.cardchain.MsgUpdateParams", MsgUpdateParams], ["/cardchain.cardchain.MsgUserCreate", MsgUserCreate], ["/cardchain.cardchain.MsgCardSchemeBuy", MsgCardSchemeBuy], ["/cardchain.cardchain.MsgCardSaveContent", MsgCardSaveContent], ["/cardchain.cardchain.MsgCardVote", MsgCardVote], ["/cardchain.cardchain.MsgCardTransfer", MsgCardTransfer], ["/cardchain.cardchain.MsgCardDonate", MsgCardDonate], ["/cardchain.cardchain.MsgCardArtworkAdd", MsgCardArtworkAdd], ["/cardchain.cardchain.MsgCardArtistChange", MsgCardArtistChange], ["/cardchain.cardchain.MsgCouncilRegister", MsgCouncilRegister], ["/cardchain.cardchain.MsgCouncilDeregister", MsgCouncilDeregister], ["/cardchain.cardchain.MsgMatchReport", MsgMatchReport], ["/cardchain.cardchain.MsgCouncilCreate", MsgCouncilCreate], ["/cardchain.cardchain.MsgMatchReporterAppoint", MsgMatchReporterAppoint], ["/cardchain.cardchain.MsgSetCreate", MsgSetCreate], ["/cardchain.cardchain.MsgSetCardAdd", MsgSetCardAdd], ["/cardchain.cardchain.MsgSetCardRemove", MsgSetCardRemove], ["/cardchain.cardchain.MsgSetContributorAdd", MsgSetContributorAdd], ["/cardchain.cardchain.MsgSetContributorRemove", MsgSetContributorRemove], ["/cardchain.cardchain.MsgSetFinalize", MsgSetFinalize], ["/cardchain.cardchain.MsgSetArtworkAdd", MsgSetArtworkAdd], ["/cardchain.cardchain.MsgSetStoryAdd", MsgSetStoryAdd], ["/cardchain.cardchain.MsgBoosterPackBuy", MsgBoosterPackBuy], ["/cardchain.cardchain.MsgSellOfferCreate", MsgSellOfferCreate], ["/cardchain.cardchain.MsgSellOfferBuy", MsgSellOfferBuy], ["/cardchain.cardchain.MsgSellOfferRemove", MsgSellOfferRemove], ["/cardchain.cardchain.MsgCardRaritySet", MsgCardRaritySet], ["/cardchain.cardchain.MsgCouncilResponseCommit", MsgCouncilResponseCommit], ["/cardchain.cardchain.MsgCouncilResponseReveal", MsgCouncilResponseReveal], ["/cardchain.cardchain.MsgCouncilRestart", MsgCouncilRestart], ["/cardchain.cardchain.MsgMatchConfirm", MsgMatchConfirm], ["/cardchain.cardchain.MsgProfileCardSet", MsgProfileCardSet], ["/cardchain.cardchain.MsgProfileWebsiteSet", MsgProfileWebsiteSet], ["/cardchain.cardchain.MsgProfileBioSet", MsgProfileBioSet], ["/cardchain.cardchain.MsgBoosterPackOpen", MsgBoosterPackOpen], ["/cardchain.cardchain.MsgBoosterPackTransfer", MsgBoosterPackTransfer], ["/cardchain.cardchain.MsgSetStoryWriterSet", MsgSetStoryWriterSet], ["/cardchain.cardchain.MsgSetArtistSet", MsgSetArtistSet], ["/cardchain.cardchain.MsgCardVoteMulti", MsgCardVoteMulti], ["/cardchain.cardchain.MsgMatchOpen", MsgMatchOpen], ["/cardchain.cardchain.MsgSetNameSet", MsgSetNameSet], ["/cardchain.cardchain.MsgProfileAliasSet", MsgProfileAliasSet], ["/cardchain.cardchain.MsgEarlyAccessInvite", MsgEarlyAccessInvite], ["/cardchain.cardchain.MsgZealyConnect", MsgZealyConnect], ["/cardchain.cardchain.MsgEncounterCreate", MsgEncounterCreate], ["/cardchain.cardchain.MsgEncounterDo", MsgEncounterDo], ["/cardchain.cardchain.MsgEncounterClose", MsgEncounterClose], ["/cardchain.cardchain.MsgEarlyAccessDisinvite", MsgEarlyAccessDisinvite], ["/cardchain.cardchain.MsgCardBan", MsgCardBan], ["/cardchain.cardchain.MsgEarlyAccessGrant", MsgEarlyAccessGrant], ["/cardchain.cardchain.MsgSetActivate", MsgSetActivate], ["/cardchain.cardchain.MsgCardCopyrightClaim", MsgCardCopyrightClaim]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/cardchain.cardchain.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    userCreate(value: MsgUserCreate) {
      return {
        typeUrl: "/cardchain.cardchain.MsgUserCreate",
        value: MsgUserCreate.encode(value).finish()
      };
    },
    cardSchemeBuy(value: MsgCardSchemeBuy) {
      return {
        typeUrl: "/cardchain.cardchain.MsgCardSchemeBuy",
        value: MsgCardSchemeBuy.encode(value).finish()
      };
    },
    cardSaveContent(value: MsgCardSaveContent) {
      return {
        typeUrl: "/cardchain.cardchain.MsgCardSaveContent",
        value: MsgCardSaveContent.encode(value).finish()
      };
    },
    cardVote(value: MsgCardVote) {
      return {
        typeUrl: "/cardchain.cardchain.MsgCardVote",
        value: MsgCardVote.encode(value).finish()
      };
    },
    cardTransfer(value: MsgCardTransfer) {
      return {
        typeUrl: "/cardchain.cardchain.MsgCardTransfer",
        value: MsgCardTransfer.encode(value).finish()
      };
    },
    cardDonate(value: MsgCardDonate) {
      return {
        typeUrl: "/cardchain.cardchain.MsgCardDonate",
        value: MsgCardDonate.encode(value).finish()
      };
    },
    cardArtworkAdd(value: MsgCardArtworkAdd) {
      return {
        typeUrl: "/cardchain.cardchain.MsgCardArtworkAdd",
        value: MsgCardArtworkAdd.encode(value).finish()
      };
    },
    cardArtistChange(value: MsgCardArtistChange) {
      return {
        typeUrl: "/cardchain.cardchain.MsgCardArtistChange",
        value: MsgCardArtistChange.encode(value).finish()
      };
    },
    councilRegister(value: MsgCouncilRegister) {
      return {
        typeUrl: "/cardchain.cardchain.MsgCouncilRegister",
        value: MsgCouncilRegister.encode(value).finish()
      };
    },
    councilDeregister(value: MsgCouncilDeregister) {
      return {
        typeUrl: "/cardchain.cardchain.MsgCouncilDeregister",
        value: MsgCouncilDeregister.encode(value).finish()
      };
    },
    matchReport(value: MsgMatchReport) {
      return {
        typeUrl: "/cardchain.cardchain.MsgMatchReport",
        value: MsgMatchReport.encode(value).finish()
      };
    },
    councilCreate(value: MsgCouncilCreate) {
      return {
        typeUrl: "/cardchain.cardchain.MsgCouncilCreate",
        value: MsgCouncilCreate.encode(value).finish()
      };
    },
    matchReporterAppoint(value: MsgMatchReporterAppoint) {
      return {
        typeUrl: "/cardchain.cardchain.MsgMatchReporterAppoint",
        value: MsgMatchReporterAppoint.encode(value).finish()
      };
    },
    setCreate(value: MsgSetCreate) {
      return {
        typeUrl: "/cardchain.cardchain.MsgSetCreate",
        value: MsgSetCreate.encode(value).finish()
      };
    },
    setCardAdd(value: MsgSetCardAdd) {
      return {
        typeUrl: "/cardchain.cardchain.MsgSetCardAdd",
        value: MsgSetCardAdd.encode(value).finish()
      };
    },
    setCardRemove(value: MsgSetCardRemove) {
      return {
        typeUrl: "/cardchain.cardchain.MsgSetCardRemove",
        value: MsgSetCardRemove.encode(value).finish()
      };
    },
    setContributorAdd(value: MsgSetContributorAdd) {
      return {
        typeUrl: "/cardchain.cardchain.MsgSetContributorAdd",
        value: MsgSetContributorAdd.encode(value).finish()
      };
    },
    setContributorRemove(value: MsgSetContributorRemove) {
      return {
        typeUrl: "/cardchain.cardchain.MsgSetContributorRemove",
        value: MsgSetContributorRemove.encode(value).finish()
      };
    },
    setFinalize(value: MsgSetFinalize) {
      return {
        typeUrl: "/cardchain.cardchain.MsgSetFinalize",
        value: MsgSetFinalize.encode(value).finish()
      };
    },
    setArtworkAdd(value: MsgSetArtworkAdd) {
      return {
        typeUrl: "/cardchain.cardchain.MsgSetArtworkAdd",
        value: MsgSetArtworkAdd.encode(value).finish()
      };
    },
    setStoryAdd(value: MsgSetStoryAdd) {
      return {
        typeUrl: "/cardchain.cardchain.MsgSetStoryAdd",
        value: MsgSetStoryAdd.encode(value).finish()
      };
    },
    boosterPackBuy(value: MsgBoosterPackBuy) {
      return {
        typeUrl: "/cardchain.cardchain.MsgBoosterPackBuy",
        value: MsgBoosterPackBuy.encode(value).finish()
      };
    },
    sellOfferCreate(value: MsgSellOfferCreate) {
      return {
        typeUrl: "/cardchain.cardchain.MsgSellOfferCreate",
        value: MsgSellOfferCreate.encode(value).finish()
      };
    },
    sellOfferBuy(value: MsgSellOfferBuy) {
      return {
        typeUrl: "/cardchain.cardchain.MsgSellOfferBuy",
        value: MsgSellOfferBuy.encode(value).finish()
      };
    },
    sellOfferRemove(value: MsgSellOfferRemove) {
      return {
        typeUrl: "/cardchain.cardchain.MsgSellOfferRemove",
        value: MsgSellOfferRemove.encode(value).finish()
      };
    },
    cardRaritySet(value: MsgCardRaritySet) {
      return {
        typeUrl: "/cardchain.cardchain.MsgCardRaritySet",
        value: MsgCardRaritySet.encode(value).finish()
      };
    },
    councilResponseCommit(value: MsgCouncilResponseCommit) {
      return {
        typeUrl: "/cardchain.cardchain.MsgCouncilResponseCommit",
        value: MsgCouncilResponseCommit.encode(value).finish()
      };
    },
    councilResponseReveal(value: MsgCouncilResponseReveal) {
      return {
        typeUrl: "/cardchain.cardchain.MsgCouncilResponseReveal",
        value: MsgCouncilResponseReveal.encode(value).finish()
      };
    },
    councilRestart(value: MsgCouncilRestart) {
      return {
        typeUrl: "/cardchain.cardchain.MsgCouncilRestart",
        value: MsgCouncilRestart.encode(value).finish()
      };
    },
    matchConfirm(value: MsgMatchConfirm) {
      return {
        typeUrl: "/cardchain.cardchain.MsgMatchConfirm",
        value: MsgMatchConfirm.encode(value).finish()
      };
    },
    profileCardSet(value: MsgProfileCardSet) {
      return {
        typeUrl: "/cardchain.cardchain.MsgProfileCardSet",
        value: MsgProfileCardSet.encode(value).finish()
      };
    },
    profileWebsiteSet(value: MsgProfileWebsiteSet) {
      return {
        typeUrl: "/cardchain.cardchain.MsgProfileWebsiteSet",
        value: MsgProfileWebsiteSet.encode(value).finish()
      };
    },
    profileBioSet(value: MsgProfileBioSet) {
      return {
        typeUrl: "/cardchain.cardchain.MsgProfileBioSet",
        value: MsgProfileBioSet.encode(value).finish()
      };
    },
    boosterPackOpen(value: MsgBoosterPackOpen) {
      return {
        typeUrl: "/cardchain.cardchain.MsgBoosterPackOpen",
        value: MsgBoosterPackOpen.encode(value).finish()
      };
    },
    boosterPackTransfer(value: MsgBoosterPackTransfer) {
      return {
        typeUrl: "/cardchain.cardchain.MsgBoosterPackTransfer",
        value: MsgBoosterPackTransfer.encode(value).finish()
      };
    },
    setStoryWriterSet(value: MsgSetStoryWriterSet) {
      return {
        typeUrl: "/cardchain.cardchain.MsgSetStoryWriterSet",
        value: MsgSetStoryWriterSet.encode(value).finish()
      };
    },
    setArtistSet(value: MsgSetArtistSet) {
      return {
        typeUrl: "/cardchain.cardchain.MsgSetArtistSet",
        value: MsgSetArtistSet.encode(value).finish()
      };
    },
    cardVoteMulti(value: MsgCardVoteMulti) {
      return {
        typeUrl: "/cardchain.cardchain.MsgCardVoteMulti",
        value: MsgCardVoteMulti.encode(value).finish()
      };
    },
    matchOpen(value: MsgMatchOpen) {
      return {
        typeUrl: "/cardchain.cardchain.MsgMatchOpen",
        value: MsgMatchOpen.encode(value).finish()
      };
    },
    setNameSet(value: MsgSetNameSet) {
      return {
        typeUrl: "/cardchain.cardchain.MsgSetNameSet",
        value: MsgSetNameSet.encode(value).finish()
      };
    },
    profileAliasSet(value: MsgProfileAliasSet) {
      return {
        typeUrl: "/cardchain.cardchain.MsgProfileAliasSet",
        value: MsgProfileAliasSet.encode(value).finish()
      };
    },
    earlyAccessInvite(value: MsgEarlyAccessInvite) {
      return {
        typeUrl: "/cardchain.cardchain.MsgEarlyAccessInvite",
        value: MsgEarlyAccessInvite.encode(value).finish()
      };
    },
    zealyConnect(value: MsgZealyConnect) {
      return {
        typeUrl: "/cardchain.cardchain.MsgZealyConnect",
        value: MsgZealyConnect.encode(value).finish()
      };
    },
    encounterCreate(value: MsgEncounterCreate) {
      return {
        typeUrl: "/cardchain.cardchain.MsgEncounterCreate",
        value: MsgEncounterCreate.encode(value).finish()
      };
    },
    encounterDo(value: MsgEncounterDo) {
      return {
        typeUrl: "/cardchain.cardchain.MsgEncounterDo",
        value: MsgEncounterDo.encode(value).finish()
      };
    },
    encounterClose(value: MsgEncounterClose) {
      return {
        typeUrl: "/cardchain.cardchain.MsgEncounterClose",
        value: MsgEncounterClose.encode(value).finish()
      };
    },
    earlyAccessDisinvite(value: MsgEarlyAccessDisinvite) {
      return {
        typeUrl: "/cardchain.cardchain.MsgEarlyAccessDisinvite",
        value: MsgEarlyAccessDisinvite.encode(value).finish()
      };
    },
    cardBan(value: MsgCardBan) {
      return {
        typeUrl: "/cardchain.cardchain.MsgCardBan",
        value: MsgCardBan.encode(value).finish()
      };
    },
    earlyAccessGrant(value: MsgEarlyAccessGrant) {
      return {
        typeUrl: "/cardchain.cardchain.MsgEarlyAccessGrant",
        value: MsgEarlyAccessGrant.encode(value).finish()
      };
    },
    setActivate(value: MsgSetActivate) {
      return {
        typeUrl: "/cardchain.cardchain.MsgSetActivate",
        value: MsgSetActivate.encode(value).finish()
      };
    },
    cardCopyrightClaim(value: MsgCardCopyrightClaim) {
      return {
        typeUrl: "/cardchain.cardchain.MsgCardCopyrightClaim",
        value: MsgCardCopyrightClaim.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/cardchain.cardchain.MsgUpdateParams",
        value
      };
    },
    userCreate(value: MsgUserCreate) {
      return {
        typeUrl: "/cardchain.cardchain.MsgUserCreate",
        value
      };
    },
    cardSchemeBuy(value: MsgCardSchemeBuy) {
      return {
        typeUrl: "/cardchain.cardchain.MsgCardSchemeBuy",
        value
      };
    },
    cardSaveContent(value: MsgCardSaveContent) {
      return {
        typeUrl: "/cardchain.cardchain.MsgCardSaveContent",
        value
      };
    },
    cardVote(value: MsgCardVote) {
      return {
        typeUrl: "/cardchain.cardchain.MsgCardVote",
        value
      };
    },
    cardTransfer(value: MsgCardTransfer) {
      return {
        typeUrl: "/cardchain.cardchain.MsgCardTransfer",
        value
      };
    },
    cardDonate(value: MsgCardDonate) {
      return {
        typeUrl: "/cardchain.cardchain.MsgCardDonate",
        value
      };
    },
    cardArtworkAdd(value: MsgCardArtworkAdd) {
      return {
        typeUrl: "/cardchain.cardchain.MsgCardArtworkAdd",
        value
      };
    },
    cardArtistChange(value: MsgCardArtistChange) {
      return {
        typeUrl: "/cardchain.cardchain.MsgCardArtistChange",
        value
      };
    },
    councilRegister(value: MsgCouncilRegister) {
      return {
        typeUrl: "/cardchain.cardchain.MsgCouncilRegister",
        value
      };
    },
    councilDeregister(value: MsgCouncilDeregister) {
      return {
        typeUrl: "/cardchain.cardchain.MsgCouncilDeregister",
        value
      };
    },
    matchReport(value: MsgMatchReport) {
      return {
        typeUrl: "/cardchain.cardchain.MsgMatchReport",
        value
      };
    },
    councilCreate(value: MsgCouncilCreate) {
      return {
        typeUrl: "/cardchain.cardchain.MsgCouncilCreate",
        value
      };
    },
    matchReporterAppoint(value: MsgMatchReporterAppoint) {
      return {
        typeUrl: "/cardchain.cardchain.MsgMatchReporterAppoint",
        value
      };
    },
    setCreate(value: MsgSetCreate) {
      return {
        typeUrl: "/cardchain.cardchain.MsgSetCreate",
        value
      };
    },
    setCardAdd(value: MsgSetCardAdd) {
      return {
        typeUrl: "/cardchain.cardchain.MsgSetCardAdd",
        value
      };
    },
    setCardRemove(value: MsgSetCardRemove) {
      return {
        typeUrl: "/cardchain.cardchain.MsgSetCardRemove",
        value
      };
    },
    setContributorAdd(value: MsgSetContributorAdd) {
      return {
        typeUrl: "/cardchain.cardchain.MsgSetContributorAdd",
        value
      };
    },
    setContributorRemove(value: MsgSetContributorRemove) {
      return {
        typeUrl: "/cardchain.cardchain.MsgSetContributorRemove",
        value
      };
    },
    setFinalize(value: MsgSetFinalize) {
      return {
        typeUrl: "/cardchain.cardchain.MsgSetFinalize",
        value
      };
    },
    setArtworkAdd(value: MsgSetArtworkAdd) {
      return {
        typeUrl: "/cardchain.cardchain.MsgSetArtworkAdd",
        value
      };
    },
    setStoryAdd(value: MsgSetStoryAdd) {
      return {
        typeUrl: "/cardchain.cardchain.MsgSetStoryAdd",
        value
      };
    },
    boosterPackBuy(value: MsgBoosterPackBuy) {
      return {
        typeUrl: "/cardchain.cardchain.MsgBoosterPackBuy",
        value
      };
    },
    sellOfferCreate(value: MsgSellOfferCreate) {
      return {
        typeUrl: "/cardchain.cardchain.MsgSellOfferCreate",
        value
      };
    },
    sellOfferBuy(value: MsgSellOfferBuy) {
      return {
        typeUrl: "/cardchain.cardchain.MsgSellOfferBuy",
        value
      };
    },
    sellOfferRemove(value: MsgSellOfferRemove) {
      return {
        typeUrl: "/cardchain.cardchain.MsgSellOfferRemove",
        value
      };
    },
    cardRaritySet(value: MsgCardRaritySet) {
      return {
        typeUrl: "/cardchain.cardchain.MsgCardRaritySet",
        value
      };
    },
    councilResponseCommit(value: MsgCouncilResponseCommit) {
      return {
        typeUrl: "/cardchain.cardchain.MsgCouncilResponseCommit",
        value
      };
    },
    councilResponseReveal(value: MsgCouncilResponseReveal) {
      return {
        typeUrl: "/cardchain.cardchain.MsgCouncilResponseReveal",
        value
      };
    },
    councilRestart(value: MsgCouncilRestart) {
      return {
        typeUrl: "/cardchain.cardchain.MsgCouncilRestart",
        value
      };
    },
    matchConfirm(value: MsgMatchConfirm) {
      return {
        typeUrl: "/cardchain.cardchain.MsgMatchConfirm",
        value
      };
    },
    profileCardSet(value: MsgProfileCardSet) {
      return {
        typeUrl: "/cardchain.cardchain.MsgProfileCardSet",
        value
      };
    },
    profileWebsiteSet(value: MsgProfileWebsiteSet) {
      return {
        typeUrl: "/cardchain.cardchain.MsgProfileWebsiteSet",
        value
      };
    },
    profileBioSet(value: MsgProfileBioSet) {
      return {
        typeUrl: "/cardchain.cardchain.MsgProfileBioSet",
        value
      };
    },
    boosterPackOpen(value: MsgBoosterPackOpen) {
      return {
        typeUrl: "/cardchain.cardchain.MsgBoosterPackOpen",
        value
      };
    },
    boosterPackTransfer(value: MsgBoosterPackTransfer) {
      return {
        typeUrl: "/cardchain.cardchain.MsgBoosterPackTransfer",
        value
      };
    },
    setStoryWriterSet(value: MsgSetStoryWriterSet) {
      return {
        typeUrl: "/cardchain.cardchain.MsgSetStoryWriterSet",
        value
      };
    },
    setArtistSet(value: MsgSetArtistSet) {
      return {
        typeUrl: "/cardchain.cardchain.MsgSetArtistSet",
        value
      };
    },
    cardVoteMulti(value: MsgCardVoteMulti) {
      return {
        typeUrl: "/cardchain.cardchain.MsgCardVoteMulti",
        value
      };
    },
    matchOpen(value: MsgMatchOpen) {
      return {
        typeUrl: "/cardchain.cardchain.MsgMatchOpen",
        value
      };
    },
    setNameSet(value: MsgSetNameSet) {
      return {
        typeUrl: "/cardchain.cardchain.MsgSetNameSet",
        value
      };
    },
    profileAliasSet(value: MsgProfileAliasSet) {
      return {
        typeUrl: "/cardchain.cardchain.MsgProfileAliasSet",
        value
      };
    },
    earlyAccessInvite(value: MsgEarlyAccessInvite) {
      return {
        typeUrl: "/cardchain.cardchain.MsgEarlyAccessInvite",
        value
      };
    },
    zealyConnect(value: MsgZealyConnect) {
      return {
        typeUrl: "/cardchain.cardchain.MsgZealyConnect",
        value
      };
    },
    encounterCreate(value: MsgEncounterCreate) {
      return {
        typeUrl: "/cardchain.cardchain.MsgEncounterCreate",
        value
      };
    },
    encounterDo(value: MsgEncounterDo) {
      return {
        typeUrl: "/cardchain.cardchain.MsgEncounterDo",
        value
      };
    },
    encounterClose(value: MsgEncounterClose) {
      return {
        typeUrl: "/cardchain.cardchain.MsgEncounterClose",
        value
      };
    },
    earlyAccessDisinvite(value: MsgEarlyAccessDisinvite) {
      return {
        typeUrl: "/cardchain.cardchain.MsgEarlyAccessDisinvite",
        value
      };
    },
    cardBan(value: MsgCardBan) {
      return {
        typeUrl: "/cardchain.cardchain.MsgCardBan",
        value
      };
    },
    earlyAccessGrant(value: MsgEarlyAccessGrant) {
      return {
        typeUrl: "/cardchain.cardchain.MsgEarlyAccessGrant",
        value
      };
    },
    setActivate(value: MsgSetActivate) {
      return {
        typeUrl: "/cardchain.cardchain.MsgSetActivate",
        value
      };
    },
    cardCopyrightClaim(value: MsgCardCopyrightClaim) {
      return {
        typeUrl: "/cardchain.cardchain.MsgCardCopyrightClaim",
        value
      };
    }
  },
  fromPartial: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/cardchain.cardchain.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    userCreate(value: MsgUserCreate) {
      return {
        typeUrl: "/cardchain.cardchain.MsgUserCreate",
        value: MsgUserCreate.fromPartial(value)
      };
    },
    cardSchemeBuy(value: MsgCardSchemeBuy) {
      return {
        typeUrl: "/cardchain.cardchain.MsgCardSchemeBuy",
        value: MsgCardSchemeBuy.fromPartial(value)
      };
    },
    cardSaveContent(value: MsgCardSaveContent) {
      return {
        typeUrl: "/cardchain.cardchain.MsgCardSaveContent",
        value: MsgCardSaveContent.fromPartial(value)
      };
    },
    cardVote(value: MsgCardVote) {
      return {
        typeUrl: "/cardchain.cardchain.MsgCardVote",
        value: MsgCardVote.fromPartial(value)
      };
    },
    cardTransfer(value: MsgCardTransfer) {
      return {
        typeUrl: "/cardchain.cardchain.MsgCardTransfer",
        value: MsgCardTransfer.fromPartial(value)
      };
    },
    cardDonate(value: MsgCardDonate) {
      return {
        typeUrl: "/cardchain.cardchain.MsgCardDonate",
        value: MsgCardDonate.fromPartial(value)
      };
    },
    cardArtworkAdd(value: MsgCardArtworkAdd) {
      return {
        typeUrl: "/cardchain.cardchain.MsgCardArtworkAdd",
        value: MsgCardArtworkAdd.fromPartial(value)
      };
    },
    cardArtistChange(value: MsgCardArtistChange) {
      return {
        typeUrl: "/cardchain.cardchain.MsgCardArtistChange",
        value: MsgCardArtistChange.fromPartial(value)
      };
    },
    councilRegister(value: MsgCouncilRegister) {
      return {
        typeUrl: "/cardchain.cardchain.MsgCouncilRegister",
        value: MsgCouncilRegister.fromPartial(value)
      };
    },
    councilDeregister(value: MsgCouncilDeregister) {
      return {
        typeUrl: "/cardchain.cardchain.MsgCouncilDeregister",
        value: MsgCouncilDeregister.fromPartial(value)
      };
    },
    matchReport(value: MsgMatchReport) {
      return {
        typeUrl: "/cardchain.cardchain.MsgMatchReport",
        value: MsgMatchReport.fromPartial(value)
      };
    },
    councilCreate(value: MsgCouncilCreate) {
      return {
        typeUrl: "/cardchain.cardchain.MsgCouncilCreate",
        value: MsgCouncilCreate.fromPartial(value)
      };
    },
    matchReporterAppoint(value: MsgMatchReporterAppoint) {
      return {
        typeUrl: "/cardchain.cardchain.MsgMatchReporterAppoint",
        value: MsgMatchReporterAppoint.fromPartial(value)
      };
    },
    setCreate(value: MsgSetCreate) {
      return {
        typeUrl: "/cardchain.cardchain.MsgSetCreate",
        value: MsgSetCreate.fromPartial(value)
      };
    },
    setCardAdd(value: MsgSetCardAdd) {
      return {
        typeUrl: "/cardchain.cardchain.MsgSetCardAdd",
        value: MsgSetCardAdd.fromPartial(value)
      };
    },
    setCardRemove(value: MsgSetCardRemove) {
      return {
        typeUrl: "/cardchain.cardchain.MsgSetCardRemove",
        value: MsgSetCardRemove.fromPartial(value)
      };
    },
    setContributorAdd(value: MsgSetContributorAdd) {
      return {
        typeUrl: "/cardchain.cardchain.MsgSetContributorAdd",
        value: MsgSetContributorAdd.fromPartial(value)
      };
    },
    setContributorRemove(value: MsgSetContributorRemove) {
      return {
        typeUrl: "/cardchain.cardchain.MsgSetContributorRemove",
        value: MsgSetContributorRemove.fromPartial(value)
      };
    },
    setFinalize(value: MsgSetFinalize) {
      return {
        typeUrl: "/cardchain.cardchain.MsgSetFinalize",
        value: MsgSetFinalize.fromPartial(value)
      };
    },
    setArtworkAdd(value: MsgSetArtworkAdd) {
      return {
        typeUrl: "/cardchain.cardchain.MsgSetArtworkAdd",
        value: MsgSetArtworkAdd.fromPartial(value)
      };
    },
    setStoryAdd(value: MsgSetStoryAdd) {
      return {
        typeUrl: "/cardchain.cardchain.MsgSetStoryAdd",
        value: MsgSetStoryAdd.fromPartial(value)
      };
    },
    boosterPackBuy(value: MsgBoosterPackBuy) {
      return {
        typeUrl: "/cardchain.cardchain.MsgBoosterPackBuy",
        value: MsgBoosterPackBuy.fromPartial(value)
      };
    },
    sellOfferCreate(value: MsgSellOfferCreate) {
      return {
        typeUrl: "/cardchain.cardchain.MsgSellOfferCreate",
        value: MsgSellOfferCreate.fromPartial(value)
      };
    },
    sellOfferBuy(value: MsgSellOfferBuy) {
      return {
        typeUrl: "/cardchain.cardchain.MsgSellOfferBuy",
        value: MsgSellOfferBuy.fromPartial(value)
      };
    },
    sellOfferRemove(value: MsgSellOfferRemove) {
      return {
        typeUrl: "/cardchain.cardchain.MsgSellOfferRemove",
        value: MsgSellOfferRemove.fromPartial(value)
      };
    },
    cardRaritySet(value: MsgCardRaritySet) {
      return {
        typeUrl: "/cardchain.cardchain.MsgCardRaritySet",
        value: MsgCardRaritySet.fromPartial(value)
      };
    },
    councilResponseCommit(value: MsgCouncilResponseCommit) {
      return {
        typeUrl: "/cardchain.cardchain.MsgCouncilResponseCommit",
        value: MsgCouncilResponseCommit.fromPartial(value)
      };
    },
    councilResponseReveal(value: MsgCouncilResponseReveal) {
      return {
        typeUrl: "/cardchain.cardchain.MsgCouncilResponseReveal",
        value: MsgCouncilResponseReveal.fromPartial(value)
      };
    },
    councilRestart(value: MsgCouncilRestart) {
      return {
        typeUrl: "/cardchain.cardchain.MsgCouncilRestart",
        value: MsgCouncilRestart.fromPartial(value)
      };
    },
    matchConfirm(value: MsgMatchConfirm) {
      return {
        typeUrl: "/cardchain.cardchain.MsgMatchConfirm",
        value: MsgMatchConfirm.fromPartial(value)
      };
    },
    profileCardSet(value: MsgProfileCardSet) {
      return {
        typeUrl: "/cardchain.cardchain.MsgProfileCardSet",
        value: MsgProfileCardSet.fromPartial(value)
      };
    },
    profileWebsiteSet(value: MsgProfileWebsiteSet) {
      return {
        typeUrl: "/cardchain.cardchain.MsgProfileWebsiteSet",
        value: MsgProfileWebsiteSet.fromPartial(value)
      };
    },
    profileBioSet(value: MsgProfileBioSet) {
      return {
        typeUrl: "/cardchain.cardchain.MsgProfileBioSet",
        value: MsgProfileBioSet.fromPartial(value)
      };
    },
    boosterPackOpen(value: MsgBoosterPackOpen) {
      return {
        typeUrl: "/cardchain.cardchain.MsgBoosterPackOpen",
        value: MsgBoosterPackOpen.fromPartial(value)
      };
    },
    boosterPackTransfer(value: MsgBoosterPackTransfer) {
      return {
        typeUrl: "/cardchain.cardchain.MsgBoosterPackTransfer",
        value: MsgBoosterPackTransfer.fromPartial(value)
      };
    },
    setStoryWriterSet(value: MsgSetStoryWriterSet) {
      return {
        typeUrl: "/cardchain.cardchain.MsgSetStoryWriterSet",
        value: MsgSetStoryWriterSet.fromPartial(value)
      };
    },
    setArtistSet(value: MsgSetArtistSet) {
      return {
        typeUrl: "/cardchain.cardchain.MsgSetArtistSet",
        value: MsgSetArtistSet.fromPartial(value)
      };
    },
    cardVoteMulti(value: MsgCardVoteMulti) {
      return {
        typeUrl: "/cardchain.cardchain.MsgCardVoteMulti",
        value: MsgCardVoteMulti.fromPartial(value)
      };
    },
    matchOpen(value: MsgMatchOpen) {
      return {
        typeUrl: "/cardchain.cardchain.MsgMatchOpen",
        value: MsgMatchOpen.fromPartial(value)
      };
    },
    setNameSet(value: MsgSetNameSet) {
      return {
        typeUrl: "/cardchain.cardchain.MsgSetNameSet",
        value: MsgSetNameSet.fromPartial(value)
      };
    },
    profileAliasSet(value: MsgProfileAliasSet) {
      return {
        typeUrl: "/cardchain.cardchain.MsgProfileAliasSet",
        value: MsgProfileAliasSet.fromPartial(value)
      };
    },
    earlyAccessInvite(value: MsgEarlyAccessInvite) {
      return {
        typeUrl: "/cardchain.cardchain.MsgEarlyAccessInvite",
        value: MsgEarlyAccessInvite.fromPartial(value)
      };
    },
    zealyConnect(value: MsgZealyConnect) {
      return {
        typeUrl: "/cardchain.cardchain.MsgZealyConnect",
        value: MsgZealyConnect.fromPartial(value)
      };
    },
    encounterCreate(value: MsgEncounterCreate) {
      return {
        typeUrl: "/cardchain.cardchain.MsgEncounterCreate",
        value: MsgEncounterCreate.fromPartial(value)
      };
    },
    encounterDo(value: MsgEncounterDo) {
      return {
        typeUrl: "/cardchain.cardchain.MsgEncounterDo",
        value: MsgEncounterDo.fromPartial(value)
      };
    },
    encounterClose(value: MsgEncounterClose) {
      return {
        typeUrl: "/cardchain.cardchain.MsgEncounterClose",
        value: MsgEncounterClose.fromPartial(value)
      };
    },
    earlyAccessDisinvite(value: MsgEarlyAccessDisinvite) {
      return {
        typeUrl: "/cardchain.cardchain.MsgEarlyAccessDisinvite",
        value: MsgEarlyAccessDisinvite.fromPartial(value)
      };
    },
    cardBan(value: MsgCardBan) {
      return {
        typeUrl: "/cardchain.cardchain.MsgCardBan",
        value: MsgCardBan.fromPartial(value)
      };
    },
    earlyAccessGrant(value: MsgEarlyAccessGrant) {
      return {
        typeUrl: "/cardchain.cardchain.MsgEarlyAccessGrant",
        value: MsgEarlyAccessGrant.fromPartial(value)
      };
    },
    setActivate(value: MsgSetActivate) {
      return {
        typeUrl: "/cardchain.cardchain.MsgSetActivate",
        value: MsgSetActivate.fromPartial(value)
      };
    },
    cardCopyrightClaim(value: MsgCardCopyrightClaim) {
      return {
        typeUrl: "/cardchain.cardchain.MsgCardCopyrightClaim",
        value: MsgCardCopyrightClaim.fromPartial(value)
      };
    }
  }
};