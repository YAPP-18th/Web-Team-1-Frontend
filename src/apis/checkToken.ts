import { AxiosRequestConfig } from 'axios';
// import axios, { AxiosRequestConfig } from 'axios';
import jwtDecode from 'jwt-decode';
import { useCookies } from 'react-cookie';
import { refreshInstance } from './common';

interface JWT {
  auth: string;
  exp: number;
  iat: number;
  isnew: boolean;
  nickname: string;
  user_idx: number;
}

export const refreshToken = async (): Promise<number | null> => {
  /* eslint-disable no-console */
  try {
    console.log(useCookies(['JWT-Refresh-Token'])[0].get());
    console.log(useCookies(['JWT-Refresh-Token'])[0]);
    const res = await refreshInstance.post('auth/reissue', {
      refreshToken: useCookies(['JWT-Refresh-Token'])[0].get(),
    });
    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const checkToken = async (config: AxiosRequestConfig) => {
  const accessToken = window.localStorage.getItem('accessToken');
  if (accessToken) {
    const decode: JWT = jwtDecode(accessToken);
    const nowDate = new Date().getTime() / 1000;
    /* eslint-disable no-console */

    console.log('체크합니다');
    // // 토큰 만료시간이 지났다면
    if (decode.exp < nowDate) {
      console.log('만료');
      const newAccessToken = await refreshToken();
      if (newAccessToken) {
        /* eslint-disable no-param-reassign */
        config.headers.access_token = newAccessToken;
      }
    }
    return config;
  }
  return config;
};

export default checkToken;
