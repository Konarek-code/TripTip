import { FC } from "react";
import { getRegionFullName } from "../../utils/mapping_names/region.mapping";
import { useSelector } from "react-redux";
import {
  selectPercentage,
  selectSelectedRegion,
  selectTotalCountriesInRegion,
  selectedRegionCounter,
} from "../../store/countrieslist/countries.selector";
import {
  PanelContainer,
  Title,
  Textcontainer,
  Percent,
} from "./percent-panels.style";

const PercentPanels: FC = () => {
  const totalCountries = useSelector(selectTotalCountriesInRegion);
  const selectedRegion = useSelector(selectSelectedRegion);
  const percentage = useSelector(selectPercentage);
  const getDisplayRegionName = (region: string | null): string => {
    if (region === null || region === undefined || region.trim() === "") {
      return "Select a Region";
    }
    return getRegionFullName(region);
  };
  const displayRegionName = getDisplayRegionName(selectedRegion);
  const counter = useSelector(selectedRegionCounter);
  console.log(counter);
  return (
    <PanelContainer>
      <Title>{displayRegionName}</Title>
      <Textcontainer>
        You visited {counter} out of {totalCountries} countries.
      </Textcontainer>
      <Percent>
        {Number.isFinite(percentage) ? percentage.toFixed(2) : "0.00"} %
      </Percent>
    </PanelContainer>
  );
};

export default PercentPanels;
