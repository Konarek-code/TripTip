import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ContinentState {
  selectedContinent: string | null;
}

const initialState: ContinentState = {
  selectedContinent: null,
};

const continentSlice = createSlice({
  name: "continent",
  initialState,
  reducers: {
    setContinent(state, action: PayloadAction<string>) {
      state.selectedContinent = action.payload;
    },
  },
});

export const { setContinent } = continentSlice.actions;
export default continentSlice.reducer;
