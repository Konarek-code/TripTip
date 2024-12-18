import React, { useState } from "react";
import RegionsPanel from "../region-panels/region-panels.component";
import CountriesList from "../countriesList/countriesList.component";
import GroupCountriesByRegion from "../groupByRegion/groupByRegion.component";
import { countriesData } from "../countriesItems/countries.Data";
import { CountriesLayout } from "./been-list.style";
import AsiaImg from "../../assets/Asia.jpg";
import EuropeImg from "../../assets/Europe.jpg";
import AfricaImg from "../../assets/Africa.jpg";
import OceaniaImg from "../../assets/Oceania.jpg";
import NorthAmericaImg from "../../assets/NorthAmerica.jpg";
import SouthAmericaImg from "../../assets/SouthAmerica.jpg";
const CountriesPage: React.FC = () => {
  const [activeRegion, setActiveRegion] = useState<string | null>(null);

  const groupedCountries = GroupCountriesByRegion(countriesData);

  const regionImages = {
    Asia: AsiaImg,
    Europe: EuropeImg,
    Africa: AfricaImg,
    "North America": NorthAmericaImg,
    "South America": SouthAmericaImg,
    Oceania: OceaniaImg,
  };

  const handleRegionClick = (region: string): void => {
    setActiveRegion(region === activeRegion ? null : region);
  };

  return (
    <CountriesLayout>
      <CountriesList
        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
        countries={activeRegion ? groupedCountries[activeRegion] || [] : []}
        activeRegion={activeRegion}
      />
      <RegionsPanel
        regions={regionImages}
        activeRegion={activeRegion}
        onRegionClick={handleRegionClick}
      />
    </CountriesLayout>
  );
};

export default CountriesPage;
