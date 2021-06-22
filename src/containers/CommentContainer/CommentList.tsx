import React from 'react';
import CommentItem from '#components/ArticleView/ArticleDetail/Comment/CommentItem';
import { CommentType } from '.';
/* eslint-disable no-console */

interface Props {
  commentList: CommentType[];
  deleteApi: (commentIndex: number) => Promise<void>;
}

const CommentList = ({ commentList, deleteApi }: Props) => {
  return (
    <>
      {commentList.length > 0 &&
        commentList.map((comment) => (
          <CommentItem key={comment.commentIdx} data={comment} deleteApi={deleteApi} />
        ))}
    </>
  );
};

export default React.memo(CommentList);
