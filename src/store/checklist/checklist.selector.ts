import { createSelector } from "reselect";
import { ChecklistState } from "./checklist.reducer";
import { RootState } from "../store";

export const selectChecklistReducer = (state: RootState): ChecklistState =>
  state.checklist;

export const selectActiveChecklist = createSelector(
  selectChecklistReducer,
  (checklist: ChecklistState) => checklist.activeChecklist?.items ?? [],
);

export const selectActiveChecklistId = createSelector(
  selectChecklistReducer,
  (checklist: ChecklistState) => checklist.activeChecklist?.id ?? null,
);
