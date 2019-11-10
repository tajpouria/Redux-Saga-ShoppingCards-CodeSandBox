import * as React from "react";
import { connect } from "react-redux";
import {
  addToCard,
  checkout,
  removeFromCard
} from "./redux/actions/cardActions";

const uuid = require("uuid");

const ShoppingCard = ({
  product,
  card,
  addToCard,
  checkout,
  removeFromCard
}) => {
  const handleAddToCardClick = (productID: string) => {
    addToCard(productID);
  };

  const handleCheckoutClick = () => {
    checkout();
  };

  const handleDeleteFromCard = productID => {
    removeFromCard(productID);
  };

  return (
    <div>
      <h1>Shopping Card Example</h1>
      <ul>
        {product &&
          product.products &&
          Object.entries(product.products).map(
            (
              product: [string, { name: string; price: number; qua: number }]
            ) => (
              <li key={product[0]}>
                {product[1].name} - {product[1].price}$
                <button onClick={handleAddToCardClick.bind(this, product[0])}>
                  +
                </button>
                <span> X {product[1].qua}</span>
              </li>
            )
          )}
      </ul>
      <div>{card.error && <em>{}</em>}</div>
      <div>
        <h3>Total : {card.total}$</h3>
        <button onClick={handleCheckoutClick}>Checkout</button>
        <div>{card.error && <em>{card.error}</em>}</div>
        <ul>
          {Object.entries(card.inCard).map(
            ([productID, productDetail]: [
              string,
              { name: string; qua: number; id: string }
            ]) => (
              <li key={uuid()}>
                {productDetail.name}
                <button onClick={handleDeleteFromCard.bind(this, productID)}>
                  del
                </button>
                X {productDetail.qua}
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default connect(
  state => ({ ...state } || {}),
  { addToCard, checkout, removeFromCard }
)(ShoppingCard);
