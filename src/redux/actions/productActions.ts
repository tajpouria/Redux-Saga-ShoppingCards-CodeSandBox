import { ProductsActionsTypes } from "../actions/typing";

export const increaseProducQuantity = (productId: string) => ({
  type: ProductsActionsTypes.INCREASE_PRO_QUA_REQUEST,
  payload: { productId }
});

export const decreaseProducQuantity = (productId: string) => ({
  type: ProductsActionsTypes.DECREAESE_PRO_QUA_REQUEST,
  payload: { productId }
});
