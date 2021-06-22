import React, { useState } from 'react';
import styled from 'styled-components';
import { startAlert } from 'slices/alertSlice';
import BannerItem from './BannerItem';
import Scrap from './svg/Scrap';
import Share from './svg/Share';
import Comment from './svg/Comment';
import ShareOption from './ShareOption';
// import Shortcut from './Shortcut';
import { cancelScrapArticle, scrapArticle } from '#apis/articleViewApi';
import { useAppSelector } from '#hooks/useAppSelector';
import { useAppDispatch } from '#hooks/useAppDispatch';

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

interface Props {
  scrap: boolean;
}

const FloatingBanner = ({ scrap }: Props) => {
  // scrap 여부, 토글에 따른 동작 분기

  const { index } = useAppSelector((state) => state.articleViewReducer);
  const dispatch = useAppDispatch();
  const [isScrap, setIsScrap] = useState(scrap);

  let isRunning = false;
  const toggleScrap = async () => {
    if (isRunning) {
      return;
    }
    if (isScrap) {
      // 스크랩 취소
      isRunning = true;
      await cancelScrapArticle(index);
      setIsScrap(!isScrap);
      dispatch(startAlert('스크랩을 취소했어요! 🥲'));
    } else {
      // 스크랩 하기
      isRunning = true;
      await scrapArticle(index);
      setIsScrap(!isScrap);
      dispatch(startAlert('스크랩을 완료했어요! 😎'));
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
      {/* Shortcut 은 v3 */}
      {/* <Shortcut /> */}
    </>
  );
};

export default FloatingBanner;
