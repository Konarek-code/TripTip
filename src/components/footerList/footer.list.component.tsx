import React from "react";
import { Column, FooterLink, Heading, Row } from "./footerList.styles";
// interface FooterListProps {
//   children: React.ReactNode;
// }
/* <a href="https://www.flaticon.com/free-icons/travel" title="travel icons">
  Travel icons created by max.icons - Flaticon
</a>;

<a href="https://www.flaticon.com/free-icons/waterfall" title="waterfall icons">
  Waterfall icons created by IYIKON - Flaticon
</a>;
<a href="https://www.flaticon.com/free-icons/tree" title="tree icons">Tree icons created by Freepik - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/final" title="final icons">Final icons created by Freepik - Flaticon</a> */

export const FooterList: React.FC = () => {
  return (
    <Row>
      <Column>
        <Heading>About Us</Heading>
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
        <Heading>Contact Us</Heading>
        <span> 602148610 </span>
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
