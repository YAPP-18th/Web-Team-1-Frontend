import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { editorActions, EditorState } from 'slices/articleEditorSlice';
import { color } from '#styles/index';
import Button from '#components/Atoms/Button';
import { LoginModal } from '#components/Organisms/Modal';
import ArticleModal from '#components/ArticleModal';
import { IconPaths, IconWrapper } from '#components/Atoms';
import { useAppDispatch } from '#hooks/useAppDispatch';

export default function Header() {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const [isShowedSignInModal, setIsShowedSignInModal] = useState(false);
  const [isShowedArticleModal, setIsShowedArticleModal] = useState(false);
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
    // 카테고리 유효성 검사
    if (data.category === '' || data.templateIdx === 0) {
      setWarning(true);
      return;
    }

    // 해시태그 파싱
    const tagList = data.tag
      .split('#')
      .map((tag) => {
        return tag.split(' ')[0];
      })
      .filter((tmp) => tmp !== '');

    // 리덕스에 저장
    const reduxData: EditorState = {
      category: data.category,
      tag: tagList,
      templateIdx: data.templateIdx,
    };
    dispatch(editorActions.setEditorData(reduxData));

    // 페이지 이동
    history.push('/articleEditor');

    modalToggle();
  };

  // 로그인 버튼 클릭
  const handleClickSignInButton = useCallback(() => {
    setIsShowedSignInModal((prev) => !prev);
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
        <Logo>돌아보다,</Logo>
        {isLogined ? (
          <Button buttonColor={{ background: 'gray' }} onClick={modalToggle}>
            바로 회고하기
            <IconWrapper icon={IconPaths.Glitter} />
          </Button>
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

const Logo = styled.h1`
  font-family: 'RIDIBatang';
  font-size: 32px;
  line-height: 32px;
  font-weight: 400;
  letter-spacing: -0.06em;
  color: ${color.gray || 'none'};
`;
