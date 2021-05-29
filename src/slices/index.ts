import { configureStore, Action } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';

import cardsReducer from './cardsSlice';
import conditionReducer from './conditionSlice';
import alertReducer from './alertSlice';
import articleEditorReducer from './articleEditorSlice';

export const store = configureStore({
  reducer: {
    cardsReducer,
    conditionReducer,
    articleEditorReducer,
    alertReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
