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

export default props => {
  return (
    <Query query={AUTH_QUERY}>
      {payload => {
        return props.children(payload);
      }}
    </Query>
  );
};
