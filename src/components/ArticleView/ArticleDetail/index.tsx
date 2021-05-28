import React, { useEffect, useRef } from 'react';
import { Viewer } from '@toast-ui/react-editor';
import styled from 'styled-components';
import { ArticleDetailData } from '#apis/articleViewApi';
import Category from './Category';
import Title from './Title';

import SubtleInfo from '#components/ArticleView/ArticleDetail/SubtleInfo';
import TagList from './TagList';
import EditBtnList from './EditBtnList';
// import '@toast-ui/editor/dist/toastui-editor.css';
// import 'codemirror/lib/codemirror.css';
// import './Style/style.css';

interface Props {
  data: ArticleDetailData;
}

const StyleArticleCard = styled.div`
  background-color: #fefefe;
  box-shadow: 0px 5px 20px rgba(205, 204, 198, 0.25);
  border-radius: 29px;
  padding: 56px 200px 64px 100px;
  /* margin: 0 0 50px 104px; */
  width: 1128px;
  position: relative;
`;

const StyledViewer = styled.div`
  & .tui-editor-contents {
    font-family: RIDIBatang;
    font-style: normal;
    font-weight: normal;
    line-height: 200%;
    letter-spacing: -0.04em;

    color: #666666;
  }

  & .tui-editor-contents *:not(table) {
    line-height: 200%;
    font-size: 18px;
  }
`;

const StyledTag = styled.div`
  display: flex;
`;

const ArticleDetailCard = ({ data }: Props) => {
  const { contents, category, title, nickname, profile, view, created_at, tag } = data;
  const viewerRef = useRef<Viewer>(null);

  useEffect(() => {
    if (viewerRef.current !== null) {
      viewerRef.current.getInstance().setMarkdown(contents);
    }
  }, [contents]);

  return (
    <StyleArticleCard>
      <EditBtnList />
      <StyledTag>
        <Category category={category} />
        <TagList tag={tag} />
      </StyledTag>
      <Title text={title} />
      <SubtleInfo nickname={nickname} profile={profile} view={view} date={created_at} />
      <StyledViewer>
        <Viewer ref={viewerRef} />
      </StyledViewer>
    </StyleArticleCard>
  );
};

export default ArticleDetailCard;
