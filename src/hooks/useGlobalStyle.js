import { createGlobalStyle } from 'styled-components';

const useGlobalStyle = () => {
  const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Lato:300,400,500,700&display=swap');

    :root {
      /* Spacing */
      --space-1: 3rem;
      --space-2: 4rem;

      /* Typography */
      --default-font-size: 1.6rem;
      --font-family-stack: 'Lato', 'Roboto', sans-serif;

      /* Colors */
      --primary-color: #255ED6;
      --primary-color-light: #3C6ED9;

      --ui-01: #EFF0F5;
      --ui-02: #2A2D39;
      --ui-03: #E4E7F1;
      --ui-04: #969EB5;
      --ui-05: #474954;

      --text-color-dark: var(--ui-02);
      --text-color-medium: var(--ui-05);
      --text-color-light: var(--ui-04);

      /* Icon colors */
      --icon-color-dark: var(--ui-04);

      /* Theming */
      --body-background-color: var(--ui-01);
    }

    *,
    *::after,
    *::before {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
    }

    html {
      box-sizing: border-box;
      // This makes 1rem = 10px
      font-size: 62.5%; 
    }

    body {
      font-size: var(--default-font-size);
      font-family: var(--font-family-stack);
      background-color: var(--body-background-color);
      font-weight: 400;
      color: var(--text-color-medium);
    }

    /* button resets */
    button {
      outline: none;
      border: none;

      &:focus {
        outline: none;
      }
    }
`;

  return GlobalStyle;
};

export default useGlobalStyle;
