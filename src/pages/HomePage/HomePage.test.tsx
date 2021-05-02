import React from 'react';

import { render } from '@testing-library/react';

import HomePage from './index';

describe('HomePage', () => {
  it('홈 페이지에서는 "돌아보다," 로고를 볼 수 있다.', () => {
    const { container } = render(<HomePage />);

    expect(container).toHaveTextContent('돌아보다,');
  });
});
