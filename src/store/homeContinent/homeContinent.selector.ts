import { createSelector } from "reselect";

import { ContinentState } from "./homeContinentSlice";
import { RootState } from "../store";

export const selectFormsReducer = (state: RootState): ContinentState =>
  state.continent;

export const selectCurrentContinent = createSelector(
  selectFormsReducer,
  (continent: ContinentState) => continent.selectedContinent,
);
