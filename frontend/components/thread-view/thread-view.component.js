import React from 'react';
import styled from 'styled-components';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { List } from 'react-content-loader';

import ThreadDetail from '../thread-detail/thread-detail.component';

const ThreadView = styled.div`
  grid-area: thread;
  max-height: 100%;
  overflow-y: auto;
  position: relative;
`;

const Loading = styled.div`
  width: 400px;
  margin-top: 40px;
  padding-left: 40px;
`;

const VIEW_THREAD_QUERY = gql`
  query VIEW_THREAD_QUERY($thread: String!) {
    thread(id: $thread) {
      id
      title
      content
      createdAt
      updatedAt
      author {
        name
        lastName
        username
        avatar
      }
    }
  }
`;

export default props => {
  return (
    <ThreadView>
      <Query query={VIEW_THREAD_QUERY} variables={{ thread: props.thread }}>
        {({ data: { thread }, error, loading }) => {
          if (loading)
            return (
              <Loading>
                <List secondaryColor="#ced4da" primaryColor="#e9ecef" />
              </Loading>
            );
          if (error) return <p>Oops... something when wrong... {error.message}</p>;
          return <ThreadDetail thread={thread} />;
        }}
      </Query>
    </ThreadView>
  );
};
