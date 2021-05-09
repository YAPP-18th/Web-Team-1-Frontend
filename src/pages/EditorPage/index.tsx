import React, { useRef, useEffect } from 'react';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import 'codemirror/lib/codemirror.css';
import './Style/style.css';

// 이미지 업로드 처리를 별도로 진행(서버에 전송 후, src경로 받아옴)하는 함수
// function uploadImage(blob: Blob) {
//   const obj = { hello: 'world' };
//   const newBlob = new Blob([JSON.stringify(obj, null, 2)], { type: 'application/json' });
//   return 'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F24283C3858F778CA2E';
// }

const EditorPage = (): JSX.Element => {
  const editorRef = useRef<Editor>(null);
  const clickPrintBtn = () => {
    if (editorRef.current !== null) {
      /* eslint-disable no-console */
      console.log(editorRef.current.getInstance().getSquire().getBody());
      // editorRef.current.getInstance().getUI().getToolbar().removeItem(19);
    }
  };

  const clickSaveBtn = () => {
    if (editorRef.current !== null) {
      localStorage.setItem(
        'content',
        editorRef.current.getInstance().getSquire().getBody().innerHTML,
      );
    }
  };

  const clickLoadBtn = () => {
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
        // toolbarItems={['heading']} // 툴바 지정 가능
        // hooks={{ // Base64가 아닌 이미지 처리
        //   addImageBlobHook: (blob, callback) => {
        //     const uploadedImageURL = uploadImage(blob);
        //     callback(uploadedImageURL, 'alt text');
        //     return false;
        //   },
        // }}
      />
      <button onClick={clickPrintBtn} type="button">
        console Html
      </button>
      <button onClick={clickSaveBtn} type="button">
        save Html
      </button>
      <button onClick={clickLoadBtn} type="button">
        load Html
      </button>
    </>
  );
};

export default EditorPage;
