import { useNavigate } from "react-router-dom";
import ProductDiv3D from "./ProductDiv3D";

function ProductCollection(props) {
  const navigate = useNavigate()

  const speakerBtnHandler = () => {
    navigate("/Speakers")
  }

  const headphonesBtnHandler = () => {
    navigate("/Headphones")
  }

  const earphonesBtnHandler = () => {
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
