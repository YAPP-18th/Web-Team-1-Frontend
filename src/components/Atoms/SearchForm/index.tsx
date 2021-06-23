import React, { useState, useRef, useEffect } from 'react';
import { IconPaths, IconWrapper } from '#components/Atoms';
import * as S from './style';

export interface Props {
  handleClickSearch: () => void;
  handleChangeKeyword: (text: string) => void;
  handleChangeDropdown: (option: string) => void;
  searchState: { keyword: string; defaultOption: string; options: string[] };
}

const optionsMapper: { [key: string]: string } = {
  all: '제목+내용',
  title: '제목',
  contents: '내용',
};

export default function SearchForm({
  handleClickSearch,
  handleChangeKeyword,
  handleChangeDropdown,
  searchState,
}: Props) {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const { keyword, defaultOption, options } = searchState;

  const toggling = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOption = (option: string) => {
    return () => {
      setIsOpen(false);
      handleChangeDropdown(option);
    };
  };

  const handleChange = () => {
    return (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      handleChangeKeyword(value);
    };
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent): void => {
      if (dropdownRef && !dropdownRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  return (
    <S.SearchBox>
      <S.Dropdown ref={dropdownRef}>
        <S.DropdownHeader onClick={toggling}>{optionsMapper[defaultOption]}</S.DropdownHeader>
        {isOpen && (
          <S.DropdownList>
            {options.map((option) => (
              <S.ListItem key={option} onClick={handleClickOption(option)}>
                {optionsMapper[option]}
              </S.ListItem>
            ))}
          </S.DropdownList>
        )}
      </S.Dropdown>
      <S.SearchField>
        <input
          type="text"
          placeholder="어떤 글을 찾으시나요?"
          onChange={handleChange()}
          value={keyword}
        />
        <IconWrapper icon={IconPaths.Search} onClick={handleClickSearch} />
      </S.SearchField>
    </S.SearchBox>
  );
}
