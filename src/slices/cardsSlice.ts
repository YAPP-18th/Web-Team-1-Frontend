import { createSlice } from '@reduxjs/toolkit';
import { fetchCardList } from '#apis/fetchCardList';
import { getQuery } from '../utils';

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
  return async (dispatch, getState) => {
    const { categoryCheckedState } = getState().conditionReducer;
    const query = getQuery(categoryCheckedState);
    const { result } = await fetchCardList({ query });
    dispatch(setCards(result));
  };
}
