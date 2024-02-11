import Footer from "../Components/Footer/Footer";
import NavBar from "../Components/NavBar/NavBar";
import PaymentForm from "../Components/PaymentPage/PaymentForm";
import PaymentRecipt from "../Components/PaymentPage/PaymentRecipt";

function PaymentPage() {
  return (
    <>
      <div className="whiteSmoke-background"></div>
      <NavBar />
      <header className="paymentPage__Header"></header>
      <div className="paymentPage">
        <PaymentForm />
        <PaymentRecipt />
      </div>
      <Footer />
    </>
  );
}

export default PaymentPage;
