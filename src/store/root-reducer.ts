import { combineReducers } from "redux";
import formsReducer from "./forms/forms.reducer";
import { userReducer } from "./user/user.reducer";

export const rootReducer = combineReducers({
  forms: formsReducer,
  user: userReducer,
});
