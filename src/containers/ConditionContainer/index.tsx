import React from 'react';
import styled from 'styled-components';
import { loadCards } from 'slices/cardsSlice';
import { Categories } from '#components/Atoms';
import { useAppDispatch } from '#hooks/useAppDispatch';
import { useAppSelector } from '#hooks/useAppSelector';

import { setCategories } from '../../slices/conditionSlice';

export default function ConditionContainer() {
  const dispatch = useAppDispatch();

  const handleChangeCategory = ({ id, checked }: { id: string; checked: boolean }) => {
    dispatch(setCategories({ id, checked }));
    dispatch(loadCards());
  };

  const { categoryCheckedState } = useAppSelector((state) => state.conditionReducer);

  return (
    <Conditions>
      <Categories
        handleChangeCategory={handleChangeCategory}
        categoryCheckedState={categoryCheckedState}
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
