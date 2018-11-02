import React, { useState, useEffect, useRef } from 'react';
import Textarea from 'react-textarea-autosize';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: calc(100% - 60px);
  min-height: calc(100% - 60px);
  max-height: calc(100% - 60px);
  padding: 20px;
`;

const Editor = styled(Textarea)`
  width: 100%;
  font-size: 1.4rem;
  resize: none;
  outline: none;
  border: 0;
  background-color: ${({ theme }) => theme.scheme.gray[1]};
  color: ${({ theme }) => theme.scheme.gray[8]};
  &::placeholder {
    color: ${({ theme }) => theme.scheme.gray[5]};
  }
`;

export default props => {
  const [content, setContent] = useState('');

  const editContent = e => {
    setContent(e.target.value);
    const { updatePreview } = props;
    updatePreview(e.target.value);
  };

  return (
    <Wrapper>
      <Editor onChange={editContent} value={content} placeholder="Write down all your thoughts..." />
    </Wrapper>
  );
};
