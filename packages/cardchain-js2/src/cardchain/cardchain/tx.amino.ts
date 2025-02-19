//@ts-nocheck
import { MsgUpdateParams, MsgUserCreate, MsgCardSchemeBuy, MsgCardSaveContent, MsgCardVote, MsgCardTransfer, MsgCardDonate, MsgCardArtworkAdd, MsgCardArtistChange, MsgCouncilRegister, MsgCouncilDeregister, MsgMatchReport, MsgCouncilCreate, MsgMatchReporterAppoint, MsgSetCreate, MsgSetCardAdd, MsgSetCardRemove, MsgSetContributorAdd, MsgSetContributorRemove, MsgSetFinalize, MsgSetArtworkAdd, MsgSetStoryAdd, MsgBoosterPackBuy, MsgSellOfferCreate, MsgSellOfferBuy, MsgSellOfferRemove, MsgCardRaritySet, MsgCouncilResponseCommit, MsgCouncilResponseReveal, MsgCouncilRestart, MsgMatchConfirm, MsgProfileCardSet, MsgProfileWebsiteSet, MsgProfileBioSet, MsgBoosterPackOpen, MsgBoosterPackTransfer, MsgSetStoryWriterSet, MsgSetArtistSet, MsgCardVoteMulti, MsgMatchOpen, MsgSetNameSet, MsgProfileAliasSet, MsgEarlyAccessInvite, MsgZealyConnect, MsgEncounterCreate, MsgEncounterDo, MsgEncounterClose, MsgEarlyAccessDisinvite, MsgCardBan, MsgEarlyAccessGrant, MsgSetActivate, MsgCardCopyrightClaim } from "./tx";
export const AminoConverter = {
  "/cardchain.cardchain.MsgUpdateParams": {
    aminoType: "cardchain/x/cardchain/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  },
  "/cardchain.cardchain.MsgUserCreate": {
    aminoType: "/cardchain.cardchain.MsgUserCreate",
    toAmino: MsgUserCreate.toAmino,
    fromAmino: MsgUserCreate.fromAmino
  },
  "/cardchain.cardchain.MsgCardSchemeBuy": {
    aminoType: "/cardchain.cardchain.MsgCardSchemeBuy",
    toAmino: MsgCardSchemeBuy.toAmino,
    fromAmino: MsgCardSchemeBuy.fromAmino
  },
  "/cardchain.cardchain.MsgCardSaveContent": {
    aminoType: "/cardchain.cardchain.MsgCardSaveContent",
    toAmino: MsgCardSaveContent.toAmino,
    fromAmino: MsgCardSaveContent.fromAmino
  },
  "/cardchain.cardchain.MsgCardVote": {
    aminoType: "/cardchain.cardchain.MsgCardVote",
    toAmino: MsgCardVote.toAmino,
    fromAmino: MsgCardVote.fromAmino
  },
  "/cardchain.cardchain.MsgCardTransfer": {
    aminoType: "/cardchain.cardchain.MsgCardTransfer",
    toAmino: MsgCardTransfer.toAmino,
    fromAmino: MsgCardTransfer.fromAmino
  },
  "/cardchain.cardchain.MsgCardDonate": {
    aminoType: "/cardchain.cardchain.MsgCardDonate",
    toAmino: MsgCardDonate.toAmino,
    fromAmino: MsgCardDonate.fromAmino
  },
  "/cardchain.cardchain.MsgCardArtworkAdd": {
    aminoType: "/cardchain.cardchain.MsgCardArtworkAdd",
    toAmino: MsgCardArtworkAdd.toAmino,
    fromAmino: MsgCardArtworkAdd.fromAmino
  },
  "/cardchain.cardchain.MsgCardArtistChange": {
    aminoType: "/cardchain.cardchain.MsgCardArtistChange",
    toAmino: MsgCardArtistChange.toAmino,
    fromAmino: MsgCardArtistChange.fromAmino
  },
  "/cardchain.cardchain.MsgCouncilRegister": {
    aminoType: "/cardchain.cardchain.MsgCouncilRegister",
    toAmino: MsgCouncilRegister.toAmino,
    fromAmino: MsgCouncilRegister.fromAmino
  },
  "/cardchain.cardchain.MsgCouncilDeregister": {
    aminoType: "/cardchain.cardchain.MsgCouncilDeregister",
    toAmino: MsgCouncilDeregister.toAmino,
    fromAmino: MsgCouncilDeregister.fromAmino
  },
  "/cardchain.cardchain.MsgMatchReport": {
    aminoType: "/cardchain.cardchain.MsgMatchReport",
    toAmino: MsgMatchReport.toAmino,
    fromAmino: MsgMatchReport.fromAmino
  },
  "/cardchain.cardchain.MsgCouncilCreate": {
    aminoType: "/cardchain.cardchain.MsgCouncilCreate",
    toAmino: MsgCouncilCreate.toAmino,
    fromAmino: MsgCouncilCreate.fromAmino
  },
  "/cardchain.cardchain.MsgMatchReporterAppoint": {
    aminoType: "/cardchain.cardchain.MsgMatchReporterAppoint",
    toAmino: MsgMatchReporterAppoint.toAmino,
    fromAmino: MsgMatchReporterAppoint.fromAmino
  },
  "/cardchain.cardchain.MsgSetCreate": {
    aminoType: "/cardchain.cardchain.MsgSetCreate",
    toAmino: MsgSetCreate.toAmino,
    fromAmino: MsgSetCreate.fromAmino
  },
  "/cardchain.cardchain.MsgSetCardAdd": {
    aminoType: "/cardchain.cardchain.MsgSetCardAdd",
    toAmino: MsgSetCardAdd.toAmino,
    fromAmino: MsgSetCardAdd.fromAmino
  },
  "/cardchain.cardchain.MsgSetCardRemove": {
    aminoType: "/cardchain.cardchain.MsgSetCardRemove",
    toAmino: MsgSetCardRemove.toAmino,
    fromAmino: MsgSetCardRemove.fromAmino
  },
  "/cardchain.cardchain.MsgSetContributorAdd": {
    aminoType: "/cardchain.cardchain.MsgSetContributorAdd",
    toAmino: MsgSetContributorAdd.toAmino,
    fromAmino: MsgSetContributorAdd.fromAmino
  },
  "/cardchain.cardchain.MsgSetContributorRemove": {
    aminoType: "/cardchain.cardchain.MsgSetContributorRemove",
    toAmino: MsgSetContributorRemove.toAmino,
    fromAmino: MsgSetContributorRemove.fromAmino
  },
  "/cardchain.cardchain.MsgSetFinalize": {
    aminoType: "/cardchain.cardchain.MsgSetFinalize",
    toAmino: MsgSetFinalize.toAmino,
    fromAmino: MsgSetFinalize.fromAmino
  },
  "/cardchain.cardchain.MsgSetArtworkAdd": {
    aminoType: "/cardchain.cardchain.MsgSetArtworkAdd",
    toAmino: MsgSetArtworkAdd.toAmino,
    fromAmino: MsgSetArtworkAdd.fromAmino
  },
  "/cardchain.cardchain.MsgSetStoryAdd": {
    aminoType: "/cardchain.cardchain.MsgSetStoryAdd",
    toAmino: MsgSetStoryAdd.toAmino,
    fromAmino: MsgSetStoryAdd.fromAmino
  },
  "/cardchain.cardchain.MsgBoosterPackBuy": {
    aminoType: "/cardchain.cardchain.MsgBoosterPackBuy",
    toAmino: MsgBoosterPackBuy.toAmino,
    fromAmino: MsgBoosterPackBuy.fromAmino
  },
  "/cardchain.cardchain.MsgSellOfferCreate": {
    aminoType: "/cardchain.cardchain.MsgSellOfferCreate",
    toAmino: MsgSellOfferCreate.toAmino,
    fromAmino: MsgSellOfferCreate.fromAmino
  },
  "/cardchain.cardchain.MsgSellOfferBuy": {
    aminoType: "/cardchain.cardchain.MsgSellOfferBuy",
    toAmino: MsgSellOfferBuy.toAmino,
    fromAmino: MsgSellOfferBuy.fromAmino
  },
  "/cardchain.cardchain.MsgSellOfferRemove": {
    aminoType: "/cardchain.cardchain.MsgSellOfferRemove",
    toAmino: MsgSellOfferRemove.toAmino,
    fromAmino: MsgSellOfferRemove.fromAmino
  },
  "/cardchain.cardchain.MsgCardRaritySet": {
    aminoType: "/cardchain.cardchain.MsgCardRaritySet",
    toAmino: MsgCardRaritySet.toAmino,
    fromAmino: MsgCardRaritySet.fromAmino
  },
  "/cardchain.cardchain.MsgCouncilResponseCommit": {
    aminoType: "/cardchain.cardchain.MsgCouncilResponseCommit",
    toAmino: MsgCouncilResponseCommit.toAmino,
    fromAmino: MsgCouncilResponseCommit.fromAmino
  },
  "/cardchain.cardchain.MsgCouncilResponseReveal": {
    aminoType: "/cardchain.cardchain.MsgCouncilResponseReveal",
    toAmino: MsgCouncilResponseReveal.toAmino,
    fromAmino: MsgCouncilResponseReveal.fromAmino
  },
  "/cardchain.cardchain.MsgCouncilRestart": {
    aminoType: "/cardchain.cardchain.MsgCouncilRestart",
    toAmino: MsgCouncilRestart.toAmino,
    fromAmino: MsgCouncilRestart.fromAmino
  },
  "/cardchain.cardchain.MsgMatchConfirm": {
    aminoType: "/cardchain.cardchain.MsgMatchConfirm",
    toAmino: MsgMatchConfirm.toAmino,
    fromAmino: MsgMatchConfirm.fromAmino
  },
  "/cardchain.cardchain.MsgProfileCardSet": {
    aminoType: "/cardchain.cardchain.MsgProfileCardSet",
    toAmino: MsgProfileCardSet.toAmino,
    fromAmino: MsgProfileCardSet.fromAmino
  },
  "/cardchain.cardchain.MsgProfileWebsiteSet": {
    aminoType: "/cardchain.cardchain.MsgProfileWebsiteSet",
    toAmino: MsgProfileWebsiteSet.toAmino,
    fromAmino: MsgProfileWebsiteSet.fromAmino
  },
  "/cardchain.cardchain.MsgProfileBioSet": {
    aminoType: "/cardchain.cardchain.MsgProfileBioSet",
    toAmino: MsgProfileBioSet.toAmino,
    fromAmino: MsgProfileBioSet.fromAmino
  },
  "/cardchain.cardchain.MsgBoosterPackOpen": {
    aminoType: "/cardchain.cardchain.MsgBoosterPackOpen",
    toAmino: MsgBoosterPackOpen.toAmino,
    fromAmino: MsgBoosterPackOpen.fromAmino
  },
  "/cardchain.cardchain.MsgBoosterPackTransfer": {
    aminoType: "/cardchain.cardchain.MsgBoosterPackTransfer",
    toAmino: MsgBoosterPackTransfer.toAmino,
    fromAmino: MsgBoosterPackTransfer.fromAmino
  },
  "/cardchain.cardchain.MsgSetStoryWriterSet": {
    aminoType: "/cardchain.cardchain.MsgSetStoryWriterSet",
    toAmino: MsgSetStoryWriterSet.toAmino,
    fromAmino: MsgSetStoryWriterSet.fromAmino
  },
  "/cardchain.cardchain.MsgSetArtistSet": {
    aminoType: "/cardchain.cardchain.MsgSetArtistSet",
    toAmino: MsgSetArtistSet.toAmino,
    fromAmino: MsgSetArtistSet.fromAmino
  },
  "/cardchain.cardchain.MsgCardVoteMulti": {
    aminoType: "/cardchain.cardchain.MsgCardVoteMulti",
    toAmino: MsgCardVoteMulti.toAmino,
    fromAmino: MsgCardVoteMulti.fromAmino
  },
  "/cardchain.cardchain.MsgMatchOpen": {
    aminoType: "/cardchain.cardchain.MsgMatchOpen",
    toAmino: MsgMatchOpen.toAmino,
    fromAmino: MsgMatchOpen.fromAmino
  },
  "/cardchain.cardchain.MsgSetNameSet": {
    aminoType: "/cardchain.cardchain.MsgSetNameSet",
    toAmino: MsgSetNameSet.toAmino,
    fromAmino: MsgSetNameSet.fromAmino
  },
  "/cardchain.cardchain.MsgProfileAliasSet": {
    aminoType: "/cardchain.cardchain.MsgProfileAliasSet",
    toAmino: MsgProfileAliasSet.toAmino,
    fromAmino: MsgProfileAliasSet.fromAmino
  },
  "/cardchain.cardchain.MsgEarlyAccessInvite": {
    aminoType: "/cardchain.cardchain.MsgEarlyAccessInvite",
    toAmino: MsgEarlyAccessInvite.toAmino,
    fromAmino: MsgEarlyAccessInvite.fromAmino
  },
  "/cardchain.cardchain.MsgZealyConnect": {
    aminoType: "/cardchain.cardchain.MsgZealyConnect",
    toAmino: MsgZealyConnect.toAmino,
    fromAmino: MsgZealyConnect.fromAmino
  },
  "/cardchain.cardchain.MsgEncounterCreate": {
    aminoType: "/cardchain.cardchain.MsgEncounterCreate",
    toAmino: MsgEncounterCreate.toAmino,
    fromAmino: MsgEncounterCreate.fromAmino
  },
  "/cardchain.cardchain.MsgEncounterDo": {
    aminoType: "/cardchain.cardchain.MsgEncounterDo",
    toAmino: MsgEncounterDo.toAmino,
    fromAmino: MsgEncounterDo.fromAmino
  },
  "/cardchain.cardchain.MsgEncounterClose": {
    aminoType: "/cardchain.cardchain.MsgEncounterClose",
    toAmino: MsgEncounterClose.toAmino,
    fromAmino: MsgEncounterClose.fromAmino
  },
  "/cardchain.cardchain.MsgEarlyAccessDisinvite": {
    aminoType: "/cardchain.cardchain.MsgEarlyAccessDisinvite",
    toAmino: MsgEarlyAccessDisinvite.toAmino,
    fromAmino: MsgEarlyAccessDisinvite.fromAmino
  },
  "/cardchain.cardchain.MsgCardBan": {
    aminoType: "/cardchain.cardchain.MsgCardBan",
    toAmino: MsgCardBan.toAmino,
    fromAmino: MsgCardBan.fromAmino
  },
  "/cardchain.cardchain.MsgEarlyAccessGrant": {
    aminoType: "/cardchain.cardchain.MsgEarlyAccessGrant",
    toAmino: MsgEarlyAccessGrant.toAmino,
    fromAmino: MsgEarlyAccessGrant.fromAmino
  },
  "/cardchain.cardchain.MsgSetActivate": {
    aminoType: "/cardchain.cardchain.MsgSetActivate",
    toAmino: MsgSetActivate.toAmino,
    fromAmino: MsgSetActivate.fromAmino
  },
  "/cardchain.cardchain.MsgCardCopyrightClaim": {
    aminoType: "/cardchain.cardchain.MsgCardCopyrightClaim",
    toAmino: MsgCardCopyrightClaim.toAmino,
    fromAmino: MsgCardCopyrightClaim.fromAmino
  }
};