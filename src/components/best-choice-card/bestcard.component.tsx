import React from "react";
import TokyoLarge from "../../assets/Tokyo.jpg";
import { BestCardContainer, ArrowLeft, ArrowRight } from "./bestcard.style";

const BestCard: React.FC = () => {
  return (
    <BestCardContainer>
      <ArrowLeft>&#8592;</ArrowLeft>
      <img src={TokyoLarge} alt="tokyo city" />
      <ArrowRight>&#8594;</ArrowRight>
    </BestCardContainer>
  );
};

export default BestCard;
