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

  it('"돌아보다," title을 볼 수 있다.', () => {
    const { container } = renderApp({ path: '/' });

    expect(container).toHaveTextContent('돌아보다,');
  });

  it('로그인 페이지로 갈 수 있다.', () => {
    const { container } = renderApp({ path: '/login' });

    expect(container).toHaveTextContent('Login');
  });

  it('잘못된 경로로 접근할 경우 Notfound 페이지로 갈 수 있다.', () => {
    const { container } = renderApp({ path: '/invalid' });

    expect(container).toHaveTextContent('404 Not found');
  });
});
