import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { editorActions, InnerArticleState } from 'slices/articleEditorSlice';
import thumbnail from 'assets/images/thumbnail.png';
import { useCookies } from 'react-cookie';
import { color } from '#styles/index';
import Button from '#components/Atoms/Button';
import { LoginModal } from '#components/Organisms/Modal';
import ArticleModal from '#components/ArticleModal';
import { IconPaths, IconWrapper } from '#components/Atoms';
import { useAppDispatch } from '#hooks/useAppDispatch';

import * as S from './style';

export interface TagItem {
  id: number;
  text: string;
}

let tagCount = 0;

export default function Header() {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const [, , removeCookie] = useCookies(['JWT-Refresh-Token']);

  const [isShowedSignInModal, setIsShowedSignInModal] = useState(false);
  const [isShowedArticleModal, setIsShowedArticleModal] = useState(false);
  const [isShowedMenu, setIsShowedMenu] = useState(false);
  const [isLogined, setIsLogined] = useState(false);
  const modalToggle = () => setIsShowedArticleModal(!isShowedArticleModal);

  const [data, setData] = useState({
    category: '',
    templateIdx: 0,
  });

  const [tagList, setTagList] = useState<Array<TagItem>>([]);
  const [warning, setWarning] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onClickLogout = () => {
    removeCookie('JWT-Refresh-Token');
    window.localStorage.removeItem('accessToken');
    setIsLogined(false);
  };

  const onClickWriteBtn = () => {
    if (data.category === '' || data.templateIdx === 0) return setWarning(true);

    const newTagList = tagList.map((item) => item.text);

    const reduxData: InnerArticleState = {
      category: data.category,
      tag: newTagList,
      templateIdx: data.templateIdx,
    };

    dispatch(editorActions.setEditorData(reduxData));
    history.push('/articleCreate');

    modalToggle();
  };

  const addTag = (tagText: string) => {
    if (tagList.length >= 3) {
      return;
    }

    setTagList([
      ...tagList,
      {
        id: tagCount,
        text: tagText,
      },
    ]);
    tagCount += 1;
  };

  const deleteTag = (tagId: number) => {
    const newTagList = tagList.filter((item) => item.id !== tagId);
    setTagList(newTagList);
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
      {isShowedArticleModal && (
        <ArticleModal
          onChange={onChange}
          onClick={onClickWriteBtn}
          isWarning={warning}
          toggle={modalToggle}
          addTag={addTag}
          tagList={tagList}
          deleteTag={deleteTag}
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
