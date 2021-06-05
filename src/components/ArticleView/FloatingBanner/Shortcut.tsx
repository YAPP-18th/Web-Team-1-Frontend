import React from 'react';
import styled from 'styled-components';
import { IconPaths, IconWrapper, Button } from '#components/Atoms';

const StyledShortcut = styled.div`
  position: fixed;
  top: 85%;
  left: 75%;
`;

const Shortcut = () => {
  const text = `이 방법으로 회고하기`;
  return (
    <StyledShortcut>
      <Button buttonColor={{ background: 'blue' }}>
        {text}
        <IconWrapper icon={IconPaths.Glitter} />
      </Button>
    </StyledShortcut>
  );
};

export default React.memo(Shortcut);
