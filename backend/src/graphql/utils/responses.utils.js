import { GraphQLError } from 'graphql';

/* Returns Stringified response object for the GraphQL formatError function */
export const Response = ({ status, message }) => JSON.stringify({ status, message });

/* Missing Parameters Response */
export const MISSING_PARAMETERS = new GraphQLError(
  Response({
    status: 400,
    message: `Missing parameters`,
  }),
);

/* Unexpected Error Response */
export const UNEXPECTED_ERROR = new GraphQLError(
  Response({ status: 500, message: `An unexpected error ocurred, please try again later.` }),
);

/* Not Found Response */
export const NOT_FOUND = new GraphQLError(
  Response({ status: 404, message: `The resource you're looking for doesn't exists.` }),
);
