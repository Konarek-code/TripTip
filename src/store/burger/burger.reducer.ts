import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type BurgerState = {
  currentState: boolean;
  readonly error: Error | null;
};

const INITIAL_STATE: BurgerState = {
  currentState: false,
  error: null,
};

const burgerSlice = createSlice({
  name: "burger",
  initialState: INITIAL_STATE,
  reducers: {
    setCurrentState(state, action: PayloadAction<true | false>) {
      state.currentState = action.payload;
    },
    setError(state, action: PayloadAction<Error>) {
      state.error = action.payload;
    },
  },
});

export const { setCurrentState, setError } = burgerSlice.actions;

export default burgerSlice.reducer;
