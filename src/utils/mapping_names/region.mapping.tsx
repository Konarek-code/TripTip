export const regionNames: Record<string, string> = {
  af: "Africa",
  eu: "Europe",
  oc: "Oceania",
  na: "North America",
  sa: "South America",
  as: "Asia",
};

export const getRegionFullName = (regionCode: string): string => {
  const fullName = regionNames[regionCode];
  return fullName !== undefined && fullName.trim() !== ""
    ? fullName
    : "Unknown Region";
};
