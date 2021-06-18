import React from 'react';
import { useHistory } from 'react-router';
import CardsContainer from '#containers/CardsContainer';
import * as S from './style';
import { useAppSelector } from '#hooks/useAppSelector';
import Edit from './Edit';

const MyPage = () => {
  const history = useHistory();

  const handleClickCard = (postIdx: number) => {
    const url = `/articleDetail/${postIdx}`;
    history.push(url);
  };

  const userData = useAppSelector((state) => state.userReducer);

  return (
    <div>
      {userData.nickname && (
        <>
          <S.ProfileWrapper>
            <img src={userData.profile} alt="썸네일" />
            <div className="content">
              <div className="header">
                <h1>{userData.nickname}</h1>
                <div className="edit-btn">
                  <Edit />
                </div>
              </div>
              <h2>{userData.job}</h2>
              <p>{userData.intro}</p>
            </div>
          </S.ProfileWrapper>
          <S.Tabs>
            <span className="bold">작성한 회고 0</span>
            <span>작성 중인 회고 0</span>
            <span>최근 읽은 회고 0</span>
            <span>스크랩한 회고 0</span>
          </S.Tabs>
          <CardsContainer onClickCard={handleClickCard} />
        </>
      )}
    </div>
  );
};

export default MyPage;
