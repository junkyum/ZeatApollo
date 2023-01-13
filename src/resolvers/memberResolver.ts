import { MemberResolvers } from "../generated/graphql";

export const memberResolvers: MemberResolvers = {
  clan: async ({ id }, _, { dataSources }) => {
    const clan = await dataSources.memberAPI.getUserClan(id);
    return clan;
  },
  gameProfile: async ({ id }, _, { dataSources }) => {
    const profiles = await dataSources.memberAPI.getGameProfile(id);
    return profiles;
  },
};
