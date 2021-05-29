import { AxiosResponse } from 'axios';
import instance from '#apis/common';
/* eslint-disable no-console */

export interface ArticleDetailData {
  category: string;
  contents: string;
  created_at: string;
  nickname: string;
  postIdx: number;
  profile: string;
  tag: Array<string>;
  title: string;
  view: number;
  writer: boolean;
}

export const getArticleDetail = async (index: string): Promise<AxiosResponse | null> => {
  try {
    const res = await instance.get(`/posts/${index}`);
    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const deleteArticle = async (index: string): Promise<AxiosResponse | null> => {
  try {
    const res = await instance.delete(`/posts/${index}`);
    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
