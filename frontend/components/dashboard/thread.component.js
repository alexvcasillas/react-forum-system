import React, { Component } from 'react';
import styled from 'styled-components';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import markdown from 'markdown-it';
import emoji from 'markdown-it-emoji';

import { QueryStringConsumer } from '../../lib/query.context';

import { scheme } from '../../lib/theme';

import Replies from './replies.component';
import ReplyInputs from './reply-inputs.component';

const Wrapper = styled.div`
  grid-area: thread;
  overflow: auto;
  display: flex;
  flex-direction: column;
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
`;

const ThreadTitle = styled.div`
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
    margin-left: 5px;
  }
`;

const ThreadScrollable = styled.div`
  flex: 1;
  overflow: scroll;
`;

const Content = styled.div`
  padding: 20px 40px;
`;

const ReplyArea = styled.div`
  padding: 20px;
  border-top: 1px solid ${scheme.gray[4]};
  background-color: ${scheme.white};
`;

const THREAD_QUERY = gql`
  query THREAD_QUERY($thread: String!) {
    thread(id: $thread) {
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
      replies {
        id
        content
        createdAt
        updatedAt
        author {
          username
          name
          lastName
          avatar
        }
      }
    }
  }
`;

const md = new markdown().use(emoji);

export default class Thread extends Component {
  repliesRef = React.createRef(null);

  addReplyToList = reply => {
    this.repliesRef.current.addNewReply(reply);
  };

  render() {
    const { props } = this;
    return (
      <Wrapper>
        <Query query={THREAD_QUERY} variables={{ thread: props.thread }}>
          {({ loading, error, data: { thread } }) => {
            if (error) return <div>Error loading thread</div>;
            if (loading)
              return (
                <Header>
                  <ThreadTitle>Loading thread...</ThreadTitle>
                </Header>
              );
            return (
              <>
                <Header>
                  <ThreadTitle>
                    Thread <span dangerouslySetInnerHTML={{ __html: md.render(thread.title) }} />
                  </ThreadTitle>
                </Header>
                <ThreadScrollable>
                  <Content dangerouslySetInnerHTML={{ __html: md.render(thread.content) }} />
                  <Replies replies={thread.replies} ref={this.repliesRef} />
                </ThreadScrollable>
                <ReplyArea>
                  <ReplyInputs author={thread.author} thread={thread.id} addReplyToList={this.addReplyToList} />
                </ReplyArea>
              </>
            );
          }}
        </Query>
      </Wrapper>
    );
  }
}
