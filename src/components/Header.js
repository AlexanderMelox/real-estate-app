import React from 'react';
import styled from 'styled-components';
import NavButton from './NavButton';
import FilterButton from './FilterButton';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Header = () => (
  <>
    <Blob />
    <HeaderContainer>
      <NavButton />
      <FilterButton />
    </HeaderContainer>
  </>
);

const Blob = () => {
  const SVGContainer = styled.svg`
    position: fixed;
    top: 0;
    right: 0;
    z-index: -10;
  `;

  return (
    <SVGContainer width="139" height="243">
      <g fill="none" fillRule="evenodd">
        <path fill="#D9DEF0" d="M36.176 0H0l39.06 206.111z" />
        <path
          d="M34 0v211.935c2.52 20.46 17.206 30.69 44.059 30.69h60.898V0"
          fill="#255ED6"
        />
      </g>
    </SVGContainer>
  );
};

export default Header;
