import React from 'react';
import styled from 'styled-components';
import Author from '#components/ArticleView/ArticleDetail/SubtleInfo/Author';
import CreatedAt from '#components/ArticleView/ArticleDetail/SubtleInfo/CreatedAt';
// import Views from '#components/ArticleView/ArticleDetail/SubtleInfo/Views';

interface Props {
  view: number;
  nickname: string;
  profile: string;
  date: string;
}

const StyledSubtleInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 56px;
`;

const SubtleInfo = ({ nickname, profile, date, view }: Props) => {
  return (
    <StyledSubtleInfo>
      <Author imgSrc={profile} name={nickname} />
      <CreatedAt date={date} />
      {/* <Views count={view} /> */}
    </StyledSubtleInfo>
  );
};

export default SubtleInfo;
