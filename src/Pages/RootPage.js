import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar/NavBar";
import Footer from "../Components/Footer/Footer";
import ProductDiv from "../Components/ProductDiv/ProductDiv";
import adImg from "../Assets/shared/desktop/image-best-gear.jpg";
import { useContext, useState } from "react";
import Backdrop from "../Components/Cart/Backdrop";
import CartModal from "../Components/Cart/CartModal";
import ModalContext from "../Components/Context/modal-context";

function RootPage() {
  const [openModal, setOpenModal] = useState(false)
  const ctx = useContext(ModalContext)

  ctx.closeModalCart = () => {
    setOpenModal(false)
  }

  ctx.openModalCart = () => {
    setOpenModal(true)
  }

  return (
    <div className="rootPage">
      <NavBar />
      {openModal && <Backdrop />}
      {openModal && <CartModal />}
      <Outlet />
      <ProductDiv
        textPosition="left"
        imgPosition="right"
        img={adImg}
        price=""
        isNew={false}
        title="BRINGING YOU THE BEST AUDIO GEAR"
        desription="Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment."
        type="ad"
      />
      <Footer />
    </div>
  );
}

export default RootPage;
