import React from 'react';
import CommentHeader from '#components/ArticleView/ArticleDetail/Comment/CommentHeader';
import CommentItem from '#components/ArticleView/ArticleDetail/Comment/CommentItem';
import CommentInput from '#components/ArticleView/ArticleDetail/Comment/CommentInput';

const CommentContainer = () => {
  return (
    <>
      <CommentHeader />
      <CommentItem />
      <CommentItem />
      <CommentInput />
    </>
  );
};

export default CommentContainer;
