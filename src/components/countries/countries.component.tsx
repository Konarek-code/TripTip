import React from "react";
import { CountriesContainer } from "./countries.style";
import CountriesItems from "../countriesItems/countriesItems.component";
import { CountriesData } from "../../data/countries.Data";

interface CountriesProps {
  countries: CountriesData[];
}

const Countries: React.FC<CountriesProps> = ({ countries }) => {
  return (
    <CountriesContainer>
      {countries.map((land) => (
        <CountriesItems key={land.id} land={land} />
      ))}
    </CountriesContainer>
  );
};

export default Countries;
