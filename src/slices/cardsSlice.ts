import { createSlice } from '@reduxjs/toolkit';
import { fetchCardList } from '#apis/fetchCardList';

import type { AppThunk } from './index';

const { actions, reducer: cardsReducer } = createSlice({
  name: 'cards',
  initialState: {
    cards: [],
  },
  reducers: {
    setCards(state, { payload: cards }) {
      return {
        ...state,
        cards,
      };
    },
  },
});

export const { setCards } = actions;

export default cardsReducer;

export function fetchCards(): AppThunk {
  return async (dispatch) => {
    const cards = await fetchCardList();
    dispatch(setCards(cards));
  };
}
