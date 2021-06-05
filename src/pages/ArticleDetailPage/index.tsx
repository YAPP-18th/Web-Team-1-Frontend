import React from 'react';
import { RouteComponentProps } from 'react-router';
import ArticleDetailContainer from '#containers/ArticleDetailContainer';
import { ProgressBar } from '#components/ArticleView';
import FloatingBanner from '#components/ArticleView/FloatingBanner';

interface MatchParams {
  id: string;
}

const ArticleDetailPage = ({ match }: RouteComponentProps<MatchParams>) => {
  return (
    <>
      <ArticleDetailContainer id={match.params.id} />
      <ProgressBar />
      <FloatingBanner />
    </>
  );
};

export default ArticleDetailPage;
