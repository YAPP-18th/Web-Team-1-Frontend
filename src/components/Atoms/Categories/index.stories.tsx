import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import Categories from './index';

export default {
  title: 'Atoms/Categories',
  component: Categories,
} as Meta;

const CategoriesTemplate = () => {
  return <Categories />;
};
export const BasicCategories = CategoriesTemplate.bind({});
