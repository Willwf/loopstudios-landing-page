import styled from "styled-components";
import * as colors from "../../styles/variables";

export const FooterContainer = styled.footer`
  background-color: ${colors.black};
  color: ${colors.white};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;

  @media (min-width: 1024px) {
    display: grid;
    grid: 7rem 7rem / 1fr 1fr;
  }
`;

export const LogoLink = styled.a`
  margin: 4rem 0 2rem 0;

  img:hover {
    cursor: pointer;
    opacity: 0.7;
  }

  @media (min-width: 1024px) {
    padding-left: 10vw;
    margin: 0;

    align-self: end;
  }
`;

export const LogoImg = styled.img`
  width: 13rem;
`;

export const Links = styled.nav`
  ul {
    list-style-type: none;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 1rem;

    li {
      font-size: 1.2rem;
      font-family: "Alata", sans-serif;
      font-weight: 300;

      cursor: pointer;

      height: 2.2rem;

      &:hover {
        border-bottom: 0.1rem solid;
      }

      a {
        text-decoration: none;
        color: ${colors.white};
      }
    }
  }

  @media (min-width: 1024px) {
    grid-row: 2;
    grid-column: 1;

    ul {
      flex-direction: row;

      justify-content: initial;
      align-items: initial;

      padding-left: 10vw;
    }
  }
`;

export const SocialMediaIcons = styled.nav`
  display: flex;
  justify-content: center;

  height: 3rem;

  margin: 4rem 0 1.5rem 0;
  gap: 1.5rem;

  @media (min-width: 1024px) {
    grid-column: 2;

    justify-content: end;
    align-self: end;

    padding-right: 10vw;
    margin: 0;
  }
`;

export const SocialMediaLink = styled.a`
  cursor: pointer;

  height: 2.7rem;

  &:hover {
    border-bottom: 0.3rem solid;
  }
`;

export const SocialMediaIcon = styled.img`
  width: 2rem;
`;

export const Copyright = styled.p`
  font-size: 1.3rem;
  font-family: "Alata", sans-serif;

  color: ${colors.veryDarkGray};
  margin-bottom: 4rem;

  @media (min-width: 1024px) {
    padding-right: 10vw;
    text-align: end;

    margin-bottom: 0;
  }
`;
