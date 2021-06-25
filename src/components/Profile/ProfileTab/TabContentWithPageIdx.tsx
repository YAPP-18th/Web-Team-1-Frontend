import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useHistory } from 'react-router';
import Cards from '#components/Cards';
import { isEmpty } from '../../../utils';
/* eslint-disable no-console */

export interface Card {
  postIdx: number;
  title: string;
  category: string;
  contents: string;
  nickname: string;
  profile: string;
  scrap: boolean;
  tagList: Array<{ tag: string }>;
  view: number;
  created_at: string;
  commentCnt: number;
  scrapCnt: number;
}

interface Props {
  api: (page: number, pageSize: number) => Promise<Card[] | null>;
}

interface ListData {
  page: number | null;
  cards: Card[];
}

const TabContentWithPageIdx = ({ api }: Props) => {
  const history = useHistory();
  const [listData, setListData] = useState<ListData>({
    page: 0,
    cards: [],
  });

  const ref = useRef<HTMLDivElement>(null);

  const callApi = async () => {
    if (listData.page !== null) {
      const result = await api(listData.page, 8);
      if (result) {
        setListData({
          page: result.length < 8 ? null : listData.page + 1,
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
          {listData.page && <div ref={ref} />}
        </>
      )}
    </>
  );
};

export default TabContentWithPageIdx;
