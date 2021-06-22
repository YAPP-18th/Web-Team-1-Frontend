import React, { useEffect, useMemo, useRef } from 'react';

import { useAppSelector } from '#hooks/useAppSelector';
import { useAppDispatch } from '#hooks/useAppDispatch';

import Cards from '#components/Cards';

import { fetchCards } from '../../slices/cardsSlice';

interface Props {
  onClickCard: (postIdx: number) => void;
}

export default function CardsContainer({ onClickCard }: Props) {
  const dispatch = useAppDispatch();
  const { cards } = useAppSelector((state) => state.cardsReducer);
  const { next } = useAppSelector((state) => state.conditionReducer);

  const ref = useRef<HTMLDivElement>(null);

  const observer = useMemo(
    () =>
      new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // dispatch(fetchCards());
            console.log('GOGOGO');
          }
        });
      }),
    [fetchCards],
  );

  useEffect(() => {
    if (cards.length === 0) return;
    if (!ref.current) return;
    const el = ref.current;
    observer.observe(el);
    return () => {
      observer.unobserve(el);
    };
  }, [observer, cards.length]);

  useEffect(() => {
    dispatch(fetchCards());
  }, []);

  return (
    <>
      <Cards cards={cards} onClickCard={onClickCard} />
      {next && <div ref={ref} />}
    </>
  );
}
