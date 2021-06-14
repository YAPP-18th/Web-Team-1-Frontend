import React, { useEffect, useState } from 'react';
import CommentItem from '#components/ArticleView/ArticleDetail/Comment/CommentItem';
import { getCommentList } from '#apis/articleViewApi';
/* eslint-disable no-console */

interface Props {
  index: number;
}

export interface CommentType {
  commentIdx: number;
  comments: string;
  createdAt: string;
  modifiedAt: string;
  nickname: string;
  profile: string;
  userIdx: number;
  writer: boolean;
}

const CommentList = ({ index }: Props) => {
  const [list, setList] = useState<Array<CommentType>>([]);

  const callApi = async () => {
    const result = await getCommentList(index, 0, 10);
    // console.log(result);
    if (result) {
      setList(result.data);
    }
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
    <>
      {list.length &&
        list.map((comment) => <CommentItem key={comment.commentIdx} data={comment} />)}
    </>
  );
};

export default CommentList;
