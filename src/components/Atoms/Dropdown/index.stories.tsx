import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import Dropdown, { Props } from './index';

export default {
  title: 'Atoms/Dropdown',
  component: Dropdown,
} as Meta;

const DropdownTemplate: Story<Props> = () => {
  return <Dropdown onClickDropdownItem={action('onClick')} />;
};
export const BasicDropdown = DropdownTemplate.bind({});
