import { createSelector } from "reselect";

import { FormsState } from "./forms.reducer";
import { RootState } from "../store";

export const selectFormsReducer = (state: RootState): FormsState => state.forms;

export const selectCurrentForm = createSelector(
  selectFormsReducer,
  (forms: FormsState) => forms.currentForm,
);
