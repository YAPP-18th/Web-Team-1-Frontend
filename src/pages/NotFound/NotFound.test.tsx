import React from 'react';

import { render } from '@testing-library/react';

import NotFound from './index';

describe('NotFound', () => {
  it('404 not found 문구를 볼 수 있다.', () => {
    const { container } = render(<NotFound />);

    expect(container).toHaveTextContent('404 Not found');
  });
});
