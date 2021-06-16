import React, { useState } from 'react';
import { alertActions } from 'slices/alertSlice';
import { fetchProfile } from 'slices/userSlice';
import ProfileModal from '#components/ProfileModal';
import { useAppSelector } from '#hooks/useAppSelector';
import { updateMyProfile, uploadProfileImage } from '#apis/myPage';
import { useAppDispatch } from '#hooks/useAppDispatch';

const ProfileModalContainer = () => {
  const dispatch = useAppDispatch();

  const userData = useAppSelector((state) => state.userReducer);
  const [user, setUser] = useState(userData);
  const [image, setImage] = useState<null | File>(null);

  const [modal, setModal] = useState(false);

  const toggle = () => {
    // 모달 새로 띄우면, 이전에 쓰던 변경사항 없애고 실제 값(리덕스값)으로 초기화
    if (!modal) {
      setUser(userData);
    }
    setModal(!modal);
  };

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onClick = async () => {
    let imageUrl;
    let result;
    if (image) {
      imageUrl = await uploadProfileImage(image);
      if (imageUrl) {
        result = await updateMyProfile({
          ...user,
          profile: imageUrl,
        });
      }
    } else {
      result = await updateMyProfile(user);
    }
    if (result) {
      dispatch(fetchProfile());
      dispatch(
        alertActions.setAlert({
          isShow: true,
          message: '프로필 설정이 완료되었습니다🥳',
        }),
      );
      toggle();
    }
  };

  return (
    <>
      <button type="button" onClick={toggle}>
        프로필모달 임시 버튼
      </button>
      {modal && userData.name && (
        <ProfileModal
          toggle={toggle}
          user={user}
          onChange={onChange}
          onClick={onClick}
          setImage={setImage}
        />
      )}
    </>
  );
};

export default ProfileModalContainer;
