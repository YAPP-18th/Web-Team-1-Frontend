import axios from 'axios';
/* eslint-disable no-console */
// Article Editor

export interface PostArticleData {
  category: string;
  contents: string;
  image: Array<string>;
  tag: Array<string>;
  templateIdx: number;
  title: string | null;
}

// 글 작성은 로그인이 필요한 기능이므로, 임시로 토큰을 받아와 헤더에 더했습니다.
const headerData = {
  Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJhdXRoIjoiUk9MRV9NRU1CRVIiLCJuaWNrbmFtZSI6IuyehOyduO2YuCIsInVzZXJfaWR4IjozLCJleHAiOjE2MjIxNzYyNjcsImlhdCI6MTYyMjE3NTk2N30.KXHk9kU5kXzWav4FTBA9VZHnqAuQ3VM6ZtK6EGIOHb0XgNoP0VcFO-7que1PjeoJQeh7OuQSwP5pMmkdVoPbFw`,
};

export const postArticle = async (data: PostArticleData): Promise<number> => {
  try {
    const res = await axios.post('http://15.165.67.119:9000/api/v1/posts', data, {
      headers: headerData,
    });
    return res.data.data;
  } catch (error) {
    console.log(error);
    return -1;
  }
};
