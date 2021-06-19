import React, { useState } from 'react';
import styled from 'styled-components';
import { getMyLists, getRecentlyViewedLists, getLikedList } from '#apis/userApi';
import TabContent from './TabContent';

export interface TabItemProps {
  active: boolean;
}

const StyledProfileTab = styled.ul`
  border-bottom: 1px solid #cdccc6;
  padding: 10px 0 32px;
  display: flex;
  margin-bottom: 32px;
`;

const TabItem = styled.li<TabItemProps>`
  font-size: 24px;
  line-height: 29px;
  letter-spacing: -0.04em;
  margin-right: 60px;
  list-style: none;
  cursor: pointer;

  color: ${(props) => (props.active ? `#333333` : `#acaba5`)};
  font-weight: ${(props) => (props.active ? `bold` : 'normal')};
`;

const ProfileTab = () => {
  const [activeTab, setActiveTab] = useState<number>(1);

  const handleClick = (id: number) => {
    setActiveTab(id);
  };

  return (
    <>
      <StyledProfileTab>
        <TabItem onClick={() => handleClick(1)} active={activeTab === 1}>
          작성한 회고
        </TabItem>
        {/* <TabItem onClick={() => handleClick(2)} active={activeTab === 2}>
          작성 중인 회고
        </TabItem> */}
        <TabItem onClick={() => handleClick(3)} active={activeTab === 3}>
          최근 읽은 회고
        </TabItem>
        <TabItem onClick={() => handleClick(4)} active={activeTab === 4}>
          스크랩한 회고
        </TabItem>
      </StyledProfileTab>
      {activeTab === 1 && <TabContent api={getMyLists} />}
      {/* {activeTab === 2 && <TabContent api={getMyLists} />} */}
      {activeTab === 3 && <TabContent api={getRecentlyViewedLists} />}
      {activeTab === 4 && <TabContent api={getLikedList} />}
    </>
  );
};

export default ProfileTab;
