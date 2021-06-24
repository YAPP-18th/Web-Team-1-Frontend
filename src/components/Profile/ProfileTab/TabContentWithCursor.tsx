import React, { useEffect, useState, useRef, useMemo } from 'react';
import { useHistory } from 'react-router';
import Cards from '#components/Cards';
import { isEmpty } from '../../../utils';
/* eslint-disable no-console */
export interface CardWithLikeIdx {
  postIdx: number;
  likeIdx: number;
  title: string;
  category: string;
  contents: string;
  nickname: string;
  profile: string;
  scrap: boolean;
  tag: string;
  view: number;
  created_at: string;
  commentCnt: number;
  scrapCnt: number;
}

interface Data {
  result: CardWithLikeIdx[];
  next: boolean;
}
interface Props {
  api: (cursorIdx: number, pageSize: number) => Promise<Data | null>;
}

interface ListData {
  next: boolean;
  nextCursorIdx: number | null;
  cards: CardWithLikeIdx[];
}

const TabContentWithCursor = ({ api }: Props) => {
  const history = useHistory();
  const [listData, setListData] = useState<ListData>({
    next: false,
    nextCursorIdx: 0,
    cards: [],
  });

  const ref = useRef<HTMLDivElement>(null);

  const callApi = async () => {
    if (listData.nextCursorIdx !== null) {
      const resultData = await api(listData.nextCursorIdx, 8);
      if (resultData) {
        const { next, result } = resultData;
        setListData({
          next,
          nextCursorIdx: isEmpty(result) ? null : result[result.length - 1].likeIdx,
          cards: [...listData.cards, ...result],
        });
      }
    }
  };

  const observer = useMemo(
    () =>
      new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            callApi();
          }
        });
      }),
    [listData],
  );

  const onClickCard = (postIdx: number) => {
    const url = `/articleDetail/${postIdx}`;
    history.push(url);
  };

  useEffect(() => {
    if (isEmpty(listData.cards)) return;
    if (!ref.current) return;
    const el = ref.current;
    observer.observe(el);
    return () => {
      observer.unobserve(el);
    };
  }, [observer, listData.cards]);

  useEffect(() => {
    callApi();
  }, []);

  return (
    <>
      {listData.cards.length > 0 && (
        <>
          <Cards onClickCard={onClickCard} cards={listData.cards} />
          {listData.next && <div ref={ref} />}
        </>
      )}
    </>
  );
};

export default TabContentWithCursor;
