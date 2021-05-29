import React from 'react';
import CardsContainer from '#containers/CardsContainer';
import * as S from './style';

const MyPage = () => {
  return (
    <div>
      <S.ProfileWrapper>
        <img
          src="https://blog.kakaocdn.net/dn/0mySg/btqCUccOGVk/nQ68nZiNKoIEGNJkooELF1/img.jpg"
          alt="썸네일"
        />
        <div className="content">
          <h1>나같은 견</h1>
          <h2>디자인</h2>
          <p>
            국군은 국가의 안전보장과 국토방위의 신성한 의무를 수행함을 사명으로 하며, 그 정치적
            중립성은 준수된다. 모든 국민은 소급입법에 의하여 참정권의 제한을 받거나 재산권을
            박탈당하지 아니한다.
          </p>
        </div>
      </S.ProfileWrapper>
      <S.Tabs>
        <span className="bold">작성한 회고 0</span>
        <span>작성 중인 회고 0</span>
        <span>최근 읽은 회고 0</span>
        <span>스크랩한 회고 0</span>
      </S.Tabs>
      <CardsContainer />
    </div>
  );
};

export default MyPage;
