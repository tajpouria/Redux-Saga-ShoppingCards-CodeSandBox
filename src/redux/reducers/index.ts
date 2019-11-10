import { combineReducers } from "redux";

import { card } from "./cardReducer";
import { product } from "./productReducer";

export const reducers = combineReducers({
  card,
  product
});
