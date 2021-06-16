import React, { useState } from 'react';
import { alertActions } from 'slices/alertSlice';
import { fetchProfile } from 'slices/userSlice';
import ProfileModal from '#components/ProfileModal';
import { useAppSelector } from '#hooks/useAppSelector';
import { updateMyProfile } from '#apis/myPage';
import { useAppDispatch } from '#hooks/useAppDispatch';

const ProfileModalContainer = () => {
  const dispatch = useAppDispatch();
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

  const onClick = async () => {
    const result = await updateMyProfile(user);
    if (result) {
      toggle();
      dispatch(fetchProfile());
      dispatch(
        alertActions.setAlert({
          isShow: true,
          message: '프로필 설정이 완료되었습니다🥳',
        }),
      );
    }
  };

  return (
    <>
      <button type="button" onClick={toggle}>
        프로필모달 임시 버튼
      </button>
      {modal && userData.name && (
        <ProfileModal toggle={toggle} user={user} onChange={onChange} onClick={onClick} />
      )}
    </>
  );
};

export default ProfileModalContainer;
