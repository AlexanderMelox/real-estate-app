import React from 'react';
import styled from 'styled-components';
import SmoothCorner from '../components/common/SmoothCorner';

const CirclesContainer = styled.div`
  width: 1.6rem;
  height: 1.6rem;
  position: relative;
`;

const Circle = styled.span`
  position: absolute;
  top: ${props => (props.top ? props.top : 'initial')};
  bottom: ${props => (props.bottom ? props.bottom : 'initial')};
  left: ${props => (props.left ? props.left : 'initial')};
  right: ${props => (props.right ? props.right : 'initial')};
  width: 6px;
  height: 6px;
  border: 2px solid var(--ui-04);
  border-radius: 50%;
`;

const Button = styled(SmoothCorner)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => (props.width ? props.width : '5rem')};
  height: ${props => (props.height ? props.height : '5rem')};
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : 'var(--ui-03)'};
  z-index: 20;
  cursor: pointer;
`;

const NavButton = () => {
  return (
    <Button amount="3">
      <CirclesContainer>
        <Circle top="0" left="0" />
        <Circle top="0" right="0" />
        <Circle bottom="0" left="0" />
        <Circle bottom="0" right="0" />
      </CirclesContainer>
    </Button>
  );
};

export default NavButton;
