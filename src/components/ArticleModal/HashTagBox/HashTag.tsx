import React from 'react';
import styled from 'styled-components';

interface Props {
  text: string;
}

const StyledHashTag = styled.div`
  color: #fefefe;
  background-color: #acaba5;
  height: 24px;
  display: inline-block;
  padding: 5px;
  margin: 0 4px 4px 0;
  border-radius: 4px;
`;

const CloseBtn = styled.button`
  background-color: transparent;
  border: none;
  color: #fefefe;
  margin: 0 0 0 5px;
  cursor: pointer;
`;

const HashTag = ({ text }: Props) => {
  return (
    <StyledHashTag>
      #{text} <CloseBtn>x</CloseBtn>
    </StyledHashTag>
  );
};

export default HashTag;
