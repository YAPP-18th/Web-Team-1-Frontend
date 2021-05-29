import React from 'react';
import ConfirmModal from '#components/ConfirmModal';

interface Props {
  type: string;
  onClick: () => void;
  toggle: () => void;
}

interface MsgSet {
  header: string;
  body: string;
  btnMsg: string;
}

const Msg: { [key: string]: MsgSet } = {
  write: {
    header: '회고 작성을 완료할까요?',
    body: '회고 작성을 완료한 이후에는 회고 카테고리, 해시태그 변경이 불가능합니다.',
    btnMsg: '작성 완료',
  },
  delete: {
    header: '회고글을 삭제할까요?',
    body: '회고글은 한 번 삭제하면 되돌릴 수 없으므로 신중하게 확인해주세요.',
    btnMsg: '삭제',
  },
};

const ConfirmModalContainer = ({ type, onClick, toggle }: Props) => {
  return (
    <>
      <ConfirmModal
        toggle={toggle}
        header={Msg[type].header}
        body={Msg[type].body}
        btnMsg={Msg[type].btnMsg}
        onClick={onClick}
      />
    </>
  );
};

export default ConfirmModalContainer;
