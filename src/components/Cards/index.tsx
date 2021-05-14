import React from 'react';

import styled from 'styled-components';

import color from '#styles/color';

interface Card {
  id: number;
  title: string;
  category: string;
  description: string;
  tags: string[];
  user: string;
  createdAt: string;
}
interface Props {
  cards: Card[];
}

export default function Cards({ cards }: Props) {
  return (
    <div className="articles">
      <CardList>
        {cards.map(({ id, title, category, description, tags, user, createdAt }) => (
          <CardItem key={id}>
            <article>
              <Title>{title}</Title>
              <Category category={category}>{category}</Category>
              <Content>{description}</Content>
              <Tags>
                {tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </Tags>
              {/* TODO: 댓글, 공유 표시 */}
            </article>
            <User>
              {user}
              <CreatedAt>{createdAt}</CreatedAt>
            </User>
          </CardItem>
        ))}
      </CardList>
    </div>
  );
}

const CardList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 296px);
  gap: 16px 16px;
  list-style: none;
`;

const CardItem = styled.li`
  font-family: Apple SD Gothic Neo;
  font-weight: 400;
  padding: 24px 20px;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0px 5px 20px 0px #cdccc640;
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 20px;
  color: #333333;
  line-height: 20px;
`;

const Category = styled.span<{ category: string }>`
  display: block;
  font-size: 12px;
  color: #666666;
  line-height: 14.4px;
  padding: 10px 0 16px 0;
  &::before {
    content: '';
    display: inline-block;
    margin-right: 4px;
    margin-bottom: 0.5px;
    height: 8px;
    width: 8px;
    background-color: ${(props) => {
      const categories: { [key: string]: string } = {
        마케팅: 'red',
        디자인: 'blue',
        기획: 'purple',
        개발: 'yellow',
      };
      return color[categories[props.category]];
    }};
    border-radius: 50%;
  }
`;

const Tags = styled.ul`
  display: flex;
  font-family: Helvetica Neue;
  font-size: 12px;
  letter-spacing: -0.04em;
  color: #666666;
  line-height: 14px;
  gap: 5px;
  list-style: none;
  padding-bottom: 16px;
  border-bottom: 1px solid #eeeeee;
`;

const Content = styled.section`
  font-size: 15px;
  color: #666666;
  line-height: 24px;
  padding-bottom: 22px;
  letter-spacing: -0.04em;
`;

const User = styled.div`
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  letter-spacing: -0.04em;
  display: flex;
  justify-content: space-between;
  padding-top: 19px;
`;

const CreatedAt = styled.div`
  font-family: Helvetica Neue;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: -0.01em;
  color: #999999;
`;
