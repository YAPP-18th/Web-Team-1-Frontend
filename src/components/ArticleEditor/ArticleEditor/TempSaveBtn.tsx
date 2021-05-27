import React from 'react';
import { IconPaths, IconWrapper, Button } from '#components/Atoms/index';
import { color } from '#styles/index';

interface Props {
  onClick: () => void;
}
const TempSaveBtn = ({ onClick }: Props) => {
  return (
    <>
      <Button buttonColor={{ background: color.blue }} onClick={onClick}>
        작성완료
      </Button>
    </>
  );
};

export default TempSaveBtn;
