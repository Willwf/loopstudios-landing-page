import { Header, LogoLink, LogoImg, Nav, Ul, Li } from "./styles";

function HeaderElement() {
  return (
    <Header>
      <LogoLink href="#">
        <LogoImg src="logo.svg" alt="Logo" />
      </LogoLink>
      <Nav>
        <Ul>
          <Li>About</Li>
          <Li>Careers</Li>
          <Li>Events</Li>
          <Li>Products</Li>
          <Li>Support</Li>
        </Ul>
      </Nav>
    </Header>
  );
}

export { HeaderElement };
