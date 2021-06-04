import { AxiosResponse } from 'axios';
import instance from '#apis/common';
/* eslint-disable no-console */

export interface tagData {
  tag: string;
  tagIdx: number;
}

export interface ArticleResultData {
  category: string;
  commentCnt: number;
  contents: string;
  createdAt: string;
  nickname: string;
  postIdx: number;
  profile: string;
  tagList: Array<tagData>;
  title: string;
  view: number;
}

export interface ArticleDetailData {
  result: ArticleResultData;
  scrap: boolean;
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
