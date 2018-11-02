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

const Page = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  min-height: 100vh;
  max-height: 100vh;
  overflow: hidden;
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
    min-height: 100vh;
    max-height: 100vh;
    overflow: hidden;
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
  pre {
    background-color: ${theme.scheme.gray[2]};
    padding: 10px;
    border-radius: 5;
  }
`;

export default props => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <Meta />
      <Page>{props.children}</Page>
    </>
  </ThemeProvider>
);
