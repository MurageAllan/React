import React, { useContext } from "react";
import CartContext from "../store/Cart-context";
import CartItems from "./CartItems";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

// getting the cart items from the cart context then outputting them.
const Cart = (props) => {
  const cartContext = useContext(CartContext);
  const addItemHandler = (item) => {
    cartContext.addItem({ ...item, amount: 1 });
  };
  const removeItemHandler = (id) => {
    cartContext.removeItem(id);
  };

  const totalAmount = `ksh ${cartContext.totalAmount.toFixed(2)}`;
  const hasItems = cartContext.items.length > 0;
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartContext.items.map((item) => {
        return (
          <CartItems
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onAdd={addItemHandler.bind(null, item)} //bind() stores item in advance, it pre-configures a function and its arguments for future execution
            onRemove={removeItemHandler.bind(null, item.id)}
          />
        );
      })}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span> {totalAmount} </span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          {" "}
          close{" "}
        </button>
        {hasItems && <button className={classes.button}> order </button>}
      </div>
    </Modal>
  );
};

export default Cart;
