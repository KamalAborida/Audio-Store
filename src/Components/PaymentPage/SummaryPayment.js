import { useSelector } from "react-redux";
import MoneyPaid from "./MoneyPaid";

function SummaryPayment() {
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  return (
    <div className="summaryPayment">
      <MoneyPaid title="TOTAL" amount={totalPrice} />
      <MoneyPaid title="SHIPPING" amount="50" />
      <MoneyPaid title="VAT (INCLUDED)" amount={Math.ceil(totalPrice * (15/100))} />
    </div>
  );
}

export default SummaryPayment;
