import React from 'react';

import { render } from '@testing-library/react';

import Cards from './index';

describe('Cards', () => {
  it('카드 형태의 게시글을 볼 수 있다.', () => {
    const { container } = render(<Cards />);

    expect(container).toHaveTextContent(
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum illo optio esse expedita iusto, repellat commodi dolorum! Minima, veniam provident. Ex non voluptate tempora dolorem repellendus voluptates, ipsa nihil autem?',
    );
  });
});
