import React from 'react';
import styled from 'styled-components';
import Delete from './svg/Delete';
import Edit from './svg/Edit';

const StyledEditBtnList = styled.div`
  position: absolute;
  right: 50px;
  display: flex;
`;

const StyledEditBtn = styled.div`
  margin: 0 10px;
  cursor: pointer;
`;

const EditBtnList = () => {
  return (
    <StyledEditBtnList>
      <StyledEditBtn>
        <Edit />
      </StyledEditBtn>
      <StyledEditBtn>
        <Delete />
      </StyledEditBtn>
    </StyledEditBtnList>
  );
};

export default EditBtnList;
