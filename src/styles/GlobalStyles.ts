import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*, ::before, ::after {
  box-sizing: border-box;
}

body {
  color: ${({ theme }) => theme.colours.main};
  font-family: ${({ theme }) => theme.typography.family};
  background-color: ${({ theme }) => theme.colours.background};
}

body, h1, p {
  margin: 0;
}

button {
  border: none;
  background-color: transparent;
  font: inherit;
}

`;

export default GlobalStyle;
