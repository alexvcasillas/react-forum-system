import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import distanceInWordsStrict from 'date-fns/distance_in_words_strict';
import markdown from 'markdown-it';
import emoji from 'markdown-it-emoji';
import { Link } from '../../routes';

import { scheme } from '../../lib/theme';
import { QueryStringConsumer } from '../../lib/query.context';

import RepliesIcon from '../shared/svg/document.icon';
import UsersIcon from '../shared/svg/users.icon';

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

const ThreadStats = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;

const ThreadStatTooltip = styled.div`
  position: absolute;
  top: -32px;
  left: 0;
  background-color: ${scheme.gray[9]};
  opacity: 0;
  border-radius: 5px;
  padding: 5px 10px;
  pointer-events: none;
  transition: opacity 0.3s ease-in-out;
  text-align: center;

  span {
    opacity: 1;
    color: ${scheme.white};
  }
`;

const ThreadStat = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 20px;
  position: relative;
  top: 0;

  &:first-child {
    margin-left: 0;
  }

  &:hover {
    &::before {
      opacity: 1;
      transition: opacity 0.3s ease-in-out;
    }
    &::after {
      opacity: 1;
      transition: opacity 0.3s ease-in-out;
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: -6px;
    left: 50%;
    transform: translateX(-50%);
    border-width: 4px 6px 0 6px;
    border-style: solid;
    border-color: rgba(0, 0, 0, 0.9) transparent transparent transparent;
    z-index: 1;
    opacity: 0;
  }

  &::after {
    content: attr(data-tooltip);
    position: absolute;
    left: 50%;
    top: -6px;
    transform: translateX(-50%) translateY(-100%);
    background: rgba(0, 0, 0, 0.9);
    text-align: center;
    color: ${scheme.white};
    padding: 5px;
    font-size: 1.4rem;
    border-radius: 5px;
    pointer-events: none;
    min-width: 170px;
    opacity: 0;
  }
`;

const ThreadStatValue = styled.div`
  margin-left: 5px;
`;

const md = new markdown().use(emoji);

export default props => {
  return (
    <QueryStringConsumer>
      {queryString => {
        const activeThread = queryString.t === props.thread.slug;
        return (
          <>
            {activeThread && (
              <Head>
                <title>RFS | {props.thread.title}</title>
              </Head>
            )}
            <Link route="dashboard" params={{ c: props.thread.community.slug, t: props.thread.slug }}>
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
                  <ThreadStats>
                    <ThreadStat data-tooltip="Replies on this thread">
                      <RepliesIcon fill={scheme.gray[7]} />
                      <ThreadStatValue>{props.thread.replies_count}</ThreadStatValue>
                    </ThreadStat>
                    <ThreadStat data-tooltip="Members on this thread">
                      <UsersIcon fill={scheme.gray[7]} />
                      <ThreadStatValue>{props.thread.users_replying}</ThreadStatValue>
                    </ThreadStat>
                  </ThreadStats>
                </ThreadDetails>
              </Thread>
            </Link>
          </>
        );
      }}
    </QueryStringConsumer>
  );
};
