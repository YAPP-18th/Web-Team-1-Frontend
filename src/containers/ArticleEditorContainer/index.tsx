import React, { useEffect, useRef } from 'react';
import { Editor } from '@toast-ui/react-editor';
import { useAppSelector } from '#hooks/useAppSelector';
import ArticleEditor from '#components/ArticleEditor/ArticleEditor';

const ArticleEditorContainer = () => {
  const editorRef = useRef<Editor | null>(null);
  const titleRef = useRef<string | null>('');
  const { tag, category } = useAppSelector((state) => state.articleEditorReducer);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    titleRef.current = e.target.value;
  };

  const onClick = () => {
    /* eslint-disable no-console */
    if (editorRef.current !== null) {
      const data = {
        category,
        contents: editorRef.current.getInstance().getSquire().getBody().innerHTML,
        image: [],
        tag,
        templateIdx: 0,
        title: titleRef.current,
      };
      console.log(data);
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
      <ArticleEditor onChange={onChange} editorRef={editorRef} onClick={onClick} />
    </>
  );
};

export default ArticleEditorContainer;
