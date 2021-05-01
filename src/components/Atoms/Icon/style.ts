import styled from 'styled-components';
import { ColorType } from 'types/Styles';

export interface Props {
  backgroundColor?: ColorType;
}

export const IconWrapper = styled.span<Props>`
  cursor: pointer;
  width: 18px;
  height: 18px;

  &.icon-button {
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${(props) => props.backgroundColor};
  }

  &.circle {
    border-radius: 50%;
  }
`;
