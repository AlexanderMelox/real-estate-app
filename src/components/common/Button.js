import styled from "styled-components";

const Button = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 2.5rem 6rem;
  background-color: var(--primary-color);
  color: white;
  font-size: 1.8rem;
  text-transform: uppercase;
  border-radius: 2.5rem;
  font-weight: 600;
  letter-spacing: 0.4rem;
  font-family: "Barlow Condensed";

  &:focus {
    outline: none;
  }
`;

export default Button;
export { Button };
