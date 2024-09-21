import { createSlice } from "@reduxjs/toolkit";

export type UserState = {
  readonly currentUser: any;
  readonly error: Error | null;
};

const INITIAL_STATE: UserState = {
  currentUser: null,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {
    setCurrentUser(state, action) {
      state.currentUser = action.payload;
    },
  },
});

export const { setCurrentUser } = userSlice.actions;

export const userReducer = userSlice.reducer;
