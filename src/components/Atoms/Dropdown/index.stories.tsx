import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import Dropdown from './index';

export default {
  title: 'Atoms/Dropdown',
  component: Dropdown,
} as Meta;

const DropdownTemplate = () => {
  return <Dropdown />;
};
export const BasicDropdown = DropdownTemplate.bind({});
