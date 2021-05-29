import { FunctionComponent } from 'react';
import Exit from './SVG/Exit.svg';
import Glitter from './SVG/Glitter.svg';
import Google from './SVG/Google.svg';
import Kakao from './SVG/Kakao.svg';
import Writing from './SVG/Writing.svg';
import Bulb from './SVG/Bulb.svg';
import Laptop from './SVG/Laptop.svg';
import Palette from './SVG/Palette.svg';
import Search from './SVG/Search.svg';
import Hamburger from './SVG/Hamburger.svg';

type Icon =
  | 'Exit'
  | 'Glitter'
  | 'Google'
  | 'Kakao'
  | 'Writing'
  | 'Bulb'
  | 'Laptop'
  | 'Palette'
  | 'Search'
  | 'Hamburger';

type IconPathKey = {
  [key in Icon]: FunctionComponent;
};

const IconPaths: IconPathKey = {
  Exit,
  Glitter,
  Google,
  Kakao,
  Writing,
  Bulb,
  Laptop,
  Palette,
  Search,
  Hamburger,
};

export default IconPaths;
