import Head from 'next/head';
import { createGlobalStyle } from 'styled-components';
import { scheme } from '../lib/theme';

const theme = { scheme };

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
    color: ${theme.scheme.gray[8]};
  }
  pre {
    background-color: ${theme.scheme.gray[3]};
    padding: 10px;
    border-radius: 5px;
    overflow: scroll;
    code {
      background-color: none;
      padding: 0;
      border-radius: 0;
    }
  }
  code {
    background-color: ${theme.scheme.gray[3]};
    padding: 2px 5px;
    border-radius: 5px;
  }
`;

export default ({ children }) => (
  <>
    <Head>
      <link rel="shortcut icon" type="image/x-icon" href="static/favicon.ico" />
      <link rel="icon" type="image/png" href="static/favicon.png" />
      <link rel="apple-touch-icon" href="static/favicon.png" />
    </Head>
    <GlobalStyle />
    <main>{children}</main>
  </>
);
