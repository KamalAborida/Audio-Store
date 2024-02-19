import React from "react-dom";
import Button from "../FormElements/Button";
import SummaryItem from "../PaymentPage/SummaryItem";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import successImg from "../../Assets/checkout/icon-order-confirmation.svg";
import { paymentActions } from "../../Store/payment-slice";
import { cartActions } from "../../Store/cart-slice";
import { useState } from "react";

function SuccessModal(props) {
  const cartData = useSelector((state) => state.cart.cartItems);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const [viewLess, setViewLess] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const goHomeHandler = () => {
    dispatch(paymentActions.resetAll());
    setViewLess(false)
    navigate("/");
    dispatch(cartActions.removeAll());
  };

  const viewLessHandler = () => {
    setViewLess((prev) => !prev);
  };

  return React.createPortal(
    <div className="successModal">
      <img src={successImg} alt="success" className="successModal__svg" />
      <h1 className="successModal__thankYou">THANK YOU FOR YOUR ORDER</h1>
      <p className="successModal__note">
        You will receive an email confirmation shortly
      </p>
      <div className="successModal__recipt">
        <div className="successModal__recipt__items">
          {!viewLess &&
            cartData.map((elem) => {
              return (
                <SummaryItem
                  slug={elem.name}
                  quantity={elem.quantity}
                  price={elem.price}
                />
              );
            })}
          {viewLess && cartData && (
            <SummaryItem
              slug={cartData[0].name}
              quantity={cartData[0].quantity}
              price={cartData[0].price}
            />
          )}
          <p
            onClick={viewLessHandler}
            className="successModal__recipt__viewLess"
          >
            View less
          </p>
        </div>
        <div className="successModal__recipt__payment">
          <p>GRAND TOTAL</p>
          <p>$ {totalPrice + 50 + totalPrice * (15 / 100)}</p>
        </div>
      </div>
      <Button type="1" title="BACK TO HOME" btnHandler={goHomeHandler} />
    </div>,
    document.getElementById("modal")
  );
}

export default SuccessModal;
