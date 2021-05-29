import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { color } from '#styles/index';
import { ColorType, ButtonColor } from '#types/Styles';

export interface Props {
  buttonColor?: ButtonColor;
}

const defaultStyle = (
  backgroundColor?: ColorType,
  disabledColor?: ColorType,
  hoverColor?: ColorType,
  textColor?: ColorType,
) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  padding: 16px;
  border-radius: 60px;
  border: none;
  cursor: pointer;
  background: ${backgroundColor && color[backgroundColor]};
  color: ${(textColor && color[textColor]) || 'white'};
  &:disabled {
    cursor: default;
    background: ${disabledColor && color[disabledColor]} !important;
  }
  &:hover {
    background: ${hoverColor && color[hoverColor]};
  }
`;

export const Button = styled.button<Props>`
  ${(props) => {
    if (props.buttonColor) {
      const { background, disabled, hover, textColor } = props.buttonColor;
      return defaultStyle(background, disabled, hover, textColor);
    }
    return defaultStyle();
  }}
`;

export const AnchorButton = styled.a<Props>`
  ${(props) => {
    if (props.buttonColor) {
      const { background, disabled, hover, textColor } = props.buttonColor;
      return defaultStyle(background, disabled, hover, textColor);
    }
    return defaultStyle();
  }}
`;

export const LinkButton = styled(Link)<Props>`
  ${(props) => {
    if (props.buttonColor) {
      const { background, disabled, hover, textColor } = props.buttonColor;
      return defaultStyle(background, disabled, hover, textColor);
    }
    return defaultStyle();
  }}
`;
