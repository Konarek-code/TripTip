import React, { useEffect, useState } from "react";
import { Box, FooterContainer } from "./footer.style";
import { FooterList } from "../footerList/footer.list.component";
import FooterAction from "../footerAction/footerAction";

const waveDesktop =
  "M0,96L40,112C80,128,160,160,240,186.7C320,213,400,235,480,250.7C560,267,640,277,720,250.7C800,224,880,160,960,138.7C1040,117,1120,139,1200,170.7C1280,203,1360,245,1400,266.7L1440,288L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z";

const waveMobile =
  "M0,160L80,150C160,140,320,120,480,130C640,140,800,170,960,160C1120,150,1280,110,1360,90L1440,70L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z";

const Footer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = (): void => {
      const footerHeight = 100;
      setIsVisible(
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - footerHeight,
      );
    };

    const handleResize = (): void => {
      setIsMobile(window.innerWidth < 768);
    };

    handleScroll();
    handleResize();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <FooterAction />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        style={{
          display: "block",
          width: "100%",
          height: isMobile ? "100px" : "200px",
          marginTop: "-1px",
          zIndex: 2,
          position: "relative",
        }}
      >
        <path
          fill="#14213d"
          fillOpacity="1"
          d={isMobile ? waveMobile : waveDesktop}
        />
      </svg>

      <Box className={isVisible ? "visible" : ""}>
        <FooterContainer>
          <FooterList />
        </FooterContainer>
      </Box>
    </>
  );
};

export default Footer;
