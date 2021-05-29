import React, { useState } from 'react';
import styled from 'styled-components';

export default function Dropdown() {
  return (
    <DropdownWrapper>
      <DropdownHeader>최신순</DropdownHeader>
      <DropdownList>
        <DropdownItem>최신순</DropdownItem>
        <DropdownItem>조회순</DropdownItem>
      </DropdownList>
    </DropdownWrapper>
  );
}

const DropdownWrapper = styled.div`
  width: 98px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fefefe;

  font-family: Apple SD Gothic Neo;
  font-size: 18px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.04em;
  color: #666666;

  box-shadow: 0px 5px 20px rgba(205, 204, 198, 0.25);
  border-radius: 54px;
`;

const DropdownHeader = styled.div``;

const DropdownList = styled.ul`
  display: none;
  list-style: none;
`;

const DropdownItem = styled.li``;
