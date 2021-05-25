import React from 'react';
import { IconPaths, IconWrapper, Button } from '#components/Atoms/index';
import { color } from '#styles/index';

interface Props {
  category: string;
}

const Category = ({ category }: Props) => {
  const categories: { [key: string]: string } = {
    마케팅: 'red',
    디자인: 'blue',
    기획: 'purple',
    개발: 'yellow',
  };

  return (
    <>
      <Button buttonColor={{ background: color[categories[category]] }}>
        {category}
        <IconWrapper icon={IconPaths.Glitter} />
      </Button>
    </>
  );
};

export default Category;
