import styled from "styled-components";
import * as colors from "../../styles/variables";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 10vh;

  &.active {
    background-color: ${colors.black};
    color: ${colors.white};

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

  &.menuIcon {
    justify-self: end;

    margin-right: 2rem;
  }

  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  align-self: end;
`;

export const LogoImg = styled.img`
  @media (min-width: 1024px) {
    &.menuIcon {
      display: none;
    }
  }
`;

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

        &:hover {
          opacity: 0.7;
        }

        a {
          text-decoration: none;
          color: ${colors.white};
        }
      }
    }
  }

  @media (min-width: 1024px) {
    display: flex;
    align-self: end;
    justify-self: flex-start;
    padding: 0.5rem;

    ul {
      display: flex;
      flex-direction: row;
      list-style-type: none;

      gap: 2rem;

      li {
        font-size: 1.1rem;
        font-family: "Josefin Sans", sans-serif;

        cursor: pointer;

        &:hover {
          opacity: 0.7;
        }

        a {
          text-decoration: none;
          color: ${colors.white};
        }
      }
    }
  }
`;
