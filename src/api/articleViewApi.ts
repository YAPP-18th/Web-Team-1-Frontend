import axios, { AxiosResponse } from 'axios';

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
}

export const getArticleDetail = async (index: string): Promise<AxiosResponse | null> => {
  try {
    const res = await axios.get(`http://15.165.67.119:9000/api/v1/posts/${index}`);
    return res.data;
  } catch (error) {
    /* eslint-disable no-console */
    console.log(error);
    return null;
  }
};
