import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { AppThunk } from './index';
import { getMyProfile } from '#apis/myPage';

interface UserState {
  name: string;
  nickname: string;
  profile: string;
  job: string;
  intro: string;
}

const initialState: UserState = {
  name: '',
  nickname: '',
  profile: '',
  job: '',
  intro: '',
};
const { actions: userActions, reducer: userReducer } = createSlice({
  name: 'user',
  initialState,
  /* eslint-disable no-param-reassign */
  reducers: {
    setProfile: (state, action: PayloadAction<UserState>) => {
      state.name = action.payload.name;
      state.nickname = action.payload.nickname;
      state.profile = action.payload.profile;
      state.job = action.payload.job;
      state.intro = action.payload.intro;
    },
    clearProfile: (state) => {
      state.name = '';
      state.nickname = '';
      state.profile = '';
      state.job = '';
      state.intro = '';
    },
  },
});

export { userActions, UserState };

export function fetchProfile(): AppThunk {
  return async (dispatch) => {
    const data = await getMyProfile();
    if (data) {
      dispatch(userActions.setProfile(data));
    }
  };
}
export default userReducer;
