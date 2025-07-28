import { CountriesData } from "../../data/countries.Data";

export const GroupCountriesByRegion = (
  countries: CountriesData[],
): Record<string, CountriesData[]> => {
  const groupedCountries: Record<string, CountriesData[]> = {};
  countries.forEach((country) => {
    if (groupedCountries[country.region] === undefined) {
      groupedCountries[country.region] = [];
    }
    groupedCountries[country.region].push(country);
  });
  return groupedCountries;
};
