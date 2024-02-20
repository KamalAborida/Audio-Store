import { useEffect, useState } from "react";
import Footer from "../Components/Footer/Footer";
import NavBar from "../Components/NavBar/NavBar";
import PaymentForm from "../Components/PaymentPage/PaymentForm";
import PaymentRecipt from "../Components/PaymentPage/PaymentRecipt";
import { loader } from "./HomePage";
import { dataActions } from "../Store/data-slice";
import { useDispatch, useSelector } from "react-redux";
import Backdrop from "../Components/Cart/Backdrop";
import SuccessModal from "../Components/SuccessModal/SuccessModal";

function PaymentPage() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.items);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const loadEvents = async () => {
      const resp = await loader();
      dispatch(dataActions.initiateData(resp));
    };

    window.scrollTo(0, 0);

    if (!data.record) {
      loadEvents();
    }
  }, [data, dispatch, openModal]);

  const closeModalSuccess = () => {
    setOpenModal(false);
  };

  const openModalSuccess = () => {
    setOpenModal(true);
  };


  return (
    <>
      {openModal && <Backdrop modalToBeClosedFunc={closeModalSuccess} />}
      {openModal && <SuccessModal />}
      <div className="whiteSmoke-background"></div>
      <NavBar />
      <header className="paymentPage__Header"></header>
      <div className="paymentPage">
        <PaymentForm />
        <PaymentRecipt openModalFunc={openModalSuccess} />
      </div>
      <Footer />
    </>
  );
}

export default PaymentPage;
