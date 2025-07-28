import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Continent =
  | "Europe"
  | "Asia"
  | "Africa"
  | "North America"
  | "South America"
  | "Australia"
  | "Antarctica";

export type ContinentState = {
  selectedContinent: Continent | null;
};

const initialState: ContinentState = {
  selectedContinent: null,
};

const continentSlice = createSlice({
  name: "continent",
  initialState,
  reducers: {
    setContinent(state, action: PayloadAction<Continent>) {
      state.selectedContinent = action.payload;
    },
  },
});

export const { setContinent } = continentSlice.actions;
export default continentSlice.reducer;
