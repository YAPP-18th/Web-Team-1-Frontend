import React from 'react';
import styled from 'styled-components';
import { Button } from '#components/Atoms';
import { color } from '#styles/index';

interface Props {
  tag: Array<string>;
}

const StyledTagList = styled.div`
  display: flex;
`;

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
    <StyledTagList>
      {indexedTagList.map((item) => {
        return (
          <StyledTag key={item.id}>
            <Button buttonColor={{ background: color.gray }}>{item.text}</Button>
          </StyledTag>
        );
      })}
    </StyledTagList>
  );
};

export default TagList;
