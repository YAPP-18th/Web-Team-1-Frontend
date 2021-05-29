import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface EditorState {
  category: string;
  tag: Array<string>;
  templateIdx: number;
  isUpdate: boolean;
}

const initialState: EditorState = {
  category: '',
  tag: [],
  templateIdx: 0,
  isUpdate: false,
};
/* eslint-disable no-param-reassign */
const { actions: editorActions, reducer: articleEditorReducer } = createSlice({
  name: 'articleEditor',
  initialState,
  reducers: {
    setEditorData: (state, action: PayloadAction<EditorState>) => {
      state.category = action.payload.category;
      state.tag = action.payload.tag;
      state.templateIdx = action.payload.templateIdx;
      state.isUpdate = action.payload.isUpdate;
    },
  },
});

export { editorActions, EditorState };
export default articleEditorReducer;
