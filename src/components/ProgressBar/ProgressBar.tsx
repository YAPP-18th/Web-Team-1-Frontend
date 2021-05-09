import React from 'react';
import ProgressBarContent from './ProgressBarContent';
import * as S from './style';

const ProgressBar = () => {
  return (
    <>
      <S.ProgressBarBackground />
      <ProgressBarContent />
    </>
  );
};

export default ProgressBar;
