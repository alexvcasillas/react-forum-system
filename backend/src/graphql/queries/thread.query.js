import { GraphQLNonNull, GraphQLString, GraphQLError } from 'graphql';
import { Response } from '../utils/responses.utils';
import { ThreadType } from '../types/thread.type';

export const ThreadQuery = () => ({
  type: ThreadType,
  args: {
    id: { type: GraphQLNonNull(GraphQLString) },
  },
  resolve: async (root, { id }, { headers, loaders, token, security, db }) => {
    // return security.ensureAuthenticated(token).then(async authData => {
    return await loaders.thread.load(id);
    // }, security.onRejectedAuthentication);
  },
});
