import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InnerArticleState {
  category: string;
  tag: Array<string>;
  templateIdx: number;
}

interface EditorMetaState {
  titleWarning: boolean;
}

interface ArticleEditorSlice {
  category: string;
  tag: Array<string>;
  templateIdx: number;
  titleWarning: boolean;
}

const initialState: ArticleEditorSlice = {
  category: '',
  tag: [],
  templateIdx: 0,
  titleWarning: false,
};
/* eslint-disable no-param-reassign */
const { actions: editorActions, reducer: articleEditorReducer } = createSlice({
  name: 'articleEditor',
  initialState,

  reducers: {
    setEditorData: (state, action: PayloadAction<InnerArticleState>) => {
      state.category = action.payload.category;
      state.tag = action.payload.tag;
      state.templateIdx = action.payload.templateIdx;
    },

    setTitleWarning: (state, action: PayloadAction<EditorMetaState>) => {
      state.titleWarning = action.payload.titleWarning;
    },

    clearEditorSlice: (state) => {
      state.category = '';
      state.tag = [];
      state.templateIdx = 0;
      state.titleWarning = false;
    },
  },
});

export { editorActions, InnerArticleState, EditorMetaState };
export default articleEditorReducer;
