import { createSlice } from '@reduxjs/toolkit';
import { isAllDisable } from '../utils';

const initialCheckedState = {
  total: true,
  marketing: true,
  design: true,
  plan: true,
  develop: true,
};

const { actions, reducer: conditionReducer } = createSlice({
  name: 'condition',
  initialState: {
    categoryCheckedState: initialCheckedState,
    pageIndex: 0,
    next: true,
  },
  reducers: {
    setCategories(state, { payload: { id, checked } }) {
      const newCategories = {
        ...state.categoryCheckedState,
        [id]: checked,
      };
      const { design, develop, marketing, plan } = newCategories;

      if (id === 'total' || (design && develop && marketing && plan)) {
        return {
          ...state,
          categoryCheckedState: initialCheckedState,
        };
      }
      if (isAllDisable(newCategories)) {
        return state;
      }
      return {
        ...state,
        categoryCheckedState: {
          ...newCategories,
          total: false,
        },
      };
    },
    setPageIndex(state, { payload: pageIndex }) {
      return {
        ...state,
        pageIndex,
      };
    },
    setNext(state, { payload: next }) {
      return {
        ...state,
        next,
      };
    },
  },
});

export const { setCategories, setPageIndex, setNext } = actions;
export default conditionReducer;
