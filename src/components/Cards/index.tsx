import React from 'react';
import { IconWrapper, IconPaths } from '#components/Atoms';
import * as S from './style';

export interface Card {
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
  onClickCard: (postIdx: number) => void;
}

export default function Cards({ cards, onClickCard }: Props) {
  const handleClick = (idx: number) => {
    return (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      onClickCard(idx);
    };
  };

  if (cards.length === 0) {
    return <div>작성된 글이 없어요!</div>;
  }

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
              <S.CardLink href={`/articleDetail/${postIdx}`} onClick={handleClick(postIdx)}>
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
              </S.CardLink>
            </S.CardItem>
          ),
        )}
      </S.CardList>
    </div>
  );
}
