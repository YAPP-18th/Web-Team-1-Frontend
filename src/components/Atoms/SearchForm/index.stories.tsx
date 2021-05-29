import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import SearchForm from './index';

export default {
  title: 'Atoms/Search',
  component: SearchForm,
} as Meta;

const SearchTemplate = () => {
  return <SearchForm />;
};
export const BasicSearch = SearchTemplate.bind({});
