import React from "react";
import { useDispatch } from "react-redux";

import { removeFromCart } from "../../../redux/actions/cart/cartAction";

import "./CartItem.css";

const CartItem = ({ itemData }) => {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <img className="cart-image" src={itemData.url} alt={itemData.title} />
      <div className="cart-description">
        <h3>{itemData.title}</h3>
        <p>{itemData.description}</p>
        <div className="last-description">
          <p>${itemData.price}</p>
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
