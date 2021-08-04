import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";

import { removeFromCart } from "../../../redux/actions/cart/cartAction";
import { adjustCartQty } from "../../../redux/actions/cart/cartAction";

import "./CartItem.css";

const CartItem = ({ itemData }) => {
  const [input, setInput] = useState(itemData.qty);

  const dispatch = useDispatch();

  const onChangeHandler = ({ target }) => {
    setInput(target.value);
    dispatch(adjustCartQty(itemData, target.value));
  };

  return (
    <div className="cart-item">
      <LinkContainer
        to={{
          pathname: `/cart/${itemData.id}`,
          data: itemData,
        }}
      >
        <img className="cart-image" src={itemData.url} alt={itemData.title} />
      </LinkContainer>
      <div className="cart-description">
        <h3>{itemData.title}</h3>
        <p>{itemData.description}</p>
        <div className="last-description">
          <p>${itemData.price}</p>
          <div className="cart-qty">
            <label className="cart-label" htmlFor="qty">
              Qty
            </label>
            <input
              min="1"
              type="number"
              id="qty"
              name="qty"
              value={input}
              onChange={onChangeHandler}
            />
          </div>
          <i
            onClick={() => dispatch(removeFromCart(itemData))}
            className="fa fa-trash fa-lg"
          ></i>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
