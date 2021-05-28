import React from 'react';
import { RouteComponentProps } from 'react-router';
import ArticleDetailContainer from '#containers/ArticleDetailContainer';
import { ProgressBar } from '#components/ArticleView';

interface MatchParams {
  id: string;
}

const ArticleDetailPage = ({ match }: RouteComponentProps<MatchParams>) => {
  return (
    <>
      <ProgressBar />
      <ArticleDetailContainer id={match.params.id} />
    </>
  );
};

export default ArticleDetailPage;
