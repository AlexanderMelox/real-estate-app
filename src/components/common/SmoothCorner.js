import styled from 'styled-components';

const SmoothCorner = styled.button`
  border-radius: 1rem;
  @supports (mask-image: paint(smooth-corners)) {
    & {
      border-radius: 0;
      --smooth-corners: ${props => (props.amount ? props.amount : '3')};
      mask-image: paint(smooth-corners);
    }
  }
`;

export default SmoothCorner;
