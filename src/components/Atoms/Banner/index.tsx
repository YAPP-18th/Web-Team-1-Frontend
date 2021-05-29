import React from 'react';
import * as S from './style';

export default function Banner() {
  return (
    <S.BannerWrapper>
      <div className="first-line">
        오늘 하루<span>, </span>
      </div>
      <div className="first-line">
        많은 생각을 했고<span>, </span>
      </div>
      <div>
        회고가 필요하다면<span>?</span>
      </div>
    </S.BannerWrapper>
  );
}
