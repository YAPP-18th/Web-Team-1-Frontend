import React from 'react';
import * as S from './style';

export default function Banner() {
  return (
    <S.BannerWrapper>
      <div className="first-line">
        개인 작업에서<span>, </span>
      </div>
      <div className="first-line">
        많은 것을 느꼈고<span>, </span>
      </div>
      <div>
        이를 돌아보고 싶다면<span>?</span>
      </div>
    </S.BannerWrapper>
  );
}
