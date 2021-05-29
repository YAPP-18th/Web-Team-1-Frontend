import { createSlice } from '@reduxjs/toolkit';

const { actions, reducer: conditionReducer } = createSlice({
  name: 'condition',
  initialState: {
    sortBy: '최신순',
  },
  reducers: {
    setSort(state, { payload: sortBy }) {
      return {
        ...state,
        sortBy,
      };
    },
  },
});

export const { setSort } = actions;
export default conditionReducer;
