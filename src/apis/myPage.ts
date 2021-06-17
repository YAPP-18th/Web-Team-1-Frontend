// import { AxiosResponse } from 'axios';
import { UserState } from 'slices/userSlice';
import { tokenInstance, instance } from '#apis/common';
/* eslint-disable no-console */

export const getLists = () => {
  return tokenInstance.get('/lists');
};

export const getMyProfile = async (): Promise<UserState | null> => {
  try {
    const res = await tokenInstance.get(`/users/profiles`);
    const { data } = res.data;
    if (!data.job) {
      data.job = '';
    }
    if (!data.intro) {
      data.intro = '';
    }
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const updateMyProfile = async (data: UserState): Promise<number | null> => {
  try {
    await tokenInstance.patch(`/users/profiles`, data);
    return 1;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const uploadProfileImage = async (image: Blob | File): Promise<string | null> => {
  try {
    const formData = new FormData();
    formData.append('file', image);
    const res = await tokenInstance.post(`/images/profiles`, formData);
    return res.data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const checkDuplicatedNickname = async (nickname: string): Promise<boolean | null> => {
  try {
    const res = await instance.get(`/users?nickname=${nickname}`);
    return res.data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
