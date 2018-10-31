import React, { useState } from 'react';
import { EditorState } from 'draft-js';
import Editor from 'draft-js-plugins-editor';
import createMarkdownPlugin from 'draft-js-markdown-plugin';
import createLinkifyPlugin from 'draft-js-linkify-plugin';
import styled from 'styled-components';

const Writter = styled.div`
  display: flex;
  flex-direction: column;
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
`;

const ActionIcon = styled.div`
  margin-left: 10px;
  opacity: 0.6;
  transform: scale(1);
  transition: all 0.3s ease-in-out;
  padding-top: 2px;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
    opacity: 1;
  }
`;

const EditorArea = styled.div`
  margin: 40px;
  padding: 20px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.scheme.white};
`;

const ThreadTitle = styled.input`
  background-color: ${({ theme }) => theme.scheme.gray[1]};
  padding: 10px;
  border: 0;
  outline: none;
  box-shadow: none;
  color: ${({ theme }) => theme.scheme.gray[8]};
  font-size: 1.8rem;
`;

const plugins = [createMarkdownPlugin(), createLinkifyPlugin()];

export default () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  function onChange(editorState) {
    setEditorState(editorState);
  }

  return (
    <Writter>
      <ActionsArea />
      <ThreadTitle placeholder="What's up?" />
      <EditorArea>
        <Editor onChange={onChange} editorState={editorState} plugins={plugins} />
      </EditorArea>
    </Writter>
  );
};
