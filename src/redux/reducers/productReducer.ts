import {
  ProductsActionsTypes,
  ProductIds,
  CardActionTypes
} from "../actions/typing";

const initialState = {
  products: {
    [ProductIds.Pizza]: {
      id: ProductIds.Pizza,
      name: "Pizza",
      price: 4.99,
      qua: 3
    },
    [ProductIds.Sushi]: {
      id: ProductIds.Sushi,
      name: "Sushi",
      price: 10.89,
      qua: 2
    },
    [ProductIds.Steak]: {
      id: ProductIds.Steak,
      name: "Steak",
      price: 12.08,
      qua: 1
    }
  }
};

export const product = (state = initialState, { type, payload }) => {
  switch (type) {
    case ProductsActionsTypes.INCREASE_PRO_QUA_SUCCESS: {
      if (state.products[payload.productID]) {
        return {
          ...state,
          products: {
            ...state.products,
            [payload.productID]: {
              ...state.products[payload.productID],
              qua: state.products[payload.productID].qua + 1
            }
          }
        };
      }
      return state;
    }

    case ProductsActionsTypes.DECREAESE_PRO_QUA_SUCCESS: {
      if (state.products[payload.productID]) {
        return {
          ...state,
          products: {
            ...state.products,
            [payload.productID]: {
              ...state.products[payload.productID],
              qua: state.products[payload.productID].qua - 1
            }
          }
        };
      }
      return state;
    }

    case CardActionTypes.REMOVE_SUCCESS: {
      return {
        ...state,
        products: {
          ...state.products,
          [payload.productID]: {
            ...state.products[payload.productID],
            qua: state.products[payload.productID].qua + 1
          }
        }
      };
    }

    case CardActionTypes.CHECKOUT_REQUEST_SUCCESS: {
      return { ...initialState };
    }

    default:
      return state;
  }
};
