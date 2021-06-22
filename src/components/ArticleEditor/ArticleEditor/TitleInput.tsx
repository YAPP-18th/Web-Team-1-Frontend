import React, { useState } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '#hooks/useAppSelector';

interface Props {
  onChangeTitle: (title: string) => void;
  initialValue: string;
}

export interface WarningProps {
  visible: boolean;
}

const StyledTitleInput = styled.div`
  & .title-input {
    border: none;
    font-family: Apple SD Gothic Neo;
    font-style: normal;
    font-weight: bold;
    font-size: 56px;
    line-height: 56px;
    letter-spacing: -0.04em;
    padding-left: 25px;
  }

  & .title-input:focus {
    outline: none;
  }
  & .title-input::placeholder {
    color: #cdccc6;
  }
`;

const Warning = styled.small<WarningProps>`
  display: block;
  margin: 0 0 50px 30px;
  visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
  color: red;
  font-size: 18px;
`;

const TitleInput = ({ onChangeTitle, initialValue }: Props) => {
  const [title, setTitle] = useState(initialValue);
  const { titleWarning } = useAppSelector((state) => state.articleEditorReducer);

  return (
    <StyledTitleInput>
      <input
        className="title-input"
        placeholder="제목을 입력하세요"
        onChange={(e) => {
          onChangeTitle(e.target.value);
          setTitle(e.target.value);
        }}
        value={title}
      />
      <Warning visible={titleWarning && title === ''}>
        제목을 입력해야 작성완료 할 수 있습니다
      </Warning>
    </StyledTitleInput>
  );
};

export default TitleInput;
