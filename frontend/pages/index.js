import styled from 'styled-components';

import Navigation from '../components/navigation/navigation.component';
import Communities from '../components/communities/communities.component';
import Threads from '../components/threads/threads.component';

const Dashboard = styled.div`
  display: grid;
  grid-template-areas: 'navigation communities threads';
  grid-template-columns: 250px 350px auto;
`;

export default () => (
  <Dashboard>
    <Navigation />
    <Communities />
  </Dashboard>
);
