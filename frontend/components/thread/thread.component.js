import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Router from 'next/router';
import Head from 'next/head';
import distanceInWordsStrict from 'date-fns/distance_in_words_strict';

import HeartIcon from '../svg/heart.icon';
import ThreadsIcon from '../svg/threads.icon';

const Thread = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: row;
  transition: background 0.3s ease-in-out;
  cursor: pointer;
  border-bottom: 1px solid ${({ theme }) => theme.scheme.gray[4]};
  background-color: ${({ theme, active }) => (active ? theme.scheme.white : theme.scheme.gray[1])};

  &:hover {
    background-color: ${({ theme }) => theme.scheme.white};
  }
`;

const AuthorPicture = styled.div`
  width: 40px;
  height: 40px;
  min-width: 40px;
  min-height: 40px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 5px;
  margin-top: 3px;
  background-image: url(${({ picture }) => picture});
  background-color: ${({ theme }) => theme.scheme.gray[4]};
`;

const ThreadDetails = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
`;

const ThreadTitle = styled.div`
  text-transform: uppercase;
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 5px;
  color: ${({ theme }) => theme.scheme.gray[8]};
`;

const ThreadDescription = styled.div`
  color: ${({ theme }) => theme.scheme.gray[7]};
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  p {
    margin: 0;
    padding: 0;
  }
`;

const ThreadMeta = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  span {
    margin-left: 5px;
    margin-right: 5px;
  }
`;

const ThreadAuthor = styled.div`
  color: ${({ theme }) => theme.scheme.gray[7]};
`;

const ThreadWhen = styled.div`
  color: ${({ theme }) => theme.scheme.gray[6]};
`;

const ThreadStats = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;

const ThreadStat = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 20px;

  &:first-child {
    margin-left: 0;
  }
`;

const StatValue = styled.span`
  margin-left: 5px;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.scheme.gray[8]};
`;

export default ({ id, title, content, author, createdAt }) => {
  const [active, setActive] = useState(false);
  useEffect(
    () => {
      const {
        query: { t },
      } = Router;
      if (t === id) {
        setActive(true);
      } else {
        setActive(false);
      }
    },
    [Router.query.t],
  );

  return (
    <>
      {active && (
        <Head>
          <title>RFS | {name}</title>
        </Head>
      )}
      <Link href={{ pathname: '/community', query: { c: Router.query.c, t: id } }}>
        <Thread active={active}>
          <AuthorPicture picture={author.avatar} />
          <ThreadDetails>
            <ThreadTitle>{title}</ThreadTitle>
            <ThreadMeta>
              <ThreadAuthor>{`${author.name} ${author.lastName}`}</ThreadAuthor>
              <span>&middot;</span>
              <ThreadWhen>{distanceInWordsStrict(createdAt, Date.now())}</ThreadWhen>
            </ThreadMeta>
            <ThreadStats>
              <ThreadStat>
                <HeartIcon />
                <StatValue>{0}</StatValue>
              </ThreadStat>
              <ThreadStat>
                <ThreadsIcon />
                <StatValue>{0}</StatValue>
              </ThreadStat>
            </ThreadStats>
          </ThreadDetails>
        </Thread>
      </Link>
    </>
  );
};
