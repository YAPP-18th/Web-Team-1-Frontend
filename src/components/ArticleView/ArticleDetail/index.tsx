import React, { useEffect, useRef } from 'react';
import { Viewer } from '@toast-ui/react-editor';
import styled from 'styled-components';
import { articleDetailFixture as mockup } from '#fixtures/articleDetail';
import Category from './Category';
import Title from './Title';

import SubtleInfo from '#components/ArticleView/ArticleDetail/SubtleInfo';
// import '@toast-ui/editor/dist/toastui-editor.css';
// import 'codemirror/lib/codemirror.css';
// import './Style/style.css';

const StyleArticleCard = styled.div`
  background-color: #fefefe;
  box-shadow: 0px 5px 20px rgba(205, 204, 198, 0.25);
  border-radius: 29px;
  padding: 56px 200px 64px 100px;
  /* margin: 0 0 50px 104px; */
  width: 1128px;
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

const ArticleDetailCard = () => {
  const viewerRef = useRef<Viewer>(null);
  useEffect(() => {
    if (viewerRef.current !== null) {
      const { content } = mockup;
      if (content) {
        viewerRef.current.getInstance().setMarkdown(content);
      }
    }
  }, []);
  return (
    <StyleArticleCard>
      <Category category={mockup.category} />
      <Title text={mockup.title} />
      <SubtleInfo user={mockup.user} view={mockup.view} date={mockup.date} />
      <StyledViewer>
        <Viewer ref={viewerRef} />
      </StyledViewer>
    </StyleArticleCard>
  );
};

export default ArticleDetailCard;
