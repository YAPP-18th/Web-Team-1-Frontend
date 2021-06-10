import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { viewActions } from 'slices/articleViewSlice';
// import { editorActions } from 'slices/articleEditorSlice';
import { ArticleDetailData, getArticleDetail } from '#apis/articleViewApi';
import { ArticleDetail } from '#components/ArticleView';
/* eslint-disable no-console */

interface Props {
  id: string;
}

const ArticleDetailContainer = ({ id }: Props) => {
  const dispatch = useDispatch();
  const [data, setData] = useState<ArticleDetailData>({
    result: {
      category: '',
      commentCnt: 0,
      contents: '',
      createdAt: '',
      nickname: '',
      postIdx: 0,
      profile: '',
      tagList: [],
      title: '',
      view: 0,
      templateIdx: -1,
    },
    scrap: false,
    writer: false,
  });

  const getData = async () => {
    const apiData = await getArticleDetail(id);
    /* eslint-disable no-console */
    if (apiData) {
      // console.log(apiData.data);
      const innerData = apiData.data;
      setData({
        ...innerData,
      });

      // 리덕스로 값 넣기
      // 추후 위의 useState가 필요없을 수 있음.
      const viewReduxData = {
        category: innerData.result.category,
        contents: innerData.result.contents,
        tag: innerData.result.tagList,
        title: innerData.result.title,
        index: innerData.result.postIdx,
        templateIdx: innerData.result.templateIdx,
      };

      // const editReduxData = {
      //   category: innerData.result.category,
      //   tag: innerData.result.tagList.map((tag: tagData) => tag.tag),
      //   templateIdx: 0,
      // };
      dispatch(viewActions.setViewData(viewReduxData));
      // dispatch(editorActions.setEditorData(editReduxData));
    }
    // else{
    //    정상적으로 데이터를 가져오지 못한 경우 -> 추후 ui 구현 (ex. 올바르지 않은 접근입니다.)
    // }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <ArticleDetail data={data} id={id} />
    </>
  );
};

export default ArticleDetailContainer;
