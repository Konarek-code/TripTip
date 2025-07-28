import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { countriesData } from "../../data/countries.Data";

export type CountriesState = {
  readonly activeRegion: string | null;
  readonly selectedRegion: string | null;
  readonly selectedCountries: string[];
  readonly totalCountriesInRegion: number;
  readonly selectedCountriesByRegion: Record<string, string[]>;
};

const INITIAL_STATE: CountriesState = {
  activeRegion: null,
  selectedRegion: null,
  selectedCountries: [],
  selectedCountriesByRegion: {},
  totalCountriesInRegion: 0,
};
export const countriesSlice = createSlice({
  name: "countries",
  initialState: INITIAL_STATE,
  reducers: {
    setActiveRegion(state, action) {
      state.activeRegion = action.payload;
    },
    setSelectedRegion(state, action) {
      state.selectedRegion = action.payload;
    },
    toggleCountrySelection(state, action: PayloadAction<string>) {
      const country = action.payload;

      const countryData = countriesData.find((c) => c.country === country);

      if (countryData == null) {
        console.error(`Country "${country}" not found in countriesData`);
        return;
      }

      const region = countryData.region;

      const isCountrySelected = state.selectedCountries.includes(country);

      if (isCountrySelected) {
        state.selectedCountries = state.selectedCountries.filter(
          (c) => c !== country,
        );

        if (
          state.selectedCountriesByRegion[region] !== undefined &&
          Array.isArray(state.selectedCountriesByRegion[region])
        ) {
          state.selectedCountriesByRegion[region] =
            state.selectedCountriesByRegion[region].filter(
              (c) => c !== country,
            );

          if (state.selectedCountriesByRegion[region].length === 0) {
            state.selectedCountriesByRegion[region] = [];
          }
        }
      } else {
        if (state.selectedCountriesByRegion[region] === undefined) {
          state.selectedCountriesByRegion[region] = [];
        }

        state.selectedCountriesByRegion[region].push(country);

        state.selectedCountriesByRegion[region].sort((a, b) =>
          a.localeCompare(b),
        );

        state.selectedCountries.push(country);
      }
    },

    setTotalCountriesInRegion(state, action: PayloadAction<number>) {
      state.totalCountriesInRegion = action.payload;
    },
    setSelectedCountries(state, action: PayloadAction<string[]>) {
      state.selectedCountries = action.payload;
    },

    setSelectedCountriesFromFirestore(
      state,
      action: PayloadAction<Record<string, string[]>>,
    ) {
      state.selectedCountriesByRegion = action.payload;
      state.selectedCountries = Object.values(action.payload).flat();
    },
  },
});

export const {
  setActiveRegion,
  toggleCountrySelection,
  setTotalCountriesInRegion,
  setSelectedRegion,
  setSelectedCountriesFromFirestore,
  setSelectedCountries,
} = countriesSlice.actions;

export const countriesReducer = countriesSlice.reducer;
