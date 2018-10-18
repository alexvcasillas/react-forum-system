import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';

const endpoint =
  window.location.host === 'app.reactiveacademy.com'
    ? 'http://localhost:8080/graphql'
    : 'http://localhost:8080/graphql';

const GraphQLService = {
  client: new ApolloClient({
    uri: endpoint,
    fetchOptions: {
      credentials: 'include',
    },
    request: async operation => {
      let authData = localStorage.getItem('@rfs:auth');
      authData = JSON.parse(authData);
      if (authData && authData.token) {
        operation.setContext({
          headers: {
            Authorization: `Bearer ${authData.token}`,
          },
        });
      }
    },
    // Production only :)
    // onError: ({ response, operation }) => {
    //   if (operation.operationName === 'IgnoreErrorsQuery') {
    //     response.errors = null;
    //   }
    // },
  }),
  graph: gql,
  graphQLErrorHandler: graphQLError => {
    const { message } = graphQLError;
    const extractedError = message.substring(message.lastIndexOf('{'), message.lastIndexOf('}') + 1);
    return JSON.parse(extractedError);
  },
};

export { GraphQLService };
