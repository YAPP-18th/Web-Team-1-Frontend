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

  useEffect(() => {
    dispatch(fetchCards());
  }, []);

  return <Cards cards={cards} onClickCard={onClickCard} />;
}
