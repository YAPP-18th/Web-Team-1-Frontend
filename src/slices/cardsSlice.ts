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

export function fetchCards({ sortBy }: { sortBy: string }): AppThunk {
  return async (dispatch) => {
    const cards = await fetchCardList({ sortBy });
    dispatch(setCards(cards));
  };
}
