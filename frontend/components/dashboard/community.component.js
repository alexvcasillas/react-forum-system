import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Head from 'next/head';

import { scheme } from '../../lib/theme';
import { QueryStringConsumer } from '../../lib/query.context';

import ThreadsIcon from '../shared/svg/papers.icon';

const Community = styled.div`
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

const CommunityPicture = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 5px;
  background-color: ${scheme.gray[3]};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url(${props => props.picture});
  margin-right: 20px;
`;

const CommunityDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const CommunityName = styled.div`
  font-size: 1.3rem;
  text-transform: uppercase;
  color: ${scheme.gray[9]};
  margin-bottom: 5px;
  font-weight: 600;
`;

const CommunityDescription = styled.div`
  color: ${scheme.gray[6]};
`;

const CommunityStats = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;

const CommunityStatTooltip = styled.div`
  position: absolute;
  top: -32px;
  left: 0;
  background-color: ${scheme.gray[9]};
  opacity: 0;
  border-radius: 5px;
  padding: 5px 10px;
  pointer-events: none;
  transition: opacity 0.3s ease-in-out;

  span {
    opacity: 1;
    color: ${scheme.white};
  }
`;

const CommunityStat = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 20px;
  position: relative;
  top: 0;
  left: 0;

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
    z-index: 100;
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
    min-width: 190px;
    opacity: 0;
  }
`;

const CommunityStatValue = styled.div`
  margin-left: 5px;
`;

export default props => {
  return (
    <QueryStringConsumer>
      {queryString => {
        const activeCommunity = queryString.c === props.community.id;
        return (
          <>
            {activeCommunity && (
              <Head>
                <title>RFS | {props.community.name}</title>
              </Head>
            )}
            <Link href={{ path: '/', query: { c: props.community.id } }}>
              <Community active={activeCommunity}>
                <CommunityPicture picture={props.community.picture} />
                <CommunityDetails>
                  <CommunityName>{props.community.name}</CommunityName>
                  <CommunityDescription>{props.community.description}</CommunityDescription>
                  <CommunityStats>
                    <CommunityStat data-tooltip={`Threads on this community`}>
                      <ThreadsIcon fill={scheme.gray[7]} />
                      <CommunityStatValue>{props.community.threads_count}</CommunityStatValue>
                    </CommunityStat>
                  </CommunityStats>
                </CommunityDetails>
              </Community>
            </Link>
          </>
        );
      }}
    </QueryStringConsumer>
  );
};
