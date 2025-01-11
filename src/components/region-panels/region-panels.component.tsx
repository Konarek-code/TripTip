import React from "react";
import {
  RegionPanels,
  RegionPanel,
  RegionBackground,
  RegionName,
} from "./region panels.style";

interface RegionsPanelProps {
  regions: Record<string, string>; // Mapping of region names to background images
  activeRegion: string | null; // Currently active region
  onRegionClick: (region: string) => void; // Handler for region selection
}

const RegionsPanel: React.FC<RegionsPanelProps> = ({
  regions,
  activeRegion,
  onRegionClick,
}) => {
  const safeRegions = regions ?? {};

  return (
    <RegionPanels>
      {Object.keys(safeRegions).length > 0 ? (
        Object.keys(safeRegions).map((region) => (
          <RegionPanel
            key={region}
            onClick={() => {
              onRegionClick(region);
            }}
            active={activeRegion === region}
          >
            <RegionBackground background={safeRegions[region]}>
              <RegionName>{region}</RegionName>
            </RegionBackground>
          </RegionPanel>
        ))
      ) : (
        <p>No regions available.</p>
      )}
    </RegionPanels>
  );
};

export default RegionsPanel;
