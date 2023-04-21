import classes from "./Modal.module.css";

// This function returns the visible modal part the user is able to interact with at that time
const Overlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

export default Overlay;
