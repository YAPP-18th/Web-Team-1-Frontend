import React from 'react';
import CommentItem from '#components/ArticleView/ArticleDetail/Comment/CommentItem';
import { CommentType } from '.';
/* eslint-disable no-console */

interface Props {
  commentList: CommentType[];
}

const CommentList = ({ commentList }: Props) => {
  return (
    <>
      {commentList.length > 0 &&
        commentList.map((comment) => <CommentItem key={comment.commentIdx} data={comment} />)}
    </>
  );
};

export default React.memo(CommentList);
