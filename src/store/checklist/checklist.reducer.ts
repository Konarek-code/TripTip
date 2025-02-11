import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ChecklistState = {
  items: string[] | null;
  activeChecklist: { id: string; items: string[] } | null;
};

const INITIAL_STATE: ChecklistState = {
  items: null,
  activeChecklist: { id: "", items: [] },
};

export const checklistslice = createSlice({
  name: "checklist",
  initialState: INITIAL_STATE,
  reducers: {
    chooseChecklist(
      state,
      action: PayloadAction<{ id: string; items: string[] } | null>,
    ) {
      if (action.payload !== null) {
        state.activeChecklist = {
          id: action.payload.id,
          items: action.payload.items,
        };
      } else {
        state.activeChecklist = null;
      }
    },
    addItemToChecklist(state, action: PayloadAction<string>) {
      if (state.activeChecklist !== null) {
        state.activeChecklist.items.push(action.payload);
      }
    },
  },
});
export const { chooseChecklist, addItemToChecklist } = checklistslice.actions;
export default checklistslice.reducer;
