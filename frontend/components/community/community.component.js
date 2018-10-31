import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Router from 'next/router';

import HeartIcon from '../svg/heart.icon';
import ThreadsIcon from '../svg/threads.icon';

const Community = styled.div`
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

const CommunityImage = styled.div`
  width: 40px;
  height: 40px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 5px;
  margin-top: 5px;
`;

const CommunityDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 15px;
`;

const CommunityName = styled.div`
  text-transform: uppercase;
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 5px;
  color: ${({ theme }) => theme.scheme.gray[8]};
`;

const CommunityDescription = styled.div`
  color: ${({ theme }) => theme.scheme.gray[7]};
`;

const CommunityStats = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;

const CommunityStat = styled.div`
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

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default ({ id, name, description, picture, threads_count, likes }) => {
  const [active, setActive] = useState(false);

  useEffect(
    () => {
      const {
        query: { c },
      } = Router;
      if (c === id) {
        setActive(true);
      } else {
        setActive(false);
      }
    },
    [Router.query.c],
  );

  return (
    <>
      <Link href={{ pathname: '/community', query: { c: id } }}>
        <Community active={active}>
          <CommunityImage
            style={{
              backgroundImage: `url(${picture})`,
            }}
          />
          <CommunityDetails>
            <CommunityName>{name}</CommunityName>
            <CommunityDescription>{description}</CommunityDescription>
            <CommunityStats>
              <CommunityStat>
                <HeartIcon />
                <StatValue>{likes}</StatValue>
              </CommunityStat>
              <CommunityStat>
                <ThreadsIcon />
                <StatValue>{threads_count}</StatValue>
              </CommunityStat>
            </CommunityStats>
          </CommunityDetails>
        </Community>
      </Link>
    </>
  );
};
