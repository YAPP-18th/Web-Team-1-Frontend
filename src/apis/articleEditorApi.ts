import { tokenInstance } from '#apis/common';
/* eslint-disable no-console */

export interface PostArticleData {
  category: string;
  contents: string;
  imageList: Array<string>;
  tagList: Array<string>;
  templateIdx: number;
  title: string | null;
}

export interface UpdateArticleData {
  category: string;
  contents: string;
  title: string | null;
  tagList: Array<string>;
}

export const postArticle = async (data: PostArticleData): Promise<number | null> => {
  try {
    const res = await tokenInstance.post('/posts', data);
    return res.data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const updateArticle = async (
  index: number,
  data: UpdateArticleData,
): Promise<number | null> => {
  try {
    const res = await tokenInstance.put(`/posts/${index}`, data);
    return res.data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getTemplate = async (templateIdx: number): Promise<string | null> => {
  try {
    const res = await tokenInstance.get(`/templates/${templateIdx}`);
    return res.data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
