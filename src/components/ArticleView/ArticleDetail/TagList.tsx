import React from 'react';
import styled from 'styled-components';
import { Button } from '#components/Atoms/index';

interface Props {
  tag: Array<string>;
}

const StyledTag = styled.span`
  margin: 0 4px;
`;

const TagList = ({ tag }: Props) => {
  let count = 0;

  const indexedTagList = tag.map((item) => {
    count += 1;
    return { id: count, text: item };
  });

  return (
    <>
      {indexedTagList.map((item) => {
        return (
          <StyledTag key={item.id}>
            <Button buttonColor={{ background: 'lightGray' }}>{item.text}</Button>
          </StyledTag>
        );
      })}
    </>
  );
};

export default TagList;
