import React, { useState } from 'react';
import { IconPaths, IconWrapper } from '#components/Atoms';
import * as S from './style';

export default function SearchForm() {
  const [state, setState] = useState({
    isOpen: false,
    defaultOption: '제목+내용',
    options: ['제목+내용', '제목', '내용'],
  });

  const { isOpen, defaultOption, options } = state;

  const toggling = () => {
    setState({
      ...state,
      isOpen: !isOpen,
    });
  };

  const handleClickOption = (option: string) => {
    setState({
      ...state,
      defaultOption: option,
      isOpen: false,
    });
  };

  return (
    <S.SearchBox>
      <S.Dropdown>
        <S.DropdownHeader onClick={toggling}>{defaultOption}</S.DropdownHeader>
        {isOpen && (
          <S.DropdownList>
            {options.map((option) => (
              <S.ListItem key={option} onClick={() => handleClickOption(option)}>
                {option}
              </S.ListItem>
            ))}
          </S.DropdownList>
        )}
      </S.Dropdown>
      <S.SearchField>
        <input type="text" placeholder="어떤 글을 찾으시나요?" />
        <IconWrapper icon={IconPaths.Search} />
      </S.SearchField>
    </S.SearchBox>
  );
}
