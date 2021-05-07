import React from 'react';
import ScrollBarContent from './ScrollBarContent';
import * as S from './style';

const ScrollBar = () => {
  return (
    <>
      <S.ScrollBarBackground />
      <ScrollBarContent />
    </>
  );
};

export default ScrollBar;
