import React, { useState } from 'react';
import styled from 'styled-components';
import { createComment } from '#apis/articleViewApi';
import thumbnail from '../../../../assets/images/thumbnail.png';

export interface ImgProps {
  imgSrc: string;
}

interface Props {
  index: number;
}

const StyledCommentInput = styled.div`
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

const InputBox = styled.div`
  background-color: #f8f8f8;
  border-radius: 8px;
  width: 740px;
  min-height: 170px;
  padding: 16px;
  position: relative;
  & textarea {
    border: none;
    background-color: transparent;
    width: 710px;
    min-height: 100px;
    height: fit-content;
    resize: none;
  }

  & textarea:focus {
    outline: none;
  }

  & button {
    color: #fefefe;
    background-color: #6a84e1;
    border: none;
    border-radius: 90px;
    font-weight: 600;
    font-size: 15px;
    line-height: 18px;
    padding: 7px 12px;
    cursor: pointer;
    letter-spacing: -0.04em;
    position: absolute;
    right: 16px;
    bottom: 16px;
  }
`;

// const RecommentNickname = styled.span`
//   color: #6a84e1;
//   margin: 0 5px 5px 0;
//   cursor: pointer;
// `;

const CommentInput = ({ index }: Props) => {
  const [content, setContent] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const callApi = async () => {
    const result = await createComment(index, content);
    if (result) {
      // 성공
      setContent('');
    }
  };

  return (
    <StyledCommentInput>
      <ImgColumn imgSrc={thumbnail} />
      <TextColumn>
        <InputBox>
          {/* <RecommentNickname>@빈센조 까사노</RecommentNickname> */}
          <textarea value={content} onChange={onChange} spellCheck={false} />
          <button type="button" onClick={() => callApi()}>
            완료
          </button>
        </InputBox>
      </TextColumn>
    </StyledCommentInput>
  );
};

export default CommentInput;
