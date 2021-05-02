import React from 'react';

export default function HomePage() {
  return (
    <>
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
        <Categories />

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
