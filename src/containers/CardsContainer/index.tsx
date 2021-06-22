import React, { useEffect, useMemo, useRef } from 'react';

import { useAppSelector } from '#hooks/useAppSelector';
import { useAppDispatch } from '#hooks/useAppDispatch';

import Cards from '#components/Cards';

import { loadCards, loadNextPage } from '../../slices/cardsSlice';
import { isEmpty } from '../../utils';

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
            dispatch(loadNextPage());
          }
        });
      }),
    [loadNextPage],
  );

  useEffect(() => {
    if (isEmpty(cards)) return;
    if (!ref.current) return;
    const el = ref.current;
    observer.observe(el);
    return () => {
      observer.unobserve(el);
    };
  }, [observer, cards]);

  useEffect(() => {
    dispatch(loadCards());
  }, []);

  return (
    <>
      <Cards cards={cards} onClickCard={onClickCard} />
      {next && <div ref={ref} />}
    </>
  );
}
