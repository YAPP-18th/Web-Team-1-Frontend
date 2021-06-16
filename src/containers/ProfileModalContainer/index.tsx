import React, { useState } from 'react';
import ProfileModal from '#components/ProfileModal';

const ProfileModalContainer = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  // const [userData, setUserData] = useState({
  //   nickname: '',
  //   job: '',
  //   intro: '',
  //   profile: '',
  // });

  return (
    <>
      <button type="button" onClick={toggle}>
        프로필모달 임시 버튼
      </button>
      {modal && <ProfileModal toggle={toggle} />}
    </>
  );
};

export default ProfileModalContainer;
