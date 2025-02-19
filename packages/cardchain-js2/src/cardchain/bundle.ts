//@ts-nocheck
import * as _1 from "./cardchain/card_content";
import * as _2 from "./cardchain/card_with_image";
import * as _3 from "./cardchain/card";
import * as _4 from "./cardchain/council";
import * as _5 from "./cardchain/encounter_with_image";
import * as _6 from "./cardchain/encounter";
import * as _7 from "./cardchain/genesis";
import * as _8 from "./cardchain/image";
import * as _9 from "./cardchain/match";
import * as _10 from "./cardchain/params";
import * as _11 from "./cardchain/query";
import * as _12 from "./cardchain/running_average";
import * as _13 from "./cardchain/sell_offer";
import * as _14 from "./cardchain/server";
import * as _15 from "./cardchain/set_with_artwork";
import * as _16 from "./cardchain/set";
import * as _17 from "./cardchain/tx";
import * as _18 from "./cardchain/user";
import * as _19 from "./cardchain/voting_results";
import * as _20 from "./cardchain/voting";
import * as _21 from "./cardchain/zealy";
import * as _22 from "./featureflag/flag";
import * as _23 from "./featureflag/genesis";
import * as _24 from "./featureflag/params";
import * as _25 from "./featureflag/query";
import * as _26 from "./featureflag/tx";
import * as _32 from "./cardchain/tx.amino";
import * as _33 from "./featureflag/tx.amino";
import * as _34 from "./cardchain/tx.registry";
import * as _35 from "./featureflag/tx.registry";
import * as _36 from "./cardchain/query.rpc.Query";
import * as _37 from "./featureflag/query.rpc.Query";
import * as _38 from "./cardchain/tx.rpc.msg";
import * as _39 from "./featureflag/tx.rpc.msg";
import * as _40 from "./rpc.query";
import * as _41 from "./rpc.tx";
export namespace cardchain {
  export const cardchain = {
    ..._1,
    ..._2,
    ..._3,
    ..._4,
    ..._5,
    ..._6,
    ..._7,
    ..._8,
    ..._9,
    ..._10,
    ..._11,
    ..._12,
    ..._13,
    ..._14,
    ..._15,
    ..._16,
    ..._17,
    ..._18,
    ..._19,
    ..._20,
    ..._21,
    ..._32,
    ..._34,
    ..._36,
    ..._38
  };
  export const featureflag = {
    ..._22,
    ..._23,
    ..._24,
    ..._25,
    ..._26,
    ..._33,
    ..._35,
    ..._37,
    ..._39
  };
  export const ClientFactory = {
    ..._40,
    ..._41
  };
}