import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { editorActions, EditorState } from 'slices/articleEditorSlice';
import thumbnail from 'assets/images/thumbnail.png';
import { color } from '#styles/index';
import Button from '#components/Atoms/Button';
import { LoginModal } from '#components/Organisms/Modal';
import ArticleModal from '#components/ArticleModal';
import { IconPaths, IconWrapper } from '#components/Atoms';
import { useAppDispatch } from '#hooks/useAppDispatch';
import * as S from './style';

export default function Header() {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const [isShowedSignInModal, setIsShowedSignInModal] = useState(false);
  const [isShowedArticleModal, setIsShowedArticleModal] = useState(false);
  const [isShowedMenu, setIsShowedMenu] = useState(false);
  const [isLogined, setIsLogined] = useState(false);
  const modalToggle = () => setIsShowedArticleModal(!isShowedArticleModal);

  const [data, setData] = useState({
    category: '',
    tag: '',
    templateIdx: 0,
  });

  const [warning, setWarning] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onClickWriteBtn = () => {
    if (data.category === '' || data.templateIdx === 0) return setWarning(true);
    const tagList = data.tag
      .split('#')
      .map((tag) => {
        return tag.split(' ')[0];
      })
      .filter((tmp) => tmp !== '');
    const reduxData: EditorState = {
      category: data.category,
      tag: tagList,
      templateIdx: data.templateIdx,
      isUpdate: false,
    };
    dispatch(editorActions.setEditorData(reduxData));
    history.push('/articleEditor');

    modalToggle();
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

  return (
    <>
      <HeaderWrapper>
        <Logo to="/">돌아보다,</Logo>
        {isLogined ? (
          <S.LoginAfter>
            <Button buttonColor={{ background: 'gray' }} onClick={modalToggle}>
              바로 회고하기
              <IconWrapper icon={IconPaths.Glitter} />
            </Button>
            <IconWrapper icon={IconPaths.Hamburger} onClick={handleClickHamburger} />
            {isShowedMenu && (
              <S.MenuWrapper>
                <div className="profile">
                  <img src={thumbnail} alt="썸네일" />
                  <div className="content">
                    <p>이름</p>
                    <span>로그아웃</span>
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
      {isShowedArticleModal && (
        <ArticleModal
          onChange={onChange}
          onClick={onClickWriteBtn}
          isWarning={warning}
          toggle={modalToggle}
        />
      )}
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
