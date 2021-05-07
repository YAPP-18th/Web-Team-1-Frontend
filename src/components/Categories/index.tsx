import React from 'react';

export default function Categories() {
  const categories = [
    { category: '전체', value: 'total' },
    { category: '마케팅', value: 'marketing' },
    { category: '디자인', value: 'design' },
    { category: '기획', value: 'managing' },
    { category: '개발', value: 'develop' },
  ];

  return (
    <div>
      <nav className="categories">
        {categories.map(({ category, value }) => (
          <label htmlFor={value} key={category}>
            <input type="checkbox" id={value} name={value} />
            {category}
          </label>
        ))}
      </nav>
      <form className="article-search">
        <select>
          <option value="title">제목</option>
          <option value="description">내용</option>
        </select>
        <input type="search" placeholder="검색하세요" />
        <input type="submit" />
      </form>
    </div>
  );
}
