import styled from 'styled-components';
import { ColorType } from '#types/Styles';

interface CategoryColorType {
  [key: string]: string;
}

export interface Props {
  backgroundColor?: ColorType;
}

export const backgroundColors: CategoryColorType = {
  total: '#6E8551',
  marketing: '#D56D5D',
  design: '#6A84E1',
  plan: '#8F7CDA',
  develop: '#F4BB4A',
};

export const Categories = styled.div`
  display: flex;
`;

export const Category = styled.div`
  &:not(:first-of-type) {
    margin-left: 8px;
  }
`;

export const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 60px;
  padding: 12px 16px;
  border: none;
  cursor: pointer;
  background-color: #acaba5;
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

export const Input = styled.input<{ id: string }>`
  display: none;
  &:checked + ${Label} {
    background-color: ${(props) => backgroundColors[props.id]}};
  }
`;
