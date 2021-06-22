import { instance } from '#apis/common';

interface Card {
  postIdx: number;
  title: string;
  category: string;
  contents: string;
  nickname: string;
  profile: string;
  tag: string;
  view: number;
  created_at: string;
  commentCnt: number;
  scrapCnt: number;
}

interface Data {
  result: Card[];
  next: boolean;
}

// const baseUrl = 'http://ec2-15-165-67-119.ap-northeast-2.compute.amazonaws.com/api/v1';
export const fetchCardList = async ({ query }: { query: string }): Promise<Data> => {
  let url;
  if (query === 'total') {
    url = `/posts/lists?page=0&pageSize=8`;
  } else {
    url = `/posts/search?page=0&pageSize=8&query=${query}&type=category`;
  }

  try {
    const { data } = await instance.get(url);
    return data.data;
  } catch (error) {
    throw new Error(error);
  }
};
