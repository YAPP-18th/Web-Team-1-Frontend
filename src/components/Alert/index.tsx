import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { alertActions } from 'slices/alertSlice';
import { useAppSelector } from '#hooks/useAppSelector';

export interface Props {
  fadeIn: boolean;
}

const StyledAlert = styled.div<Props>`
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  padding: 15px 20px;
  transition: transform 0.3s ease-in-out;
  transform: translateX(-50%);
  color: white;
  width: fit-content;
  margin: auto;
  text-align: center;
  position: absolute;
  top: 20%;
  left: 50%;
  z-index: 1000;
  animation: ${(props) => (props.fadeIn ? 'fadein 2s' : 'fadeout 2s')};
  display: inline;
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  visibility: ${(props) => (props.fadeIn ? 'visible' : 'hidden')};
`;

const StyledBtn = styled.div`
  cursor: pointer;
  margin-left: 10px;
  display: inline;
`;

const Alert = () => {
  const dispatch = useDispatch();
  const { isShow, message } = useAppSelector((state) => state.alertReducer);

  const toggle = () => {
    const reduxData = {
      isShow: false,
      message: '',
    };
    dispatch(alertActions.setAlert(reduxData));
  };

  return (
    <>
      <StyledAlert fadeIn={isShow}>
        {message} <StyledBtn onClick={toggle}>x</StyledBtn>
      </StyledAlert>
    </>
  );
};

export default Alert;
