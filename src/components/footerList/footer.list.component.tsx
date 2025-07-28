import React from "react";
import { Column, FooterLink, Heading, Row } from "./footerList.styles";

export const FooterList: React.FC = () => {
  return (
    <Row>
      <Column>
        <Heading>About Me</Heading>
        <span>
          I&apos;m Damian, a passionate web developer focused on building clean
          and responsive user experiences. Currently exploring advanced React
          features and UI animations.
        </span>
        <FooterLink href="https://github.com/twoj-github" target="_blank">
          View my GitHub
        </FooterLink>
        <FooterLink
          href="https://www.linkedin.com/in/twoj-linkedin"
          target="_blank"
        >
          Connect on LinkedIn
        </FooterLink>
      </Column>
      <Column>
        <Heading>Licence</Heading>
        <FooterLink
          href="https://www.flaticon.com/free-icons/travel"
          title="travel icons"
        >
          Travel icons created by max.icons - Flaticon
        </FooterLink>
        <FooterLink href="https://www.flaticon.com/free-icons/final">
          Final icons created by Freepik - Flaticon
        </FooterLink>
        <FooterLink href="https://www.flaticon.com/free-icons/login">
          Login icons created by Uniconlabs - Flaticon
        </FooterLink>
      </Column>
      <Column>
        <Heading>Contact Me</Heading>
        <span> damian.konarski71@gmail.com</span>
      </Column>
      <Column>
        <Heading>Social Media</Heading>
        <FooterLink href="#">Facebook</FooterLink>
        <FooterLink href="#">Instagram</FooterLink>
        <FooterLink href="#">Twitter</FooterLink>
      </Column>
    </Row>
  );
};
