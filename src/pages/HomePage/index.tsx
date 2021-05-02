import React from 'react';

export default function HomePage() {
  return (
    <>
      <header>
        <h1>돌아보다,</h1>
        <button type="button">회원가입 / 로그인</button>
      </header>

      <main>
        <div className="select-group">
          <select>
            <option value="1">오늘 하루,</option>
          </select>
          <select>
            <option value="1">많은 생각을 했고,</option>
            <option value="2">유독 정신없고,</option>
          </select>
          <select>
            <option value="1">회고가 필요하다면?</option>
            <option value="2">길고 지루하게,</option>
          </select>
        </div>

        <div>
          <nav className="categories">
            <label htmlFor="total">
              <input type="checkbox" id="total" name="total" />
              전체
            </label>
            <label htmlFor="marketing">
              <input type="checkbox" id="marketing" name="marketing" />
              마케팅
            </label>
            <label htmlFor="design">
              <input type="checkbox" id="design" name="design" />
              디자인
            </label>
            <label htmlFor="managing">
              <input type="checkbox" id="managing" name="managing" />
              기획
            </label>
            <label htmlFor="develop">
              <input type="checkbox" id="develop" name="develop" />
              개발
            </label>
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

        <div className="articles">
          <ul>
            <li>
              <article>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum illo optio esse
                expedita iusto, repellat commodi dolorum! Minima, veniam provident. Ex non voluptate
                tempora dolorem repellendus voluptates, ipsa nihil autem?
              </article>
            </li>
            <li>
              <article>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum illo optio esse
                expedita iusto, repellat commodi dolorum! Minima, veniam provident. Ex non voluptate
                tempora dolorem repellendus voluptates, ipsa nihil autem?
              </article>
            </li>
            <li>
              <article>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum illo optio esse
                expedita iusto, repellat commodi dolorum! Minima, veniam provident. Ex non voluptate
                tempora dolorem repellendus voluptates, ipsa nihil autem?
              </article>
            </li>
            <li>
              <article>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum illo optio esse
                expedita iusto, repellat commodi dolorum! Minima, veniam provident. Ex non voluptate
                tempora dolorem repellendus voluptates, ipsa nihil autem?
              </article>
            </li>
            <li>
              <article>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum illo optio esse
                expedita iusto, repellat commodi dolorum! Minima, veniam provident. Ex non voluptate
                tempora dolorem repellendus voluptates, ipsa nihil autem?
              </article>
            </li>
            <li>
              <article>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum illo optio esse
                expedita iusto, repellat commodi dolorum! Minima, veniam provident. Ex non voluptate
                tempora dolorem repellendus voluptates, ipsa nihil autem?
              </article>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}
