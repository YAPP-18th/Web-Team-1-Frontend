import styled from 'styled-components';
import zIndex from '#styles/zIndex';

export const LoginAfter = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const MenuWrapper = styled.div`
  position: absolute;
  top: 48px;
  right: 0px;
  display: flex;
  flex-direction: column;
  width: 240px;
  padding: 16px;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0px 5px 20px 0px #cdccc640;
  z-index: ${zIndex.menu};
  .profile {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    img {
      width: 56px;
      height: 56px;
      margin-right: 8px;
      border-radius: 50%;
    }
    p,
    span {
      font-size: 12px;
    }
    p {
      font-weight: bold;
    }
  }
  a,
  span {
    padding: 8px 0px;
    cursor: pointer;
    color: black;
  }
`;
