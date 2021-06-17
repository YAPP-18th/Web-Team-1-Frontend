import React from 'react';
import { useLocation } from 'react-router';
import CommentHeader from '#components/ArticleView/ArticleDetail/Comment/CommentHeader';
import CommentInput from '#components/ArticleView/ArticleDetail/Comment/CommentInput';
import CommentList from './CommentList';

const CommentContainer = () => {
  // 리덕스에서 가져오니까, 타이밍때문에 한타임 전의 인덱스로 api요청하고, 리덕스 값이 바뀜
  /* eslint-disable no-console */
  const location = useLocation();
  const index = location.pathname.split('/')[2];

  return (
    <>
      {index && (
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
