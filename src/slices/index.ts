import { configureStore } from '@reduxjs/toolkit';

import cardsReducer from './cardsSlice';
import alertReducer from './alertSlice';
import articleEditorReducer from './articleEditorSlice';

export const store = configureStore({
  reducer: {
    cardsReducer,
    articleEditorReducer,
    alertReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
