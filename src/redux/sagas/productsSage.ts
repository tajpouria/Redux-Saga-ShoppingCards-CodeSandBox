import { takeEvery } from "redux-saga/effects";

import { ProductsActionsTypes } from "../actions/typing";

function* increaseProductQueWatcher() {}

function* decreaseProductQueWatcher() {}

export function* productsWatcher() {
  yield takeEvery(
    ProductsActionsTypes.INCREASE_PRO_QUA_REQUEST,
    increaseProductQueWatcher
  );

  yield takeEvery(
    ProductsActionsTypes.DECREAESE_PRO_QUA_REQUEST,
    decreaseProductQueWatcher
  );
}
