import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const AUTH_QUERY = gql`
  query AUTH {
    auth {
      id
      email
      username
      avatar
      role
      accountDisabled
    }
  }
`;

export default props => (
  <Query query={AUTH_QUERY}>
    {({ data: { auth }, error, loading }) => {
      if (loading || error) return null;
      return props.children(auth);
    }}
  </Query>
);
