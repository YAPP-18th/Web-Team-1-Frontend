import React from 'react';
import { IconPaths, IconWrapper, Button } from '#components/Atoms/index';
import { color } from '#styles/index';

interface Props {
  category: string;
}

interface CategoryType {
  color: string;
  title: string;
  icon: React.FunctionComponent;
}

const Category = ({ category }: Props) => {
  const categories: { [key: string]: CategoryType } = {
    marketing: {
      color: 'red',
      title: '마케팅',
      icon: IconPaths.Writing,
    },
    design: {
      color: 'blue',
      title: '디자인',
      icon: IconPaths.Palette,
    },
    plan: {
      color: 'purple',
      title: '기획',
      icon: IconPaths.Bulb,
    },
    develop: {
      color: 'yellow',
      title: '개발',
      icon: IconPaths.Laptop,
    },
  };

  return (
    <>
      {category && (
        <Button buttonColor={{ background: color[categories[category].color] }}>
          {categories[category].title}
          <IconWrapper icon={categories[category].icon} />
        </Button>
      )}
    </>
  );
};

export default Category;
