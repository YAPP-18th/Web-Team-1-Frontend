import { createSlice } from '@reduxjs/toolkit';

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
    setCategories(state, { payload: { category, checked } }) {
      return {
        ...state,
        categories: {
          ...state.categories,
          [category]: checked,
        },
      };
    },
  },
});

export const { setCategories } = actions;
export default conditionReducer;
