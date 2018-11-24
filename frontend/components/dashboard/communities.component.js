import React from 'react';
import styled from 'styled-components';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import { scheme } from '../../lib/theme';

import Community from './community.component';

const Communities = styled.div`
  grid-area: communities;
  overflow-y: scroll;
  border-right: 1px solid ${scheme.gray[4]};
`;

export const ALL_COMMUNITIES_QUERY = gql`
  query ALL_COMMUNITIES_QUERY {
    communities {
      id
      name
      description
      slug
      picture
      likes
      threads_count
    }
  }
`;

export default props => {
  return (
    <Communities>
      <Query query={ALL_COMMUNITIES_QUERY}>
        {({ loading, error, data: { communities } }) => {
          if (error) return <div>Error loading posts</div>;
          if (loading) return <div>loading...</div>;
          return communities.map(community => <Community key={community.id} community={community} />);
        }}
      </Query>
    </Communities>
  );
};
