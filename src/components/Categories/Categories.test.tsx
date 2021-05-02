import React from 'react';

import { render } from '@testing-library/react';

import Categories from './index';

describe('Categories', () => {
  const categories = ['전체', '마케팅', '디자인', '기획', '개발'];

  it('회고 글 카테고리 체크박스를 볼 수 있다.', () => {
    const { getByLabelText } = render(<Categories />);

    categories.forEach((category) => {
      expect(getByLabelText(category)).not.toBeNull();
    });
  });
});
