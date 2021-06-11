import React from 'react';
import styled from 'styled-components';

const StyledCommentHeader = styled.header`
  font-family: Apple SD Gothic Neo;
  font-weight: 500;
  font-size: 18px;
  letter-spacing: -0.04em;

  color: #333333;
  width: 100%;
  border-bottom: 1px solid #eeeeee;
  padding-bottom: 25px;
`;

const CommentCount = styled.span`
  color: #6a84e1;
  margin-left: 4px;
`;

const CommentHeader = () => {
  return (
    <>
      <StyledCommentHeader>
        댓글
        <CommentCount>8</CommentCount>
      </StyledCommentHeader>
    </>
  );
};

export default CommentHeader;