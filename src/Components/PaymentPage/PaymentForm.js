import BillingDetails from "./BillingDetails"
import PaymentDetails from "./PaymentDetails"
import ShippingDetails from "./ShippingInfo"

function PaymentForm() {

  return (
    <form className="paymentForm">
      <h1 className="paymentForm__title">CHECKOUT</h1>
      <BillingDetails />
      <ShippingDetails />
      <PaymentDetails />
    </form>
  )
}

export default PaymentForm