import React, { useState } from 'react';
import styled from 'styled-components';

import Editor from '../editor/editor.component';

import PenIcon from '../svg/pen.icon';

const Writter = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const ActionsArea = styled.div`
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.scheme.white};
  box-shadow: 0px 5px 5px 0 rgba(0, 0, 0, 0.08);
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

const Action = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.scheme.gray[8]};
  color: ${({ theme }) => theme.scheme.white};
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  user-select: none;
  margin-left: 10px;

  &:active {
    background-color: ${({ theme }) => theme.scheme.gray[7]};
  }
`;

const ActionIcon = styled.div`
  margin-left: 10px;
  transition: all 0.3s ease-in-out;
  padding-top: 2px;
`;

const TitleArea = styled.div`
  margin-top: 40px;
  padding: 0 20px;
`;

const EditorArea = styled.div`
  margin: 20px;
  padding: 20px;
  flex: 1;
`;

const BottomArea = styled.div`
  height: 60px;
`;

const ThreadTitle = styled.input`
  width: 100%;
  background-color: ${({ theme }) => theme.scheme.gray[1]};
  padding: 10px 20px;
  border: 0;
  outline: none;
  box-shadow: none;
  color: ${({ theme }) => theme.scheme.gray[8]};
  font-size: 2.4rem;
  font-weight: 700;

  &::placeholder {
    color: ${({ theme }) => theme.scheme.gray[5]};
  }
`;

export default () => {
  const [preview, setPreview] = useState(false);
  function togglePreview() {
    setPreview(!preview);
  }
  return (
    <Writter>
      <ActionsArea>
        <Action onClick={togglePreview}>
          {preview ? 'Edit' : 'Preview'}
          <ActionIcon>
            <PenIcon fill="#ffffff" />
          </ActionIcon>
        </Action>
        <Action>
          Publish
          <ActionIcon>
            <PenIcon fill="#ffffff" />
          </ActionIcon>
        </Action>
      </ActionsArea>
      <TitleArea>
        <ThreadTitle placeholder="What's up?" />
      </TitleArea>
      <EditorArea>
        <Editor preview={preview} />
      </EditorArea>
    </Writter>
  );
};
