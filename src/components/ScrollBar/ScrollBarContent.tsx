import React, { useEffect, useState } from 'react';
import * as S from './style';

const ScrollBarContent = () => {
  const [percent, setPercent] = useState(0);
  const updateScrollPercent = () => {
    const scrollPercent =
      (window.scrollY / (document.body.offsetHeight - window.innerHeight)) * 100;
    setPercent(scrollPercent);
  };

  const scrollPage = (update: () => void) => {
    let tick = false;

    return function onScroll(): number {
      if (tick) {
        return 0;
      }
      tick = true;
      return requestAnimationFrame(function task() {
        tick = false;
        return update();
      });
    };
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollPage(updateScrollPercent));
    return () => window.removeEventListener('scroll', scrollPage(updateScrollPercent));
  }, []);

  return <S.ScrollBarContent percent={percent} />;
};

export default ScrollBarContent;
