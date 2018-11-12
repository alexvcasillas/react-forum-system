import React, { Component } from 'react';
import styled from 'styled-components';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

import { scheme } from '../../lib/theme';

import ReplyList from './reply-list.component';
import HappyFaceIcon from '../shared/svg/happy-face.icon';
import SadFaceIcon from '../shared/svg/sad-face.icon';

const Wrapper = styled.section`
  border-top: 1px solid ${scheme.gray[4]};
`;

const GenericMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;

const GenericMessageTitle = styled.h2`
  margin: 0;
  padding: 0;
  color: ${scheme.gray[8]};
  margin-top: 20px;
`;

const GenericMessageMessage = styled.p`
  padding: 0;
  margin: 5px;
  color: ${scheme.gray[6]};
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
        if (error)
          return (
            <GenericMessage>
              <SadFaceIcon width={60} height={60} fill={scheme.gray[6]} />
              <GenericMessageTitle>Oops...</GenericMessageTitle>
              <GenericMessageMessage>
                Something went wrong while retrieving the replies for you... maybe you'd like to refresh the page?
              </GenericMessageMessage>
            </GenericMessage>
          );
        if (loading)
          return (
            <GenericMessage>
              <HappyFaceIcon width={60} height={60} fill={scheme.gray[6]} />
              <GenericMessageTitle>Loading replies...</GenericMessageTitle>
              <GenericMessageMessage>Just keep swimming, just keep swimming!</GenericMessageMessage>
            </GenericMessage>
          );
        if (replies && replies.length)
          return (
            <ReplyList
              scrollDown={props.scrollDown}
              scrollTop={props.scrollTop}
              thread={props.thread}
              replies={replies}
            />
          );
        return (
          <GenericMessage>
            <HappyFaceIcon width={60} height={60} fill={scheme.gray[6]} />
            <GenericMessageTitle>Hey, listen!</GenericMessageTitle>
            <GenericMessageMessage>
              This thread has no messages, why don't you start a conversation?
            </GenericMessageMessage>
          </GenericMessage>
        );
      }}
    </Query>
  </Wrapper>
);
