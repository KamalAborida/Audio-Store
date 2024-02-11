import React from "react";

const ModalContext = React.createContext({
  openModalCart: () => {},
  closeModalCart: () => {},
  reRender: () => {}
});

export default ModalContext;
