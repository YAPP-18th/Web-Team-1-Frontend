import React from 'react';
import styled from 'styled-components';
import { Button } from '#components/Atoms/index';

interface Props {
  onClick: () => void;
}

const StyledBtn = styled.div`
  position: absolute;
  right: 100px;
  bottom: 50px;
`;
const TempSaveBtn = ({ onClick }: Props) => {
  return (
    <StyledBtn>
      <Button buttonColor={{ background: 'blue' }} onClick={onClick}>
        작성완료
      </Button>
    </StyledBtn>
  );
};

export default TempSaveBtn;
