import React from 'react';
import styled from 'styled-components';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import Community from '../community/community.component';

const Communities = styled.section`
  grid-area: communities;
  border-right: 1px solid ${({ theme }) => theme.scheme.gray[4]};
  display: flex;
  flex-direction: column;
`;

const ALL_COMMUNITIES_QUERY = gql`
  query ALL_COMMUNITIES_QUERY {
    communities {
      id
      title
      description
      picture
    }
  }
`;

export default () => (
  <>
    <Communities>
      <Query query={ALL_COMMUNITIES_QUERY}>
        {({ data: { communities }, error, loading }) => {
          if (loading) return <p>Loading communities...</p>;
          if (error) return <p>Error: {error.message}</p>;
          return communities.map(community => <Community key={community.id} {...community} />);
        }}
      </Query>
    </Communities>
  </>
);
