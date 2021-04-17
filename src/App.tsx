import React from 'react';

import styled from 'styled-components';

import Button from './components/Button';

import { images } from './assets';

const App = () => {
  return (
    <Container>
      <Header>
        <Logo>돌아보다,</Logo>
        <div>
          <Button width="148px" height="40px" image={images.buttons.hand} background="#acaba5">
            바로 회고하기
          </Button>
          <button type="button">사이드 메뉴</button>
        </div>
      </Header>
    </Container>
  );
};

const Logo = styled.h1`
  font-family: RIDIBatang;
  color: #acaba5;
  font-weight: 400;
  font-size: 32px;
  line-height: 32px;
  letter-spacing: -0.06em;
`;

const Header = styled.header`
  margin-top: 56px;
  border: 1px solid red;
  display: flex;
  justify-content: space-between;
  height: 40px;
  align-items: center;
`;

const Container = styled.div`
  height: 1024px;
  position: relative;
`;

export default App;
