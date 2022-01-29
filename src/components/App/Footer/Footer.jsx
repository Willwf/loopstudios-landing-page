import {
  Copyright,
  FooterContainer,
  Links,
  LogoImg,
  LogoLink,
  SocialMediaIcon,
  SocialMediaIcons,
  SocialMediaLink,
} from "./styles";

function Footer() {
  return (
    <FooterContainer>
      <LogoLink>
        <LogoImg src="logo.svg" alt="Logo" />
      </LogoLink>
      <Links>
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
      <SocialMediaIcons>
        <SocialMediaLink>
          <SocialMediaIcon src="icon-facebook.svg" alt="Facebook Icon" />
        </SocialMediaLink>
        <SocialMediaLink>
          <SocialMediaIcon src="icon-twitter.svg" alt="Twitter Icon" />
        </SocialMediaLink>
        <SocialMediaLink>
          <SocialMediaIcon src="icon-pinterest.svg" alt="Pinterest Icon" />
        </SocialMediaLink>
        <SocialMediaLink>
          <SocialMediaIcon src="icon-instagram.svg" alt="Instagram Icon" />
        </SocialMediaLink>
      </SocialMediaIcons>
      <Copyright>&copy; 2021 Loopstudios. All rights reserved.</Copyright>
    </FooterContainer>
  );
}

export { Footer };
