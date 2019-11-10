import { all } from "redux-saga/effects";

import { productsWatcher } from "./productsSage";
import { cardWatcher } from "./cardSaga";

export const rootSaga = function*() {
  yield all([productsWatcher(), cardWatcher()]);
};
