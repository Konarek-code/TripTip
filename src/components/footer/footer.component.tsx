import React from "react";
import { Box, FooterContainer } from "./footer.style";
import { FooterList } from "../footerList/footer.list.component";

const Footer: React.FC = () => {
  return (
    <Box>
      <FooterContainer>
        <FooterList />
      </FooterContainer>
    </Box>
  );
};
export default Footer;
