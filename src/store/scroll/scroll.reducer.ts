import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type ScrollState = {
  readonly showSearchInNav: boolean;
};

const INITIAL_STATE: ScrollState = {
  showSearchInNav: false,
};

const scrollSlice = createSlice({
  name: "scroll",
  initialState: INITIAL_STATE,
  reducers: {
    setShowSearchInNav(state, action: PayloadAction<boolean>) {
      state.showSearchInNav = action.payload;
    },
  },
});

export const { setShowSearchInNav } = scrollSlice.actions;

export const selectShowSearchInNav = (state: RootState): boolean =>
  state.scroll.showSearchInNav;

export default scrollSlice.reducer;
