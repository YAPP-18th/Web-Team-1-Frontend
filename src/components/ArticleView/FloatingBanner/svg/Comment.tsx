import React from 'react';

interface Props {
  color: string;
}
const Scrap = ({ color }: Props) => {
  return (
    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 0.5C0.895431 0.5 0 1.39543 0 2.5V8.36405V12.2621V17.0015C0 17.4449 0.534312 17.6689 0.850511 17.358L4 14.2621H18C19.1046 14.2621 20 13.3667 20 12.2621V2.5C20 1.39543 19.1046 0.5 18 0.5H2Z"
        fill={color}
      />
    </svg>
  );
};

export default Scrap;
