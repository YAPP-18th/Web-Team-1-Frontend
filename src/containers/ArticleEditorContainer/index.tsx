import React, { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { Editor } from '@toast-ui/react-editor';
import { postArticle, PostArticleData } from 'api/articleEditorApi';
import { useAppSelector } from '#hooks/useAppSelector';
import ArticleEditor from '#components/ArticleEditor/ArticleEditor';

const ArticleEditorContainer = () => {
  const history = useHistory();
  const editorRef = useRef<Editor | null>(null);
  const titleRef = useRef<string | null>('');
  const { tag, category, templateIdx } = useAppSelector((state) => state.articleEditorReducer);

  const callApi = async (data: PostArticleData) => {
    const index = await postArticle(data);
    if (index !== -1) {
      history.push(`/articleDetail/${index}`);
    }
  };

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
        templateIdx,
        title: titleRef.current,
      };
      callApi(data);
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
