import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Cards, { Card } from '#components/Cards';
/* eslint-disable no-console */

interface Props {
  api: () => Promise<Card[] | null>;
}

const TabContent = ({ api }: Props) => {
  const history = useHistory();
  const onClickCard = (postIdx: number) => {
    const url = `/articleDetail/${postIdx}`;
    history.push(url);
  };
  const [cards, setCards] = useState<Card[]>([]);
  const callApi = async () => {
    const result = await api();
    if (result) {
      setCards(result);
    }
  };
  useEffect(() => {
    callApi();
  }, []);

  return <>{cards.length > 0 && <Cards onClickCard={onClickCard} cards={cards} />}</>;
};

export default TabContent;
