import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type ModalState = {
  readonly selectedCountry: {
    [x: string]: any;
    cities: string[];
    capital: string;
    population: number;
    region: string;
    country: string;
    flag: string;
    regionshortcut: string;
  } | null;
  readonly isOpen: boolean;
  readonly error: Error | null;
};

const INITIAL_STATE: ModalState = {
  selectedCountry: null,
  isOpen: false,
  error: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState: INITIAL_STATE,
  reducers: {
    openModal(
      state,
      action: PayloadAction<{
        cities: string[];
        capital: string;
        population: number;
        region: string;
        country: string;
        flag: string;
        regionshortcut: string;
      }>,
    ) {
      state.selectedCountry = action.payload;
      state.isOpen = true;
    },
    closeModal(state) {
      state.selectedCountry = null;
      state.isOpen = false;
    },
    setError(state, action: PayloadAction<Error>) {
      state.error = action.payload;
    },
  },
});

export const { openModal, closeModal, setError } = modalSlice.actions;

export default modalSlice.reducer;
