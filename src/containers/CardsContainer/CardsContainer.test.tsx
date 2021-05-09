import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';
import CardsContainer from '#containers/CardsContainer';

import { cardsFixtures } from '#fixtures/cards';

jest.mock('react-redux');

describe('CardsContainer', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) =>
      selector({
        cardsReducer: {
          cards: cardsFixtures,
        },
      }),
    );
  });

  it('글 목록을 화면에 보여준다.', () => {
    const { container } = render(<CardsContainer />);

    expect(container).toHaveTextContent('test title1');
  });
});
