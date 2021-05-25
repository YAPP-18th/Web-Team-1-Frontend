import React from 'react';
import styled from 'styled-components';

interface Props {
  count: number;
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

const Views = ({ count }: Props) => {
  return <StyledViews> · {count}min read</StyledViews>;
};

export default Views;
