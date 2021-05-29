import styled from 'styled-components';

export const DropdownWrapper = styled.div`
  display: inline-block;
  font-family: Apple SD Gothic Neo;
  font-size: 18px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.04em;
  color: #666666;
  position: relative;
`;

export const DropdownHeader = styled.div`
  width: 98px;
  height: 40px;
  padding-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fefefe;
  box-shadow: 0px 5px 20px rgba(205, 204, 198, 0.25);
  border-radius: 54px;
  cursor: pointer;
  position: relative;
  & span {
    position: absolute;
    right: 0px;
    top: 8px;
  }
`;

export const DropdownList = styled.ul`
  position: absolute;
  top: 43px;
  width: 99px;
  height: 78px;
  background: #fefefe;
  border: 1px solid #eeeeee;
  box-sizing: border-box;
  box-shadow: 0px 5px 20px rgba(205, 204, 198, 0.25);
  border-radius: 8px;
  list-style: none;
`;

export const DropdownItem = styled.li`
  width: 97px;
  height: 38px;
  padding-left: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  user-select: none;
  &:hover {
    color: #333333;
    background: #f8f8f8;
    border-radius: 8px;
  }
`;
