import React from 'react';
import styled from 'styled-components';

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
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

const TitleInput = ({ onChange, initialValue }: Props) => {
  return (
    <StyledTitleInput>
      <input
        className="title-input"
        placeholder="제목을 입력하세요"
        onChange={onChange}
        value={initialValue}
      />
    </StyledTitleInput>
  );
};

export default TitleInput;
