import React, { Component } from 'react';
import styled from 'styled-components';
import markdown from 'markdown-it';
import emoji from 'markdown-it-emoji';

const Wrapper = styled.div`
  grid-area: preview;
  width: 100%;
  padding: 40px;
`;

export default class Preview extends Component {
  state = { content: '' };

  wrapperRef = React.createRef();
  contentRef = React.createRef();

  md = new markdown({ linkify: true }).use(emoji);

  updatePreview = content => {
    this.setState({ content });
  };

  render() {
    const { content } = this.state;
    return <Wrapper dangerouslySetInnerHTML={{ __html: this.md.render(content) }} />;
  }
}
