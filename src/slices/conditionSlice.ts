import { createSlice } from '@reduxjs/toolkit';

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
