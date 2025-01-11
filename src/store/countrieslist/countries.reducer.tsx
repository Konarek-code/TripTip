import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { countriesData } from "../../components/countriesItems/countries.Data";

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
        // Usuwamy kraj z głównej listy
        state.selectedCountries = state.selectedCountries.filter(
          (c) => c !== country,
        );

        // Usuwamy kraj z tablicy w regionie, jeśli region istnieje
        if (
          state.selectedCountriesByRegion[region] !== undefined &&
          Array.isArray(state.selectedCountriesByRegion[region])
        ) {
          state.selectedCountriesByRegion[region] =
            state.selectedCountriesByRegion[region].filter(
              (c) => c !== country,
            );

          // Jeśli region stał się pusty, usuwamy go z selectedCountriesByRegion
          if (state.selectedCountriesByRegion[region].length === 0) {
            state.selectedCountriesByRegion[region] = []; // Używamy delete
          }
        }
      } else {
        // Jeśli kraj nie jest zaznaczony, dodajemy go

        if (state.selectedCountriesByRegion[region] === undefined) {
          state.selectedCountriesByRegion[region] = [];
        }

        // Dodajemy kraj do regionu
        state.selectedCountriesByRegion[region].push(country);

        // Posortowanie krajów w regionie
        state.selectedCountriesByRegion[region].sort((a, b) =>
          a.localeCompare(b),
        );

        // Dodajemy kraj do głównej listy
        state.selectedCountries.push(country);
      }
    },

    setTotalCountriesInRegion(state, action: PayloadAction<number>) {
      state.totalCountriesInRegion = action.payload;
    },
  },
});

export const {
  setActiveRegion,
  toggleCountrySelection,
  setTotalCountriesInRegion,
  setSelectedRegion,
} = countriesSlice.actions;

export const countriesReducer = countriesSlice.reducer;
