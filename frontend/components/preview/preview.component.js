import React, { Component } from 'react';
import styled from 'styled-components';
import markdown from 'markdown-it';
import emoji from 'markdown-it-emoji';

const Wrapper = styled.div`
  grid-area: preview;
  width: 100%;
  padding: 40px;
`;

export default props => {
  const md = new markdown({ linkify: true }).use(emoji);
  return <Wrapper dangerouslySetInnerHTML={{ __html: md.render(props.content) }} />;
};
