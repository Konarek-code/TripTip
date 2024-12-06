import { createSelector } from "reselect";
import { RootState } from "../store";
import { ScrollState } from "./scroll.reducer";

const selectScrollReducer = (state: RootState): ScrollState => state.scroll;

export const selectShowSearchInNav = createSelector(
  selectScrollReducer,
  (scroll: ScrollState) => scroll.showSearchInNav,
);
