import classes from "./Modal.module.css";

// This function returns the dark background that prevent the user from interacting with the back-screen.
const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

export default Backdrop;
