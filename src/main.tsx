import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyles";
import mainTheme from "./styles/mainTheme";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={mainTheme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
