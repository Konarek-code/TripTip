import { countriesData } from "../../components/countriesItems/countries.Data"; // Upewnij się, że ścieżka jest poprawna

export const isRegionValid = (
  country: string,
  expectedRegion: string,
): boolean => {
  const countryData = countriesData.find((data) => data.country === country);

  if (!countryData) {
    console.error(`Country ${country} not found in the dataset.`);
    return false;
  }

  return countryData.region === expectedRegion;
};
