import React from 'react';
import * as S from './style';
import { Dropdown, IconPaths, IconWrapper } from '#components/Atoms';

export default function Categories() {
  const categories = [
    { text: '전체', value: 'total', icon: IconPaths.Glitter },
    { text: '마케팅', value: 'marketing', icon: IconPaths.Writing },
    { text: '디자인', value: 'design', icon: IconPaths.Palette },
    { text: '기획', value: 'plan', icon: IconPaths.Bulb },
    { text: '개발', value: 'develop', icon: IconPaths.Laptop },
  ];

  return (
    <S.Categories>
      <Dropdown />
      {categories.map(({ text, value, icon }) => (
        <S.Category key={text}>
          <S.Input type="radio" id={value} name="category-radio-group" />
          <S.Label htmlFor={value} backgroundColor={S.backgroundColors[text]}>
            {text}
            <IconWrapper icon={icon} />
          </S.Label>
        </S.Category>
      ))}
    </S.Categories>
  );
}
