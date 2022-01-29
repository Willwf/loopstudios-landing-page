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
`;

export const LogoLink = styled.a`
  cursor: pointer;
  margin: 4rem 0 2rem 0;

  &:hover {
    opacity: 0.7;
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

    gap: 1.5rem;

    li {
      font-size: 1.2rem;
      font-family: "Alata", sans-serif;
      font-weight: 300;

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
`;

export const SocialMediaIcons = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 4rem 0 1.5rem 0;
  gap: 1.5rem;
`;

export const SocialMediaLink = styled.a`
  cursor: pointer;

  &:hover {
    opacity: 0.7;
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
`;
