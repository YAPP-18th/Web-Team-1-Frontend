import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  name: string;
  nickname: string;
  profile: string;
  job: string;
  intro: string;
}

const { actions: userActions, reducer: userReducer } = createSlice({
  name: 'user',
  initialState: {
    name: '',
    nickname: '',
    profile: '',
    job: '',
    intro: '',
  },

  /* eslint-disable no-param-reassign */
  reducers: {
    setAlert: (state, action: PayloadAction<UserState>) => {
      state.name = action.payload.name;
      state.nickname = action.payload.nickname;
      state.profile = action.payload.profile;
      state.job = action.payload.job;
      state.intro = action.payload.intro;
    },
  },
});

export { userActions, UserState };
export default userReducer;
