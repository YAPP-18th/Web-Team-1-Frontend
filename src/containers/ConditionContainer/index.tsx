import React from 'react';
import styled from 'styled-components';
import { Categories, SearchForm } from '#components/Atoms';

import { useAppDispatch } from '#hooks/useAppDispatch';

import { setSortBy } from '../../slices/conditionSlice';

export default function ConditionContainer() {
  const dispatch = useAppDispatch();

  const handleClickDropdownItem = (sortBy: string) => {
    dispatch(setSortBy(sortBy));
  };

  return (
    <Conditions>
      <Categories onClickDropdownItem={handleClickDropdownItem} />
      <SearchForm />
    </Conditions>
  );
}

const Conditions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;
