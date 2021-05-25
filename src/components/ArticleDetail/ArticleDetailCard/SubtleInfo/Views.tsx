import React from 'react';
import styled from 'styled-components';

interface Props {
  read: number;
}
const StyledViews = styled.p`
  font-family: Helvetica Neue;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: -0.01em;

  color: #666666;
`;

const Views = ({ read }: Props) => {
  return <StyledViews> · {read}min read</StyledViews>;
};

export default Views;
