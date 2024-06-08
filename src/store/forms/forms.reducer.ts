import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type FormsState = {
  readonly currentForm: "signIn" | "signUp" | null;
  readonly error: Error | null;
};

const INITIAL_STATE: FormsState = {
  currentForm: "signIn",
  error: null,
};

const formsSlice = createSlice({
  name: "forms",
  initialState: INITIAL_STATE,
  reducers: {
    setCurrentForm(state, action: PayloadAction<"signIn" | "signUp">) {
      state.currentForm = action.payload;
    },
    setError(state, action: PayloadAction<Error>) {
      state.error = action.payload;
    },
  },
});

export const { setCurrentForm, setError } = formsSlice.actions;

export default formsSlice.reducer;
