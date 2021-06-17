import React, { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import CommentHeader from '#components/ArticleView/ArticleDetail/Comment/CommentHeader';
import CommentInput from '#components/ArticleView/ArticleDetail/Comment/CommentInput';
import CommentList from './CommentList';
import {
  createComment,
  getCommentCount,
  getCommentList,
  getCommentListWithToken,
} from '#apis/articleViewApi';

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

const CommentContainer = () => {
  // 리덕스에서 가져오니까, 타이밍때문에 한타임 전의 인덱스로 api요청하고, 리덕스 값이 바뀜
  /* eslint-disable no-console */
  const location = useLocation();
  const index = location.pathname.split('/')[2];
  const [commentCount, setCommentCount] = useState<number>(0);
  const [commentList, setCommentList] = useState<Array<CommentType>>([]);

  const callCommentCountApi = useCallback(async () => {
    const result = await getCommentCount(index);
    if (result) {
      setCommentCount(result);
    }
  }, []);

  const callCommentListApi = useCallback(async () => {
    let result;
    if (window.localStorage.getItem('accessToken')) {
      result = await getCommentListWithToken(index, 0, 10);
    } else {
      result = await getCommentList(index, 0, 10);
    }
    if (result) {
      setCommentList(result.data);
    }
  }, []);

  const callCreateCommentApi = useCallback(async (content: string) => {
    const result = await createComment(index, content);
    if (result) {
      // 성공
      callCommentCountApi();
      callCommentListApi();
    }
    return result;
  }, []);

  useEffect(() => {
    callCommentCountApi();
    callCommentListApi();
  }, []);

  return (
    <>
      {index && (
        <>
          <CommentHeader commentCount={commentCount} />
          <CommentList commentList={commentList} />
          <CommentInput callApi={callCreateCommentApi} />
        </>
      )}
    </>
  );
};

export default CommentContainer;
