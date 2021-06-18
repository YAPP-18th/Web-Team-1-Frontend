import React, { useState } from 'react';
import styled from 'styled-components';

const StyledProfileTab = styled.ul`
  border-bottom: 1px solid #cdccc6;
  padding: 10px 0 32px;
  display: flex;
`;

const TabItem = styled.li`
  /* background-color: transparent; */
  /* border: none; */
  font-size: 24px;
  line-height: 29px;
  letter-spacing: -0.04em;
  color: #acaba5;
  margin-right: 60px;
  list-style: none;
`;

const ProfileTab = () => {
  const [activeTab, setActiveTab] = useState<number>(1);

  const handleClick = (id: number) => {
    setActiveTab(id);
  };

  return (
    <>
      <StyledProfileTab>
        <TabItem onClick={() => handleClick(1)}>작성한 회고</TabItem>
        <TabItem onClick={() => handleClick(2)}>작성 중인 회고</TabItem>
        <TabItem onClick={() => handleClick(3)}>최근 읽은 회고</TabItem>
        <TabItem onClick={() => handleClick(4)}>스크랩한 회고</TabItem>
      </StyledProfileTab>
    </>
  );
};

export default ProfileTab;
