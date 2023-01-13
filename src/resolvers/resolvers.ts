import { Resolvers } from "../generated/graphql";
import { lolSummonerResolver } from "./lolSummonerResolver";
import { matchRecodeResolver } from "./matchRecodeResolver";
import { memberResolvers } from "./memberResolver";
import { mutationResolver } from "./mutationResolver";
import { queryResolvers } from "./queryResolver";

export const resolvers: Resolvers = {
  Query: queryResolvers,
  Mutation: mutationResolver,
  Member: memberResolvers,
  LolSummoner: lolSummonerResolver,
  MatchRecode: matchRecodeResolver,
};
