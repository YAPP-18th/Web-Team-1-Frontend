import React from 'react';
import styled from 'styled-components';

interface Props {
  text: string;
}
const StyledTitle = styled.h1`
  margin: 32px 0 24px 0;

  font-family: Apple SD Gothic Neo;
  font-style: normal;
  font-weight: bold;
  font-size: 56px;
  line-height: 56px;
  letter-spacing: -0.04em;

  color: #333333;
`;
const Title = ({ text }: Props) => {
  return <StyledTitle>{text}</StyledTitle>;
};

export default Title;
