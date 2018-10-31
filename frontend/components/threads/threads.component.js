import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { Query, ApolloConsumer } from 'react-apollo';
import gql from 'graphql-tag';
import { List } from 'react-content-loader';
import Link from 'next/link';
import debounce from 'just-debounce-it';

import PenIcon from '../svg/pen.icon';

const Threads = styled.section`
  grid-area: threads;
  border-right: 1px solid ${({ theme }) => theme.scheme.gray[4]};
  display: flex;
  flex-direction: column;
`;

const ActionsArea = styled.div`
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.scheme.white};
  box-shadow: 0px 5px 5px 0 rgba(0, 0, 0, 0.08);
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ActionIcon = styled.div`
  margin-left: 10px;
  opacity: 0.6;
  transform: scale(1);
  transition: all 0.3s ease-in-out;
  padding-top: 2px;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
    opacity: 1;
  }
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
      title
      content
      author {
        username
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
          <Input
            type="text"
            onChange={e => {
              e.persist();
              updateFilter(e.target.value);
            }}
          />
          <Link href={{ pathname: '/community', query: { c: props.community, action: 'new' } }}>
            <ActionIcon>
              <PenIcon />
            </ActionIcon>
          </Link>
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
          }}
        </Query>
      </Threads>
    </>
  );
};