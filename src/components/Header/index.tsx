import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useCookies } from 'react-cookie';
import { useAppSelector } from '#hooks/useAppSelector';
import { color } from '#styles/index';
import Button from '#components/Atoms/Button';
import { IconPaths, IconWrapper } from '#components/Atoms';

import * as S from './style';
import ArticleModalContainer from '#containers/ArticleModalContainer';
import { LoginModal } from '#components/Organisms/Modal';
import ProfileModalContainer from '#containers/ProfileModalContainer';
import Hamburger from '#components/Atoms/Icon/SVG/Hamburger';

export default function Header() {
  const [isShowedSignInModal, setIsShowedSignInModal] = useState(false);
  const [isShowedMenu, setIsShowedMenu] = useState(false);
  const [isShowedQuickWrite, setIsShowedQuickWrite] = useState(true);
  const [isLogined, setIsLogined] = useState(false);
  const [, , removeCookie] = useCookies(['JWT-Refresh-Token']);
  const { category } = useAppSelector((state) => state.articleEditorReducer);
  const userData = useAppSelector((state) => state.userReducer);

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
            <HamburgerWrapper onClick={handleClickHamburger}>
              <Hamburger />
            </HamburgerWrapper>
            {isShowedMenu && userData.nickname && (
              <S.MenuWrapper>
                <div className="profile">
                  <img src={userData.profile} alt="썸네일" />
                  <div className="content">
                    <p>{userData.nickname}</p>
                    <button type="button" className="logout" onClick={onClickLogout}>
                      로그아웃
                    </button>
                  </div>
                </div>
                <button type="button" className="menu-item">
                  작성한 회고
                </button>
                <button type="button" className="menu-item">
                  작성 중인 회고
                </button>
                <button type="button" className="menu-item">
                  최근 읽은 회고
                </button>
                <button type="button" className="menu-item">
                  스크랩한 회고
                </button>

                <ProfileModalContainer />
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
  padding: 60px 0px 60px 0;
  margin-right: 2px;
`;

const Logo = styled(Link)`
  font-family: 'RIDIBatang';
  font-size: 32px;
  line-height: 32px;
  font-weight: 400;
  letter-spacing: -0.06em;
  color: ${color.gray || 'none'};
`;

const HamburgerWrapper = styled.div`
  cursor: pointer;
`;
