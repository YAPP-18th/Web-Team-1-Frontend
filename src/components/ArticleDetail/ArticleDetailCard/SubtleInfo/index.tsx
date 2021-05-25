import React from 'react';
import styled from 'styled-components';
import Author from '#components/ArticleDetail/ArticleDetailCard/SubtleInfo/Author';
import CreatedAt from '#components/ArticleDetail/ArticleDetailCard/SubtleInfo/CreatedAt';
import Views from '#components/ArticleDetail/ArticleDetailCard/SubtleInfo/Views';

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
