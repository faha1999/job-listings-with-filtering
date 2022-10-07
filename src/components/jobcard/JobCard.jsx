import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: ${({ theme }) => theme.cardBg};
  box-shadow: ${({ theme }) =>
    theme === 'light' ? 'var(--box-shadow)' : 'none'};
  border-left: ${({ featured }) =>
    featured ? '0.35em solid var(--desaturated-dark-cyan)' : null};
`;

const JobTitle = styled.h3`
  color: ${({ theme }) => theme.text};
`;

const Skill = styled.button`
  color: ${({ theme }) => theme.pillText};
  background: ${({ theme }) => theme.pillBg};

  :hover {
    background: ${({ theme }) => theme.pillBgDark};
  }
`;
export const JobCard = () => {
  return <div>JobCard</div>;
};
