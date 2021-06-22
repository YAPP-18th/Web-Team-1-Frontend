import { createSlice } from '@reduxjs/toolkit';
import { fetchCardList, fetchCardsWithSearchQuery } from '#apis/fetchCardList';
import { getQuery, isEmpty } from '../utils';

import type { AppThunk } from './index';
import { setNext, setPageIndex } from './conditionSlice';

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

export function loadCards(): AppThunk {
  return async (dispatch, getState) => {
    const { categoryCheckedState } = getState().conditionReducer;
    const query = getQuery(categoryCheckedState);

    const { result, next } =
      query === 'total'
        ? await fetchCardList({ postIdx: 0 })
        : await fetchCardsWithSearchQuery({ query, postIdx: 0 });
    const nextPageIndex = isEmpty(result) ? 0 : result[result.length - 1].postIdx;

    dispatch(setPageIndex(nextPageIndex));
    dispatch(setNext(next));
    dispatch(setCards(result));
  };
}

export function loadNextPage(): AppThunk {
  return async (dispatch, getState) => {
    const { categoryCheckedState, pageIndex } = getState().conditionReducer;
    const { cards } = getState().cardsReducer;
    const query = getQuery(categoryCheckedState);

    const { result, next } =
      query === 'total'
        ? await fetchCardList({ postIdx: pageIndex })
        : await fetchCardsWithSearchQuery({ query, postIdx: pageIndex });
    const nextPageIndex = isEmpty(result) ? 0 : result[result.length - 1].postIdx;

    dispatch(setPageIndex(nextPageIndex));
    dispatch(setNext(next));
    dispatch(setCards([...cards, ...result]));
  };
}
