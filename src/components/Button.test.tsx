import React from 'react';

import { render } from '@testing-library/react';

import Button from './Button';

import { images } from '../assets';

describe('Button component', () => {
  it('바로 회고하기 버튼', () => {
    const { container } = render(
      <Button width="148px" height="40px" image={images.buttons.hand} background="#acaba5">
        바로 회고하기
      </Button>,
    );

    expect(container).toHaveTextContent(/바로 회고하기/);
  });
});
