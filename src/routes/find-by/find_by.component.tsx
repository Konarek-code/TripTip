import React, { useState } from "react";
import CountriesSearchPage from "../../components/country--Flags/Flags.component";
import MapApi from "../../components/mapApi/mapApi.component";
import { FindByContainer, MapContainer, Title } from "./find_by.style";

const FindBy: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  const handleRegionSelect = (region: string): void => {
    setSelectedRegion(region);
  };

  return (
    <FindByContainer>
      <MapContainer>
        <Title>Find By Map</Title>
        <MapApi
          onRegionSelect={handleRegionSelect}
          selectedRegion={undefined}
        />
      </MapContainer>
      <CountriesSearchPage selectedRegion={selectedRegion} />
    </FindByContainer>
  );
};

export default FindBy;
