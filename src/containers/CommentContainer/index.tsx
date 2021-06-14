import React from 'react';
import CommentHeader from '#components/ArticleView/ArticleDetail/Comment/CommentHeader';
import CommentInput from '#components/ArticleView/ArticleDetail/Comment/CommentInput';
import CommentList from './CommentList';
import { useAppSelector } from '#hooks/useAppSelector';

const CommentContainer = () => {
  const { index } = useAppSelector((state) => state.articleViewReducer);

  return (
    <>
      {index >= 0 && (
        <>
          <CommentHeader />
          <CommentList index={index} />
          <CommentInput index={index} />
        </>
      )}
    </>
  );
};

export default CommentContainer;
