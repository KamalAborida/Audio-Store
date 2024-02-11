import ProductDiv from "../Components/ProductDiv/ProductDiv";
import FeaturesList from "../Components/ProductDetails/FeaturesList";
import InTheBox from "../Components/ProductDetails/InTheBox";
import ImgCollague from "../Components/ProductDetails/ImgCollague";
import ProductCollection from "../Components/3DProduct/ProductCollection";
import Button from "../Components/FormElements/Button";
import OtherProducts from "../Components/ProductDetails/OtherProducts";
import { useContext, useEffect } from "react";
import { redirect, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ModalContext from "../Components/Context/modal-context"

function ProductDetails() {
  const params = useParams();
  const data = useSelector((state) => state.data.items);
  const ctx = useContext(ModalContext)
  const navigate = useNavigate();

  let img;

  if (data.record) {
    img = require(`../Assets/product-${
      data.record[params.productId - 1].slug
    }/desktop/image-product.jpg`);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!data.record) {
      ctx.reRender()
    }
  }, [data]);

  const goBackHandler = () => {
    navigate("/");
  };

  return (
    <div className="productDetails">
      {data.record && (
        <>
          <header className="productDetails__header"></header>
          <div className="productDetails__btnDiv">
            <Button btnHandler={goBackHandler} type="3" title="< Go Back" />
          </div>
          <div className="productDetails__content">
            <ProductDiv
              textPosition="left"
              imgPosition="left"
              img={img}
              isNew={data.record[params.productId - 1].new}
              price={data.record[params.productId - 1].price}
              title={data.record[params.productId - 1].name}
              desription={data.record[params.productId - 1].desription}
              type="toBuy"
              btnType="1"
              id={data.record[params.productId - 1].id}
            />
            <div className="productDetails__content__features">
              <FeaturesList
                features={data.record[params.productId - 1].features}
              />
              <InTheBox inTheBox={data.record[params.productId - 1].includes} />
            </div>
            <ImgCollague product={data.record[params.productId - 1]} />
            <OtherProducts others={data.record[params.productId - 1].others} />
            <ProductCollection />
          </div>
        </>
      )}
    </div>
  );
}

export default ProductDetails;
