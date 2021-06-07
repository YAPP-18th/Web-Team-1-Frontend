import { AxiosRequestConfig } from 'axios';
// import axios, { AxiosRequestConfig } from 'axios';
import jwtDecode from 'jwt-decode';

interface JWT {
  auth: string;
  exp: number;
  iat: number;
  isnew: boolean;
  nickname: string;
  user_idx: number;
}

const checkToken = async (config: AxiosRequestConfig) => {
  const accessToken = window.localStorage.getItem('accessToken');
  if (accessToken) {
    const decode: JWT = jwtDecode(accessToken);
    const nowDate = new Date().getTime() / 1000;
    /* eslint-disable no-console */

    console.log(decode);
    // // 토큰 만료시간이 지났다면
    if (decode.exp < nowDate) {
      console.log('만료');
    }

    // config.headers['access_token'] = accessToken;
    return config;
  }
  return config;
};
export default checkToken;
