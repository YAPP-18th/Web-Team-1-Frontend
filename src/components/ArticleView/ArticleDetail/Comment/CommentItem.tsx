import React from 'react';
import styled from 'styled-components';
// import thumbnail from '../../../../assets/images/thumbnail.png';
import { CommentType } from '#containers/CommentContainer';

export interface ImgProps {
  imgSrc: string;
}
export interface HeaderBtnColor {
  color?: string;
}
const StyledCommentItem = styled.div`
  padding: 24px 0 0 0;
  display: flex;
  justify-content: space-between;
  font-family: Apple SD Gothic Neo;
`;

const ImgColumn = styled.div<ImgProps>`
  background-image: url(${(props) => props.imgSrc});
  background-size: cover;
  width: 56px;
  height: 56px;
  margin-right: 16px;

  border-radius: 50%;
`;

const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const CommentItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const HeaderLeft = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderRight = styled.div`
  font-size: 12px;
  line-height: 14px;
  letter-spacing: -0.01em;

  display: flex;
`;

const HeaderBtn = styled.button<HeaderBtnColor>`
  color: ${(props) => (props.color === 'dark' ? '#666666' : '#999999')};
  margin-left: 8px;
  height: 30px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const HeaderNickname = styled.span`
  font-weight: 500;
  font-size: 18px;
  line-height: 14px;
  letter-spacing: -0.04em;
  margin: 10px 0 8px 0;
  /* margin-bottom: 8px; */
  cursor: pointer;

  color: #333333;
`;

const CommentCreatedAt = styled.span`
  font-family: Helvetica Neue;
  font-size: 14px;
  line-height: 17px;

  letter-spacing: -0.01em;

  color: #666666;
`;

const CommentContents = styled.p`
  display: inline;
  width: 740px;
  font-size: 15px;
  line-height: 24px;

  letter-spacing: -0.04em;

  color: #666666;
  border-bottom: 1px solid #eeeeee;
  padding-bottom: 32px;
`;

// const RecommentNickname = styled.span`
//   color: #6a84e1;
//   margin-right: 5px;
//   cursor: pointer;
// `;

interface Props {
  data: CommentType;
  deleteApi: (commentIndex: number) => Promise<void>;
}

const CommentItem = ({ data, deleteApi }: Props) => {
  return (
    <>
      <StyledCommentItem>
        <ImgColumn imgSrc={data.profile} />
        <TextColumn>
          <CommentItemHeader>
            <HeaderLeft>
              <HeaderNickname>{data.nickname}</HeaderNickname>
              <CommentCreatedAt>Oct 28, 2020</CommentCreatedAt>
            </HeaderLeft>
            <HeaderRight>
              {/* <HeaderBtn color="dark">답글</HeaderBtn> */}
              {/* <HeaderBtn>신고</HeaderBtn> */}
              {data.writer && (
                <HeaderBtn type="button" onClick={() => deleteApi(data.commentIdx)}>
                  삭제
                </HeaderBtn>
              )}
            </HeaderRight>
          </CommentItemHeader>
          <CommentContents>
            {/* <RecommentNickname>@빈센조 까사노</RecommentNickname> */}
            {data.comments}
          </CommentContents>
        </TextColumn>
      </StyledCommentItem>
    </>
  );
};

export default CommentItem;
