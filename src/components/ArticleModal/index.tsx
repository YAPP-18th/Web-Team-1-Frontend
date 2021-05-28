import React from 'react';
import styled from 'styled-components';

interface Props {
  onChange: (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
  onClick: () => void;
  isWarning: boolean;
  toggle: () => void;
}

export interface WarningProps {
  visible: boolean;
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
  padding: 50px 60px;
  width: 416px;
  height: 620px;
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
  width: 111px;
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
  flex-direction: column;
`;

const Label = styled.small`
  font-family: Apple SD Gothic Neo;
  font-size: 14px;
  margin: 12px 0;
  color: #333333;
`;

const Select = styled.select`
  margin-bottom: 12px;
  width: 296px;
  height: 48px;
  background: #f8f8f8;
  border-radius: 8px;
  padding: 12px 16px;
  border: none;
`;

const CategorySelect = styled(Select).attrs(() => ({
  name: 'category',
}))``;

const TemplateSelect = styled(Select).attrs(() => ({
  name: 'templateIdx',
}))``;

const Input = styled.input.attrs(() => ({
  type: 'text',
  name: 'tag',
}))`
  width: 296px;
  height: 48px;
  background: #f8f8f8;
  padding: 12px 16px;

  border-radius: 8px;
  border: none;
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

const ArticleModal = ({ onChange, onClick, isWarning, toggle }: Props) => {
  return (
    <>
      <StyledModalContainer>
        <StyledModal>
          <CloseBtn onClick={toggle}>X</CloseBtn>
          <ModalHeader>글 설정</ModalHeader>
          <ModalBody>
            <Label>카테고리</Label>
            <CategorySelect onChange={onChange}>
              <option value="">선택하세요</option>
              <option value="marketing">마케팅</option>
              <option value="design">디자인</option>
              <option value="plan">기획</option>
              <option value="develop">개발</option>
            </CategorySelect>
            <Label>템플릿</Label>
            <TemplateSelect onChange={onChange}>
              <option value="">선택하세요</option>
              <option value={1}>4F</option>
              <option value={2}>PMI</option>
              <option value={3}>POST-MOTOROLA</option>
              <option value={4}>DAKI</option>
              <option value={5}>4L</option>
              <option value={6}>KPT</option>
            </TemplateSelect>
            <Label>해시태그</Label>
            <Input onChange={onChange} />
            <HelpText>
              회고 양식 해시태그는 자동으로 맨 앞에 위치합니다.
              <br />
              해시태그는 최대 3개, 최대 16자까지만 노출됩니다.
            </HelpText>
            <Warning visible={isWarning}>
              카테고리를 선택했는지, 해시태그에 이상이 없는지 확인하세요.
            </Warning>
            <Button onClick={onClick}>글 작성하기</Button>
          </ModalBody>
        </StyledModal>
      </StyledModalContainer>
    </>
  );
};

export default ArticleModal;
