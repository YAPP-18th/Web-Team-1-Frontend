import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Editor } from '@toast-ui/react-editor';
import { useDispatch } from 'react-redux';
import { editorActions, EditorState } from 'slices/articleEditorSlice';
import { getTemplate, postArticle } from '#apis/articleEditorApi';
import { useAppSelector } from '#hooks/useAppSelector';
import ArticleEditor from '#components/ArticleEditor/ArticleEditor';
import ConfirmModalContainer from '#containers/ConfirmModalContainer';
/* eslint-disable no-console */

const ArticleEditorContainer = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const editorRef = useRef<Editor | null>(null);
  const titleRef = useRef<string | null>('');

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const { tag, category, templateIdx } = useAppSelector((state) => state.articleEditorReducer);

  const setTemplate = async (index: number) => {
    const data = await getTemplate(index);
    if (data && editorRef.current) {
      editorRef.current.getInstance().setHtml(data);
    }
  };

  const callPostApi = async () => {
    if (editorRef.current !== null) {
      const data = {
        category,
        contents: editorRef.current.getInstance().getSquire().getBody().innerHTML,
        image: [],
        tag,
        templateIdx,
        title: titleRef.current,
      };
      const index = await postArticle(data);
      if (index) {
        const reduxData: EditorState = {
          category: '',
          tag: [],
          templateIdx: 0,
          isUpdate: false,
        };
        dispatch(editorActions.setEditorData(reduxData));

        history.push(`/articleDetail/${index}`);
      }
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    titleRef.current = e.target.value;
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
      <ArticleEditor onChange={onChange} editorRef={editorRef} onClick={toggle} initialValue="" />
      {modal && <ConfirmModalContainer type="write" onClick={callPostApi} toggle={toggle} />}
    </>
  );
};

export default ArticleEditorContainer;
