import React from "react";
import RegionsPanel from "../region-panels/region-panels.component";
import CountriesList from "../countriesList/countriesList.component";
import { GroupCountriesByRegion } from "../groupByRegion/groupByRegion.component";
import { countriesData } from "../../data/countries.Data";
import { CountriesLayout } from "./been-list.style";
import AsiaImg from "../../assets/Asia.jpg";
import EuropeImg from "../../assets/Europe.jpg";
import AfricaImg from "../../assets/Africa.jpg";
import OceaniaImg from "../../assets/Oceania.jpg";
import NorthAmericaImg from "../../assets/NorthAmerica.jpg";
import SouthAmericaImg from "../../assets/SouthAmerica.jpg";
import { useDispatch, useSelector } from "react-redux";
import { setActiveRegion } from "../../store/countrieslist/countries.reducer";
import { selectActiveRegion } from "../../store/countrieslist/countries.selector";

const CountriesPage: React.FC = () => {
  const dispatch = useDispatch();

  const activeRegion = useSelector(selectActiveRegion);

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
    const isSameRegion = region === activeRegion;
    dispatch(setActiveRegion(isSameRegion ? null : region));
  };

  const isActiveRegionValid = (region: string | null): region is string =>
    region != null && region.trim() !== "";

  return (
    <CountriesLayout>
      <RegionsPanel
        regions={regionImages}
        activeRegion={activeRegion}
        onRegionClick={handleRegionClick}
      />
      <CountriesList
        countries={
          isActiveRegionValid(activeRegion)
            ? groupedCountries[activeRegion]
            : []
        }
      />
    </CountriesLayout>
  );
};

export default CountriesPage;
