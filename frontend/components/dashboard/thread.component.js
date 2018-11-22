import React, { Component } from 'react';
import styled from 'styled-components';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import markdown from 'markdown-it';
import emoji from 'markdown-it-emoji';
import format from 'date-fns/format';

import { scheme } from '../../lib/theme';

import Auth from '../shared/auth/auth.component';
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
  /* box-shadow: 0px 5px 5px 0 rgba(0, 0, 0, 0.08); */
  border-bottom: 1px solid ${scheme.gray[4]};
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
  overflow-y: scroll;
`;

const Content = styled.div`
  padding: 20px 40px;
`;

const AuthorDetails = styled.div`
  border-top: 1px solid ${scheme.gray[4]};
  padding: 20px 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const AuthorPicture = styled.div`
  width: 40px;
  min-width: 40px;
  height: 40px;
  min-height: 40px;
  border-radius: 50%;
  background-color: ${scheme.gray[3]};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url(${props => props.picture});
  margin-right: 20px;
`;

const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const AuthorName = styled.div`
  color: ${scheme.gray[8]};
  font-weight: 600;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const AuthorHandle = styled.div`
  margin-left: 5px;
  color: ${scheme.gray[6]};
  font-weight: 400;
`;

const ThreadDate = styled.div`
  color: ${scheme.gray[6]};
`;

const ReplyArea = styled.div`
  padding: 20px;
  border-top: 1px solid ${scheme.gray[4]};
  background-color: ${scheme.white};
`;

const THREAD_QUERY = gql`
  query THREAD_QUERY($thread: String!) {
    thread(slug: $thread) {
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

const md = new markdown().use(emoji);

export default class Thread extends React.PureComponent {
  scrollableThreadRef = React.createRef(null);
  scrollDown = () => {
    this.scrollableThreadRef.current.scrollTop = this.scrollableThreadRef.current.scrollHeight;
  };
  scrollTop = () => {
    this.scrollableThreadRef.current.scrollTop = 0;
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
                <ThreadScrollable ref={this.scrollableThreadRef}>
                  <Content dangerouslySetInnerHTML={{ __html: md.render(thread.content) }} />
                  <AuthorDetails>
                    <AuthorPicture picture={thread.author.avatar} />
                    <AuthorInfo>
                      <AuthorName>
                        {`${thread.author.name} ${thread.author.lastName}`}
                        <AuthorHandle>@{thread.author.username}</AuthorHandle>
                      </AuthorName>
                      <ThreadDate>{format(thread.createdAt, 'dddd, D MMMM YYYY hh:mm:ss A')}</ThreadDate>
                    </AuthorInfo>
                  </AuthorDetails>
                  <Replies
                    thread={thread.id}
                    replies={thread.replies}
                    scrollDown={this.scrollDown}
                    scrollTop={this.scrollTop}
                  />
                </ThreadScrollable>
                <Auth>
                  {({ data: { auth } }) => {
                    if (auth)
                      return (
                        <ReplyArea>
                          <ReplyInputs thread={thread.id} community={thread.community.id} />
                        </ReplyArea>
                      );
                    return null;
                  }}
                </Auth>
              </>
            );
          }}
        </Query>
      </Wrapper>
    );
  }
}
