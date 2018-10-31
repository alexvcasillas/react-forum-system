import React from 'react';
import styled from 'styled-components';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { List } from 'react-content-loader';

import Community from '../community/community.component';

const Communities = styled.section`
  grid-area: communities;
  border-right: 1px solid ${({ theme }) => theme.scheme.gray[4]};
  display: flex;
  flex-direction: column;
`;

const Loading = styled.div`
  margin-top: 40px;
  padding-left: 40px;
`;

const ALL_COMMUNITIES_QUERY = gql`
  query ALL_COMMUNITIES_QUERY {
    communities {
      id
      name
      description
      picture
      likes
      threads_count
    }
  }
`;

export default props => (
  <>
    <Communities>
      <Query query={ALL_COMMUNITIES_QUERY}>
        {({ data: { communities }, error, loading }) => {
          if (loading)
            return (
              <Loading>
                <List secondaryColor="#ced4da" primaryColor="#e9ecef" />
              </Loading>
            );
          if (error) return <p>Error: {error.message}</p>;
          return communities.map(community => <Community key={community.id} {...community} />);
        }}
      </Query>
    </Communities>
  </>
);
