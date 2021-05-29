import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ViewState {
  category: string;
  contents: string;
  tag: Array<string>;
  title: string;
  index: number;
}

const initialState: ViewState = {
  category: '',
  contents: '',
  tag: [],
  title: '',
  index: -1,
};

/* eslint-disable no-param-reassign */
const { actions: viewActions, reducer: articleViewReducer } = createSlice({
  name: 'articleView',
  initialState,
  reducers: {
    setViewData: (state, action: PayloadAction<ViewState>) => {
      state.category = action.payload.category;
      state.contents = action.payload.contents;
      state.tag = action.payload.tag;
      state.title = action.payload.title;
      state.index = action.payload.index;
    },
  },
});

export { viewActions, ViewState };
export default articleViewReducer;
