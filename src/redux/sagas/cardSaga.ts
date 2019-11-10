import { takeEvery, select, put } from "redux-saga/effects";

import { CardActionTypes, ProductsActionsTypes } from "../actions/typing";
import { getProducts, getInCards } from "../reducers/selectors";

function* addToCardWatcher(action) {
  const { productID } = action.payload;
  const products = yield select(getProducts);

  const product = products[productID];

  if (product && product.qua > 0) {
    yield put({
      type: CardActionTypes.ADD_REQUEST_SUCCESS,
      payload: { product }
    });
    yield put({
      type: ProductsActionsTypes.DECREAESE_PRO_QUA_SUCCESS,
      payload: { productID }
    });
  }
}

function* removeFromCardWatcher(action) {
  // yield put({ type: CardActionTypes.REMOVE_SUCCESS, payload: action });
}

function* checkoutWatcher() {
  const inCards = yield select(getInCards);
  Object.keys(inCards).length <= 2
    ? yield put({ type: CardActionTypes.CHECKOUT_REQUEST_SUCCESS })
    : yield put({ type: CardActionTypes.CHECKOUT_REQUEST_FAILURE });
}

export function* cardWatcher() {
  yield takeEvery(CardActionTypes.ADD_REQUEST, addToCardWatcher);
  yield takeEvery(CardActionTypes.REMOVE_REQUEST, removeFromCardWatcher);
  yield takeEvery(CardActionTypes.CHECKOUT_REQUEST, checkoutWatcher);
}
