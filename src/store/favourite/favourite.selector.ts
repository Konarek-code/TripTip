import { createSelector } from "reselect";

import { FavouriteState } from "./favourite.reducer";
import { RootState } from "../store";

export const selectFavouriteReducer = (state: RootState): FavouriteState =>
  state.favourite;

export const selectFavouriteItems = createSelector(
  [selectFavouriteReducer],
  (favourite: FavouriteState) => favourite.favouriteItems,
);

export const selectCartIsOpen = createSelector(
  [selectFavouriteReducer],
  (favourite: FavouriteState) => favourite.isCartOpen,
);
