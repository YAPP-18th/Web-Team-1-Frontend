import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import LoginModal, { Props } from './LoginModal';

export default {
  title: 'Organisms/Modal',
  component: LoginModal,
} as Meta;

// 일반적인 버튼인 경우
const LoginModalTemplate: Story<Props> = () => {
  const [isShowedModal, setIsShowedModal] = useState(false);
  const [isShowedQuickWrite, setIsShowedQuickWrite] = useState(false);
  const showQuickWriteToggle = () => setIsShowedQuickWrite(!isShowedQuickWrite);
  const click = () => setIsShowedModal((prev) => !prev);
  return (
    <>
      <button onClick={click} type="button">
        모달 출력 버튼
      </button>
      <LoginModal
        isShowed={isShowedModal}
        onCloseModal={click}
        showQuickWriteToggle={showQuickWriteToggle}
      />
    </>
  );
};
export const Modal = LoginModalTemplate.bind({});
