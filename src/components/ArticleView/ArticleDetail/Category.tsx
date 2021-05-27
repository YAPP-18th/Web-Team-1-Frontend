import React from 'react';
import { IconPaths, IconWrapper, Button } from '#components/Atoms/index';
import { color } from '#styles/index';

interface Props {
  category: string;
}

const Category = ({ category }: Props) => {
  const categories: { [key: string]: Array<string> } = {
    marketing: ['red', '마케팅'],
    design: ['blue', '디자인'],
    plan: ['purple', '기획'],
    develop: ['yellow', '개발'],
  };

  return (
    <>
      {category && (
        <Button buttonColor={{ background: color[categories[category][0]] }}>
          {categories[category][1]}
          <IconWrapper icon={IconPaths.Bulb} />
        </Button>
      )}
    </>
  );
};

export default Category;
