import { RootState } from "../store";

export const selectActiveCard = (state: RootState): string | null =>
  state.card.activeCard;
