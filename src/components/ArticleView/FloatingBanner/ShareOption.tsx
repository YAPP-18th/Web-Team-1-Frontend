import React from 'react';
import styled from 'styled-components';
import ShareOptionItem from './ShareOptionItem';
import Facebook from './svg/Facebook.svg';
import Kakao from './svg/Kakao.svg';
import Url from './svg/Url.svg';

const test = () => {
  /* eslint-disable no-console */
  console.log('hello');
};

const StyledShareOption = styled.div`
  width: 200px;
  height: 70px;
  background: #fefefe;
  border: 0.5px solid #dddddd;
  box-sizing: border-box;

  box-shadow: 0px 8px 8px rgba(172, 171, 165, 0.4);
  border-radius: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: absolute;
  top: 50%;
  right: 100%;
  transform: translate(-10%, -50%);

  padding: 12px 20px;
`;

const ShareOption = () => {
  return (
    <>
      <StyledShareOption>
        <ShareOptionItem onClick={test} icon={Facebook} text="페이스북" />
        <ShareOptionItem onClick={test} icon={Kakao} text="카카오톡" />
        <ShareOptionItem onClick={test} icon={Url} text="링크복사" />
      </StyledShareOption>
    </>
  );
};

export default ShareOption;
