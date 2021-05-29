import React from 'react';
import { IconWrapper, IconPaths } from '#components/Atoms';
import * as S from './style';

interface Card {
  postIdx: number;
  title: string;
  category: string;
  contents: string;
  nickname: string;
  profile: string;
  tag: string;
  view: number;
  created_at: string;
  commentCnt: number;
  scrapCnt: number;
}

interface Props {
  cards: Card[];
}

export default function Cards({ cards }: Props) {
  return (
    <div className="articles">
      <S.CardList>
        {cards.map(
          ({
            postIdx,
            title,
            category,
            contents,
            nickname,
            profile,
            tag,
            created_at,
            commentCnt,
            scrapCnt,
          }) => (
            <S.CardItem key={postIdx}>
              <article>
                <S.Title>{title}</S.Title>
                <S.Category category={category}>{category}</S.Category>
                <S.Content>{contents.replace(/(<([^>]+)>)/gi, '')}</S.Content>
                <S.CardFooter>
                  <div className="tag">{tag}</div>
                  <div className="comment-and-scrap">
                    <div>
                      <IconWrapper icon={IconPaths.Commant} />
                      {commentCnt}
                    </div>
                    <div>
                      <IconWrapper icon={IconPaths.Bookmark} />
                      {scrapCnt}
                    </div>
                  </div>
                </S.CardFooter>
              </article>
              <S.User>
                <S.UserPhoto userPhoto={profile} />
                {nickname}
                <S.CreatedAt>{created_at}</S.CreatedAt>
              </S.User>
            </S.CardItem>
          ),
        )}
      </S.CardList>
    </div>
  );
}
