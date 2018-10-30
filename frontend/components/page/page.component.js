import React, { Component } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import Meta from '../meta/meta.component';

import { scheme } from '../../utils/theme';

const theme = {
  scheme,
};

const Inner = styled.div`
  display: grid;
  grid-template-areas: 'navigation communities threads';
  grid-template-columns: 250px 350px auto;
`;

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.4rem;
    line-height: 1.4;
    background-color: ${theme.scheme.gray[1]};
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
    color: #343a40;
  }
  a {
    text-decoration: none;
    color: ${theme.black};
  }
`;

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <Meta />
          <Inner>{this.props.children}</Inner>
        </>
      </ThemeProvider>
    );
  }
}

export default Page;
