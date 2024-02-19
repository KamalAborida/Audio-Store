import TextInptDiv from "../FormElements/TextInptDiv";
import RadioInptDiv from "../FormElements/RadioInptDiv";
import { useDispatch, useSelector } from "react-redux";
import { paymentActions } from "../../Store/payment-slice";
import cashLogo from "../../Assets/checkout/icon-cash-on-delivery.svg";

function PaymentDetails() {
  const dispatch = useDispatch();
  const paymentMethod = useSelector(
    (state) => state.paymentValidation.paymentMethod
  );

  const radioBtnHandler = (e) => {
    dispatch(paymentActions.setPaymentMethod(e.target.value));
  };

  const eNumberHandler = (e) => {
    dispatch(paymentActions.setENumber(e.target.value));
  };

  const ePinHandler = (e) => {
    dispatch(paymentActions.setEPin(e.target.value));
  };

  return (
    <div className="paymentDetails">
      <h6 className="paymentDetails__title partTitle">PAYMENT DETAILS</h6>
      <div className="paymentDetails__inputsDiv">
        <div className="paymentDetails__paymentMethod">
          <h6>Payment Method</h6>
          <RadioInptDiv
            label="e-Money"
            choicesFor="paymentMethod"
            isActive={true}
            onClick={radioBtnHandler}
          />
          <RadioInptDiv
            label="Cash on Delivery"
            choicesFor="paymentMethod"
            isActive={false}
            onClick={radioBtnHandler}
          />
        </div>
        <div className="paymentDetails__inputsDiv__inputsDiv">
          {paymentMethod.method === "e-money" && (
            <>
              <TextInptDiv
                label="e-Money Number"
                placeholder="235498874562"
                onChangeHandler={eNumberHandler}
                value={paymentMethod.eNumber}
                error={paymentMethod.isENumberError}
              />
              <TextInptDiv
                label="e-Money PIN"
                placeholder="6982"
                onChangeHandler={ePinHandler}
                value={paymentMethod.ePin}
                error={paymentMethod.isEPinError}
              />
            </>
          )}
          {paymentMethod.method === "cash on delivery" && (
            <>
              <img src={cashLogo} alt="cash" className="paymentDetails__inputsDiv__inputsDiv__cashImg"/>
              <p className="paymentDetails__inputsDiv__inputsDiv__cashP">
                The ‘Cash on Delivery’ option enables you to pay in cash when
                our delivery courier arrives at your residence. Just make sure
                your address is correct so that your order will not be
                cancelled.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default PaymentDetails;
