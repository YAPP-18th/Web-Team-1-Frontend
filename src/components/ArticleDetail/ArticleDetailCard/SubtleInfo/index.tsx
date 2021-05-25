import React from 'react';
import styled from 'styled-components';
import Author from '#components/ArticleDetail/ArticleDetailCard/SubtleInfo/Author';
import Date from '#components/ArticleDetail/ArticleDetailCard/SubtleInfo/Date';
import ReadCount from '#components/ArticleDetail/ArticleDetailCard/SubtleInfo/ReadCount';

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
      <Date date={date} />
      <ReadCount read={view} />
    </StyledSubtleInfo>
  );
};

export default SubtleInfo;
