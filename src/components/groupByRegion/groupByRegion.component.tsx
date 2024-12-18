import { CountriesData } from "../countriesItems/countries.Data";

const GroupCountriesByRegion = (
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

export default GroupCountriesByRegion;
