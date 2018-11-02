import styled from 'styled-components';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Head from 'next/head';

import Navigation from '../components/navigation/navigation.component';
import Writter from '../components/writter/writter.component';

const Write = styled.div`
  display: grid;
  grid-template-areas: 'navigation editor';
  grid-template-columns: 250px auto;
  height: 100%;
  max-height: 100%;
`;

const COMMUNITY_NAME_QUERY = gql`
  query COMMUNITY_NAME_QUERY($community: String!) {
    community(id: $community) {
      name
    }
  }
`;

export default props => (
  <Write>
    <Navigation />
    <Query query={COMMUNITY_NAME_QUERY} variables={{ community: props.query.c }}>
      {({ data: { community }, loading, error }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Oh, fuck... an error ocurred!</p>;
        return (
          <>
            <Head>
              <title>RFS | New {community.name} thread</title>
            </Head>
            <Writter community={community.name} />
          </>
        );
      }}
    </Query>
  </Write>
);
