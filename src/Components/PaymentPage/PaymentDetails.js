import TextInptDiv from "../FormElements/TextInptDiv";
import RadioInptDiv from "../FormElements/RadioInptDiv";

function PaymentDetails() {
  return (
    <div className="paymentDetails">
      <h6 className="paymentDetails__title partTitle">PAYMENT DETAILS</h6>
      <div className="paymentDetails__inputsDiv">
        <div className="paymentDetails__paymentMethod">
          <h6>Payment Method</h6>
          <RadioInptDiv label="e-Money" choicesFor="paymentMethod" />
          <RadioInptDiv label="Cash on Delivery" choicesFor="paymentMethod" />
        </div>
        <div className="paymentDetails__inputsDiv__inputsDiv">
          <TextInptDiv label="e-Money Number" placeholder="235498874562" />
          <TextInptDiv label="e-Money PIN" placeholder="6982" />
        </div>
      </div>
    </div>
  );
}

export default PaymentDetails;
