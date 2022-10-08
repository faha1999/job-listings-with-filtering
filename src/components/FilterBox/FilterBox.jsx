import React from 'react';
import styled from 'styled-components';

const FilterBoxWrapper = styled.div`
  background: ${({ theme }) => theme.cardBg};
  box-shadow: ${({ theme }) => (theme === 'light' ? '$box-shadow' : 'none')};
`;

const FilterInput = styled.input`
  background: ${({ theme }) => theme.cardBg};
`;

export const FilterBox = () => {
  return <div>FilterBox</div>;
};
