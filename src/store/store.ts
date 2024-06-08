import { configureStore } from "@reduxjs/toolkit";

import { useDispatch } from "react-redux";

import { rootReducer } from "./root-reducer";

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>(); // Export a hook that can be reused to resolve types

export default store;
