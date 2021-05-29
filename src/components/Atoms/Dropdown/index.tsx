import React, { useState } from 'react';
import * as S from './style';
import { IconWrapper, IconPaths } from '#components/Atoms';

export default function Dropdown() {
  const [state, setState] = useState({
    isOpen: false,
    defaultOption: '최신순',
    options: ['최신순', '조회순'],
  });

  const toggling = () => {
    setState({ ...state, isOpen: !state.isOpen });
  };

  const handleClickOption = (it: string) => {
    setState({
      ...state,
      defaultOption: it,
      isOpen: false,
    });
  };

  const { isOpen, defaultOption, options } = state;

  return (
    <S.DropdownWrapper>
      <S.DropdownHeader onClick={toggling}>
        {defaultOption}
        <IconWrapper icon={IconPaths.PolygonBottom} />
      </S.DropdownHeader>
      {isOpen && (
        <S.DropdownList>
          {options.map((option) => (
            <S.DropdownItem key={option} onClick={() => handleClickOption(option)}>
              {option}
            </S.DropdownItem>
          ))}
        </S.DropdownList>
      )}
    </S.DropdownWrapper>
  );
}
