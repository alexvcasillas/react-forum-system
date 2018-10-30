import React from 'react';
import styled from 'styled-components';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import Community from '../community/community.component';

const Communities = styled.section`
  grid-area: communities;
  border-right: 1px solid ${({ theme }) => theme.scheme.gray[4]};
  display: flex;
  flex-direction: column;
`;

const data = [
  {
    id: 'comm-01',
    name: 'React',
    description: 'A community of developers, designers and others who love React.js.',
    picture:
      'https://spectrum.imgix.net/communities/102b08e1-f26e-4cda-b252-03258776bc14/react.png.0.1901592707012414?w=256&h=256&expires=1540944000000&ixlib=js-1.2.0&s=71a5e3cc9ca1ce29ed1daa3d48de2ebc',
    threads: 468,
    likes: 248,
  },
  {
    id: 'comm-02',
    name: 'Zeit',
    description: 'Our mission is to make cloud computing as easy and accessible as mobile computing.',
    picture:
      'https://spectrum.imgix.net/communities/854a65c6-1734-4242-b841-65316be5004c/black-bg-logo-1200.png.0.2172665786512824?w=256&h=256&expires=1540944000000&ixlib=js-1.2.0&s=eaa0bb61aeeabad8e78801cdf24c03e7',
    threads: 236,
    likes: 112,
  },
  {
    id: 'comm-03',
    name: 'Styled Components',
    description:
      'Visual primitives for the component age. Use the best bits of ES6 and CSS to style your apps without stress!',
    picture:
      'https://spectrum.imgix.net/communities/e8792514-dc32-43ff-a26e-81c85754f193/test.png.0.3184486404030735?w=256&h=256&expires=1540944000000&ixlib=js-1.2.0&s=4a2b40f353c87a10b954530e7bf04d1d',
    threads: 121,
    likes: 84,
  },
  {
    id: 'comm-04',
    name: 'GraphQL',
    description: 'GraphQL is a query language for APIs, with thousands of tools and libraries built by the community.',
    picture:
      'https://spectrum.imgix.net/communities/33d6ade9-d505-40f2-926d-b8836bdccdd0/graphql.png.0.7616626405032714?w=256&h=256&expires=1540944000000&ixlib=js-1.2.0&s=9ea35f97daf804cbf998c8009801e943',
    threads: 382,
    likes: 168,
  },
];

const ALL_COMMUNITIES_QUERY = gql`
  query ALL_COMMUNITIES_QUERY {
    communities {
      id
      title
      description
      picture
    }
  }
`;

export default () => (
  <>
    <Communities>
      <Query query={ALL_COMMUNITIES_QUERY}>
        {({ data, error, loading }) => {
          if (loading) return <p>Loading communities...</p>;
          if (error) return <p>Error: {error.message}</p>;
          data.map(community => <Community key={community.id} {...community} />);
        }}
      </Query>
    </Communities>
  </>
);
