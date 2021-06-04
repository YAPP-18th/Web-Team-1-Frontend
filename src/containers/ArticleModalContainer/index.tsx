import React, { useState } from 'react';
import { InnerArticleState, editorActions } from 'slices/articleEditorSlice';
import { useHistory } from 'react-router-dom';
import ArticleModal from '#components/ArticleModal';
import { IconPaths, IconWrapper, Button } from '#components/Atoms';
import { useAppDispatch } from '#hooks/useAppDispatch';

let tagCount = 0;

export interface TagItem {
  id: number;
  text: string;
}

const ArticleModalContainer = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();

  const [data, setData] = useState({
    category: '',
    templateIdx: 0,
  });

  const [tagList, setTagList] = useState<Array<TagItem>>([]);
  const [warning, setWarning] = useState({
    isWarning: false,
    warningMessage: '',
  });

  const [modal, setModal] = useState(false);
  const modalToggle = () => {
    if (modal) {
      setTagList([]);
      setWarning({
        isWarning: false,
        warningMessage: '',
      });
    }
    setModal(!modal);
  };

  const onChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onClickWriteBtn = () => {
    if (data.category === '' || data.templateIdx === 0) {
      setWarning({
        isWarning: true,
        warningMessage: '카테고리와 템플릿은 꼭 선택해야 합니다.',
      });
      return;
    }

    const newTagList = tagList.map((item) => item.text);

    const reduxData: InnerArticleState = {
      category: data.category,
      tag: newTagList,
      templateIdx: data.templateIdx,
    };

    dispatch(editorActions.setEditorData(reduxData));
    history.push('/articleCreate');

    modalToggle();
  };

  const deleteTag = (tagId: number) => {
    const newTagList = tagList.filter((item) => item.id !== tagId);
    setTagList(newTagList);
  };

  const addTag = (tagText: string) => {
    if (tagList.length >= 3) {
      return;
    }

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
      <Button buttonColor={{ background: 'gray' }} onClick={modalToggle}>
        바로 회고하기
        <IconWrapper icon={IconPaths.Glitter} />
      </Button>
      {modal && (
        <ArticleModal
          onChange={onChange}
          onClick={onClickWriteBtn}
          warning={warning}
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
