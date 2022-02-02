import { Header, LogoLink, LogoImg, Links } from "./styles";
import { useEffect, useState } from "react";

function HeaderElement() {
  const [isActive, setActive] = useState(false);
  const [icon, setIcon] = useState(false);

  useEffect(() => {
    setIcon(!icon);
  }, [isActive]);

  const handleMenu = () => {
    setActive(!isActive);
  };

  return (
    <Header className={`${isActive ? "active" : ""}`}>
      <LogoLink className="logo" href="#">
        <LogoImg src="logo.svg" alt="Logo" />
      </LogoLink>
      <LogoLink
        onClick={handleMenu}
        className={`menuIcon ${isActive ? "active" : ""}`}
      >
        <LogoImg
          src={icon ? "./icon-hamburger.svg" : "./icon-close.svg"}
          alt={!icon ? "Hamburger Icon" : "Close Icon"}
          className="menuIcon"
        />
      </LogoLink>
      <Links className={`${isActive ? "active" : ""}`}>
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
