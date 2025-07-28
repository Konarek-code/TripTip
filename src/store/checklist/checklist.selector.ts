import { createSelector } from "reselect";
import { RootState } from "../store";

import type { ChecklistState } from "./checklist.reducer";

export const selectChecklistReducer = (state: RootState): ChecklistState =>
  state.checklist;

export const selectAllChecklists = createSelector(
  selectChecklistReducer,
  (checklist) => checklist.allChecklists,
);

export const selectActiveChecklistId = createSelector(
  selectChecklistReducer,
  (checklist) => checklist.activeChecklistId,
);

export const selectActiveChecklist = createSelector(
  [selectAllChecklists, selectActiveChecklistId],
  (allChecklists, activeId) =>
    allChecklists.find((c) => c.id === activeId) ?? null,
);
