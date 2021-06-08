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

export const getRefreshToken = async (): Promise<string | null> => {
  /* eslint-disable no-console */
  try {
    const refreshTokenValue = document.cookie.split('=')[1];
    const res = await refreshInstance.post('auth/reissue', {
      refreshToken: refreshTokenValue,
    });
    return res.data.data.accessToken;
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

    // // 토큰 만료시간이 지났다면
    if (decode.exp < nowDate) {
      const newAccessToken = await getRefreshToken();
      if (newAccessToken) {
        /* eslint-disable no-param-reassign */
        window.localStorage.setItem('accessToken', newAccessToken);
      }
    }
    config.headers.Authorization = `Bearer ${window.localStorage.getItem('accessToken')}`;
    return config;
  }
  console.log('accessToken이 로컬에 없음');
  return config;
};

export const checkRefreshAccessToken = async (config: AxiosRequestConfig) => {
  const accessToken = window.localStorage.getItem('accessToken');
  config.headers.Authorization = `Bearer ${accessToken}`;
  return config;
};

export default checkToken;
