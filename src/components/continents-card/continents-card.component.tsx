import React from "react";
import {
  ContinentContainer,
  ContinetImages,
  ContinentLabel,
  ContinentItem,
} from "./continents-card.style";
import Europe from "../../assets/euro.png";
import Africa from "../../assets/africa.png";
import NorthAmerica from "../../assets/namerica.png";
import SouthAmerica from "../../assets/south-america.png";
import Asia from "../../assets/asia.png";
import Australia from "../../assets/australia.png";
import Antarctic from "../../assets/antarctic.png";
import ALL from "../../assets/All.png";
const ContinentCard: React.FC<{ isVisible: boolean }> = ({ isVisible }) => {
  return (
    <ContinentContainer isVisible={isVisible}>
      <ContinentItem>
        <ContinetImages src={ALL} alt="All" />
        <ContinentLabel>All</ContinentLabel>
      </ContinentItem>
      <ContinentItem>
        <ContinetImages src={Europe} alt="Europe continent" />
        <ContinentLabel>Europe</ContinentLabel>
      </ContinentItem>
      <ContinentItem>
        <ContinetImages src={Africa} alt="Africa continent" />
        <ContinentLabel>Africa</ContinentLabel>
      </ContinentItem>
      <ContinentItem>
        <ContinetImages src={NorthAmerica} alt="North America continent" />
        <ContinentLabel>North America</ContinentLabel>
      </ContinentItem>
      <ContinentItem>
        <ContinetImages src={SouthAmerica} alt="South America continent" />
        <ContinentLabel>South America</ContinentLabel>
      </ContinentItem>
      <ContinentItem>
        <ContinetImages src={Asia} alt="Asia continent" />
        <ContinentLabel>Asia</ContinentLabel>
      </ContinentItem>
      <ContinentItem>
        <ContinetImages src={Australia} alt="Australia continent" />
        <ContinentLabel>Australia</ContinentLabel>
      </ContinentItem>
      <ContinentItem>
        <ContinetImages src={Antarctic} alt="Antarctica continent" />
        <ContinentLabel>Antarctica</ContinentLabel>
      </ContinentItem>
    </ContinentContainer>
  );
};

export default ContinentCard;
