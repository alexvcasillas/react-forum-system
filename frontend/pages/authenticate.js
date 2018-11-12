import styled from 'styled-components';
import Head from 'next/head';

import App from '../components/App';
import Navigation from '../components/navigation/navigation.component';
import Authentication from '../components/authenticate/authentication.component';

const Authenticate = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-areas: 'navigation' 'authentication';
  grid-template-rows: 60px auto;
  grid-template-columns: auto;
`;

export default props => {
  return (
    <>
      <Head>
        <title>RFS | Authentication</title>
      </Head>
      <App>
        <Authenticate>
          <Navigation />
          <Authentication />
        </Authenticate>
      </App>
    </>
  );
};
