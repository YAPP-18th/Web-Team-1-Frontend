import React, { useEffect, useState } from 'react';
import * as S from './style';

const ProgressBarContent = () => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    let raf: number;
    const updateProgressPercent = () => {
      const progressPercent =
        (window.scrollY / (document.body.offsetHeight - window.innerHeight)) * 100;
      setPercent(progressPercent);
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
    window.addEventListener('scroll', scrollPage(updateProgressPercent));
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', scrollPage(updateProgressPercent));
    };
  }, []);

  return <S.ProgressBarContent percent={percent} />;
};

export default ProgressBarContent;
