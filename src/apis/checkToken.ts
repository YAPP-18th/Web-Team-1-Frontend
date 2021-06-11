import { AxiosRequestConfig } from 'axios';
import jwtDecode from 'jwt-decode';
import { refreshInstance } from './common';

/* eslint-disable no-console */

interface JWT {
  auth: string;
  exp: number;
  iat: number;
  isnew: boolean;
  nickname: string;
  user_idx: number;
}

const getRefreshedAccessToken = async (): Promise<string | null> => {
  try {
    // 쿠키 값 파싱
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

// 토큰과 요청을 보낼 때, 유효한 토큰인지 체크하는 인터셉터
const checkTokenIntercepter = async (config: AxiosRequestConfig) => {
  const accessToken = window.localStorage.getItem('accessToken');

  if (!accessToken) {
    throw new Error('토큰이 없습니다.');
  }

  const decode: JWT = jwtDecode(accessToken);

  // 토큰 만료시간이 지났다면 토큰교체
  if (decode.exp < new Date().getTime() / 1000) {
    const newAccessToken = await getRefreshedAccessToken();
    if (newAccessToken) {
      /* eslint-disable no-param-reassign */
      window.localStorage.setItem('accessToken', newAccessToken);
    }
  }
  config.headers.Authorization = `Bearer ${window.localStorage.getItem('accessToken')}`;
  return config;
};

const putExpiredAccessTokenIntercepter = async (config: AxiosRequestConfig) => {
  const accessToken = window.localStorage.getItem('accessToken');
  config.headers.Authorization = `Bearer ${accessToken}`;
  return config;
};

export { checkTokenIntercepter, putExpiredAccessTokenIntercepter };
