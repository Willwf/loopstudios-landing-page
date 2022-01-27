import { GlobalStyle } from "../styles/global";
import { HeaderElement } from "./Header/Header";
import { Homepage } from "./Homepage/Homepage";
import { AppDiv } from "./styles.js";

function App() {
  return (
    <AppDiv>
      <GlobalStyle />
      <HeaderElement />
      <Homepage />
    </AppDiv>
  );
}

export { App };
