import { QueryResolvers } from "../generated/graphql";

export const queryResolvers: QueryResolvers = {
  allMember: async (_, __, { dataSources }) => {
    const members = await dataSources.memberAPI.allMember();
    return members;
  },

  getMember: async (_, { id }, { dataSources }) => {
    const member = await dataSources.memberAPI.getMember(id);
    if (member == null) {
      return null;
    }
    return member;
  },

  getSummoner: async (_, { name }, { dataSources }) => {
    const summoner = await dataSources.lolAPI.getSummoner(name);
    return summoner;
  },
};
