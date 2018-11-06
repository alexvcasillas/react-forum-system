import styled from 'styled-components';
import Head from 'next/head';
import { QueryStringProvider } from '../lib/query.context';

import App from '../components/App';
import Navigation from '../components/navigation/navigation.component';
import Communities from '../components/dashboard/communities.component';
import Threads from '../components/dashboard/threads.component';
import Thread from '../components/dashboard/thread.component';

const Dashboard = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-areas: 'navigation communities threads thread';
  grid-template-columns: 250px 350px 450px auto;
`;

export default props => {
  return (
    <>
      <Head>
        <title>RFS | Dashboard</title>
      </Head>
      <QueryStringProvider queryString={props.query}>
        <App>
          <Dashboard>
            <Navigation />
            <Communities />
            {props.query.c && <Threads community={props.query.c} />}
            {props.query.t && <Thread community={props.query.c} thread={props.query.t} />}
          </Dashboard>
        </App>
      </QueryStringProvider>
    </>
  );
};
