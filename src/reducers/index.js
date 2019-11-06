import { combineReducers } from "redux";
import currentFilter from "./currentFilter";
import todos from "./todos";

export default combineReducers({
  todos,
  currentFilter
});
