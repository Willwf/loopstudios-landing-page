import { Header, LogoLink, LogoImg, Links } from "./styles";

function HeaderElement() {
  return (
    <Header className="">
      <LogoLink className="logo" href="#">
        <LogoImg src="logo.svg" alt="Logo" />
      </LogoLink>
      <LogoLink>
        <LogoImg src="./icon-close.svg" alt="Hamburger Icon" />
      </LogoLink>
      <Links className="">
        <ul>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">Events</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
        </ul>
      </Links>
    </Header>
  );
}

export { HeaderElement };
