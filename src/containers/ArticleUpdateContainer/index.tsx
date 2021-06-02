import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Editor } from '@toast-ui/react-editor';
import { useDispatch } from 'react-redux';
import { editorActions, EditorState } from 'slices/articleEditorSlice';
import { updateArticle } from '#apis/articleEditorApi';
import { useAppSelector } from '#hooks/useAppSelector';
import ArticleEditor from '#components/ArticleEditor/ArticleEditor';
import ConfirmModalContainer from '#containers/ConfirmModalContainer';

const ArticleUpdateContainer = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const editorRef = useRef<Editor | null>(null);
  const titleRef = useRef<string>('');

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const { category, contents, title, index } = useAppSelector((state) => state.articleViewReducer);

  const callUpdateApi = async () => {
    if (editorRef.current !== null) {
      const data = {
        category,
        contents: editorRef.current.getInstance().getSquire().getBody().innerHTML,
        title: titleRef.current,
      };

      const result = await updateArticle(index, data);

      if (result) {
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

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    titleRef.current = e.target.value;
  };

  useEffect(() => {
    if (editorRef.current !== null) {
      editorRef.current.getInstance().setHtml(contents);
    }

    titleRef.current = title;
  }, []);

  return (
    <>
      <ArticleEditor
        onChange={onChange}
        editorRef={editorRef}
        onClick={toggle}
        initialValue={title}
      />
      {modal && <ConfirmModalContainer type="write" callApi={callUpdateApi} toggle={toggle} />}
    </>
  );
};

export default ArticleUpdateContainer;
