import { AxiosResponse } from 'axios';
import { tokenInstance, instance } from '#apis/common';
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
  templateIdx: number;
}

export interface ArticleDetailData {
  result: ArticleResultData;
  scrap: boolean;
  writer: boolean;
}

export const getArticleDetail = async (index: string): Promise<AxiosResponse | null> => {
  const requestInstance = window.localStorage.getItem('accessToken') ? tokenInstance : instance;

  try {
    const res = await requestInstance.get(`/posts/${index}`);
    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const deleteArticle = async (index: string): Promise<AxiosResponse | null> => {
  try {
    const res = await tokenInstance.delete(`/posts/${index}`);
    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const scrapArticle = async (index: number): Promise<AxiosResponse | null> => {
  try {
    const res = await tokenInstance.post(`/likes`, { postIdx: index });
    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const cancelScrapArticle = async (index: number): Promise<AxiosResponse | null> => {
  try {
    const res = await tokenInstance.delete(`/likes/${index}`);
    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const createComment = async (
  index: number,
  contents: string,
): Promise<AxiosResponse | null> => {
  try {
    const res = await tokenInstance.post(`/comments`, {
      comments: contents,
      postIdx: index,
    });
    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const deleteComment = async (commentIndex: number): Promise<AxiosResponse | null> => {
  try {
    const res = await tokenInstance.delete(`/comments/${commentIndex}`);
    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

// export const updateComment = async (commentIndex: number): Promise<AxiosResponse | null> => {
//   try {
//     const res = await tokenInstance.delete(`/comments/${commentIndex}`);
//     return res.data;
//   } catch (error) {
//     console.log(error);
//     return null;
//   }
// };
