import MoneyPaid from "./MoneyPaid";
import SummaryItem from "./SummaryItem";
import SummaryPayment from "./SummaryPayment";
import Button from "../FormElements/Button";
import { useSelector } from "react-redux";
import { useState } from "react";

function PaymentRecipt(props) {
  const cartData = useSelector((state) => state.cart.cartItems);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const payment = useSelector((state) => state.paymentValidation);
  const [itemsList, setItemsList] = useState(cartData);

  const allIsTouched =
    payment.name.isTouched &&
    payment.email.isTouched &&
    payment.phone.isTouched &&
    payment.address.isTouched &&
    payment.zipCode.isTouched &&
    payment.country &&
    payment.city;

  const allIsErrorFree =
    !payment.name.isError &&
    !payment.email.isError &&
    !payment.phone.isError &&
    !payment.address.isError &&
    !payment.zipCode.isError &&
    payment.country &&
    payment.city;

  const isEMoneyValid =
    payment.paymentMethod.method === "e-money" &&
    !payment.paymentMethod.isENumberError &&
    !payment.paymentMethod.isEPinError;

  const isEMoneyTouched =
    payment.paymentMethod.method === "e-money" &&
    payment.paymentMethod.isENumberTouched &&
    payment.paymentMethod.isEPinTouched;

  const isCash = payment.paymentMethod.method === "cash on delivery";

  const payingBtnHandler = () => {
    if (allIsTouched && allIsErrorFree) {
      if (isCash) {
        console.log("Success");
        props.openModalFunc()
      } else if (payment.paymentMethod.method === "e-money") {
        if (isEMoneyTouched && isEMoneyValid) {
          console.log("Success");
          props.openModalFunc()
        } else {
          console.log("Failed E-Money");
        }
      } else {
        console.log("Failed Choose a method");
      }
    } else {
      console.log("Failed");
    }
  };

  return (
    <div className="paymentRecipt">
      <h1 className="paymentRecipt__title">SUMMARY</h1>
      <div className="paymentRecipt__summaryItems">
        {itemsList.map((elem) => {
          return (
            <SummaryItem
              slug={elem.name}
              quantity={elem.quantity}
              price={elem.price}
            />
          );
        })}
      </div>
      <SummaryPayment />
      <MoneyPaid
        title="GRAND TOTAL"
        amount={totalPrice + 50 + totalPrice * (15 / 100)}
        special={true}
      />
      <Button type="1" title="CONTINUE & PAY" btnHandler={payingBtnHandler} />
    </div>
  );
}

export default PaymentRecipt;
