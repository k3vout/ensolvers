import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyles = createGlobalStyle`
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
