import styled from 'styled-components';

import Navigation from '../components/navigation/navigation.component';
import Communities from '../components/communities/communities.component';

const Community = styled.div`
  display: grid;
  grid-template-areas: 'navigation communities threads';
  grid-template-columns: 250px 350px auto;
`;

export default () => (
  <Community>
    <Navigation />
    <Communities />
  </Community>
);
