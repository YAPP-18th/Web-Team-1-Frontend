import React from 'react';
import styled from 'styled-components';

interface Props {
  read: number;
}
const StyledReadCount = styled.p`
  font-family: Helvetica Neue;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: -0.01em;

  color: #666666;
`;

const ReadCount = ({ read }: Props) => {
  return <StyledReadCount> · {read}min read</StyledReadCount>;
};

export default ReadCount;
