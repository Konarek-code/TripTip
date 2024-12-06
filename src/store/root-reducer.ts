import { combineReducers } from "redux";
import formsReducer from "./forms/forms.reducer";
import { userReducer } from "./user/user.reducer";
import burgerReducer from "./burger/burger.reducer";
import scrollReducer from "./scroll/scroll.reducer";
import modalReducer from "./modal/modal.reducer";

export const rootReducer = combineReducers({
  forms: formsReducer,
  user: userReducer,
  burger: burgerReducer,
  scroll: scrollReducer,
  modal: modalReducer,
});
