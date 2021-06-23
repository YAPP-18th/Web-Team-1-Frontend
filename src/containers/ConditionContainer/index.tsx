import React from 'react';
import styled from 'styled-components';
import { loadCards } from 'slices/cardsSlice';
import { Categories, SearchForm } from '#components/Atoms';
import { useAppDispatch } from '#hooks/useAppDispatch';
import { useAppSelector } from '#hooks/useAppSelector';

import { setCategories, setKeyword } from '../../slices/conditionSlice';

export default function ConditionContainer() {
  const dispatch = useAppDispatch();

  const handleChangeCategory = ({ id, checked }: { id: string; checked: boolean }) => {
    dispatch(setCategories({ id, checked }));
    dispatch(loadCards());
  };

  const handleClickSearch = () => {
    dispatch(loadCards());
  };

  const handleChangeKeyword = (text: string) => {
    dispatch(setKeyword(text));
  };

  const { categoryCheckedState, keyword } = useAppSelector((state) => state.conditionReducer);

  return (
    <Conditions>
      <Categories
        handleChangeCategory={handleChangeCategory}
        categoryCheckedState={categoryCheckedState}
      />
      <SearchForm
        handleClickSearch={handleClickSearch}
        handleChangeKeyword={handleChangeKeyword}
        keyword={keyword}
      />
    </Conditions>
  );
}

const Conditions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;
