import React from 'react';
import styled from 'styled-components';

interface Props {
  header: string;
  body: string;
  btnMsg: string;
  toggle: () => void;
  onClick: () => void;
}

const StyledModalContainer = styled.div`
  background-color: hsla(0, 0%, 0%, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: 0.3 ease-in;
`;

const StyledModal = styled.div`
  background: #fefefe;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  position: absolute;
  overflow: hidden;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 100%;
  padding: 50px;
  width: 400px;
  height: 240px;
`;

const ModalHeader = styled.p`
  font-family: Apple SD Gothic Neo;
  font-weight: bold;
  font-size: 24px;
  line-height: 125%;
  letter-spacing: -0.03em;
  color: #333333;
  text-align: center;
  margin-bottom: 10px;
`;

const ModalBody = styled.p`
  font-family: Apple SD Gothic Neo;
  font-size: 18px;
  line-height: 150%;
  text-align: center;
  letter-spacing: -0.04em;
  max-width: 600px;
  color: #666666;
`;

const ModalFooter = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 48px;
`;

const FooterBtn = styled.button`
  border: none;
  background-color: transparent;
  font-family: Apple SD Gothic Neo;
  font-size: 18px;
  line-height: 100%;
  text-align: center;
  letter-spacing: -0.04em;
  cursor: pointer;
  color: #666666;
`;

const ColorBtn = styled(FooterBtn)`
  color: #6a84e1;
`;

const ConfirmModal = ({ header, body, btnMsg, toggle, onClick }: Props) => {
  return (
    <StyledModalContainer>
      <StyledModal>
        <ModalHeader>{header}</ModalHeader>
        <ModalBody>{body}</ModalBody>
        <ModalFooter>
          <FooterBtn onClick={toggle}>취소</FooterBtn>
          <ColorBtn onClick={onClick}>{btnMsg}</ColorBtn>
        </ModalFooter>
      </StyledModal>
    </StyledModalContainer>
  );
};

export default ConfirmModal;
