import React from 'react';
import classnames from 'classnames';
import { ButtonColor } from '#types/Styles';
import * as S from './style';

export interface Props {
  buttonColor?: ButtonColor;
  children: React.ReactNode | string;
  className?: string[];
  disabled?: boolean;
  href?: string;
  onClick?: (e?: any) => void;
  to?: string;
  type?: 'button' | 'reset' | 'submit';
}

/**
 * @property buttonColor - background, hover, disabled, text 색상
 * @property children(required) - 버튼에 출력시킬 문자열, 혹은 문자열+아이콘
 * @property className - 추가시킬 class name
 * @property disabled - 버튼 클릭 시 disabled
 * @property href - anchor 태그를 선택 할 경우, href props에 url 전달
 * @property onClick - 버튼 클릭 시 적용시킬 클릭 이벤트
 * @property to - 페이지 내부 이동일 경우, to에 page route 전달
 * @property type - 버튼의 type(button, reset, submit)
 */
const Button = ({
  buttonColor,
  children,
  className = [],
  disabled = false,
  href,
  onClick,
  to,
  type = 'button',
  ...props
}: Props) => {
  // 페이지 내부 link 버튼인 경우
  if (to) {
    return (
      <S.LinkButton
        to={to}
        className={classnames(...className)}
        buttonColor={buttonColor}
        {...props}
      >
        {children}
      </S.LinkButton>
    );
  }

  // anchor 버튼인 경우
  if (href) {
    return (
      <S.AnchorButton
        href={href}
        className={classnames(...className)}
        buttonColor={buttonColor}
        {...props}
      >
        {children}
      </S.AnchorButton>
    );
  }

  // 일반적인 버튼인 경우
  return (
    <S.Button
      type={type}
      className={classnames(...className)}
      onClick={onClick}
      disabled={disabled}
      buttonColor={buttonColor}
      {...props}
    >
      {children}
    </S.Button>
  );
};

export default Button;
