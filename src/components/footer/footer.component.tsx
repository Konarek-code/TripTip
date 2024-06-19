import React, { useEffect, useState } from "react";
import { Box, FooterContainer } from "./footer.style";
import { FooterList } from "../footerList/footer.list.component";

const Footer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = (): void => {
    const footerHeight = 100;
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - footerHeight
    ) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box className={isVisible ? "visible" : ""}>
      <FooterContainer>
        <FooterList />
      </FooterContainer>
    </Box>
  );
};

export default Footer;
