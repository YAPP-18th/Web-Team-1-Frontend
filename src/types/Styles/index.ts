import { color } from 'styles';

export type ColorType = keyof typeof color;

export interface ButtonColor {
  background?: ColorType;
  disabled?: ColorType;
  hover?: ColorType;
  textColor?: ColorType;
}
