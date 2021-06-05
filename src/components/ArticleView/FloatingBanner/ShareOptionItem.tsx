// import { IconButton } from '#components/Atoms/Icon/index.stories';
import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { IconWrapper } from '#components/Atoms';

interface Props {
  icon: FunctionComponent;
  onClick: () => void;
  text: string;
}

const StyledOptionItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  position: relative;
  & .text {
    margin-top: 10px;
    font-family: Helvetica Neue;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: -0.04em;

    color: #999999;
  }
`;

const ShareOptionItem = ({ onClick, text, icon }: Props) => {
  return (
    <>
      <StyledOptionItem onClick={onClick}>
        <IconWrapper icon={icon} />
        <small className="text">{text}</small>
      </StyledOptionItem>
    </>
  );
};

export default ShareOptionItem;
