import React from "react";
import Image from "./Image";
import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1> YummyInn </h1>
        <HeaderCartButton type="button" onClick={props.onShowCart} />
      </header>

      <Image />
    </React.Fragment>
  );
};

export default Header;
