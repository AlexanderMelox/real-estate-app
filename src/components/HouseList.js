import React from 'react';
import styled from 'styled-components';
import { H1 } from './common/Headings';

const StyledHouseList = styled.div`
  margin-top: 4rem;
`;

const LightFontWeight = styled.span`
  font-weight: 400;
`;

const HouseList = () => {
  return (
    <StyledHouseList>
      <H1>
        <LightFontWeight>Houses</LightFontWeight> in New York
      </H1>
    </StyledHouseList>
  );
};

export default HouseList;
