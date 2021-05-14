import React from 'react';

import { useAppSelector } from '#hooks/useAppSelector';

import Cards from '#components/Cards';

export default function CardsContainer() {
  const { cards } = useAppSelector((state) => state.cardsReducer);

  return <Cards cards={cards} />;
}
