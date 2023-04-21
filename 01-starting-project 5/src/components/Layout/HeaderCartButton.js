import { Fragment, useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../store/Cart-context";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [buttonIsHighlighted, setButtonIsHighlighted] = useState(false);
  const contextData = useContext(CartContext);
  const { items } = contextData;
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setButtonIsHighlighted(true);

    const timer = setTimeout(() => {
      setButtonIsHighlighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  const numberOfItems = items.reduce((Acumulator, currentItem) => {
    return Acumulator + currentItem.amount;
  }, 0);

  const btnClass = `${classes.button} ${
    buttonIsHighlighted ? classes.bump : ""
  }`;
  return (
    <Fragment>
      <button className={btnClass} type={props.type} onClick={props.onClick}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span> Your cart </span>
        <span className={classes.badge}> {numberOfItems}</span>
      </button>
    </Fragment>
  );
};

export default HeaderCartButton;
