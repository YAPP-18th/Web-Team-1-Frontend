import React, { useState } from 'react';
// import { useHistory } from 'react-router';
// import CardsContainer from '#containers/CardsContainer';
import * as S from './style';
import { useAppSelector } from '#hooks/useAppSelector';
import Edit from './Edit';
import ProfileModalContainer from '#containers/ProfileModalContainer';
import ProfileTab from '#components/Profile/ProfileTab';

const job: { [key: string]: string } = {
  marketing: '마케터 ✍🏻',
  design: '디자이너 🎨',
  plan: '기획자 💡',
  develop: '개발자 💻',
};

const MyPage = () => {
  // const history = useHistory();
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  // const handleClickCard = (postIdx: number) => {
  //   const url = `/articleDetail/${postIdx}`;
  //   history.push(url);
  // };

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
                <button onClick={toggle} type="button" className="edit-btn">
                  <Edit />
                </button>
                {modal && <ProfileModalContainer modal={modal} setModal={setModal} />}
              </div>
              <h2 className="job">{job[userData.job]}</h2>
              <p>{userData.intro}</p>
            </div>
          </S.ProfileWrapper>
          <ProfileTab />
          {/* <S.Tabs>
            <span className="bold">작성한 회고 0</span>
            <span>작성 중인 회고 0</span>
            <span>최근 읽은 회고 0</span>
            <span>스크랩한 회고 0</span>
          </S.Tabs>
          <CardsContainer onClickCard={handleClickCard} /> */}
        </>
      )}
    </div>
  );
};

export default MyPage;
