import React from 'react';
import styled from 'styled-components';
import Author from '#components/ArticleView/ArticleDetail/SubtleInfo/Author';
import CreatedAt from '#components/ArticleView/ArticleDetail/SubtleInfo/CreatedAt';

interface Props {
  nickname: string;
  profile: string;
  date: string;
}

const StyledSubtleInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 56px;
`;

const SubtleInfo = ({ nickname, profile, date }: Props) => {
  return (
    <StyledSubtleInfo>
      <Author imgSrc={profile} name={nickname} />
      <CreatedAt date={date} />
    </StyledSubtleInfo>
  );
};

export default SubtleInfo;
