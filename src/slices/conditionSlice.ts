import { createSlice } from '@reduxjs/toolkit';

const { reducer: conditionReducer } = createSlice({
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
  reducers: {},
});

export default conditionReducer;
