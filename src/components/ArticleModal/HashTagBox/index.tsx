import React, { useState } from 'react';
import styled from 'styled-components';
import HashTag from './HashTag';
import { TagItem } from '#containers/ArticleModalContainer';

interface Props {
  addTag: (tagText: string) => void;
  tagList: Array<TagItem>;
  deleteTag: (tagId: number) => void;
}

const StyledHashTagBox = styled.div`
  background-color: #fefefe;
  border: 1px solid #6a84e1;
  border-radius: 8px;
  padding: 12px;
  width: 296px;
`;

const Input = styled.input`
  background-color: transparent;
  border: none;
  margin-left: 5px;
  &:focus {
    outline: none;
  }
  max-width: fit-content;
`;

const HashTagBox = ({ addTag, tagList, deleteTag }: Props) => {
  const [tagText, setTagText] = useState('');

  const onSubmitHashTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      addTag(tagText);
      setTagText('');
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTagText(e.target.value);
  };

  return (
    <StyledHashTagBox>
      {tagList.map((item) => {
        return <HashTag tag={item} key={item.id} deleteTag={deleteTag} />;
      })}
      <Input value={tagText} onChange={onChange} onKeyPress={onSubmitHashTag} />
    </StyledHashTagBox>
  );
};

export default HashTagBox;
