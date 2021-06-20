import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import SearchForm, { Props } from './index';

export default {
  title: 'Atoms/Search',
  component: SearchForm,
} as Meta;

const SearchTemplate: Story<Props> = () => {
  return <SearchForm handleClickSearch={action('onClick')} />;
};
export const BasicSearch = SearchTemplate.bind({});
