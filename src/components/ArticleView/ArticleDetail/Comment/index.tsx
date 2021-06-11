import React from 'react';
import CommentHeader from './CommentHeader';
import CommentInput from './CommentInput';
import CommentItem from './CommentItem';

const Comment = () => {
  return (
    <>
      <CommentHeader />
      <CommentItem />
      <CommentItem />
      <CommentInput />
    </>
  );
};

export default Comment;
