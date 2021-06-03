import React from 'react';
import styled from 'styled-components';
import HashTag from './HashTag';

const StyledHashTagBox = styled.div`
  background-color: #fefefe;
  border: 1px solid #6a84e1;
  border-radius: 8px;
  padding: 12px;
`;

const Input = styled.input`
  background-color: transparent;
  border: none;
  margin-left: 5px;
  &:focus {
    outline: none;
  }
`;

const HashTagBox = () => {
  return (
    <StyledHashTagBox>
      <HashTag text="sdfsd" />
      <Input />
    </StyledHashTagBox>
  );
};

export default HashTagBox;
