import React from 'react';

import Categories from '../../components/Categories';
import Cards from '../../components/Cards';

import { cardsFixtures } from '../../fixtures/cards';

export default function HomePage() {
  return (
    <>
      <main>
        <div className="select-group">
          <select>
            <option value="1">오늘 하루,</option>
          </select>
          <select>
            <option value="1">많은 생각을 했고,</option>
            <option value="2">유독 정신없고,</option>
          </select>
          <select>
            <option value="1">회고가 필요하다면?</option>
            <option value="2">길고 지루하게,</option>
          </select>
        </div>
        <Categories />
        <Cards cards={cardsFixtures} />
      </main>
    </>
  );
}
