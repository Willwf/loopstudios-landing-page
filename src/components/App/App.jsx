import { Header } from "./Header/Header";
import { Homepage } from "../Homepage/Homepage";
import { appDiv } from "./styles.js";
import { GlobalStyle } from "./global.js";

function App() {
  return (
    <appDiv>
      <GlobalStyle />
      <Header />
      <Homepage />
    </appDiv>
  );
}

export { App };
