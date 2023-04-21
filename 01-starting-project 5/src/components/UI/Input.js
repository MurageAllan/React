import React from "react";
import classes from "./Input.module.css";

// This Input component is configurable from anywhere it is used in the app.
const Input = React.forwardRef((props,ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}> {props.label} </label>
      <input ref={ref} {...props.input}></input>
    </div>
  );
});

export default Input;
