import { createSelector } from "reselect";
import { BlogState } from "./blogs.reducer";
import { RootState } from "../store";

export const selectBlogReducer = (state: RootState): BlogState => state.blog;

export const selectCurrentLanguage = createSelector(
  selectBlogReducer,
  (blog: BlogState) => blog.activeLanguage,
);

export const selectRandomLanguage = createSelector(
  selectBlogReducer,
  (blog: BlogState) => blog.activeLanguage,
);
