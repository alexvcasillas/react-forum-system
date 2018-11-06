import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Head from 'next/head';
import distanceInWordsStrict from 'date-fns/distance_in_words_strict';
import markdown from 'markdown-it';
import emoji from 'markdown-it-emoji';

import { scheme } from '../../lib/theme';
import { QueryStringConsumer } from '../../lib/query.context';

const Thread = styled.div`
  padding: 20px;
  border-bottom: 1px solid ${scheme.gray[4]};
  display: flex;
  flex-direction: row;
  cursor: pointer;
  user-select: none;
  transition: background 0.3s ease-in-out;
  background-color: ${props => (props.active ? scheme.white : scheme.gray[1])};

  &:hover {
    background-color: ${scheme.white};
  }
`;

const AuthorPicture = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${scheme.gray[3]};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url(${props => props.picture});
  margin-right: 20px;
`;

const ThreadDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ThreadTitle = styled.div`
  font-size: 1.3rem;
  text-transform: uppercase;
  color: ${scheme.gray[9]};
  margin-bottom: 5px;
  font-weight: 600;

  p {
    margin: 0;
    padding: 0;
  }
`;

const ThreadMeta = styled.div`
  color: ${scheme.gray[6]};
  display: flex;
  flex-direction: column;
`;

const ThreadInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  span {
    margin: 0 5px;
  }
`;

const ThreadAuthor = styled.div`
  color: ${scheme.gray[7]};
`;

const ThreadDate = styled.div``;

const md = new markdown().use(emoji);

export default props => {
  return (
    <QueryStringConsumer>
      {queryString => {
        const activeThread = queryString.t === props.thread.id;
        return (
          <>
            {activeThread && (
              <Head>
                <title>RFS | {props.thread.title}</title>
              </Head>
            )}
            <Link href={{ path: '/', query: { c: props.thread.community.id, t: props.thread.id } }}>
              <Thread active={activeThread}>
                <AuthorPicture picture={props.thread.author.avatar} />
                <ThreadDetails>
                  <ThreadTitle dangerouslySetInnerHTML={{ __html: md.render(props.thread.title) }} />
                  <ThreadMeta>
                    <ThreadInfo>
                      <ThreadAuthor>{`${props.thread.author.name} ${props.thread.author.lastName}`}</ThreadAuthor>
                      <span>–</span>
                      <ThreadDate>{distanceInWordsStrict(props.thread.createdAt, Date.now())}</ThreadDate>
                    </ThreadInfo>
                  </ThreadMeta>
                </ThreadDetails>
              </Thread>
            </Link>
          </>
        );
      }}
    </QueryStringConsumer>
  );
};
