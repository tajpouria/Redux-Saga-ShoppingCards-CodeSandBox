import { CardActionTypes } from "./typing";

export const addToCard = (productID: string) => ({
  type: CardActionTypes.ADD_REQUEST,
  payload: { productID }
});

export const removeFromCard = (productID: string) => ({
  type: CardActionTypes.REMOVE_REQUEST,
  payload: { productID }
});

export const checkout = () => ({
  type: CardActionTypes.CHECKOUT_REQUEST
});
