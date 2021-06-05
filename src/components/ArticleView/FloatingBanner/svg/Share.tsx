import React from 'react';

interface Props {
  color: string;
}
const Scrap = ({ color }: Props) => {
  return (
    <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="4.09734" y1="11.3673" x2="15.0973" y2="4.36725" stroke={color} strokeWidth="1.5" />
      <line
        y1="-0.75"
        x2="13.0384"
        y2="-0.75"
        transform="matrix(0.843661 0.536875 0.536875 -0.843661 4.5 10)"
        stroke={color}
        strokeWidth="1.5"
      />
      <circle cx="4.5" cy="11" r="3.25" fill="#FEFEFE" stroke={color} strokeWidth="1.5" />
      <circle cx="15.5" cy="4" r="3.25" fill="#FEFEFE" stroke={color} strokeWidth="1.5" />
      <circle cx="15.5" cy="18" r="3.25" fill="#FEFEFE" stroke={color} strokeWidth="1.5" />
    </svg>
  );
};

export default Scrap;
