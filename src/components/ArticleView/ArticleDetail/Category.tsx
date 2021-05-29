import React from 'react';
import styled from 'styled-components';

import { IconPaths, IconWrapper, Button } from '#components/Atoms/index';

interface Props {
  category: string;
}

interface CategoryType {
  colorName: string;
  title: string;
  icon: React.FunctionComponent;
}
const StyledCategory = styled.div`
  margin-right: 4px;
`;

const Category = ({ category }: Props) => {
  const categories: { [key: string]: CategoryType } = {
    marketing: {
      colorName: 'red',
      title: '마케팅',
      icon: IconPaths.Writing,
    },
    design: {
      colorName: 'blue',
      title: '디자인',
      icon: IconPaths.Palette,
    },
    plan: {
      colorName: 'purple',
      title: '기획',
      icon: IconPaths.Bulb,
    },
    develop: {
      colorName: 'yellow',
      title: '개발',
      icon: IconPaths.Laptop,
    },
  };
  return (
    <>
      {category && (
        <StyledCategory>
          <Button buttonColor={{ background: categories[category].colorName }}>
            {categories[category].title}
            <IconWrapper icon={categories[category].icon} />
          </Button>
        </StyledCategory>
      )}
    </>
  );
};

export default Category;
