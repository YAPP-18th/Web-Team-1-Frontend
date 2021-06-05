import React from 'react';

interface Props {
  color: string;
}
const Scrap = ({ color }: Props) => {
  return (
    <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 16.1683V1.5C0 0.947715 0.447716 0.5 1 0.5H13C13.5523 0.5 14 0.947715 14 1.5V16.1683C14 16.9595 13.1248 17.4373 12.4592 17.0095L7 13.5L1.54076 17.0095C0.875246 17.4373 0 16.9595 0 16.1683Z"
        fill={color}
      />
    </svg>
  );
};

export default Scrap;
