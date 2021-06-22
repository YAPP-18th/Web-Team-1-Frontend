import React, { useState } from 'react';
import { startAlert } from 'slices/alertSlice';
import { fetchProfile } from 'slices/userSlice';
import ProfileModal, { Warning } from '#components/Profile/ProfileModal';
import { useAppSelector } from '#hooks/useAppSelector';
import { checkDuplicatedNickname, updateMyProfile, uploadProfileImage } from '#apis/userApi';
import { useAppDispatch } from '#hooks/useAppDispatch';

interface Props {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}
const ProfileModalContainer = ({ modal, setModal }: Props) => {
  const dispatch = useAppDispatch();
  const userData = useAppSelector((state) => state.userReducer);
  const [user, setUser] = useState(userData);
  const [image, setImage] = useState<null | File>(null);
  const [warning, setWarning] = useState<Warning>({
    isWarning: false,
    warningMessage: '',
  });

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
    // 필수값 validation
    if (!user.nickname) {
      setWarning({
        isWarning: true,
        warningMessage: '닉네임을 입력하세요',
      });
      return;
    }

    if (!user.job) {
      setWarning({
        isWarning: true,
        warningMessage: '포지션을 선택하세요',
      });
      return;
    }

    // 닉네임 중복처리
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
      dispatch(startAlert('프로필 설정이 완료되었습니다 🥳'));
      toggle();
    }
  };

  return (
    <>
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
