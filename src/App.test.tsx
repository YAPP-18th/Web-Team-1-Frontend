import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import App from './App';

describe('App', () => {
  function renderApp({ path }) {
    return render(
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>,
    );
  }

  it('renders app logo', () => {
    const { container } = renderApp({ path: '/' });

    expect(container).toHaveTextContent('돌아보다,');
  });
});
