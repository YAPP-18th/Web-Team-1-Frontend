import styled from 'styled-components';
import { color, zIndex } from '#styles/index';

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: ${color.modalOuter};
  z-index: ${zIndex.modal};
`;

export const ModalWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 640px;
  padding: 32px;
  border-radius: 24px;
  background-color: ${color.white};

  header {
    position: relative;
    width: 100%;
    margin-bottom: 16px;
    h1 {
      font-size: 40px;
      text-align: center;
    }
    .exit {
      position: absolute;
      top: -8px;
      right: -8px;
    }
  }

  p {
    margin-bottom: 32px;
    text-align: center;
    color: ${color.modalText};
  }

  .button-wrapper {
    display: flex;
    margin-bottom: 16px;
    a {
      width: 120px;
      justify-content: flex-start;
    }
    a:first-child {
      margin-right: 8px;
    }
    span {
      margin-right: 4px;
    }
  }
`;
