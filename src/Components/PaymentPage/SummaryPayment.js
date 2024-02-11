import MoneyPaid from "./MoneyPaid";

function SummaryPayment() {
  return (
    <div className="summaryPayment">
      <MoneyPaid title="TOTAL" amount="5,396"/>
      <MoneyPaid title="SHIPPING" amount="50"/>
      <MoneyPaid title="VAT (INCLUDED)" amount="1,079"/>
    </div>
  );
}

export default SummaryPayment;
