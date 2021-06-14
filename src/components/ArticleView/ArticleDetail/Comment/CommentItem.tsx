import React from 'react';
import styled from 'styled-components';
import thumbnail from '../../../../assets/images/thumbnail.png';

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

const HeaderBtn = styled.small<HeaderBtnColor>`
  color: ${(props) => (props.color === 'dark' ? '#666666' : '#999999')};
  margin-left: 8px;
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
  max-width: 740px;
  font-size: 15px;
  line-height: 24px;

  letter-spacing: -0.04em;

  color: #666666;
  border-bottom: 1px solid #eeeeee;
  padding-bottom: 32px;
`;

const RecommentNickname = styled.span`
  color: #6a84e1;
  margin-right: 5px;
  cursor: pointer;
`;

const CommentItem = () => {
  return (
    <>
      <StyledCommentItem>
        <ImgColumn imgSrc={thumbnail} />
        <TextColumn>
          <CommentItemHeader>
            <HeaderLeft>
              <HeaderNickname>필리포 인자기</HeaderNickname>
              <CommentCreatedAt>Oct 28, 2020</CommentCreatedAt>
            </HeaderLeft>
            <HeaderRight>
              <HeaderBtn color="dark">답글</HeaderBtn>
              <HeaderBtn>신고</HeaderBtn>
              <HeaderBtn>삭제</HeaderBtn>
            </HeaderRight>
          </CommentItemHeader>
          <CommentContents>
            <RecommentNickname>@빈센조 까사노</RecommentNickname>
            국가는 사회보장·사회복지의 증진에 노력할 의무를 진다. 대한민국의 국민이 되는 요건은
            법률로 정한다. 국회는 국가의 예산안을 심의·확정한다. 모든 국민은 법률이 정하는 바에
            의하여 국방의 의무를 진다. 대통령의 임기는 5년으로 하며, 중임할 수 없다. 공공필요에 의한
            재산권의 수용·사용 또는 제한 및 그에 대한 보상은 법률로써 하되, 정당한 보상을 지급하여야
            한다.
          </CommentContents>
        </TextColumn>
      </StyledCommentItem>
    </>
  );
};

export default CommentItem;
