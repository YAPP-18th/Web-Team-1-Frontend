import React from 'react';
import styled from 'styled-components';
import Delete from './svg/Delete';
import Edit from './svg/Edit';

interface Props {
  onClickDelete: () => void;
  onClickEdit: () => void;
}

const StyledEditBtnList = styled.div`
  position: absolute;
  right: 50px;
  display: flex;
`;

const StyledEditBtn = styled.div`
  margin: 0 10px;
  cursor: pointer;
`;

const EditBtnList = ({ onClickDelete, onClickEdit }: Props) => {
  return (
    <StyledEditBtnList>
      <StyledEditBtn onClick={onClickEdit}>
        <Edit />
      </StyledEditBtn>
      <StyledEditBtn onClick={onClickDelete}>
        <Delete />
      </StyledEditBtn>
    </StyledEditBtnList>
  );
};

export default EditBtnList;
