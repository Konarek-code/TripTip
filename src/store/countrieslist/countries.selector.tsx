import { createSelector } from "reselect";
import { RootState } from "../store";
import { CountriesState } from "./countries.reducer";
import { getRegionFullName } from "../../utils/mapping_names/region.mapping";

export const selectCountriesReducer = (state: RootState): CountriesState =>
  state.countries;

export const selectActiveRegion = createSelector(
  [selectCountriesReducer],
  (countriesState) => countriesState.activeRegion,
);
export const selectSelectedRegion = createSelector(
  [selectCountriesReducer],
  (countriesState) => countriesState.selectedRegion,
);
export const selectSelectedCountries = createSelector(
  [selectCountriesReducer],
  (countriesState) => countriesState.selectedCountries,
);
export const selectSelectedCountriesinRegion = createSelector(
  [selectCountriesReducer],
  (countriesState) => countriesState.selectedCountriesByRegion,
);

export const selectTotalCountriesInRegion = createSelector(
  [selectCountriesReducer],
  (countriesState) => countriesState.totalCountriesInRegion,
);

export const selectedRegionCounter = createSelector(
  [selectSelectedCountriesinRegion, selectSelectedRegion],
  (selectedCountriesByRegion, selectedRegion) => {
    const region =
      (selectedRegion ?? "").trim() !== ""
        ? getRegionFullName(selectedRegion!)
        : null;

    if (region == null) {
      return 0;
    }
    const countriesInRegion = selectedCountriesByRegion[region];
    if (countriesInRegion == null) {
      return 0;
    }
    return countriesInRegion.length;
  },
);

export const selectPercentage = createSelector(
  [selectTotalCountriesInRegion, selectedRegionCounter],
  (totalCountriesInRegion, selectedRegionCounter) => {
    if (totalCountriesInRegion <= 0) return 0;
    return (
      Math.round((selectedRegionCounter / totalCountriesInRegion) * 100 * 100) /
      100
    );
  },
);
