import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://15.165.67.119:9000/api/v1/',
  // headers: {
  //   // 글 작성은 로그인이 필요한 기능이므로, 임시로 토큰을 받아와 헤더에 더했습니다.
  //   Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJhdXRoIjoiUk9MRV9NRU1CRVIiLCJuaWNrbmFtZSI6IuyehOyduO2YuCIsInVzZXJfaWR4IjozLCJleHAiOjE2MjIyMTQ4OTMsImlhdCI6MTYyMjIxNDU5M30.9O2mkNOUyxppnte1A81LPwsHwDlVDm_MxbKNPUaPNuurzM1r3h-KE_askQ3JUntWdnn-kKJ33yrx95Y36N9Zfw`,
  // },
});

export default instance;
