import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type FavouriteItem = {
  id: string;
  country: string;
  flag: string;
};

export type FavouriteState = {
  readonly isCartOpen: boolean;
  readonly favouriteItems: FavouriteItem[];
  readonly error: Error | null;
};

const INITIAL_STATE: FavouriteState = {
  isCartOpen: false,
  favouriteItems: [],
  error: null,
};

const favouriteSlice = createSlice({
  name: "favorite",
  initialState: INITIAL_STATE,
  reducers: {
    setIsCartOpen(state, action: PayloadAction<boolean>) {
      state.isCartOpen = action.payload;
    },

    setFavourItem(state, action: PayloadAction<FavouriteItem[]>) {
      state.favouriteItems = action.payload;
    },

    addFavouriteItem(state, action: PayloadAction<FavouriteItem>) {
      const existingItem = state.favouriteItems.find(
        (item) => item.id === action.payload.id,
      );

      if (existingItem === null || existingItem === undefined) {
        state.favouriteItems.push(action.payload);
      }
    },

    removeFavouriteItem(state, action: PayloadAction<string>) {
      state.favouriteItems = state.favouriteItems.filter(
        (item) => item.id !== action.payload,
      );
    },
    setError(state, action: PayloadAction<Error | null>) {
      state.error = action.payload;
    },
  },
});

export const {
  setIsCartOpen,
  setFavourItem,
  addFavouriteItem,
  removeFavouriteItem,
  setError,
} = favouriteSlice.actions;

export default favouriteSlice.reducer;
