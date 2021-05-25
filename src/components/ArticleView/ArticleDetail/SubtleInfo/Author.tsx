import React from 'react';
import styled from 'styled-components';

interface Props {
  imgSrc: string;
  name: string;
}

export interface ImgProps {
  imgSrc: string;
}

const StyledName = styled.p`
  font-family: Apple SD Gothic Neo;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 14px;
  letter-spacing: -0.04em;
  color: #333333;
  display: inline;
`;

const StyledImg = styled.div<ImgProps>`
  background-image: url(${(props) => props.imgSrc});
  width: 32px;
  height: 32px;

  display: inline-block;
  border-radius: 50%;
  margin-right: 8px;
`;

const Author = ({ imgSrc, name }: Props) => {
  return (
    <>
      <StyledImg imgSrc={imgSrc} />
      <StyledName>{name}</StyledName>
    </>
  );
};

export default Author;
