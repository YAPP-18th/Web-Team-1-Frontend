import React from 'react';
import * as S from './style';

export default function SearchForm() {
  return (
    <S.SearchBox>
      <S.Dropdown>
        <S.DefaultOption>제목+내용</S.DefaultOption>
        <ul>
          <li>제목+내용</li>
          <li>제목</li>
          <li>내용</li>
        </ul>
      </S.Dropdown>
      <S.SearchField>
        <input type="search" placeholder="어떤 글을 찾으시나요?" />
        <input type="submit" value="찾기" />
      </S.SearchField>
    </S.SearchBox>
  );
}
