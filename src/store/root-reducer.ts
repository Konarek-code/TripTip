import { combineReducers } from "redux";
import formsReducer from "./forms/forms.reducer";
import { userReducer } from "./user/user.reducer";
import burgerReducer from "./burger/burger.reducer";
import scrollReducer from "./scroll/scroll.reducer";
import modalReducer from "./modal/modal.reducer";
import favouriteReducer from "./favourite/favourite.reducer";
import { countriesReducer } from "./countrieslist/countries.reducer";
import { cardReducer } from "./category-cards/category-cards.reducer";
import blogReducer from "./blogs/blogs.reducer";
import checklistReducer from "./checklist/checklist.reducer";
import continentReducer from "./homeContinent/homeContinentSlice";

export const rootReducer = combineReducers({
  forms: formsReducer,
  user: userReducer,
  burger: burgerReducer,
  scroll: scrollReducer,
  modal: modalReducer,
  favourite: favouriteReducer,
  countries: countriesReducer,
  card: cardReducer,
  blog: blogReducer,
  checklist: checklistReducer,
  continent: continentReducer,
});
