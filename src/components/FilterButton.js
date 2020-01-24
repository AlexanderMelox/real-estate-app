import React from 'react';
import styled from 'styled-components';
import SmoothCorner from './common/SmoothCorner';

const LineContainer = styled.div`
  height: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

const Line = styled.span`
  width: ${props => props.width};
  height: 2px;
  background-color: white;
  border-radius: 3rem;
`;

const FilterButtonSmoothCorner = styled(SmoothCorner)`
  background-color: var(--primary-color-light);
  width: 5rem;
  height: 5rem;
`;

const FilterButton = () => (
  <FilterButtonSmoothCorner>
    <LineContainer>
      <Line width="2rem" />
      <Line width="1rem" />
      <Line width=".5rem" />
    </LineContainer>
  </FilterButtonSmoothCorner>
);

export default FilterButton;
