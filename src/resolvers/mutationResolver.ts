import { MutationResolvers } from "../generated/graphql";

export const mutationResolver: MutationResolvers = {
  updateLogin: async (_, { id }, { dataSources }) => {
    return  dataSources.memberAPI.updateLogin(id);
  },
};
