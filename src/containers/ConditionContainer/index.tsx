import React from 'react';
import styled from 'styled-components';
import { Categories, SearchForm } from '#components/Atoms';
import { useAppDispatch } from '#hooks/useAppDispatch';
import { fetchPostsWithCategory, setCategories } from '../../slices/conditionSlice';

export default function ConditionContainer() {
  const dispatch = useAppDispatch();
  const handleClickCategory = ({ id, checked }: { id: string; checked: boolean }) => {
    dispatch(setCategories({ id, checked }));
  };

  const handleClickSearch = () => {
    dispatch(fetchPostsWithCategory());
  };

  return (
    <Conditions>
      <Categories handleClickCategory={handleClickCategory} />
      <SearchForm handleClickSearch={handleClickSearch} />
    </Conditions>
  );
}

const Conditions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;
