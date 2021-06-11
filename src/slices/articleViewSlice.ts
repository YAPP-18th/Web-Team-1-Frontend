import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { tagData } from '#apis/articleViewApi';

interface ViewState {
  category: string;
  contents: string;
  tag: Array<tagData>;
  title: string;
  index: number;
  templateIdx: number;
}

const initialState: ViewState = {
  category: '',
  contents: '',
  tag: [],
  title: '',
  index: -1,
  templateIdx: -1,
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
      state.templateIdx = action.payload.templateIdx;
    },
  },
});

export { viewActions, ViewState };
export default articleViewReducer;
