import React, { useEffect, useState } from 'react';
import { getArticleDetail } from '#apis/articleViewApi';
import { ArticleDetail } from '#components/ArticleView';

interface Props {
  id: string;
}

const ArticleDetailContainer = ({ id }: Props) => {
  const [data, setData] = useState({
    category: '',
    contents: '',
    created_at: '',
    nickname: '',
    postIdx: 0,
    profile: '',
    tag: [],
    title: '',
    view: 0,
  });

  const getData = async () => {
    const apiData = await getArticleDetail(id);
    if (apiData) {
      const innerData = apiData.data;
      setData({
        ...innerData,
      });
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
      <ArticleDetail data={data} />
    </>
  );
};

export default ArticleDetailContainer;
