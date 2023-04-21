import React, { useContext } from "react";
import CartContext from "../../store/Cart-context";
import MealItemForm from "./MealItemForm";

import classes from "./MealItem.module.css";

// Outputs a list of the available meal's : name, description, price.
// Outputs a form that can be configured outside via props
const MealItem = (props) => {
  const cartContext = useContext(CartContext);
  const price = `ksh ${props.price.toFixed(2)}`; // ${} injected price dynamically into the template literal

  // Handle the submitted item amount and add the item object to the cart context.
  const addToCartHandler = (amount) => {
    cartContext.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
