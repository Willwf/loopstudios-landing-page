import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
  }

  body {
    background: url("./mobile/image-hero.jpg");
    background-repeat: no-repeat;
    background-size: cover;
  }
`;
