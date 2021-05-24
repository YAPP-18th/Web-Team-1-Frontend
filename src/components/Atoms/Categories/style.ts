import styled from 'styled-components';
import { ColorType } from '#types/Styles';

interface CategoryColorType {
  [key: string]: string;
}

export interface Props {
  backgroundColor?: ColorType;
}

export const backgroundColors: CategoryColorType = {
  전체: '#6E8551',
  마케팅: '#D56D5D',
  디자인: '#6A84E1',
  기획: '#8F7CDA',
  개발: '#F4BB4A',
};

export const Categories = styled.div`
  display: flex;
`;

export const Category = styled.div`
  &:not(:first-of-type) {
    margin-left: 8px;
  }
`;

export const Input = styled.input``;

export const Label = styled.label<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 60px;
  padding: 12px 16px;
  border: none;
  cursor: pointer;
  background-color: ${(props) => props.backgroundColor};
  border: 1px solid #ffffff;
  color: #fefefe;
  font-family: Apple SD Gothic Neo;
  font-size: 18px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: -0.04em;
  & span {
    margin-left: 2px;
  }
`;
