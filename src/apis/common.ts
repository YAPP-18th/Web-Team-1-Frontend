import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://15.165.67.119:9000/api/v1/',
  headers: {
    // 글 작성은 로그인이 필요한 기능이므로, 임시로 토큰을 받아와 헤더에 더했습니다.
    Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJhdXRoIjoiUk9MRV9NRU1CRVIiLCJuaWNrbmFtZSI6IuyehOyduO2YuCIsInVzZXJfaWR4IjozLCJleHAiOjE2MjIyMTY0MjcsImlhdCI6MTYyMjIxNjEyN30.5PFwa9jGfEyRB_sDaq_vTUf1kqXfkSaO-nmcxbRtDIabIXipN3ZsNnvLZI3X6gJvp0lt9rs2swKBY3TKa0U8ag`,
  },
});

export default instance;
