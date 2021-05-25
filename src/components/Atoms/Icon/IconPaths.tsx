import { FunctionComponent } from 'react';
import Glitter from './SVG/Glitter.svg';
import Writing from './SVG/Writing.svg';
import Bulb from './SVG/Bulb.svg';
import Laptop from './SVG/Laptop.svg';
import Palette from './SVG/Palette.svg';
import Search from './SVG/Search.svg';

type Icon = 'Glitter' | 'Writing' | 'Bulb' | 'Laptop' | 'Palette' | 'Search';

type IconPathKey = {
  [key in Icon]: FunctionComponent;
};

const IconPaths: IconPathKey = {
  Glitter,
  Writing,
  Bulb,
  Laptop,
  Palette,
  Search,
};

export default IconPaths;
