import React, { useState } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Meta, Story } from '@storybook/react/types-6-0';
import { IconPaths, IconWrapper } from '@components/Atoms';
import { action } from '@storybook/addon-actions';
import Button, { Props } from './index';

export default {
  title: 'Atoms/Button',
  component: Button,
} as Meta;

// 일반적인 버튼인 경우
const BasicButtonTemplate: Story<Props> = () => {
  return <Button onClick={action('onClick')}>일반적인 버튼</Button>;
};
export const BasicButton = BasicButtonTemplate.bind({});

// 아이콘과 문자열을 함께 사용하는 버튼인 경우
const WithIconButtonTemplate: Story<Props> = () => {
  return (
    <Button onClick={action('onClick')}>
      아이콘과 문자열을 함께 사용하는 버튼
      <IconWrapper icon={IconPaths.Glitter} />
    </Button>
  );
};
export const WithIconButton = WithIconButtonTemplate.bind({});

// Link 버튼인 경우
const LinkButtonTemplate: Story<Props> = () => {
  return (
    <MemoryRouter>
      <Button to="/">링크 버튼</Button>
    </MemoryRouter>
  );
};
export const LinkButton = LinkButtonTemplate.bind({});

// Anchor 버튼인 경우
const AnchorButtonTemplate: Story<Props> = () => {
  return (
    <MemoryRouter>
      <Button href="https://www.google.com/">앵커 버튼</Button>
    </MemoryRouter>
  );
};
export const AnchorButton = AnchorButtonTemplate.bind({});

// 버튼 색상을 바꾸고 싶을 경우
const ColorChangeButtonTemplate: Story<Props> = () => {
  return (
    <Button buttonColor={{ background: 'blue' }} onClick={action('onClick')}>
      버튼 색상 변경
    </Button>
  );
};
export const ColorChangeButton = ColorChangeButtonTemplate.bind({});

// hover 색상을 바꾸고 싶을 경우
const HoverChangeButtonTemplate: Story<Props> = () => {
  return (
    <Button buttonColor={{ background: 'blue', hover: 'red' }} onClick={action('onClick')}>
      Hover 색상 변경
    </Button>
  );
};
export const HoverChangeButton = HoverChangeButtonTemplate.bind({});

// disabled 색상을 바꾸고 싶을 경우
const DisabledButtonTemplate: Story<Props> = () => {
  const [disabled, setDisabled] = useState(false);
  return (
    <Button
      buttonColor={{ background: 'blue', disabled: 'gray' }}
      onClick={() => setDisabled(true)}
      disabled={disabled}
    >
      Disabled 색상 변경
    </Button>
  );
};
export const DisabledChangeButton = DisabledButtonTemplate.bind({});
