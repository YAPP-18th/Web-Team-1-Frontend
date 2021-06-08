import { AxiosRequestConfig } from 'axios';
// import axios, { AxiosRequestConfig } from 'axios';
import jwtDecode from 'jwt-decode';
import { useCookies, Cookies } from 'react-cookie';
import { refreshInstance, instance } from './common';

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
    console.log(document.cookie.split('=')[1]);
    const refreshTokenValue = document.cookie.split('=')[1];
    const res = await instance.post('auth/reissue', {
      refreshToken: refreshTokenValue,
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
