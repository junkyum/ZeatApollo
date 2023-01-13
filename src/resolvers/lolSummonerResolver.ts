import { LolSummonerResolvers } from "../generated/graphql";

export const lolSummonerResolver: LolSummonerResolvers = {
  challengeInfo: async ({ puuid }, _, { dataSources }) => {
    const challengeInfo = await dataSources.lolAPI.getChallengeInfo(puuid);
    return challengeInfo;
  },

  rankInfo: async ({ id }, _, { dataSources }) => {
    const rankInfo = await dataSources.lolAPI.getRankInfo(id);
    return rankInfo;
  },

  recentMatch: async ({ puuid }, _, { dataSources }) => {
    const matchList = await dataSources.lolAPI.getMatchList(puuid, 10);
    return matchList;
  },
};
