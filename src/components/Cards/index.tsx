import React from 'react';

interface Card {
  id: number;
  title: string;
  description: string;
}
interface Props {
  cards: Card[];
}

export default function Cards({ cards }: Props) {
  return (
    <div className="articles">
      <ul>
        {cards.map(({ id, title, description }) => (
          <li key={id}>
            <article>
              <h1>{title}</h1>
              <section>{description}</section>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
