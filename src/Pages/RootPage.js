import { Outlet, useNavigation } from "react-router-dom";
import NavBar from "../Components/NavBar/NavBar";
import Footer from "../Components/Footer/Footer";
import ProductDiv from "../Components/ProductDiv/ProductDiv";
import adImg from "../Assets/shared/desktop/image-best-gear.jpg";
import adImgTablet from "../Assets/shared/tablet/image-best-gear.jpg";
import adImgMobile from "../Assets/shared/mobile/image-best-gear.jpg";
import { useContext, useEffect, useState } from "react";
import Backdrop from "../Components/Cart/Backdrop";
import CartModal from "../Components/Cart/CartModal";
import ModalContext from "../Components/Context/modal-context";
import HamburgerModal from "../Components/Hamburger/HamburgerModal";
import { AnimatePresence } from "framer-motion";

function RootPage() {
  const [openModal, setOpenModal] = useState(false);
  const [openHamburger, setOpenHamburger] = useState(false);
  const [adImageSize, setAdImageSize] = useState(adImg);
  const navigation = useNavigation()
  const ctx = useContext(ModalContext);

  ctx.closeModalCart = () => {
    setOpenModal(false);
    setOpenHamburger(false);
  };

  ctx.openModalCart = () => {
    setOpenModal(true);
  };

  const openHamburgerHandler = () => {
    setOpenHamburger(prev => !prev);
  };

  useEffect(() => {
    if (window.innerWidth > 900) {
      setAdImageSize(adImg);
    } else if (window.innerWidth > 400) {
      setAdImageSize(adImgTablet);
    } else {
      setAdImageSize(adImgMobile);
    }
  }, []);

  return (
    <div className="rootPage">
      <NavBar openHamburgerHandler={openHamburgerHandler} />
      <AnimatePresence>{openHamburger && <HamburgerModal />}</AnimatePresence>
      <AnimatePresence>{openHamburger && <Backdrop />}</AnimatePresence>
      <AnimatePresence>{openModal && <Backdrop />}</AnimatePresence>
      <AnimatePresence>{openModal && <CartModal />}</AnimatePresence>
      <Outlet />
      <ProductDiv
        textPosition="left"
        imgPosition="right"
        img={adImageSize}
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
