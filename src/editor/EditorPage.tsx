import React, { useRef, useEffect } from 'react';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import './templateStyle.css';

const EditorPage = () => {
  const editorRef = useRef<Editor>(null);

  const clickConsole = () => {
    if (editorRef.current !== null) {
      /* eslint-disable no-console */
      console.log(editorRef.current.getInstance().getSquire().getBody());
    }
  };
  const clickSave = () => {
    if (editorRef.current !== null) {
      localStorage.setItem(
        'content',
        editorRef.current.getInstance().getSquire().getBody().innerHTML,
      );
    }
  };

  const clickLoad = () => {
    if (editorRef.current !== null) {
      const content = localStorage.getItem('content');
      if (content) {
        editorRef.current.getInstance().setHtml(content);
      }
    }
  };

  useEffect(() => {
    if (editorRef.current !== null) {
      editorRef.current
        .getInstance()
        .setHtml(
          `<table class="custom"><thead><tr><th><br></th><th><br></th></tr></thead><tbody><tr><td><br><br><br><br><br><br><br></td><td><br><br><br><br><br><br><br></td></tr><tr><td><br><br><br><br><br><br><br></td><td><br><br><br><br><br><br><br></td></tr></tbody></table>`,
        );
    }
  }, []);
  return (
    <>
      <Editor
        initialValue="hello"
        previewStyle="vertical"
        height="600px"
        initialEditType="wysiwyg"
        useCommandShortcut
        ref={editorRef}
        hideModeSwitch
      />
      <button onClick={clickConsole} type="button">
        console Html
      </button>
      <button onClick={clickSave} type="button">
        save Html
      </button>
      <button onClick={clickLoad} type="button">
        load Html
      </button>
    </>
  );
};

export default EditorPage;
