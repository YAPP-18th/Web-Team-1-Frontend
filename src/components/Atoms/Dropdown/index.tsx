import React, { useState } from 'react';
import styled from 'styled-components';
import { IconWrapper, IconPaths } from '#components/Atoms';

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(true);
  const [option, setOption] = useState('최신순');

  const toggling = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOption = (it) => {
    setOption(it);
    setIsOpen(false);
  };

  return (
    <DropdownWrapper>
      <DropdownHeader onClick={toggling}>
        {option}
        <IconWrapper icon={IconPaths.PolygonBottom} />
      </DropdownHeader>
      {isOpen && (
        <DropdownList>
          <DropdownItem onClick={() => handleClickOption('최신순')}>최신순</DropdownItem>
          <DropdownItem onClick={() => handleClickOption('조회순')}>조회순</DropdownItem>
        </DropdownList>
      )}
    </DropdownWrapper>
  );
}

const DropdownWrapper = styled.div`
  display: inline-block;
  font-family: Apple SD Gothic Neo;
  font-size: 18px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.04em;
  color: #666666;
`;

const DropdownHeader = styled.div`
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

const DropdownList = styled.ul`
  position: absolute;
  top: 61px;
  left: 16px;
  width: 99px;
  height: 78px;
  background: #fefefe;
  border: 1px solid #eeeeee;
  box-sizing: border-box;
  box-shadow: 0px 5px 20px rgba(205, 204, 198, 0.25);
  border-radius: 8px;
  list-style: none;
`;

const DropdownItem = styled.li`
  width: 97px;
  height: 38px;
  padding-left: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  &:hover {
    color: #333333;
    background: #f8f8f8;
    border-radius: 8px;
  }
`;
