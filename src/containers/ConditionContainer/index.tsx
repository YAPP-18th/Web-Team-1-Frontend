import React from 'react';
import styled from 'styled-components';
import { Categories, SearchForm } from '#components/Atoms';

export default function ConditionContainer() {
  return (
    <Conditions>
      <Categories />
      <SearchForm />
    </Conditions>
  );
}

const Conditions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;
