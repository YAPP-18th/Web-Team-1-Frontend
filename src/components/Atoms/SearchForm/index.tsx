import React, { useState, useRef, useEffect } from 'react';
import { IconPaths, IconWrapper } from '#components/Atoms';
import * as S from './style';

export default function SearchForm() {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState({
    isOpen: false,
    text: '',
    defaultOption: '제목+내용',
    options: ['제목+내용', '제목', '내용'],
  });

  const { isOpen, text, defaultOption, options } = state;

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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setState({ ...state, text: value });
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent): void => {
      if (dropdownRef && !dropdownRef.current?.contains(event.target as Node)) {
        setState({ ...state, isOpen: false });
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
        <input
          type="text"
          placeholder="어떤 글을 찾으시나요?"
          onChange={handleChange}
          value={text}
        />
        <IconWrapper icon={IconPaths.Search} />
      </S.SearchField>
    </S.SearchBox>
  );
}
