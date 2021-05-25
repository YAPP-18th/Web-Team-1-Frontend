import React from 'react';
import styled from 'styled-components';
import Author from '#components/ArticleView/ArticleDetail/SubtleInfo/Author';
import CreatedAt from '#components/ArticleView/ArticleDetail/SubtleInfo/CreatedAt';
import Views from '#components/ArticleView/ArticleDetail/SubtleInfo/Views';

interface Props {
  view: number;
  user: {
    idx: number;
    nickname: string;
    picture: string;
  };
  date: string;
}

const StyledSubtleInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 56px;
`;

const SubtleInfo = ({ user, date, view }: Props) => {
  return (
    <StyledSubtleInfo>
      <Author imgSrc={user.picture} name={user.nickname} />
      <CreatedAt date={date} />
      <Views count={view} />
    </StyledSubtleInfo>
  );
};

export default SubtleInfo;
