import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import { scheme } from '../../lib/theme';

import PenIcon from '../shared/svg/pen.icon';

const ThreadPlaceholder = styled.div`
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

  &:hover {
    background-color: ${scheme.white};
  }
`;

const ThreadPlaceholderIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${scheme.gray[3]};
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ThreadPlaceholderDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ThreadPlaceholderTitle = styled.div`
  width: 100px;
  height: 10px;
  border-radius: 5px;
  background-color: ${scheme.gray[3]};
  margin-bottom: 5px;

  p {
    margin: 0;
    padding: 0;
  }
`;

const ThreadPlaceholderInfo = styled.div`
  width: 180px;
  height: 10px;
  border-radius: 5px;
  background-color: ${scheme.gray[3]};
`;

export default props => {
  return (
    <ThreadPlaceholder>
      <ThreadPlaceholderIcon />
      <ThreadPlaceholderDetails>
        <ThreadPlaceholderTitle />
        <ThreadPlaceholderInfo />
      </ThreadPlaceholderDetails>
    </ThreadPlaceholder>
  );
};
