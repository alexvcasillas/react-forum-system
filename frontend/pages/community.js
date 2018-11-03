import styled from 'styled-components';

import Navigation from '../components/navigation/navigation.component';
import Communities from '../components/communities/communities.component';
import Threads from '../components/threads/threads.component';
import Writter from '../components/writter/writter.component';

const Community = styled.div`
  display: grid;
  grid-template-areas: 'navigation communities threads content';
  grid-template-columns: 250px 350px 450px auto;
`;

export default props => (
  <Community>
    <Navigation />
    <Communities />
    <Threads community={props.query.c} thread={props.query.t} />
    {props.query.action === 'new' && <Writter />}
  </Community>
);
