import { useDispatch, useSelector } from "react-redux";
import {
  setTotalCountriesInRegion,
  setSelectedRegion,
} from "../../store/countrieslist/countries.reducer";
import MapApi from "../mapApi/mapApi.component";
import PercentPanels from "../percent-panels/percent-panels.component";
import { ScorePanelContainer } from "./score-panel.style";
import { countriesData } from "../countriesItems/countries.Data";
import { GroupCountriesByRegion } from "../groupByRegion/groupByRegion.component";
import { getRegionFullName } from "../../utils/mapping_names/region.mapping";
import { selectSelectedRegion } from "../../store/countrieslist/countries.selector";

const ScorePanel: React.FC = () => {
  const dispatch = useDispatch();
  const selectedRegion = useSelector(selectSelectedRegion);
  const groupedCountries = GroupCountriesByRegion(countriesData);
  const handleRegionSelect = (region: string): void => {
    const regionFullName = getRegionFullName(region);
    const totalCountries = groupedCountries[regionFullName]?.length ?? 0;
    dispatch(setTotalCountriesInRegion(totalCountries));
    dispatch(setSelectedRegion(region));
  };

  return (
    <ScorePanelContainer>
      <MapApi
        onRegionSelect={handleRegionSelect}
        selectedRegion={selectedRegion}
      />
      <PercentPanels />
    </ScorePanelContainer>
  );
};

export default ScorePanel;
