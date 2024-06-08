import {FC} from "react";

import {CountriesData} from "./countries.Data";
import {CountryItemContainer} from "./countriesItems.style";

type CountriesItemsProps = {
  land: CountriesData;
};

const CountriesItems: FC<CountriesItemsProps> = ({land}) => {
  const {id, country, cities} = land;

  return (
    <CountryItemContainer>
      <h2>{country}</h2>
      <h3>{cities}</h3>
    </CountryItemContainer>
  );
};

export default CountriesItems;
