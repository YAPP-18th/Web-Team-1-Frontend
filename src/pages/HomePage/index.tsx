import React from 'react';
import styled from 'styled-components';

import { Categories, SearchForm, Banner } from '#components/Atoms';

import CardsContainer from '#containers/CardsContainer';
import ArticleModalContainer from '#containers/ArticleModalContainer';

export default function HomePage() {
  return (
    <>
      <main>
        <Banner />
        <SearchAndCategoriesContainer>
          <Categories />
          <SearchForm />
        </SearchAndCategoriesContainer>
        <CardsContainer />

        {/* 헤더의 바로 작성하기 버튼 대신 임시로 쓰이는 버튼입니다. */}
        <ArticleModalContainer />
      </main>
    </>
  );
}

const SearchAndCategoriesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;
