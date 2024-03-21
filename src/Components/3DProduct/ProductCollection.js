import { useNavigate } from "react-router-dom";
import ProductDiv3D from "./ProductDiv3D";
import { useContext } from "react";
import ModalContext from "../Context/modal-context";

function ProductCollection(props) {
  const navigate = useNavigate()
  const ctx = useContext(ModalContext)

  const speakerBtnHandler = () => {
    ctx.closeModalCart()
    navigate("/Audio-Store/Speakers")
  }

  const headphonesBtnHandler = () => {
    ctx.closeModalCart()
    navigate("/Audio-Store/Headphones")
  }

  const earphonesBtnHandler = () => {
    ctx.closeModalCart()
    navigate("/Audio-Store/Earphones")
  }

  return (
    <div className="productCollection">
      <ProductDiv3D btnHandler={headphonesBtnHandler} type="headphones" />
      <ProductDiv3D btnHandler={earphonesBtnHandler} type="earphones" />
      <ProductDiv3D btnHandler={speakerBtnHandler} type="speakers" />
    </div>
  );
}

export default ProductCollection;
