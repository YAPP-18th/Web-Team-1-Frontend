import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import Banner from './index';

export default {
  title: 'Atoms/Banner',
  component: Banner,
} as Meta;

const BannerTemplate = () => {
  return <Banner />;
};
export const DefaultBanner = BannerTemplate.bind({});
