import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AlertState {
  isShow: boolean;
  message: string;
}

const { actions: alertActions, reducer: alertReducer } = createSlice({
  name: 'alert',
  initialState: {
    isShow: false,
    message: '',
  },

  /* eslint-disable no-param-reassign */
  reducers: {
    setAlert: (state, action: PayloadAction<AlertState>) => {
      state.isShow = action.payload.isShow;
      state.message = action.payload.message;
    },
  },
});

export { alertActions, AlertState };
export default alertReducer;
