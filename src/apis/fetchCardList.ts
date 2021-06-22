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
export const fetchCardList = async ({ postIdx }: { postIdx: number }): Promise<Data> => {
  const url = `/posts/lists?page=${postIdx}&pageSize=8`;

  try {
    const { data } = await instance.get(url);
    return data.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchCardsWithSearchQuery = async ({
  query,
  postIdx,
}: {
  query: string;
  postIdx: number;
}): Promise<Data> => {
  const url = `/posts/search?page=${postIdx}&pageSize=8&query=${query}&type=category`;

  try {
    const { data } = await instance.get(url);
    return data.data;
  } catch (error) {
    throw new Error(error);
  }
};
