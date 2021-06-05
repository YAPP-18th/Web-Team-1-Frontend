import React, { useState } from 'react';
import styled from 'styled-components';
import BannerItem from './BannerItem';
import Scrap from './svg/Scrap';
import Share from './svg/Share';
import Comment from './svg/Comment';
import ShareOption from './ShareOption';
import Shortcut from './Shortcut';

const StyledFloatingBanner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 150px;
  justify-content: space-between;
  position: fixed;
  right: 100px;
  top: 50%;
  transform: translateY(-50%);
`;

const FloatingBanner = () => {
  // scrap 여부, 토글에 따른 동작 분기
  const [isScrap, setIsScrap] = useState(false);
  const toggleScrap = () => {
    if (isScrap) {
      setIsScrap(!isScrap);
    } else {
      setIsScrap(!isScrap);
    }
  };

  // 공유 방법 선택옵션창 토글
  const [isShareOption, setIsShareOption] = useState(false);
  const toggleShare = () => setIsShareOption(!isShareOption);

  // 댓글 아이콘 클릭시
  const onClickCommentBanner = () => {
    window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <>
      <StyledFloatingBanner>
        <BannerItem icon={Scrap} onClick={toggleScrap} isFocused={isScrap} />
        <BannerItem icon={Share} onClick={toggleShare} />
        {isShareOption && <ShareOption />}
        <BannerItem icon={Comment} onClick={onClickCommentBanner} />
      </StyledFloatingBanner>
      <Shortcut />
    </>
  );
};

export default FloatingBanner;
