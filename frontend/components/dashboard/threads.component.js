import React from 'react';
import styled from 'styled-components';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import { scheme } from '../../lib/theme';

import Auth from '../shared/auth/auth.component';
import Thread from './thread-preview.component';
import NewThread from './new-thread.component';
import PenIcon from '../shared/svg/pen.icon';

import ThreadPlaceholder from './thread-placeholder.component';

const Threads = styled.div`
  grid-area: threads;
  overflow: scroll;
  border-right: 1px solid ${scheme.gray[4]};
`;

const Header = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  height: 50px;
  background-color: ${scheme.white};
  display: flex;
  align-items: center;
  padding: 0 20px;
  box-shadow: 0px 5px 5px 0 rgba(0, 0, 0, 0.08);
  z-index: 10;
`;

const CommunityName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-transform: uppercase;
  font-size: 1.3rem;
  color: ${scheme.gray[6]};

  span {
    font-weight: 600;
    margin-right: 5px;
    color: ${scheme.gray[8]};
  }
`;

const THREADS_BY_COMMUNITY_QUERY = gql`
  query THREADS_BY_COMMUNITY_QUERY($community: String!) {
    threadsByCommunity(community: $community) {
      id
      title
      content
      createdAt
      community {
        id
      }
      author {
        username
        name
        lastName
        avatar
      }
    }
  }
`;

const COMMUNITY_NAME_QUERY = gql`
  query COMMUNITY_NAME_QUERY($community: String!) {
    community(id: $community) {
      name
    }
  }
`;

export default props => {
  return (
    <Threads>
      <Header>
        <Query query={COMMUNITY_NAME_QUERY} variables={{ community: props.community }}>
          {({ loading, error, data: { community } }) => {
            if (error) return <div>Error loading community name</div>;
            if (loading) return <div>Loading community name</div>;
            return (
              <CommunityName>
                <span>{community.name}</span> community threads
              </CommunityName>
            );
          }}
        </Query>
      </Header>
      <Auth>
        {({ data: { auth } }) => {
          if (auth) return <NewThread community={props.community} />;
          return null;
        }}
      </Auth>
      <Query query={THREADS_BY_COMMUNITY_QUERY} variables={{ community: props.community }}>
        {({ loading, error, data: { threadsByCommunity } }) => {
          if (error) return <div>Error loading posts</div>;
          if (loading) return <ThreadPlaceholder />;
          return threadsByCommunity.map(thread => <Thread key={thread.id} thread={thread} />);
        }}
      </Query>
    </Threads>
  );
};
