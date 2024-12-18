/*eslint-disable*/

import { useState } from 'react';
import WorldMap from 'react-world-map';
import { MapWrapper, RegionText } from './mapApi.component.style';

const MapApi = ({ onRegionSelect }) => {
  const [selected, setSelected] = useState(null);

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


