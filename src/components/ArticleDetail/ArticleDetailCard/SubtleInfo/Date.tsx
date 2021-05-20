import React from 'react';
import styled from 'styled-components';

interface Props {
  date: string;
}

const StyledDate = styled.p`
  font-family: Helvetica Neue;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  letter-spacing: -0.01em;

  color: #666666;
  margin-left: 16px;
`;
const Date = ({ date }: Props) => {
  return <StyledDate>{date} </StyledDate>;
};

export default Date;
