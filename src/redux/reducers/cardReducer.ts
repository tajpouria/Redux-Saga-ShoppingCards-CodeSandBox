import { CardActionTypes } from "../actions/typing";

const initialState = { total: 0, error: "", inCard: {} };

export const card = (state = initialState, { type, payload }) => {
  switch (type) {
    case CardActionTypes.ADD_REQUEST_SUCCESS: {
      return {
        ...state,
        total: state.total + payload.product.price,
        inCard: {
          ...state.inCard,
          [payload.product.id]: {
            ...payload.product,
            qua: state.inCard[payload.product.id]
              ? state.inCard[payload.product.id].qua + 1
              : 1
          }
        }
      };
    }

    case CardActionTypes.REMOVE_SUCCESS: {
      const price = state.inCard[payload.productID].price;

      if (state.inCard[payload.productID].qua > 1)
        return {
          ...state,
          total: state.total - price,
          inCard: {
            ...state.inCard,
            [payload.productID]: {
              ...state.inCard[payload.productID],
              qua: state.inCard[payload.productID].qua - 1
            }
          }
        };

      delete state.inCard[payload.productID];

      return {
        ...state,
        total: state.total - price
      };
    }

    case CardActionTypes.CHECKOUT_REQUEST_SUCCESS: {
      return { ...initialState };
    }
    case CardActionTypes.CHECKOUT_REQUEST_FAILURE: {
      return {
        ...state,
        error: "You can just checkout two type of items each time."
      };
    }

    default:
      return { ...state };
  }
};
