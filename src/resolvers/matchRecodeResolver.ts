import { MatchRecodeResolvers } from "../generated/graphql";

export const matchRecodeResolver: MatchRecodeResolvers = {
  match: async ({ id }, _, { dataSources }) => {
    return await dataSources.lolAPI.getMatch(id);
  },
};
