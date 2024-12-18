import { BeenMapContainer, Map } from "./been.component.style";
import BeenList from "../../components/been-list/been-list.component";
import MapApi from "../../components/mapApi/mapApi.component";
import PercentPanels from "../../components/percent-panels/percent-panels.component";

const Been: React.FC = () => {
  return (
    <div>
      <BeenMapContainer>
        <Map>
          <MapApi onRegionSelect={undefined}></MapApi>
          <PercentPanels></PercentPanels>
        </Map>
        <BeenList></BeenList>
      </BeenMapContainer>
    </div>
  );
};

export default Been;
