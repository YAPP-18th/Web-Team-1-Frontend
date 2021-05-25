import React from 'react';
import styled from 'styled-components';

interface Props {
  date: string;
}

const StyledCreatedAt = styled.p`
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
const CreatedAt = ({ date }: Props) => {
  return <StyledCreatedAt>{date} </StyledCreatedAt>;
};

export default CreatedAt;
