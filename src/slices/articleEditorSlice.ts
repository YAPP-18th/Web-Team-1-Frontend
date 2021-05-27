import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface EditorState {
  category: string;
  tag: Array<string>;
}

const initialState: EditorState = {
  category: '',
  tag: [],
};
/* eslint-disable no-param-reassign */
const { actions: editorActions, reducer: articleEditorReducer } = createSlice({
  name: 'articleEditor',
  initialState,
  reducers: {
    setEditorData: (state, action: PayloadAction<EditorState>) => {
      state.category = action.payload.category;
      state.tag = action.payload.tag;
    },
  },
});

export { editorActions, EditorState };
export default articleEditorReducer;
