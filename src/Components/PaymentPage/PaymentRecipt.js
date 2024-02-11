import MoneyPaid from "./MoneyPaid";
import SummaryItem from "./SummaryItem";
import SummaryPayment from "./SummaryPayment";
import Button from "../FormElements/Button";

function PaymentRecipt() {
  return (
    <div className="paymentRecipt">
      <h1 className="paymentRecipt__title">SUMMARY</h1>
      <div className="paymentRecipt__summaryItems">
        <SummaryItem slug="xx59-headphones"/>
        <SummaryItem slug="xx59-headphones"/>
        <SummaryItem slug="xx59-headphones"/>
      </div>
      <SummaryPayment />
      <MoneyPaid title="GRAND TOTAL" amount="5,446" special={true}/>
      <Button type="1" title="CONTINUE & PAY"/>
    </div>
  );
}

export default PaymentRecipt;
