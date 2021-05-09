import React from 'react';

import { render } from '@testing-library/react';

import Cards from './index';

import { cardsFixtures } from '#fixtures/cards';

describe('Cards', () => {
  it('카드 형태의 게시글을 볼 수 있다.', () => {
    const { container } = render(<Cards cards={cardsFixtures} />);

    cardsFixtures.forEach(({ title, description }) => {
      expect(container).toHaveTextContent(title);
      expect(container).toHaveTextContent(description);
    });
  });
});
