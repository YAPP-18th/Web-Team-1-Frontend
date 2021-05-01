import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import IconWrapper, { Props } from './IconWrapper';
import IconPaths from './IconPaths';

export default {
  title: 'Atoms/Icon',
  component: IconWrapper,
} as Meta;

// 단순 아이콘인 경우
const OnlyIconTemplate: Story<Props> = (args) => {
  return <IconWrapper {...args} icon={IconPaths.Glitter} />;
};
export const OnlyIcon = OnlyIconTemplate.bind({});
OnlyIcon.args = {
  onClick: undefined,
};

// 아이콘 버튼인 경우
const IconButtonTemplate: Story<Props> = (args) => {
  return <IconWrapper {...args} icon={IconPaths.Glitter} backgroundColor="red" />;
};
export const IconButton = IconButtonTemplate.bind({});
IconButton.args = {
  onClick: action('clicked'),
};

// 원형 아이콘 버튼인 경우
const CircleIconButtonTemplate: Story<Props> = (args) => {
  return <IconWrapper {...args} icon={IconPaths.Glitter} backgroundColor="red" isCircled />;
};
export const CircleIconButton = CircleIconButtonTemplate.bind({});
IconButton.args = {
  onClick: action('clicked'),
};
