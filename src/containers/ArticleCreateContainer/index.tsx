import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Editor } from '@toast-ui/react-editor';
import { useDispatch } from 'react-redux';
import { editorActions, EditorState } from 'slices/articleEditorSlice';
import { getTemplate, postArticle } from '#apis/articleEditorApi';
import { useAppSelector } from '#hooks/useAppSelector';
import ArticleEditor from '#components/ArticleEditor/ArticleEditor';
import ConfirmModalContainer from '#containers/ConfirmModalContainer';

const ArticleCreateContainer = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const editorRef = useRef<Editor | null>(null);
  const titleRef = useRef<string>('');

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const articleEditorSliceData = useAppSelector((state) => state.articleEditorReducer);

  const setTemplate = async (index: number) => {
    const data = await getTemplate(index);
    if (data && editorRef.current) {
      editorRef.current.getInstance().setHtml(data);
    }
  };

  const callPostApi = async () => {
    if (editorRef.current !== null) {
      const data = {
        ...articleEditorSliceData,
        contents: editorRef.current.getInstance().getSquire().getBody().innerHTML,
        title: titleRef.current,
        image: [],
      };
      const index = await postArticle(data);

      if (index) {
        const reduxData: EditorState = {
          category: '',
          tag: [],
          templateIdx: 0,
        };
        dispatch(editorActions.setEditorData(reduxData));

        history.push(`/articleDetail/${index}`);
      }
    }
  };

  const onChangeTitle = (title: string) => {
    titleRef.current = title;
  };

  useEffect(() => {
    setTemplate(articleEditorSliceData.templateIdx);
  }, []);

  return (
    <>
      <ArticleEditor
        onChangeTitle={onChangeTitle}
        editorRef={editorRef}
        modalToggle={toggle}
        initialValue=""
      />
      {modal && <ConfirmModalContainer type="write" callApi={callPostApi} toggle={toggle} />}
    </>
  );
};

export default ArticleCreateContainer;
