import { GraphQLNonNull, GraphQLString, GraphQLError } from 'graphql';
import { UserType } from '../types/user.type';
import { Response } from '../utils/responses.utils';

export const AuthenticateQuery = (security, db) => ({
  type: UserType,
  args: {
    email: { type: GraphQLNonNull(GraphQLString) },
    password: { type: GraphQLNonNull(GraphQLString) },
  },
  resolve: async (root, { email, password }, { headers, loaders }) => {
    if (email === '' || password === '') return MISSING_PARAMETERS;
    const user = await db.user.findOne({ email });
    if (!user) return NOT_FOUND;
    const equalPasswords = await user.comparePassword(password);
    if (!equalPasswords) return new GraphQLError(Response({ status: 400, message: 'Bad Request' }));
    return user.toObject();
  },
});
