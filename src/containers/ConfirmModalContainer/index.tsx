import React from 'react';
import ConfirmModal from '#components/ConfirmModal';

interface Props {
  type: string;
  callApi: () => Promise<void>;
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
  comment: {
    header: '댓글을 삭제할까요?',
    body: '댓글은 한 번 삭제하면 되돌릴 수 없으므로 신중하게 확인해주세요.',
    btnMsg: '삭제',
  },
  withdrawal: {
    header: '정말 탈퇴하시겠습니까?',
    body: '계정은 한 번 탈퇴하면 되돌릴 수 없으므로 신중하게 확인해주세요.',
    btnMsg: '탈퇴',
  },
};

const ConfirmModalContainer = ({ type, callApi, toggle }: Props) => {
  return (
    <>
      <ConfirmModal
        toggle={toggle}
        header={Msg[type].header}
        body={Msg[type].body}
        btnMsg={Msg[type].btnMsg}
        callApi={callApi}
      />
    </>
  );
};

export default ConfirmModalContainer;
