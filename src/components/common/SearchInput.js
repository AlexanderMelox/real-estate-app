import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faMicrophone } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const SearchInputContainer = styled.div`
  width: 100%;
  height: 6rem;
  margin-top: 5rem;
  padding: 2rem 2.5rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: var(--ui-01);
  border: 3px solid #f8f8fa;
  border-radius: 2.5rem;
  color: #b5bdd0;
  box-shadow: inset 0.6rem 0.6rem 8px -6px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  font: inherit;
  color: currentColor;
  border: none;
  outline: none;
  background-color: transparent;
  flex: 1 1 0;
  padding: 0 1rem;

  &::placeholder {
    color: inherit;
    opacity: 1; /* Firefox */
  }
`;

const IconContainer = styled.span``;

const HomeIcon = styled(FontAwesomeIcon)``;
const MicIcon = styled(FontAwesomeIcon)`
  font-size: 2rem;
`;

const SearchInput = () => {
  return (
    <SearchInputContainer>
      <IconContainer>
        <HomeIcon icon={faHome} />
      </IconContainer>
      <Input type="text" placeholder="Search house" />
      <IconContainer>
        <MicIcon icon={faMicrophone} />
      </IconContainer>
    </SearchInputContainer>
  );
};

export default SearchInput;
