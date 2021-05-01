import { FunctionComponent } from 'react';
import Glitter from './SVG/Glitter.svg';
import Writing from './SVG/Writing.svg';

type Icon = 'Glitter' | 'Writing';

type IconPathKey = {
  [key in Icon]: FunctionComponent;
};

const IconPaths: IconPathKey = {
  Glitter,
  Writing,
};

export default IconPaths;
