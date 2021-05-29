import React, { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { Editor } from '@toast-ui/react-editor';
import { getTemplate, postArticle, PostArticleData } from '#apis/articleEditorApi';
import { useAppSelector } from '#hooks/useAppSelector';
import ArticleEditor from '#components/ArticleEditor/ArticleEditor';

const ArticleEditorContainer = () => {
  const history = useHistory();
  const editorRef = useRef<Editor | null>(null);
  const titleRef = useRef<string | null>('');
  const { tag, category, templateIdx } = useAppSelector((state) => state.articleEditorReducer);

  const setTemplate = async (index: number) => {
    const data = await getTemplate(index);
    if (data && editorRef.current) {
      editorRef.current.getInstance().setHtml(data);
    }
  };

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
    setTemplate(templateIdx);
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
