import styled from 'styled-components';
import Head from 'next/head';

import App from '../components/App';
import Navigation from '../components/navigation/navigation.component';
import Editor from '../components/write/editor.component';

const Write = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-areas: 'navigation' 'editor';
  grid-template-rows: 60px auto;
  grid-template-columns: auto;
`;

export default props => {
  console.log({ props });
  return (
    <>
      <Head>
        <title>RFS | Write a new thread</title>
      </Head>
      <App>
        <Write>
          <Navigation />
          <Editor community={props.query.c} />
        </Write>
      </App>
    </>
  );
};
