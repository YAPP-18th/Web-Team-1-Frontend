import React from 'react';
import styled from 'styled-components';

export interface Color {
  color: string;
}

interface Props {
  icon: ({ color }: Color) => JSX.Element;
  onClick?: () => void;
  isFocused?: boolean;
}

const StyledIconBtn = styled.span`
  width: 40px;
  height: 40px;
  cursor: pointer;
  border-radius: 50%;
  background-color: white;
  position: relative;
  box-shadow: 0px 5px 20px rgba(205, 204, 198, 0.25);
  &:hover {
    box-shadow: 0px 8px 8px rgba(172, 171, 165, 0.4);
  }
`;

const StyledIcon = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -40%);
`;

const BannerItem = ({ icon, onClick, isFocused }: Props) => {
  const IconComponent = icon;

  return (
    <>
      <StyledIconBtn onClick={onClick}>
        <StyledIcon>
          <IconComponent color={isFocused ? '#6a84e1' : '#DDDDDD'} />
        </StyledIcon>
      </StyledIconBtn>
    </>
  );
};

export default React.memo(BannerItem);
