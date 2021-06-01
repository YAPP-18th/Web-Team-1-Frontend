import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import Categories, { Props } from './index';

export default {
  title: 'Atoms/Categories',
  component: Categories,
} as Meta;

const CategoriesTemplate: Story<Props> = () => {
  return <Categories onClickDropdownItem={action('onClick')} />;
};
export const BasicCategories = CategoriesTemplate.bind({});
