import instance from '#apis/common';

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

export const fetchCardList = async (): Promise<Card[]> => {
  const url = `http://ec2-15-165-67-119.ap-northeast-2.compute.amazonaws.com/api/v1/posts/lists?page=1&pageSize=20`;

  try {
    const { data } = await instance.get(url);
    return data.data.result;
  } catch (error) {
    throw new Error(error);
  }
};
