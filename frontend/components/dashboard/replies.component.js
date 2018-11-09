import React, { Component } from 'react';
import styled from 'styled-components';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

import { scheme } from '../../lib/theme';

// import Reply from './reply.component';
import ReplyList from './reply-list.component';

const Wrapper = styled.section`
  margin-top: 20px;
  border-top: 1px solid ${scheme.gray[4]};
`;

const REPLIES_BY_THREAD_QUERY = gql`
  query REPLIES_BY_THREAD_QUERY($thread: String!) {
    repliesByThread(thread: $thread) {
      id
      content
      createdAt
      updatedAt
      author {
        id
        username
        name
        lastName
        avatar
      }
    }
  }
`;

export default props => (
  <Wrapper>
    <Query query={REPLIES_BY_THREAD_QUERY} variables={{ thread: props.thread }} pollInterval={1000}>
      {({ data: { repliesByThread: replies }, loading, error }) => {
        if (error) return <div>Error loading replies...</div>;
        if (loading) return <div>Loading replies</div>;
        if (replies && replies.length) return <ReplyList scrollDown={props.scrollDown} replies={replies} />;
        return <div>Ooops... this thread has no replies... Why not start a conversation?!</div>;
      }}
    </Query>
  </Wrapper>
);
