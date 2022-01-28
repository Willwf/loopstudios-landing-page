import styled from "styled-components";
import * as colors from "../../styles/variables";

export const Header = styled.header`
  background-color: ${colors.black};
  color: ${colors.white};

  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 20vh;

  &.active {
    display: grid;
    grid-template-columns: 6fr 1fr;
    grid-template-rows: 1fr 9fr;
    height: 100vh;
  }
`;

export const LogoLink = styled.a`
  &.logo {
    justify-self: start;

    margin-left: 2rem;

    img {
      width: 13rem;
    }
  }

  cursor: pointer;

  justify-self: center;
  align-self: end;
`;

export const LogoImg = styled.img``;

export const Links = styled.nav`
  display: none;

  justify-self: start;
  align-self: center;

  margin-left: 2rem;

  grid-column: 1 / 3;

  &.active {
    display: flex;
    flex-direction: column;

    ul {
      list-style-type: none;

      display: flex;
      flex-direction: column;

      gap: 2rem;

      li {
        font-size: 2.2rem;
        font-family: "Josefin Sans", sans-serif;
        text-transform: uppercase;
        opacity: 0.8;

        cursor: pointer;

        a {
          text-decoration: none;
          color: ${colors.white};
        }
      }
    }
  }
`;
