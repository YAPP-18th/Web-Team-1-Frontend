import { createSlice } from '@reduxjs/toolkit';

import { cardsFixtures } from '#fixtures/cards';

const { actions, reducer: cardsReducer } = createSlice({
  name: 'cards',
  initialState: {
    cards: cardsFixtures,
  },
  reducers: {},
});

export default cardsReducer;
