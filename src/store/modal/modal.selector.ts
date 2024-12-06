import { createSelector } from "reselect";

import { ModalState } from "./modal.reducer";
import { RootState } from "../store";

export const selectModalReducer = (state: RootState): ModalState => state.modal;

export const selectCurrentFlag = createSelector(
  selectModalReducer,
  (modal: ModalState) => modal.selectedCountry,
);

export const selectModalIsOpen = createSelector(
  selectModalReducer,
  (modal) => modal.isOpen,
);
