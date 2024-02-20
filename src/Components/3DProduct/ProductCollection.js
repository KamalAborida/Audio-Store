import { useNavigate } from "react-router-dom";
import ProductDiv3D from "./ProductDiv3D";
import { useContext } from "react";
import ModalContext from "../Context/modal-context";

function ProductCollection(props) {
  const navigate = useNavigate()
  const ctx = useContext(ModalContext)

  const speakerBtnHandler = () => {
    ctx.closeModalCart()
    navigate("/Speakers")
  }

  const headphonesBtnHandler = () => {
    ctx.closeModalCart()
    navigate("/Headphones")
  }

  const earphonesBtnHandler = () => {
    ctx.closeModalCart()
    navigate("/Earphones")
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
