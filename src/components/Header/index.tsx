import React from 'react';

import styled from 'styled-components';

import { color } from '#styles/index';
import Button from '#components/Atoms/Button';
import { IconPaths, IconWrapper } from '#components/Atoms';

export default function Header() {
  return (
    <HeaderWrapper>
      <Logo>돌아보다,</Logo>
      <Button buttonColor={{ background: color.gray }} to="/login">
        회원가입 / 로그인
        <IconWrapper icon={IconPaths.Glitter} />
      </Button>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 60px 0 60px 0;
`;

const Logo = styled.h1`
  font-family: 'RIDIBatang';
  font-size: 32px;
  line-height: 32px;
  font-weight: 400;
  letter-spacing: -0.06em;
  color: ${color.gray || 'none'};
`;
