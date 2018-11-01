import React, { Component } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import Meta from '../meta/meta.component';

import Router from 'next/router';
import NProgress from 'nprogress';

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};
Router.onRouteChangeError = () => {
  NProgress.done();
};

import { scheme } from '../../utils/theme';

const theme = {
  scheme,
};

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
    min-height: 100vh;
  }
  a {
    text-decoration: none;
    color: ${theme.black};
  }
  br {
    content: 'A';
    display: block;
    margin-bottom: 0.5em;
  }
  code {
      padding: 0 3px;
      border: 1px solid #CCC;
      border-radius: 2px;
      background: #FFF;
  }
  pre.code {
      padding: 2px 5px;
      border: 1px solid #DDD;
      background: #FFF;
      border-left-width: 3px;
  }
`;

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <Meta />
          {this.props.children}
        </>
      </ThemeProvider>
    );
  }
}

export default Page;
