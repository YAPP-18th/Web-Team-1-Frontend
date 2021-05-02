import React from 'react';

import { render } from '@testing-library/react';

import LoginPage from './index';

describe('LoginPage', () => {
  it('로그인 버튼을 볼 수 있다.', () => {
    const { getByText } = render(<LoginPage />);

    const button = getByText('Login');

    expect(button).not.toBeNull();
  });
});
