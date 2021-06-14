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
      <ArticleDetailContainer id={match.params.id} />
      <ProgressBar />
    </>
  );
};

export default ArticleDetailPage;
