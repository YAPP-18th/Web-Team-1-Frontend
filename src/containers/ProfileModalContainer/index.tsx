import React, { useState } from 'react';
import { startAlert } from 'slices/alertSlice';
import { fetchProfile } from 'slices/userSlice';
import ProfileModal, { Warning } from '#components/ProfileModal';
import { useAppSelector } from '#hooks/useAppSelector';
import { checkDuplicatedNickname, updateMyProfile, uploadProfileImage } from '#apis/myPage';
import { useAppDispatch } from '#hooks/useAppDispatch';

const ProfileModalContainer = () => {
  const dispatch = useAppDispatch();

  const userData = useAppSelector((state) => state.userReducer);
  const [user, setUser] = useState(userData);
  const [image, setImage] = useState<null | File>(null);
  const [warning, setWarning] = useState<Warning>({
    isWarning: false,
    warningMessage: '',
  });

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
    // 닉네임 중복처리부터
    if (userData.nickname !== user.nickname) {
      const isDuplicated = await checkDuplicatedNickname(user.nickname);
      if (isDuplicated) {
        // warning
        setWarning({
          isWarning: true,
          warningMessage: '중복된 닉네임입니다.',
        });
        return;
      }
    }
    setWarning({
      isWarning: false,
      warningMessage: '',
    });
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
      // dispatch(
      //   alertActions.showAlert({
      //     isFadeIn: true,
      //     message: '프로필 설정이 완료되었습니다🥳',
      //   }),
      // );
      dispatch(startAlert('프로필 설정이 완료되었습니다 🥳'));
      toggle();
    }
  };

  return (
    <>
      <button type="button" onClick={toggle} className="menu-item">
        프로필모달 임시 버튼
      </button>
      {modal && userData.name && (
        <ProfileModal
          toggle={toggle}
          user={user}
          onChange={onChange}
          onClick={onClick}
          setImage={setImage}
          warning={warning}
        />
      )}
    </>
  );
};

export default ProfileModalContainer;
