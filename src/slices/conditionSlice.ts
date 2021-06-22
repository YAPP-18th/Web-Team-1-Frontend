import { createSlice } from '@reduxjs/toolkit';
import { isAllDisable } from '../utils';

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
    pageIndex: 0,
    next: true,
  },
  reducers: {
    setCategories(state, { payload: { id, checked } }) {
      const newCategories = {
        ...state.categoryCheckedState,
        [id]: checked,
      };

      if (isAllDisable(newCategories)) {
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
            ...newCategories,
            total: false,
          },
        };
      }
      return {
        ...state,
        categoryCheckedState: {
          ...initialCheckedState,
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
