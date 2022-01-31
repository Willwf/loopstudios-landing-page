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
    background-size: 100vw;
  }

  @media (min-width: 1024px) {
    :root {
      font-size: 100%;
    }

    body {
    background: url("./desktop/image-hero.jpg");
    background-repeat: no-repeat;
    background-size: 100vw;
  }
  }
`;
