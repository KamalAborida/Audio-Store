import React from "react-dom";
import MoneyPaid from "../PaymentPage/MoneyPaid";
import Button from "../FormElements/Button";
import SummaryItem from "../PaymentPage/SummaryItem";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../Store/cart-slice";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function CartModal(props) {
  const cartData = useSelector((state) => state.cart.cartItems);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const [itemsList, setItemsList] = useState(cartData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const numberInptHandler = (e) => {
    dispatch(
      cartActions.oneItemAction({
        id: e.target.closest(".summaryItem").id,
        operation: e.target.textContent,
      })
    );
  };

  const removeAllHandler = () => {
    dispatch(cartActions.removeAll());
  };

  const checkoutHandler = () => {
    navigate("payment");
  };

  useEffect(() => {
    setItemsList(cartData);
  }, [cartData]);

  return React.createPortal(
    <motion.div
      className="cartModal"
      animate={{ opacity: 1, y: [100, 0] }}
      exit={{ opacity: 0, y: [0, 50] }}
    >
      <div className="cartModal__titleDiv">
        <h3 className="cartModal__titleDiv__title">CART ({totalQuantity})</h3>
        <p onClick={removeAllHandler} className="cartModal__titleDiv__remove">
          Remove all
        </p>
      </div>
      <div className="cartModal__items">
        {itemsList.map((elem) => {
          return (
            <SummaryItem
              slug={`${elem.name}`}
              price={elem.price}
              currentNumber={elem.quantity}
              modal={true}
              key={`${elem.id}`}
              id={elem.id}
              numberInptHandler={numberInptHandler}
            />
          );
        })}
      </div>
      <MoneyPaid title="TOTAL" amount={totalPrice} />
      <Button type="1" title="CHECKOUT" btnHandler={checkoutHandler} />
    </motion.div>,
    document.getElementById("modal")
  );
}

export default CartModal;
