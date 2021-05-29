import styled from 'styled-components';

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 20px;
  background-color: #fefefe;
  box-shadow: 0px 5px 20px rgba(205, 204, 198, 0.25);
  border-radius: 8px;
  width: 441px;
  height: 48px;
  color: #acaba5;
`;

export const Dropdown = styled.div`
  width: 96px;
  border-right: 1px solid #eeeeee;
  position: relative;
  cursor: pointer;
`;

export const DropdownList = styled.ul`
  box-shadow: 0px 5px 20px rgba(205, 204, 198, 0.25);
  border-radius: 12px;
  width: 114px;
  top: 40px;
  left: -19px;
  position: absolute;
  background: #fefefe;
  list-style: none;
  padding: 10px;
`;

export const ListItem = styled.li<{ onClick: () => void }>`
  text-align: center;
  font-size: 18px;
  user-select: none;
  &:hover {
    color: #6a84e1;
  }
  &:not(:last-of-type) {
    padding-bottom: 15px;
  }
`;

export const DropdownHeader = styled.div`
  font-size: 18px;
  &:before {
    content: '';
    position: absolute;
    top: 8px;
    right: 7px;
    border: 4px solid;
    border-color: #acaba5 transparent transparent transparent;
  }
`;

export const SearchField = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & input {
    font-size: 18px;
    outline: none;
    width: 286px;
    padding: 0 10px;
    margin-right: auto;
    border: 0;
  }
  & input::-webkit-input-placeholder {
    color: #cdccc6;
  }
`;
