import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: 3rem 1fr 3rem;
  grid-auto-rows: auto;
  padding-top: 4rem;

  > * {
    grid-column: 2 / 3;
  }
`;

export default Container;
