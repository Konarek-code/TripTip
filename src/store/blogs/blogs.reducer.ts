import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type BlogState = {
  activeLanguage: string | null;
  readonly error: Error | null;
};

const INITIAL_STATE: BlogState = {
  activeLanguage: null,
  error: null,
};

const blogSlice = createSlice({
  name: "blog",
  initialState: INITIAL_STATE,
  reducers: {
    setCurrentLanguage(state, action: PayloadAction<string | null>) {
      state.activeLanguage = action.payload;
    },
    setError(state, action: PayloadAction<Error>) {
      state.error = action.payload;
    },
  },
});

export const { setCurrentLanguage, setError } = blogSlice.actions;

export default blogSlice.reducer;
