import React, { Fragment, useRef } from "react";
import {
  CardContainer,
  RecommendedCardsitem,
  ArrowButton,
  RecommendedCardLabel,
} from "./recommended-card.style";
import Paris from "../../assets/Paris.jpg";

const RecommendedCard: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = (): void => {
    if (containerRef.current !== null) {
      containerRef.current.scrollBy({ left: -100, behavior: "smooth" });
    }
  };

  const scrollRight = (): void => {
    if (containerRef.current !== null) {
      containerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <Fragment>
      <RecommendedCardLabel>
        {" "}
        <h2>Recommended for you </h2>
      </RecommendedCardLabel>
      <CardContainer ref={containerRef}>
        <ArrowButton className="left" onClick={scrollLeft}>
          &#9664;
        </ArrowButton>
        <ArrowButton className="right" onClick={scrollRight}>
          &#9654;
        </ArrowButton>
        <RecommendedCardsitem>
          <img src={Paris} alt="Paris" />
          Paris
        </RecommendedCardsitem>
        <RecommendedCardsitem>
          <img src={Paris} alt="London" />
          London
        </RecommendedCardsitem>
        <RecommendedCardsitem>
          <img src={Paris} alt="New York" />
          New York
        </RecommendedCardsitem>
        <RecommendedCardsitem>
          <img src={Paris} alt="Tokyo" />
          Tokyo
        </RecommendedCardsitem>
        <RecommendedCardsitem>
          <img src={Paris} alt="Berlin" />
          Berlin
        </RecommendedCardsitem>
        <RecommendedCardsitem>
          <img src={Paris} alt="Berlin" />
          Berlin
        </RecommendedCardsitem>
        <RecommendedCardsitem>
          <img src={Paris} alt="Berlin" />
          Berlin
        </RecommendedCardsitem>
        <RecommendedCardsitem>
          <img src={Paris} alt="Berlin" />
          Berlin
        </RecommendedCardsitem>
        <RecommendedCardsitem>
          <img src={Paris} alt="Berlin" />
          Berlin
        </RecommendedCardsitem>
        <RecommendedCardsitem>
          <img src={Paris} alt="Berlin" />
          Berlin
        </RecommendedCardsitem>
      </CardContainer>
    </Fragment>
  );
};

export default RecommendedCard;
