import React from 'react';
import styled from 'styled-components';
import { TagItem } from '#containers/ArticleModalContainer';

interface Props {
  tag: TagItem;
  deleteTag: (tagId: number) => void;
}

const StyledHashTag = styled.div`
  color: #fefefe;
  background-color: #acaba5;
  height: 24px;
  display: inline-block;
  padding: 5px;
  margin: 0 4px 4px 0;
  border-radius: 4px;
`;

const CloseBtn = styled.button`
  background-color: transparent;
  border: none;
  color: #fefefe;
  margin: 0 0 0 5px;
  cursor: pointer;
`;

const HashTag = ({ tag, deleteTag }: Props) => {
  return (
    <StyledHashTag>
      #{tag.text}
      <CloseBtn
        onClick={() => {
          deleteTag(tag.id);
        }}
      >
        x
      </CloseBtn>
    </StyledHashTag>
  );
};

export default HashTag;
