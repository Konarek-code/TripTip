import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CountriesListState {
  openRegions: Record<string, boolean>; // Tracks the open state of each region
}

const initialState: CountriesListState = {
  openRegions: {}, // Initially, no region is open
};

const countriesListSlice = createSlice({
  name: "countriesList",
  initialState,
  reducers: {
    toggleRegion: (state, action: PayloadAction<string>) => {
      const region = action.payload;
      state.openRegions[region] = !state.openRegions[region]; // Toggle the region's open/close state
    },
  },
});

export const { toggleRegion } = countriesListSlice.actions;
export default countriesListSlice.reducer;
