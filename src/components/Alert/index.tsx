import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { alertActions } from 'slices/alertSlice';
import { useAppSelector } from '#hooks/useAppSelector';
import zIndex from '#styles/zIndex';

export interface Props {
  fadeIn: boolean;
  fadeOut: boolean;
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
  position: fixed;
  top: 5%;
  left: 50%;
  z-index: ${zIndex.modal};
  animation: ${(props) => props.fadeIn && 'fadein 2s'};
  animation: ${(props) => props.fadeOut && 'fadeout 2s'};
  display: inline;
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeout {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
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
  const { isFadeIn, isFadeOut, message, timer1, timer2 } = useAppSelector(
    (state) => state.alertReducer,
  );

  const toggle = () => {
    dispatch(alertActions.clearAlert());
    if (timer1 !== undefined && typeof timer1 !== 'number') {
      clearTimeout(timer1);
    }
    if (timer2 !== undefined && typeof timer2 !== 'number') {
      clearTimeout(timer2);
    }
  };

  return (
    <>
      <StyledAlert fadeIn={isFadeIn} fadeOut={isFadeOut}>
        {message} <StyledBtn onClick={toggle}>x</StyledBtn>
      </StyledAlert>
    </>
  );
};

export default Alert;
