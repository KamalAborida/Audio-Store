import { useContext } from "react";
import React from "react-dom";
import ModalContext from "../Context/modal-context";

function Backdrop() {
  const ctx = useContext(ModalContext)

  const backDropHandler = () => {
    ctx.closeModalCart()
  }

  return React.createPortal(<div onClick={backDropHandler} className="backdrop"></div>, document.getElementById("backdrop"))
}

export default Backdrop;
