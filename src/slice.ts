import { createSlice } from '@reduxjs/toolkit';

import { cardsFixtures } from './fixtures/cards';

const { actions, reducer: cardsReducer } = createSlice({
  name: 'cards',
  initialState: {
    cards: cardsFixtures,
  },
  reducers: {
    clickCard(state, { payload: cardId }) {
      console.log('cardId: ', cardId);
    },
  },
});

export const { clickCard } = actions;
export default cardsReducer;
