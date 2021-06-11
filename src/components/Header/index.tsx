import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import thumbnail from 'assets/images/thumbnail.png';
import { useCookies } from 'react-cookie';
import { useAppSelector } from '#hooks/useAppSelector';
import { color } from '#styles/index';
import Button from '#components/Atoms/Button';
import { IconPaths, IconWrapper } from '#components/Atoms';

import * as S from './style';
import ArticleModalContainer from '#containers/ArticleModalContainer';
import { LoginModal } from '#components/Organisms/Modal';

export default function Header() {
  const [isShowedSignInModal, setIsShowedSignInModal] = useState(false);
  const [isShowedMenu, setIsShowedMenu] = useState(false);
  const [isShowedQuickWrite, setIsShowedQuickWrite] = useState(true);
  const [isLogined, setIsLogined] = useState(false);
  const [, , removeCookie] = useCookies(['JWT-Refresh-Token']);
  const { category } = useAppSelector((state) => state.articleEditorReducer);

  // 로그아웃 버튼 클릭
  const onClickLogout = () => {
    removeCookie('JWT-Refresh-Token');
    window.localStorage.removeItem('accessToken');
    setIsLogined(false);
  };

  // 로그인 버튼 클릭
  const handleClickSignInButton = useCallback(() => {
    setIsShowedSignInModal((prev) => !prev);
  }, []);

  // 햄버거 아이콘 클릭
  const handleClickHamburger = useCallback(() => {
    setIsShowedMenu((prev) => !prev);
  }, []);

  // access token 유무 체크
  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      setIsLogined(true);
    }
  }, []);

  useEffect(() => {
    if (category) {
      setIsShowedQuickWrite(false);
    } else {
      setIsShowedQuickWrite(true);
    }
  }, [category]);

  return (
    <>
      <HeaderWrapper>
        <Logo to="/">돌아보다,</Logo>
        {isLogined ? (
          <S.LoginAfter>
            {isShowedQuickWrite && <ArticleModalContainer />}
            <IconWrapper icon={IconPaths.Hamburger} onClick={handleClickHamburger} />
            {isShowedMenu && (
              <S.MenuWrapper>
                <div className="profile">
                  <img src={thumbnail} alt="썸네일" />
                  <div className="content">
                    <p>이름</p>
                    <button type="button" onClick={onClickLogout}>
                      로그아웃
                    </button>
                  </div>
                </div>
                <span>작성한 회고</span>
                <span>작성 중인 회고</span>
                <span>최근 읽은 회고</span>
                <span>스크랩한 회고</span>
              </S.MenuWrapper>
            )}
          </S.LoginAfter>
        ) : (
          <Button buttonColor={{ background: 'gray' }} onClick={handleClickSignInButton}>
            회원가입 / 로그인
            <IconWrapper icon={IconPaths.Glitter} />
          </Button>
        )}
      </HeaderWrapper>
      <LoginModal isShowed={isShowedSignInModal} onCloseModal={handleClickSignInButton} />
    </>
  );
}

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 60px 0 60px 0;
`;

const Logo = styled(Link)`
  font-family: 'RIDIBatang';
  font-size: 32px;
  line-height: 32px;
  font-weight: 400;
  letter-spacing: -0.06em;
  color: ${color.gray || 'none'};
`;
