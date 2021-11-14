import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *, *::after, *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Lato", sans-serif;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
  `;

export default GlobalStyles;
