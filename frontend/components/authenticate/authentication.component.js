import React from 'react';
import styled from 'styled-components';

import Login from './login.component';
import Register from './register.component';

const Authentication = styled.div`
  grid-area: authentication;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 100px;
`;

export default props => {
  return (
    <Authentication>
      <Login />
      <Register />
    </Authentication>
  );
};
