import React from "react-dom";
import MoneyPaid from "../PaymentPage/MoneyPaid";
import Button from "../FormElements/Button";
import SummaryItem from "../PaymentPage/SummaryItem";

function CartModal() {
  return React.createPortal(
    <div className="cartModal">
      <div className="cartModal__titleDiv">
        <h3 className="cartModal__titleDiv__title">CART (3)</h3>
        <p className="cartModal__titleDiv__remove">Remove all</p>
      </div>
      <div className="cartModal__items">
        <SummaryItem slug="xx59-headphones" modal={true}/>
        <SummaryItem slug="xx59-headphones" modal={true}/>
        <SummaryItem slug="xx59-headphones" modal={true}/>
      </div>
      <MoneyPaid title="TOTAL" amount="5,396"/>
      <Button type="1" title="CHECKOUT"/>
    </div>,
    document.getElementById("modal")
  );
}

export default CartModal;
