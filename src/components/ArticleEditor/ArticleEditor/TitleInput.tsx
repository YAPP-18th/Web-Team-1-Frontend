import React, { useState } from 'react';
import styled from 'styled-components';

interface Props {
  onChangeTitle: (title: string) => void;
  initialValue: string;
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
    margin-bottom: 64px;
    padding-left: 30px;
    padding-top: 30px;
  }

  & .title-input:focus {
    outline: none;
  }
  & .title-input::placeholder {
    color: #cdccc6;
  }
`;

const TitleInput = ({ onChangeTitle, initialValue }: Props) => {
  const [title, setTitle] = useState(initialValue);
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
    </StyledTitleInput>
  );
};

export default TitleInput;
