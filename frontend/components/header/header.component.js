import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.scheme.cyan[9]};
  display: flex;
  align-items: center;
`;

const Content = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Title = styled.h1`
  text-transform: uppercase;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.scheme.gray[1]};
`;

export default () => (
  <>
    <Header>
      <Content>
        <Title>React Forum System</Title>
      </Content>
    </Header>
  </>
);
