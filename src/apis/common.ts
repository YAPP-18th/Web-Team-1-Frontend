import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://15.165.67.119:9000/api/v1/',
  headers: {
    // 글 작성은 로그인이 필요한 기능이므로, 임시로 토큰을 받아와 헤더에 더했습니다.
    Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJhdXRoIjoiUk9MRV9NRU1CRVIiLCJuaWNrbmFtZSI6IuyehOyduO2YuCIsInVzZXJfaWR4IjozLCJleHAiOjE2MjIxODAyMzMsImlhdCI6MTYyMjE3OTkzM30.HZ_e_rX917UErEyH5fcocbARDWzK4-1FPiMyd19c4-MGS-f3kx_5juXKCIRnc5vgfsxFVOHZVgW8cvPSAdpIvw`,
  },
});

export default instance;
