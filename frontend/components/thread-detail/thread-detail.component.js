import React from 'react';
import styled from 'styled-components';
import markdown from 'markdown-it';
import emoji from 'markdown-it-emoji';

const ThreadDetail = styled.div`
  position: relative;
`;

const Heading = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.scheme.white};
  box-shadow: 0px 5px 5px 0 rgba(0, 0, 0, 0.08);
  padding: 0 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

const Title = styled.div`
  flex: 1;
  text-transform: uppercase;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.scheme.gray[6]};

  strong {
    font-weight: 600;
    color: ${({ theme }) => theme.scheme.gray[8]};
  }
`;

const Content = styled.article`
  padding: 40px;
  width: 100%;
  max-width: 100%;
`;

export default ({ thread }) => {
  const md = new markdown().use(emoji);

  return (
    <ThreadDetail>
      <Heading>
        <Title>
          Thread <strong>{thread.title}</strong>
        </Title>
      </Heading>
      <Content dangerouslySetInnerHTML={{ __html: md.render(thread.content) }} />
    </ThreadDetail>
  );
};
