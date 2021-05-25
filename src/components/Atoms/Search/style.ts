import styled from 'styled-components';

export const SearchBox = styled.form`
  display: flex;
  padding: 16px 20px 14px 20px;
  background-color: #fefefe;
  box-shadow: 0px 5px 20px rgba(205, 204, 198, 0.25);
  border-radius: 8px;
  width: 441px;
  height: 48px;

  font-family: Apple SD Gothic Neo;
  font-size: 18px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.04em;
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

export const SearchField = styled.div``;
