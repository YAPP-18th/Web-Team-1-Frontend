import styled from 'styled-components';

export const SearchBox = styled.div`
  display: flex;
  padding: 16px 20px 14px 20px;
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
  & ul {
    box-shadow: 0px 5px 20px rgba(205, 204, 198, 0.25);
    border-radius: 12px;
    width: 110px;
    top: 40px;
    left: -19px;
    position: absolute;
    background: #fefefe;
    list-style: none;
    padding: 10px;
    & li {
      text-align: center;
    }
    & li:hover {
      color: #6a84e1;
    }
    & li:not(:last-of-type) {
      padding-bottom: 15px;
    }
  }
  &:before {
    content: '';
    position: absolute;
    top: 6px;
    right: 11px;
    border: 5px solid;
    border-color: #acaba5 transparent transparent transparent;
  }
`;

export const DefaultOption = styled.div``;

export const SearchField = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & input {
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
