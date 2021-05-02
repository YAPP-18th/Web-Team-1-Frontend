import React from 'react';

import { render } from '@testing-library/react';

import Header from './index';

describe('Header', () => {
  it('헤더에서 "돌아보다," 로고를 볼 수 있다.', () => {
    const { container } = render(<Header />);

    expect(container).toHaveTextContent('돌아보다,');
  });

  // TODO:
  // 로그인 했는지 안했는지에 따라서 보여줄 버튼이 달라지는 부분 테스트
  // 로그인 했을 때 유저 페이지 렌더링 할 버튼 유/무 테스트
  it('헤더에서 "회원가입 / 로그인" 버튼을 볼 수 있다.', () => {
    const { getByText } = render(<Header />);

    const button = getByText('회원가입 / 로그인');

    expect(button).not.toBeNull();
  });
});
