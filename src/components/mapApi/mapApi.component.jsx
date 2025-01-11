/*eslint-disable*/

import { useState,useEffect } from 'react';
import WorldMap from 'react-world-map';
import { MapWrapper, RegionText } from './mapApi.component.style';

const MapApi = ({ onRegionSelect,selectedRegion  }) => {
  const [selected, setSelected] = useState(selectedRegion||null);

  useEffect(() => {
    setSelected(selectedRegion);
  }, [selectedRegion]);

  const handleSelect = (region) => {
    setSelected(region);
    onRegionSelect(region);
    
  };

  return (
    <MapWrapper>
      <WorldMap selected={selected} onSelect={handleSelect} />
      {selected && <RegionText>Selected Region: {selected.toUpperCase()}</RegionText>}
    </MapWrapper>
  );
};

export default MapApi;


