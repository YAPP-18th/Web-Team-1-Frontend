import React from 'react';

import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders app logo', () => {
    const { container } = render(<App />);

    expect(container).toHaveTextContent('로고');
  });
});
