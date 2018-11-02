import React, { useState, useRef } from 'react';
import styled from 'styled-components';

import Editor from '../editor/editor.component';
import Preview from '../preview/preview.component';

import PenIcon from '../svg/pen.icon';

const Writter = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
`;

const WritterMeta = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.scheme.white};
  box-shadow: 0px 5px 5px 0 rgba(0, 0, 0, 0.08);
  height: 80px;
  padding: 0 20px;
  z-index: 2;
`;

const Title = styled.div`
  flex: 1;
  text-transform: uppercase;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.scheme.gray[6]};

  strong {
    font-weight: 600;
    color: ${({ theme }) => theme.scheme.gray[8]};
  }
`;

const Actions = styled.div`
  flex: 1;
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

const Workspace = styled.div`
  display: grid;
  grid-template-areas: 'editor preview';
  grid-template-columns: 50% 50%;
  width: 100%;
  height: calc(100% - 80px);
  max-height: calc(100% - 80px);
  overflow: scroll;
`;

const EditorArea = styled.div`
  grid-area: editor;
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  border-right: 1px solid ${({ theme }) => theme.scheme.gray[4]};
`;

const ThreadTitle = styled.input`
  height: 60px;
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

export default props => {
  const previewRef = useRef(null);

  function updatePreview(content) {
    previewRef.current.updatePreview(content);
  }

  return (
    <Writter>
      <WritterMeta>
        <Title>
          New thread on <strong>{props.community}</strong> community
        </Title>
        <Actions>
          <Action>
            Publish
            <ActionIcon>
              <PenIcon fill="#ffffff" />
            </ActionIcon>
          </Action>
        </Actions>
      </WritterMeta>
      <Workspace>
        <EditorArea>
          <ThreadTitle placeholder="What's up?" />
          <Editor updatePreview={updatePreview} />
        </EditorArea>
        <Preview ref={previewRef} />
      </Workspace>
    </Writter>
  );
};
