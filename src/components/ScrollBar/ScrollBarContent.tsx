import React, { useEffect, useState } from 'react';
import * as S from './style';

const ScrollBarContent = () => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    let raf: number;
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
        raf = requestAnimationFrame(function task() {
          tick = false;
          return update();
        });
        return raf;
      };
    };
    window.addEventListener('scroll', scrollPage(updateScrollPercent));
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', scrollPage(updateScrollPercent));
    };
  }, []);

  return <S.ScrollBarContent percent={percent} />;
};

export default ScrollBarContent;
