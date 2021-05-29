import React, { useEffect } from 'react';

import { useAppSelector } from '#hooks/useAppSelector';
import { useAppDispatch } from '#hooks/useAppDispatch';

import Cards from '#components/Cards';

import { fetchCards } from '../../slices/cardsSlice';

interface Props {
  onClickCard: (postIdx: number) => void;
}

export default function CardsContainer({ onClickCard }: Props) {
  const dispatch = useAppDispatch();
  const { cards } = useAppSelector((state) => state.cardsReducer);
  const { sortBy } = useAppSelector((state) => state.conditionReducer);

  useEffect(() => {
    dispatch(fetchCards({ sortBy }));
  }, [sortBy]);

  return <Cards cards={cards} onClickCard={onClickCard} />;
}
