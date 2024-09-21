import { FC } from "react";
import { CountriesData } from "./countries.Data";
import { CountryItemContainer } from "./countriesItems.style";

type CountriesItemsProps = {
  land: CountriesData;
};

const CountriesItems: FC<CountriesItemsProps> = ({ land }) => {
  const { country, flag } = land;

  return (
    <CountryItemContainer>
      <img src={flag} alt={`Flag of ${country}`} width="50" height="30" />{" "}
      <h2>{country}</h2>
    </CountryItemContainer>
  );
};

export default CountriesItems;
