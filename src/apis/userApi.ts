// import { AxiosResponse } from 'axios';
import { UserState } from 'slices/userSlice';
import { tokenInstance, instance } from '#apis/common';
import { Card } from '#components/Cards';
import { CardWithLikeIdx } from '#components/Profile/ProfileTab/TabContentWithCursor';
/* eslint-disable no-console */
export interface Data {
  result: Card[];
  next: boolean;
}

interface LikeData {
  result: CardWithLikeIdx[];
  next: boolean;
}

export const getMyArticleLists = async (page: number, pageSize: number): Promise<Card[] | null> => {
  try {
    const res = await tokenInstance.get(`/lists?page=${page}&pageSize=${pageSize}`);
    return res.data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getRecentlyViewedLists = async (
  page: number,
  pageSize: number,
): Promise<Card[] | null> => {
  try {
    const res = await tokenInstance.get(`/lists/recent?page=${page}&pageSize=${pageSize}`);
    return res.data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getLikedList = async (page: number, pageSize: number): Promise<LikeData | null> => {
  try {
    const res = await tokenInstance.get(`/likes/lists?page=${page}&pageSize=${pageSize}`);
    return res.data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getProfile = async (index: string): Promise<UserState | null> => {
  try {
    const res = await tokenInstance.get(`/users/profiles/${index}`);
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

export const withdraw = async (): Promise<boolean | null> => {
  try {
    await tokenInstance.delete(`/users/profiles`);
    return true;
  } catch (error) {
    console.log(error);
    return null;
  }
};
