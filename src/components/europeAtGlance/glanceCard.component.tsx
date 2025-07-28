import * as React from "react";
import { useEffect } from "react";
import {
  GlanceWrapper,
  GlanceTitle,
  CardsContainer,
  GlanceCard,
  Icon,
  CardTitle,
  CardText,
} from "./glanceCard.styles";

import climateIcon from "../../assets/climate.png";
import currencyIcon from "../../assets/currency.png";
import timezoneIcon from "../../assets/timezone.png";
import Aos from "aos";

const EuropeGlance = (): React.ReactNode => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      once: true,
    });
  }, []);
  return (
    <GlanceWrapper>
      <GlanceTitle data-aos="fade-up">Europe at a Glance</GlanceTitle>
      <CardsContainer>
        <GlanceCard data-aos="fade-up" data-aos-delay="200">
          <Icon src={climateIcon} alt="Climate" />
          <CardTitle>Climate</CardTitle>
          <CardText>
            Europe has diverse climates – Mediterranean in the south, oceanic in
            the west, and continental in the east.
          </CardText>
        </GlanceCard>

        <GlanceCard data-aos="fade-up" data-aos-delay="300">
          <Icon src={currencyIcon} alt="Currency" />
          <CardTitle>Currency</CardTitle>
          <CardText>
            The Euro (€) is used in most EU countries, but some nations retain
            their own currencies like the Polish złoty or Hungarian forint.
          </CardText>
        </GlanceCard>

        <GlanceCard data-aos="fade-up" data-aos-delay="400">
          <Icon src={timezoneIcon} alt="Time Zone" />
          <CardTitle>Time Zones</CardTitle>
          <CardText>
            Europe spans multiple time zones – mainly Central European Time
            (CET), with some countries in Eastern or Western zones.
          </CardText>
        </GlanceCard>
      </CardsContainer>
    </GlanceWrapper>
  );
};

export default EuropeGlance;
