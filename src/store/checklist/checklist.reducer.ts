import { arrayMove } from "@dnd-kit/sortable";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ChecklistItem {
  id: string;
  title: string;
  items: string[];
}

export type ChecklistState = {
  allChecklists: ChecklistItem[];
  activeChecklistId: string | null;
};

const INITIAL_STATE: ChecklistState = {
  allChecklists: [],
  activeChecklistId: null,
};

export const checklistslice = createSlice({
  name: "checklist",
  initialState: INITIAL_STATE,
  reducers: {
    addChecklist(state, action: PayloadAction<{ id: string; title: string }>) {
      state.allChecklists.push({
        id: action.payload.id,
        title: action.payload.title,
        items: [],
      });
      state.activeChecklistId = action.payload.id;
    },

    chooseChecklist(state, action: PayloadAction<string | null>) {
      state.activeChecklistId = action.payload;
    },

    addItemToChecklist(
      state,
      action: PayloadAction<{ checklistId: string; item: string }>,
    ) {
      const checklist = state.allChecklists.find(
        (c) => c.id === action.payload.checklistId,
      );
      if (checklist !== null && checklist !== undefined) {
        checklist.items.push(action.payload.item);
      }
    },

    renameChecklist(
      state,
      action: PayloadAction<{ id: string; newTitle: string }>,
    ) {
      const checklist = state.allChecklists.find(
        (c) => c.id === action.payload.id,
      );
      if (checklist !== null && checklist !== undefined) {
        checklist.title = action.payload.newTitle;
      }
    },
    reorderChecklists: (
      state,
      action: PayloadAction<{ oldIndex: number; newIndex: number }>,
    ) => {
      const { oldIndex, newIndex } = action.payload;
      state.allChecklists = arrayMove(state.allChecklists, oldIndex, newIndex);
    },
    setChecklists(state, action: PayloadAction<ChecklistItem[]>) {
      state.allChecklists = action.payload;
    },
  },
});

export const {
  addChecklist,
  chooseChecklist,
  addItemToChecklist,
  renameChecklist,
  reorderChecklists,
  setChecklists,
} = checklistslice.actions;

export default checklistslice.reducer;
