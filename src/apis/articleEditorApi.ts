import instance from '#apis/common';
/* eslint-disable no-console */

export interface PostArticleData {
  category: string;
  contents: string;
  image: Array<string>;
  tag: Array<string>;
  templateIdx: number;
  title: string | null;
}

export const postArticle = async (data: PostArticleData): Promise<number> => {
  try {
    const res = await instance.post('/posts', data);
    return res.data.data;
  } catch (error) {
    console.log(error);
    return -1;
  }
};

export const getTemplate = async (templateIdx: number): Promise<string | null> => {
  try {
    const res = await instance.get(`/templates/${templateIdx}`);
    return res.data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};