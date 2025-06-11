import React, { useEffect } from "react";
import {
  Block,
  CitiesTitle,
  ContentTitle,
  ContentWrapper,
  FullWidthContainer,
  Image,
  InnerContainer,
  Text,
  TextBlock,
} from "./homeContent.styles";
import contentData from "../../data/contentHome";
import AOS from "aos";
import "aos/dist/aos.css";

type Continent =
  | "Europe"
  | "Asia"
  | "Africa"
  | "North America"
  | "South America"
  | "Australia"
  | "Antarctica";

interface Props {
  continent: Continent;
}

const HomeContent: React.FC<Props> = ({ continent }) => {
  const data = contentData[continent] ?? [];

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);
  return (
    <FullWidthContainer>
      <ContentTitle> Popular Cities</ContentTitle>
      {data.map((item, index) => (
        <Block key={index}>
          <InnerContainer reverse={index % 2 === 1}>
            <Image
              src={item.image}
              alt={continent}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            />
            <ContentWrapper>
              <TextBlock data-aos="fade-up">
                <CitiesTitle>{item.title}</CitiesTitle>
                <Text>{item.description}</Text>
              </TextBlock>
            </ContentWrapper>
          </InnerContainer>
        </Block>
      ))}
    </FullWidthContainer>
  );
};

export default HomeContent;
