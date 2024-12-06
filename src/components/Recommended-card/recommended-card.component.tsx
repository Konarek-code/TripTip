import React, { Fragment, useRef } from "react";
import {
  CardContainer,
  RecommendedCardsItem,
  ArrowButton,
  RecommendedCardLabel,
} from "./recommended-card.style";
import Paris from "../../assets/Paris.jpg";
import London from "../../assets/London.jpg";
import NewYork from "../../assets/NewYork.jpg";
import Berlin from "../../assets/Berlin.jpg";
const RecommendedCard: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = (): void => {
    if (containerRef.current !== null) {
      containerRef.current.scrollBy({ left: -250, behavior: "smooth" });
    }
  };

  const scrollRight = (): void => {
    if (containerRef.current !== null) {
      containerRef.current.scrollBy({ left: 250, behavior: "smooth" });
    }
  };

  return (
    <Fragment>
      <RecommendedCardLabel>
        <h2>Recommended for you</h2>
      </RecommendedCardLabel>
      <ArrowButton className="left" onClick={scrollLeft}>
        &#9664;
      </ArrowButton>
      <CardContainer ref={containerRef}>
        <RecommendedCardsItem>
          <img src={Paris} alt="Paris" />
          <p>Paris</p>
        </RecommendedCardsItem>
        <RecommendedCardsItem>
          <img src={London} alt="London" />
          <p>London</p>
        </RecommendedCardsItem>
        <RecommendedCardsItem>
          <img src={NewYork} alt="New York" />
          <p>New York</p>
        </RecommendedCardsItem>
        <RecommendedCardsItem>
          <img src={Paris} alt="Seul" />
          <p>Seul</p>
        </RecommendedCardsItem>
        <RecommendedCardsItem>
          <img src={Berlin} alt="Berlin" />
          <p>Berlin</p>
        </RecommendedCardsItem>
      </CardContainer>
      <ArrowButton className="right" onClick={scrollRight}>
        &#9654;
      </ArrowButton>
    </Fragment>
  );
};

export default RecommendedCard;
