import React, { useRef, useEffect } from 'react';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import 'codemirror/lib/codemirror.css';

import './Style/style.css';

// function uploadImage(blob: Blob) {
//   /* eslint-disable no-console */
//   console.log('console log from uploadImage function');
//   console.log(blob);
//   const obj = { hello: 'world' };
//   const newBlob = new Blob([JSON.stringify(obj, null, 2)], { type: 'application/json' });
//   console.log(newBlob);
//   return 'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F24283C3858F778CA2E';
// }
const EditorPage = (): JSX.Element => {
  const editorRef = useRef<Editor>(null);
  if (editorRef.current !== null) {
    /* eslint-disable no-console */
    // console.log(editorRef.current.getInstance().getSquire().getBody());
    // console.log(editorRef.current.getInstance().getCodeMirror().setValue('code block'));
    editorRef.current.getInstance().getCodeMirror().setValue('code block');
    // editorRef.current.getInstance().getUI().getToolbar().removeItem(19);
  }
  const handleClick = () => {
    if (editorRef.current !== null) {
      /* eslint-disable no-console */
      console.log(editorRef.current.getInstance().getSquire().getBody());
      // console.log(editorRef.current.getInstance().getCodeMirror().setValue('code block'));
      // editorRef.current.getInstance().getCodeMirror().setValue('code block');
      // editorRef.current.getInstance().getUI().getToolbar().removeItem(19);
    }
  };
  const handleSave = () => {
    if (editorRef.current !== null) {
      localStorage.setItem(
        'content',
        editorRef.current.getInstance().getSquire().getBody().innerHTML,
      );
    }
  };

  const handleLoad = () => {
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
        // toolbarItems={['heading']}
        // hooks={{
        //   addImageBlobHook: (blob, callback) => {
        //     const uploadedImageURL = uploadImage(blob);
        //     callback(uploadedImageURL, 'alt text');
        //     return false;
        //   },
        // }}
      />
      <button onClick={handleClick} type="button">
        console Html
      </button>
      <button onClick={handleSave} type="button">
        save Html
      </button>
      <button onClick={handleLoad} type="button">
        load Html
      </button>
    </>
  );
};

export default EditorPage;
