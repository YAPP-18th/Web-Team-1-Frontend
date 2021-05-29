import React, { memo, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import classnames from 'classnames';
import qs from 'qs';
import { Button, IconPaths, IconWrapper } from '#components/Atoms';
import * as S from './style';

export interface Props {
  className?: string[];
  isShowed: boolean;
  onCloseModal: (e: unknown) => void;
}

const LoginModal = ({ className = [], isShowed = false, onCloseModal }: Props) => {
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const { accessToken, refreshToken } = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });
    if (!accessToken || !refreshToken) return;
    localStorage.setItem('accessToken', accessToken as string);
    localStorage.setItem('refreshToken', refreshToken as string);
    history.push('/');
    return () => {
      onCloseModal(false);
    };
  }, []);

  if (!isShowed) return null;

  return (
    <S.ModalContainer className={classnames('modal', ...className)}>
      <S.ModalWrapper>
        <header>
          <h1>돌아보다,</h1>
          <IconWrapper className={['exit']} icon={IconPaths.Exit} onClick={onCloseModal} />
        </header>
        <p>
          오늘 하루, 이번 프로젝트 정리가 필요하다면 <br />
          소셜 로그인하고 빠르게 회고해보세요!
        </p>
        <div className="button-wrapper">
          <Button
            buttonColor={{ background: 'google' }}
            href="http://ec2-15-165-67-119.ap-northeast-2.compute.amazonaws.com/oauth2/authorization/google"
          >
            <IconWrapper icon={IconPaths.Google} />
            구글
          </Button>
          <Button
            buttonColor={{ background: 'kakao', textColor: 'kakaoText' }}
            href="http://ec2-15-165-67-119.ap-northeast-2.compute.amazonaws.com/oauth2/authorization/kakao"
          >
            <IconWrapper icon={IconPaths.Kakao} />
            카카오
          </Button>
        </div>
      </S.ModalWrapper>
    </S.ModalContainer>
  );
};

export default memo(LoginModal);
