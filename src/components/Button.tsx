import React from 'react';

import styled from 'styled-components';

export default function Button({
  children,
  width,
  height,
  image,
  background,
}: {
  children: string;
  width: string;
  height: string;
  image: string;
  background: string;
}) {
  return (
    <Btn width={width} height={height} image={image} background={background}>
      {children}
    </Btn>
  );
}

const Btn = styled.button<{
  width: string;
  height: string;
  image: string;
  background: string;
}>`
  background: ${(props) => props.background};
  border-radius: 60px;

  font-family: Apple SD Gothic Neo;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: -0.04em;
  text-align: left;
  color: #ffffff;

  width: ${(props) => props.width};
  height: ${(props) => props.height};

  text-align: center;

  border: 0;
  outline: 0;

  &::after {
    content: url(${(props) => props.image});
    padding-left: 4px;
  }
`;
