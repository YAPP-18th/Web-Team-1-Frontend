import React from 'react';
import * as S from './style';
import { IconPaths, IconWrapper } from '#components/Atoms';

export default function Categories() {
  const categories = [
    { text: '전체', value: 'total', icon: IconPaths.Glitter },
    { text: '마케팅', value: 'marketing', icon: IconPaths.Writing },
    { text: '디자인', value: 'design', icon: IconPaths.Palette },
    { text: '기획', value: 'managing', icon: IconPaths.Bulb },
    { text: '개발', value: 'develop', icon: IconPaths.Laptop },
  ];

  return (
    <S.Categories>
      {categories.map(({ text, value, icon }) => (
        <S.Category key={text}>
          <S.Input type="checkbox" id={value} name={value} />
          <S.Label htmlFor={value} backgroundColor={S.backgroundColors[text]}>
            {text}
            <IconWrapper icon={icon} />
          </S.Label>
        </S.Category>
      ))}
    </S.Categories>
  );
}
