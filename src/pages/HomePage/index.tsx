import React from 'react';
import { useHistory } from 'react-router-dom';
import { Banner } from '#components/Atoms';

import CardsContainer from '#containers/CardsContainer';
import ConditionContainer from '#containers/ConditionContainer';
// import { refreshToken } from '#apis/checkToken';

export default function HomePage() {
  const history = useHistory();

  const handleClickCard = (postIdx: number) => {
    const url = `/articleDetail/${postIdx}`;
    history.push(url);
  };

  return (
    <>
      <main>
        <Banner />
        <ConditionContainer />
        <CardsContainer onClickCard={handleClickCard} />
        {/* <button type="button" onClick={refreshToken}>
          cookies
        </button> */}
      </main>
    </>
  );
}
