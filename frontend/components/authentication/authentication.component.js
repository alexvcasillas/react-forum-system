import React from 'react';
import styled from 'styled-components';

import Login from '../login/login.component';
import Register from '../register/register.component';

const Authentication = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

export default () => {
  return (
    <>
      <Authentication>
        <Login />
        <Register />
      </Authentication>
    </>
  );
};
