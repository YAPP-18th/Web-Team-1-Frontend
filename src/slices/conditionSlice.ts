import { createSlice } from '@reduxjs/toolkit';
import { AppThunk } from 'slices';
import { fetchPostsWith } from '#apis/fetchCardList';
import { setCards } from './cardsSlice';
import { getQuery } from '../utils';

const initialCheckedState = {
  total: true,
  marketing: false,
  design: false,
  plan: false,
  develop: false,
};

const { actions, reducer: conditionReducer } = createSlice({
  name: 'condition',
  initialState: {
    categoryCheckedState: initialCheckedState,
  },
  reducers: {
    setCategories(state, { payload: { id, checked } }) {
      if (id === 'total') {
        return {
          ...state,
          categoryCheckedState: {
            ...initialCheckedState,
          },
        };
      }

      return {
        ...state,
        categoryCheckedState: {
          ...state.categoryCheckedState,
          total: false,
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
    const { categoryCheckedState } = getState().conditionReducer;
    const query = getQuery(categoryCheckedState);
    const cards = await fetchPostsWith({ query });
    dispatch(setCards(cards));
  };
}
