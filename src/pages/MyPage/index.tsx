import React, { useState } from 'react';
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
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
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
        </>
      )}
    </div>
  );
};

export default MyPage;
