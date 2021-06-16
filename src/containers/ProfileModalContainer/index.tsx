import React, { useState } from 'react';
import ProfileModal from '#components/ProfileModal';
import { useAppSelector } from '#hooks/useAppSelector';

const ProfileModalContainer = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const userData = useAppSelector((state) => state.userReducer);
  const [user, setUser] = useState(userData);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    /* eslint-disable no-console */
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
    // console.log(user);
  };

  return (
    <>
      <button type="button" onClick={toggle}>
        프로필모달 임시 버튼
      </button>
      {modal && userData.name && <ProfileModal toggle={toggle} user={user} onChange={onChange} />}
    </>
  );
};

export default ProfileModalContainer;
