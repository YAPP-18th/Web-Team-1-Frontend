import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Editor } from '@toast-ui/react-editor';
import { useDispatch } from 'react-redux';
import { editorActions } from 'slices/articleEditorSlice';
import { updateArticle } from '#apis/articleEditorApi';
import { useAppSelector } from '#hooks/useAppSelector';
import ArticleEditor from '#components/ArticleEditor/ArticleEditor';
import ConfirmModalContainer from '#containers/ConfirmModalContainer';
import { tagData } from '#apis/articleViewApi';

const ArticleUpdateContainer = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const editorRef = useRef<Editor | null>(null);
  const titleRef = useRef<string>('');

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const {
    category,
    contents: beforeContents,
    title: beforeTitle,
    index,
    tag,
    templateIdx,
  } = useAppSelector((state) => state.articleViewReducer);

  const callUpdateApi = async () => {
    if (editorRef.current !== null) {
      const data = {
        category,
        contents: editorRef.current.getInstance().getSquire().getBody().innerHTML,
        title: titleRef.current,
      };

      const result = await updateArticle(index, data);

      if (result) {
        dispatch(editorActions.clearEditorSlice());

        history.push(`/articleDetail/${index}`);
      }
    }
  };

  const onChangeTitle = (title: string) => {
    titleRef.current = title;
  };

  const onClickSaveBtn = () => {
    if (!(titleRef.current === '')) {
      dispatch(editorActions.setTitleWarning({ titleWarning: false }));
      toggle();
    } else {
      window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
      dispatch(editorActions.setTitleWarning({ titleWarning: true }));
    }
  };

  useEffect(() => {
    const editReduxData = {
      category,
      tag: tag.map((item: tagData) => item.tag),
      templateIdx,
    };
    dispatch(editorActions.setEditorData(editReduxData));

    if (editorRef.current !== null) {
      editorRef.current.getInstance().setHtml(beforeContents);
    }
    titleRef.current = beforeTitle;

    return () => {
      dispatch(editorActions.clearEditorSlice());
    };
  }, []);

  return (
    <>
      <ArticleEditor
        onChangeTitle={onChangeTitle}
        editorRef={editorRef}
        onClickSaveBtn={onClickSaveBtn}
        initialValue={beforeTitle}
      />
      {modal && <ConfirmModalContainer type="write" callApi={callUpdateApi} toggle={toggle} />}
    </>
  );
};

export default ArticleUpdateContainer;
