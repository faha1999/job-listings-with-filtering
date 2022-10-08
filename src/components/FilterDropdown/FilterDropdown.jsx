import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../../Context';
import ItachiTrollFace from '../../assets/images/itachi-troll-face.png';

const FilterDropdownWrapper = styled.div`
  background: ${({ theme }) => theme.cardBg};
  box-shadow: ${({ theme }) =>
    theme === 'light' ? 'var(--box-shadow)' : 'none'};
`;

export const FilterDropdown = () => {
  const { addFilter } = useContext(Context);
  return (
    <FilterDropdownWrapper>
      {dropdownTexts.length > 0 ? (
        dropdownTexts.map((text, index) => (
          <p
            className="DropdownItem"
            key={index}
            onClick={() => {
              addFilter(text);
              setValue('');
            }}
          >
            {text}
          </p>
        ))
      ) : (
        <div className="Empty">
          <p>We don't have such category at the moment.</p>
          <img src={ItachiTrollFace} alt="itachi-troll-face" />
        </div>
      )}
    </FilterDropdownWrapper>
  );
};
