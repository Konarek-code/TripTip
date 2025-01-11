import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CardState {
  activeCard: string | null;
}

const initialState: CardState = {
  activeCard: null,
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    setActiveCard: (state, action: PayloadAction<string | null>) => {
      state.activeCard = action.payload;
    },
  },
});

export const { setActiveCard } = cardSlice.actions;

export const cardReducer = cardSlice.reducer;
