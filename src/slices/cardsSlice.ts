import { createSlice } from '@reduxjs/toolkit';
import { fetchCardList } from '#apis/fetchCardList';

import { cardsFixtures } from '#fixtures/cards';
import type { AppThunk } from './index';

const { actions, reducer: cardsReducer } = createSlice({
  name: 'cards',
  initialState: {
    cards: cardsFixtures,
  },
  reducers: {},
});

export default cardsReducer;

export function fetchCards(): AppThunk {
  return async (dispatch) => {
    const articles = await fetchCardList();
    console.log(articles);
  };
}
