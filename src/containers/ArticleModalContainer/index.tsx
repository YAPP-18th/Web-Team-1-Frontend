import React, { useState } from 'react';
import { InnerArticleState, editorActions } from 'slices/articleEditorSlice';
import { useHistory } from 'react-router-dom';
import ArticleModal from '#components/ArticleModal';
import { IconPaths, IconWrapper, Button } from '#components/Atoms';
import { color } from '#styles/index';
import { useAppDispatch } from '#hooks/useAppDispatch';
import { TagItem } from '#components/Header';

let tagCount = 0;

const ArticleModalContainer = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const [modal, setModal] = useState(false);
  const modalToggle = () => setModal(!modal);

  const [data, setData] = useState({
    category: '',
    templateIdx: 0,
  });

  const [tagList, setTagList] = useState<Array<TagItem>>([]);
  const [warning, setWarning] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onClickWriteBtn = () => {
    // 카테고리 유효성 검사
    if (data.category === '' || data.templateIdx === 0) {
      setWarning(true);
      return;
    }
    const newTagList = tagList.map((item) => item.text);

    // 리덕스에 저장
    const reduxData: InnerArticleState = {
      category: data.category,
      tag: newTagList,
      templateIdx: data.templateIdx,
    };
    dispatch(editorActions.setEditorData(reduxData));

    // 페이지 이동
    history.push('/articleCreate');
  };

  const deleteTag = (tagId: number) => {
    const newTagList = tagList.filter((item) => item.id !== tagId);
    setTagList(newTagList);
  };

  const addTag = (tagText: string) => {
    setTagList([
      ...tagList,
      {
        id: tagCount,
        text: tagText,
      },
    ]);
    tagCount += 1;
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
          addTag={addTag}
          tagList={tagList}
          deleteTag={deleteTag}
        />
      )}
    </>
  );
};

export default ArticleModalContainer;
