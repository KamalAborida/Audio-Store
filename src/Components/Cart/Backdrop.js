import { useContext } from "react";
import React from "react-dom";
import ModalContext from "../Context/modal-context";

function Backdrop(props) {
  const ctx = useContext(ModalContext);

  const backDropHandler = () => {
    if (props.modalToBeClosedFunc) {
      props.modalToBeClosedFunc();
    } else {
      ctx.closeModalCart();
    }
  };

  return React.createPortal(
    <div onClick={backDropHandler} className="backdrop"></div>,
    document.getElementById("backdrop")
  );
}

export default Backdrop;
