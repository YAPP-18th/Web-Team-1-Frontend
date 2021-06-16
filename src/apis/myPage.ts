// import { AxiosResponse } from 'axios';
import { UserState } from 'slices/userSlice';
import { tokenInstance } from '#apis/common';
/* eslint-disable no-console */

export const getLists = () => {
  return tokenInstance.get('/lists');
};

export const getMyProfile = async (): Promise<UserState | null> => {
  try {
    const res = await tokenInstance.get(`/users/profiles`);
    return res.data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
