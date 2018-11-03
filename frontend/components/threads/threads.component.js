import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { Query, ApolloConsumer } from 'react-apollo';
import gql from 'graphql-tag';
import { List } from 'react-content-loader';
import Link from 'next/link';
import debounce from 'just-debounce-it';

import Auth from '../auth/auth.component';
import Thread from '../thread/thread.component';

import PenIcon from '../svg/pen.icon';

const Threads = styled.section`
  grid-area: threads;
  border-right: 1px solid ${({ theme }) => theme.scheme.gray[4]};
  display: flex;
  flex-direction: column;
`;

const ActionsArea = styled.div`
  position: sticky;
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.scheme.white};
  box-shadow: 0px 5px 5px 0 rgba(0, 0, 0, 0.08);
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

const Action = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.scheme.gray[8]};
  color: ${({ theme }) => theme.scheme.white};
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  user-select: none;

  &:active {
    background-color: ${({ theme }) => theme.scheme.gray[7]};
  }
`;

const ActionIcon = styled.div`
  margin-left: 10px;
  transition: all 0.3s ease-in-out;
  padding-top: 2px;
`;

const NoThreadsFound = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  margin-top: 40px;

  span {
    text-transform: uppercase;
    font-size: 1.3rem;
    font-weight: 600;
  }
`;

const Loading = styled.div`
  margin-top: 40px;
  padding-left: 40px;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  outline: 0;
  box-shadow: none;
  background-color: ${({ theme }) => theme.scheme.gray[2]};
  padding: 10px;
  border-radius: 5px;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.scheme.gray[7]};
`;

const THREADS_BY_COMMUNITY_QUERY = gql`
  query THREADS_BY_COMMUNITY_QUERY($community: String!, $filter: String) {
    threadsByCommunity(community: $community, filter: $filter) {
      id
      title
      content
      createdAt
      author {
        username
        name
        lastName
        avatar
      }
    }
  }
`;

export default props => {
  const [filter, setFilter] = useState('');

  const updateFilter = debounce(value => {
    console.log('Debounced Update Filter');
    setFilter(value);
  }, 350);

  return (
    <>
      <Threads>
        <ActionsArea>
          <Auth>
            {auth => {
              if (auth)
                return (
                  <Link href={{ pathname: '/write', query: { c: props.community } }}>
                    <Action>
                      New thread
                      <ActionIcon>
                        <PenIcon fill="#ffffff" />
                      </ActionIcon>
                    </Action>
                  </Link>
                );
            }}
          </Auth>
        </ActionsArea>
        <Query query={THREADS_BY_COMMUNITY_QUERY} variables={{ community: props.community, filter: filter }}>
          {({ data: { threadsByCommunity }, error, loading }) => {
            if (loading)
              return (
                <Loading>
                  <List secondaryColor="#ced4da" primaryColor="#e9ecef" />
                </Loading>
              );
            if (error) return <p>Oops... error!</p>;
            if (threadsByCommunity.length === 0)
              return (
                <NoThreadsFound>
                  <span>Oops...</span>
                  <p>It looks like there are no threads in this community.</p>
                </NoThreadsFound>
              );
            return threadsByCommunity.map(thread => <Thread key={thread.id} {...thread} />);
          }}
        </Query>
      </Threads>
    </>
  );
};
