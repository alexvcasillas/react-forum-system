import styled from 'styled-components';

import Navigation from '../components/navigation/navigation.component';
import Communities from '../components/communities/communities.component';
import Threads from '../components/threads/threads.component';
import ThreadView from '../components/thread-view/thread-view.component';

const Community = styled.div`
  display: grid;
  grid-template-areas: 'navigation communities threads thread';
  grid-template-columns: 250px 350px 450px auto;
  grid-template-rows: auto;
  height: 100%;
  overflow: hidden;
`;

export default props => (
  <Community>
    <Navigation />
    <Communities />
    <Threads community={props.query.c} thread={props.query.t} />
    {props.query.t && <ThreadView thread={props.query.t} />}
  </Community>
);
