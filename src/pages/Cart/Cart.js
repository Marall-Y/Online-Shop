import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";

import CartItem from "../../components/UI/CartItem/CartItem";
import images from "../../images/cart/empty-cart.png";

import "./Cart.css";

const Cart = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  const { cart } = useSelector((state) => state.cart);

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [cart, totalItems, totalPrice, setTotalItems, setTotalPrice]);

  return cart.length !== 0 ? (
    <Container className="cart-container">
      <div className="cart-items">
        {cart.map((item) => {
          return <CartItem key={item.id} itemData={item} />;
        })}
      </div>
      <div className="cart-summary">
        <h3>Cart Summary</h3>
        <div className="price">
          <span>Total: {totalItems} items</span>
          <span>${totalPrice}</span>
        </div>
        <button>Proceed To CheckOut</button>
      </div>
    </Container>
  ) : (
    <Container>
      <div className="empty-cart">
        <img src={images} alt="empty-cart" />
        <p>Empty Cart!</p>
      </div>
    </Container>
  );
};

export default Cart;
