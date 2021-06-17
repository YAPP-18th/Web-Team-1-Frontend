import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { AppThunk } from './index';

interface AlertTotalState {
  timer1: NodeJS.Timeout | undefined;
  timer2: NodeJS.Timeout | undefined;
  isFadeIn: boolean;
  isFadeOut: boolean;
  message: string;
}

interface AlertState {
  isFadeIn: boolean;
  message: string;
}
interface Timer {
  timer1: NodeJS.Timeout | undefined;
  timer2: NodeJS.Timeout | undefined;
}
const initialState: AlertTotalState = {
  timer1: undefined,
  timer2: undefined,
  isFadeIn: false,
  isFadeOut: false,
  message: '',
};

const { actions: alertActions, reducer: alertReducer } = createSlice({
  name: 'alert',
  initialState,

  /* eslint-disable no-param-reassign */
  reducers: {
    showAlert: (state, action: PayloadAction<AlertState>) => {
      state.isFadeIn = action.payload.isFadeIn;
      state.message = action.payload.message;
    },
    setTimer: (state, action: PayloadAction<Timer>) => {
      state.timer1 = action.payload.timer1;
      state.timer2 = action.payload.timer2;
    },
    hideAlert: (state) => {
      state.isFadeOut = true;
    },
    clearAlert: (state) => {
      state.isFadeIn = false;
      state.isFadeOut = false;
    },
  },
});

export { alertActions, AlertState };
export function startAlert(message: string): AppThunk {
  return async (dispatch) => {
    let timer2;
    const timer1 = setTimeout(() => {
      dispatch(alertActions.hideAlert());
      timer2 = setTimeout(() => {
        dispatch(alertActions.clearAlert());
      }, 2000);
    }, 5000);

    dispatch(
      alertActions.setTimer({
        timer1,
        timer2,
      }),
    );

    dispatch(
      alertActions.showAlert({
        isFadeIn: true,
        message,
      }),
    );
  };
}
export default alertReducer;
