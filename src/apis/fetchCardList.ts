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

// const baseUrl = 'http://ec2-15-165-67-119.ap-northeast-2.compute.amazonaws.com/api/v1';

const urls: { [key: string]: string } = {
  최신순: `/posts/lists/new?page=0&pageSize=20`,
  조회순: `/posts/lists?page=0&pageSize=20`,
};

export const fetchCardList = async ({ sortBy }: { sortBy: string }): Promise<Card[]> => {
  const url = urls[sortBy];

  try {
    const { data } = await instance.get(url);
    return data.data.result;
  } catch (error) {
    throw new Error(error);
  }
};
