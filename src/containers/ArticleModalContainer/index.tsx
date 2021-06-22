import React, { useState, useEffect } from 'react';
import { InnerArticleState, editorActions } from 'slices/articleEditorSlice';
import { useHistory, useLocation } from 'react-router-dom';
import ArticleModal from '#components/ArticleModal';
import { useAppDispatch } from '#hooks/useAppDispatch';
import { useAppSelector } from '#hooks/useAppSelector';

let tagCount = 0;

interface Props {
  toggle: () => void;
}

export interface TagItem {
  id: number;
  text: string;
}

const ArticleModalContainer = ({ toggle }: Props) => {
  const dispatch = useAppDispatch();
  const { tag, category, templateIdx } = useAppSelector((state) => state.articleEditorReducer);

  const history = useHistory();
  const location = useLocation();

  const [data, setData] = useState({
    category: '',
    templateIdx: 0,
  });

  const [tagList, setTagList] = useState<Array<TagItem>>([]);
  const [warning, setWarning] = useState({
    isWarning: false,
    warningMessage: '',
  });

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
    if (location.pathname !== '/articleUpdate' && location.pathname !== '/articleCreate') {
      history.push('/articleCreate');
    }

    toggle();
  };

  const deleteTag = (tagId: number) => {
    const newTagList = tagList.filter((item) => item.id !== tagId);
    setTagList(newTagList);
  };

  const addTag = (tagText: string) => {
    if (tagList.length >= 3) {
      setWarning({
        isWarning: true,
        warningMessage: '해시태그는 최대 3개까지 가능합니다.',
      });
      return;
    }

    tagCount += 1;
    setTagList([
      ...tagList,
      {
        id: tagCount,
        text: tagText,
      },
    ]);
  };

  // useEffect 합치기

  useEffect(() => {
    if (tag.length) {
      /* eslint-disable no-console */
      // console.log(tag);
      const indexedTagList: TagItem[] = tag.map((item) => {
        tagCount += 1;
        return { id: tagCount, text: item };
      });
      setTagList(indexedTagList);
    }
  }, [tag]);

  useEffect(() => {
    if (category && templateIdx) {
      setData({
        ...data,
        category,
        templateIdx,
      });
    }
  }, [category, templateIdx]);

  return (
    <>
      <ArticleModal
        onChange={onChange}
        onClick={onClickWriteBtn}
        warning={warning}
        toggle={toggle}
        addTag={addTag}
        tagList={tagList}
        deleteTag={deleteTag}
        category={category}
        templateIdx={templateIdx}
      />
    </>
  );
};

export default ArticleModalContainer;
