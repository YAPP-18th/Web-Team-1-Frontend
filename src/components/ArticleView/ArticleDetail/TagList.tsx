import React from 'react';
import styled from 'styled-components';
import { Button } from '#components/Atoms/index';
import { tagData } from '#apis/articleViewApi';

interface Props {
  tag: Array<tagData>;
}

const StyledTag = styled.span`
  margin: 0 4px;
`;

const TagList = ({ tag }: Props) => {
  return (
    <>
      {tag.map((item) => {
        return (
          <StyledTag key={item.tagIdx}>
            <Button buttonColor={{ background: 'lightGray' }}>{item.tag}</Button>
          </StyledTag>
        );
      })}
    </>
  );
};

export default TagList;
