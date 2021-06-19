import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { AppThunk } from './index';

interface AlertTotalState {
  timer1: NodeJS.Timeout | undefined | number;
  timer2: NodeJS.Timeout | undefined | number;
  isFadeIn: boolean;
  isFadeOut: boolean;
  message: string;
}

interface AlertMessage {
  // isFadeIn: boolean;
  message: string;
}
interface Timer {
  timer1: NodeJS.Timeout | undefined | number;
  timer2: NodeJS.Timeout | undefined | number;
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
    showAlert: (state, action: PayloadAction<AlertMessage>) => {
      state.isFadeIn = true;
      state.isFadeOut = false;
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

export { alertActions };
export function startAlert(message: string): AppThunk {
  return async (dispatch, state) => {
    // 여기서 이전 타이머들을 가져와서 clear 시켜야함
    const before1 = state().alertReducer.timer1;
    if (before1 !== undefined && typeof before1 !== 'number') {
      clearTimeout(before1);
    }
    const before2 = state().alertReducer.timer2;
    if (before2 !== undefined && typeof before2 !== 'number') {
      clearTimeout(before2);
    }

    const timer1 = setTimeout(() => {
      dispatch(alertActions.hideAlert());
      clearTimeout(timer1);
    }, 5000);

    const timer2 = setTimeout(() => {
      dispatch(alertActions.clearAlert());
      clearTimeout(timer2);
    }, 7000);

    dispatch(
      alertActions.setTimer({
        timer1,
        timer2,
      }),
    );

    dispatch(
      alertActions.showAlert({
        message,
      }),
    );
  };
}
export default alertReducer;
