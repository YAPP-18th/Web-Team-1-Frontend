import styled from 'styled-components';
import zIndex from '#styles/zIndex';

export const LoginAfter = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const MenuWrapper = styled.div`
  position: absolute;
  top: 55px;
  right: 0px;
  display: flex;
  flex-direction: column;
  width: 240px;
  padding-bottom: 16px;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0px 5px 20px 0px #cdccc640;
  z-index: ${zIndex.menu};
  .profile {
    padding: 16px;
    display: flex;
    align-items: center;
    img {
      width: 56px;
      height: 56px;
      margin-right: 8px;
      border-radius: 50%;
      object-fit: cover;
    }

    span {
      font-size: 14px;
    }
    button.nickname {
      /* cursor: pointer; */
      font-weight: bold;
      margin-left: 9px;
      font-size: 16px;
      display: block;
    }

    button.logout {
      font-weight: normal;
      font-size: 12px;
      text-decoration-line: underline;
      margin-left: 9px;
      color: #cdccc6;
    }
  }
  button.menu-item {
    height: 36px;
    padding: 0 0 0 47px;
    color: #999999;
  }
  button.menu-item,
  .logout,
  .nickname {
    background-color: transparent;
    border: none;
    text-align: left;
    cursor: pointer;
  }
  button.menu-item:hover {
    color: #333333;
    background-color: #f8f8f8;
  }
  a,
  span {
    padding: 8px 0px;
    cursor: pointer;
    color: black;
  }
`;
