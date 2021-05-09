import React from 'react';

import { useAppSelector } from '#hooks/react-redux';

import Cards from '#components/Cards';

export default function CardsContainer() {
  const { cards } = useAppSelector((state) => state.cardsReducer);

  return <Cards cards={cards} />;
}
