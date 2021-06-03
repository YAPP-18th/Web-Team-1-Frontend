import React, { FunctionComponent, RefObject, memo } from 'react';
import classnames from 'classnames';
import { ColorType } from '#types/Styles';
import * as S from './style';

export interface Props {
  backgroundColor?: ColorType;
  className?: string[];
  icon: FunctionComponent;
  innerRef?: RefObject<HTMLSpanElement>;
  isCircled?: boolean;
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  onClick?: (e?: any) => void;
}

/**
 * @property backgroundColor - 아이콘의 백그라운드 color
 * @property className - 추가시킬 class name
 * @property icon(required) - 적용시킬 아이콘
 * @property innerRef - 상위 컴포넌트에서 Icon에 ref를 주입 할 때 사용
 * @property isCircled - border radius 50%를 적용해야 되는 경우(true면 적용 됨)
 * @property onClick - 아이콘 클릭 시 적용시킬 클릭 이벤트
 */
const IconWrapper = ({
  backgroundColor,
  className = [],
  icon,
  innerRef,
  isCircled,
  onClick,
}: Props) => {
  const IconComponent = icon;

  // 클릭 이벤트가 있는 아이콘인 경우
  if (onClick) {
    return (
      <>
        <S.IconWrapper
          backgroundColor={backgroundColor}
          className={classnames(...className, { circle: isCircled }, 'icon-button')}
          onClick={onClick}
          ref={innerRef}
          role="button"
        >
          <IconComponent />
        </S.IconWrapper>
      </>
    );
  }

  // 단순 아이콘만 보여주는 경우
  return (
    <S.IconWrapper className={classnames(...className)} ref={innerRef}>
      <IconComponent />
    </S.IconWrapper>
  );
};

export default memo(IconWrapper);
