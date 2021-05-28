import React, { useState } from 'react';
import { EditorState, editorActions } from 'slices/articleEditorSlice';
import { useHistory } from 'react-router-dom';
import ArticleModal from '#components/ArticleModal';
import { IconPaths, IconWrapper, Button } from '#components/Atoms';
import { color } from '#styles/index';
import { useAppDispatch } from '#hooks/useAppDispatch';

const ArticleModalContainer = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const [modal, setModal] = useState(false);
  const modalToggle = () => setModal(!modal);

  const [data, setData] = useState({
    category: '',
    tag: '',
  });

  const [warning, setWarning] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onClickWriteBtn = () => {
    // 카테고리 유효성 검사
    if (data.category === '') {
      setWarning(true);
    }

    // 해시태그 파싱
    const tagList = data.tag
      .split('#')
      .map((tag) => {
        return tag.split(' ')[0];
      })
      .filter((tmp) => tmp !== '');

    // 리덕스에 저장
    const reduxData: EditorState = {
      category: data.category,
      tag: tagList,
    };
    dispatch(editorActions.setEditorData(reduxData));

    // 페이지 이동
    history.push('/articleEditor');
  };

  return (
    <>
      <Button buttonColor={{ background: color.gray }} onClick={modalToggle}>
        바로 회고하기
        <IconWrapper icon={IconPaths.Glitter} />
      </Button>
      {modal && (
        <ArticleModal
          onChange={onChange}
          onClick={onClickWriteBtn}
          isWarning={warning}
          toggle={modalToggle}
        />
      )}
    </>
  );
};

export default ArticleModalContainer;
