import { createSlice } from '@reduxjs/toolkit';
import { AppThunk } from 'slices';
import { fetchPostsWith } from '#apis/fetchCardList';
import { setCards } from './cardsSlice';
import { getQuery } from '../utils';

const { actions, reducer: conditionReducer } = createSlice({
  name: 'condition',
  initialState: {
    categories: {
      total: false,
      marketing: false,
      design: false,
      plan: false,
      develop: false,
    },
  },
  reducers: {
    setCategories(state, { payload: { id, checked } }) {
      return {
        ...state,
        categories: {
          ...state.categories,
          [id]: checked,
        },
      };
    },
  },
});

export const { setCategories } = actions;
export default conditionReducer;

export function fetchPostsWithCategory(): AppThunk {
  return async (dispatch, getState) => {
    const { categories } = getState().conditionReducer;
    const query = getQuery(categories);
    const cards = await fetchPostsWith({ query });
    dispatch(setCards(cards));
  };
}
