import { createSelector } from "reselect";

import { BurgerState } from "./burger.reducer";
import { RootState } from "../store";

export const selectBurgerReducer = (state: RootState): BurgerState =>
  state.burger;

export const selectCurrentState = createSelector(
  selectBurgerReducer,
  (burger: BurgerState) => burger.currentState,
);
