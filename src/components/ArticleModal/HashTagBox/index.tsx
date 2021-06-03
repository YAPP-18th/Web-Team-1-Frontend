import React, { useState } from 'react';
import styled from 'styled-components';
import HashTag from './HashTag';

interface Props {
  addTag: (tagText: string) => void;
  tagList: Array<string>;
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

const HashTagBox = ({ addTag, tagList }: Props) => {
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

  let count = 0;

  const indexedTagList = tagList.map((item) => {
    count += 1;
    return { id: count, text: item };
  });

  return (
    <StyledHashTagBox>
      {indexedTagList.map((item) => {
        return <HashTag text={item.text} key={item.id} />;
      })}
      <Input value={tagText} onChange={onChange} onKeyPress={onSubmitHashTag} />
    </StyledHashTagBox>
  );
};

export default HashTagBox;
