import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import markdown from 'markdown-it';
import debounce from 'just-debounce-it';

const Editor = styled.textarea`
  width: 100%;
  background-color: white;
  padding: 20px;
  font-size: 1.4rem;
  resize: none;
  outline: none;
  border: 0;
  border-radius: 5px;
  max-height: 100%;
`;

const Preview = styled.div`
  width: 100%;
  background-color: white;
  padding: 20px;
  font-size: 1.4rem;
  border-radius: 5px;
`;

export default props => {
  const [content, setContent] = useState('');
  const editorRef = useRef(null);
  const previewRef = useRef(null);

  const md = new markdown();

  function autoExpand(e, el) {
    var el = el || e.target;
    el.style.height = 'inherit';
    el.style.height = el.scrollHeight + 'px';
  }

  const editContent = () => {
    setContent(editorRef.current.value);
  };

  function focusEditor() {}

  function blurEditor() {}

  useEffect(
    () => {
      if (props.preview) {
        const html = md.render(content);
        previewRef.current.innerHTML = html;
      } else {
        editorRef.current.innerHTML = content;
      }
    },
    [props.preview],
  );

  useEffect(
    () => {
      editorRef.current.addEventListener('paste', autoExpand);
      editorRef.current.addEventListener('input', autoExpand);
      editorRef.current.addEventListener('keyup', autoExpand);
      () => {
        editorRef.current.removeEventListener('paste', autoExpand);
        editorRef.current.removeEventListener('input', autoExpand);
        editorRef.current.removeEventListener('keyup', autoExpand);
      };
    },
    [content],
  );

  return (
    <>
      {props.preview && <Preview ref={previewRef} />}
      {!props.preview && (
        <Editor ref={editorRef} onFocus={focusEditor} onBlur={blurEditor} onChange={editContent} value={content} />
      )}
    </>
  );
};
