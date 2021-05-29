import { createSlice } from '@reduxjs/toolkit';

const { actions, reducer: conditionReducer } = createSlice({
  name: 'condition',
  initialState: {
    sortBy: '최신순',
  },
  reducers: {
    setSortBy(state, { payload: sortBy }) {
      return {
        ...state,
        sortBy,
      };
    },
  },
});

export const { setSortBy } = actions;
export default conditionReducer;
