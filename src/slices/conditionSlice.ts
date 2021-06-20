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
