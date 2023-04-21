import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Backdrop from "./Backdrop";
import Overlay from "./Overlay";

// This function returns a combination of the backdrop and overlay functions.
const Modal = (props) => {
  const portalElements = document.getElementById("backdrop-overlay");
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElements
      )}
      {ReactDOM.createPortal(
        <Overlay>{props.children}</Overlay>,
        portalElements
      )}
    </Fragment>
  );
};

export default Modal;
