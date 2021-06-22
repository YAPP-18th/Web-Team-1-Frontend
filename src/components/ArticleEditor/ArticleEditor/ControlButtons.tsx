import React, { useState } from 'react';
import styled from 'styled-components';
import ArticleModalContainer from '#containers/ArticleModalContainer';

interface Props {
  onClick: () => void;
}

const StyledControlButtons = styled.div`
  position: absolute;
  right: 56px;
  top: 56px;
`;

const Button = styled.button`
  border-radius: 60px;
  padding: 12px 16px 10px;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 18px;
  letter-spacing: -0.04em;
  border: none;
  cursor: pointer;
`;

const WriteButton = styled(Button)`
  background-color: #6a84e1;
  color: #fefefe;
  margin-left: 8px;
`;

const SettingsButton = styled(Button)`
  background-color: transparent;
  color: #acaba5;
  border: 1px solid #cdccc6;
`;

const ControlButtons = ({ onClick }: Props) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <StyledControlButtons>
      <SettingsButton onClick={toggle}>글 설정 변경</SettingsButton>
      <WriteButton onClick={onClick}>작성완료</WriteButton>
      {modal && <ArticleModalContainer toggle={toggle} />}
    </StyledControlButtons>
  );
};

export default ControlButtons;
