import React from 'react';
import { useHistory } from 'react-router-dom';
import { Banner } from '#components/Atoms';

import CardsContainer from '#containers/CardsContainer';
import ConditionContainer from '#containers/ConditionContainer';
import ArticleModalContainer from '#containers/ArticleModalContainer';

export default function HomePage() {
  const history = useHistory();

  const handleClickCard = (postIdx: number) => {
    const url = `/articleDetail/${postIdx}`;
    history.push(url);
  };

  return (
    <>
      <main>
        <Banner />
        <ConditionContainer />
        <CardsContainer onClickCard={handleClickCard} />

        {/* 헤더의 바로 작성하기 버튼 대신 임시로 쓰이는 버튼입니다. */}
        <ArticleModalContainer />
      </main>
    </>
  );
}
