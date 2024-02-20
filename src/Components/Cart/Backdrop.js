import { useContext } from "react";
import React from "react-dom";
import ModalContext from "../Context/modal-context";
import { motion } from "framer-motion";

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
    <motion.div
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={backDropHandler}
      className="backdrop"
    ></motion.div>,
    document.getElementById("backdrop")
  );
}

export default Backdrop;
