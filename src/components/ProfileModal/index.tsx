import React from 'react';
import styled from 'styled-components';
import zIndex from '#styles/zIndex';
import ImageDrop from './ImageDrop';

interface Warning {
  isWarning: boolean;
  warningMessage: string;
}

export interface WarningProps {
  visible: boolean;
}

const StyledModalContainer = styled.div`
  background-color: hsla(0, 0%, 0%, 0.6);
  position: fixed;
  z-index: ${zIndex.modal};
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
  width: 728px;
  max-width: 100%;
  padding: 50px 50px;
`;

const CloseBtn = styled.button`
  background: transparent;
  border: none;
  font-size: 25px;
  position: absolute;
  top: 28px;
  right: 48px;
  cursor: pointer;
`;

const ModalHeader = styled.h2`
  margin-bottom: 40px;
  width: fit-content;
  height: 50px;

  font-family: Apple SD Gothic Neo;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 125%;

  letter-spacing: -0.03em;

  color: #333333;
`;

const ModalBody = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Column = styled.div`
  width: 280px;
  display: flex;
  flex-direction: column;
  & select,
  input,
  textarea {
    margin-bottom: 12px;
    width: 296px;
    height: 48px;
    background: #f8f8f8;
    border-radius: 8px;
    padding: 12px 16px;
    border: none;
  }
  & select,
  textarea,
  input,
  :focus {
    outline: none;
  }

  & textarea {
    height: 160px;
    resize: none;
  }
`;

const Label = styled.small`
  font-family: Apple SD Gothic Neo;
  font-size: 14px;
  margin: 12px 0;
  color: #333333;
`;

const HelpText = styled.small`
  font-family: Apple SD Gothic Neo;
  font-size: 12px;
  line-height: 150%;
  letter-spacing: -0.03em;
  margin-top: 8px;
  color: #999999;
`;

const Warning = styled.small<WarningProps>`
  font-family: Apple SD Gothic Neo;
  font-size: 12px;
  line-height: 150%;
  letter-spacing: -0.03em;
  margin: 30px 0 0 0;
  visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
  color: red;
`;

const Button = styled.button`
  width: 296px;
  height: 48px;
  background: #6a84e1;
  border-radius: 8px;
  color: #fefefe;
  margin-top: 8px;
  border: none;
  cursor: pointer;
`;

// const categoryIndex: { [key: string]: number } = {
//   marketing: 1,
//   design: 2,
//   plan: 3,
//   develop: 4,
// };

const ProfileModal = () => {
  return (
    <>
      <StyledModalContainer>
        <StyledModal>
          <CloseBtn>X</CloseBtn>
          <ModalHeader>프로필 변경</ModalHeader>
          <ModalBody>
            <Column>
              <Label>프로필 사진(선택)</Label>
              {/* <input /> */}
              <ImageDrop />
              <HelpText>
                상자를 클릭하여 이미지를 업로드하세요
                <br />
                800*800 이상의 JPG, PNG 이미지를 권장해요
              </HelpText>
            </Column>
            <Column>
              <Label>별명</Label>
              <input />

              <Label>포지션</Label>
              <select name="category">
                {/* <select name="category" onChange={onChange} ref={categorySelectRef}> */}
                <option value="">선택하세요</option>
                <option value="marketing">마케팅</option>
                <option value="design">디자인</option>
                <option value="plan">기획</option>
                <option value="develop">개발</option>
              </select>
              <Label>소개글 (선택)</Label>
              <textarea />
              {/* <Warning visible={warning.isWarning}>{warning.warningMessage}</Warning> */}
              <Warning visible>이미 사용중인 별명입니다.</Warning>
              {/* <Button onClick={onClick}>글 작성하기</Button> */}
              <Button>프로필 변경 완료</Button>
            </Column>
          </ModalBody>
        </StyledModal>
      </StyledModalContainer>
    </>
  );
};

export default ProfileModal;
