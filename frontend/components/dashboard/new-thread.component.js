import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import { scheme } from '../../lib/theme';

import PenIcon from '../shared/svg/pen.icon';

const NewThread = styled.div`
  position: sticky;
  top: 50px;
  left: 0;
  padding: 20px;
  background-color: ${scheme.gray[1]};
  border-bottom: 1px solid ${scheme.gray[4]};
  display: flex;
  flex-direction: row;
  cursor: pointer;
  user-select: none;
  transition: background 0.3s ease-in-out;
  z-index: 10;

  &:hover {
    background-color: ${scheme.white};
  }
`;

const NewThreadIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${scheme.gray[3]};
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NewThreadDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const NewThreadTitle = styled.div`
  font-size: 1.3rem;
  text-transform: uppercase;
  color: ${scheme.gray[8]};
  margin-bottom: 5px;
  font-weight: 600;

  p {
    margin: 0;
    padding: 0;
  }
`;

const NewThreadInfo = styled.div`
  color: ${scheme.gray[6]};
`;

export default props => {
  return (
    <Link href={{ pathname: '/write', query: { c: props.community } }}>
      <NewThread>
        <NewThreadIcon>
          <PenIcon />
        </NewThreadIcon>
        <NewThreadDetails>
          <NewThreadTitle>New Thread</NewThreadTitle>
          <NewThreadInfo>Start a new thread in this community</NewThreadInfo>
        </NewThreadDetails>
      </NewThread>
    </Link>
  );
};
