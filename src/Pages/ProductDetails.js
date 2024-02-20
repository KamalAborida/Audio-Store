import ProductDiv from "../Components/ProductDiv/ProductDiv";
import FeaturesList from "../Components/ProductDetails/FeaturesList";
import InTheBox from "../Components/ProductDetails/InTheBox";
import ImgCollague from "../Components/ProductDetails/ImgCollague";
import ProductCollection from "../Components/3DProduct/ProductCollection";
import Button from "../Components/FormElements/Button";
import OtherProducts from "../Components/ProductDetails/OtherProducts";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useNavigation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ModalContext from "../Components/Context/modal-context";
import { cartActions } from "../Store/cart-slice";
import { loader } from "./HomePage";
import { dataActions } from "../Store/data-slice";
// import loadingIndicator from "../Assets/Wedges-3s-200px.gif"
import loadingIndicator from "../Assets/Infinity-1s-263px.gif";
import { motion } from "framer-motion";

function ProductDetails() {
  const params = useParams();
  const data = useSelector((state) => state.data.items);
  const navigation = useNavigation();
  const ctx = useContext(ModalContext);
  const [productQuantity, setProductQuantity] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let img;

  if (data.record) {
    if (window.innerWidth > 900) {
      img = require(`../Assets/product-${
        data.record[params.productId - 1].slug
      }/desktop/image-product.jpg`);
    } else if (window.innerWidth > 350) {
      img = require(`../Assets/product-${
        data.record[params.productId - 1].slug
      }/tablet/image-product.jpg`);
    } else {
      img = require(`../Assets/product-${
        data.record[params.productId - 1].slug
      }/mobile/image-product.jpg`);
    }
  }

  useEffect(() => {
    const loadEvents = async () => {
      const resp = await loader();
      dispatch(dataActions.initiateData(resp));
    };

    window.scrollTo(0, 0);

    if (!data.record) {
      loadEvents();
    }
  }, [data, dispatch]);

  const goBackHandler = () => {
    navigate("/");
  };

  const buyHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id: data.record[params.productId - 1].id,
        price: data.record[params.productId - 1].price,
        quantity: productQuantity,
        name: data.record[params.productId - 1].slug,
      })
    );
  };

  const numberInptHandler = (e) => {
    if (e.target.textContent === "+") {
      setProductQuantity((prev) => {
        const newNumber = prev + 1;
        return newNumber;
      });
    } else if (e.target.textContent === "-") {
      setProductQuantity((prev) => {
        const newNumber = prev - 1;
        console.log(newNumber);
        return newNumber;
      });
    }
  };

  return (
    <div className="productDetails">
      {navigation.state === "loading" && (
        <img
          className="loadingIndicator"
          src={loadingIndicator}
          alt="loading..."
        />
      )}
      {data.record && (
        <>
          <header className="productDetails__header"></header>
          <div className="productDetails__btnDiv">
            <Button btnHandler={goBackHandler} type="3" title="< Go Back" />
          </div>
          <motion.div
            animate={{ opacity: [0, 1], x: [50, 0] }}
            className="productDetails__content"
          >
            <ProductDiv
              textPosition="left"
              imgPosition="left"
              img={img}
              isNew={data.record[params.productId - 1].new}
              price={data.record[params.productId - 1].price}
              title={data.record[params.productId - 1].name}
              desription={data.record[params.productId - 1].description}
              type="toBuy"
              btnType="1"
              id={data.record[params.productId - 1].id}
              btnHandler={buyHandler}
              numberInptHandler={numberInptHandler}
              currentNumber={productQuantity}
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
          </motion.div>
        </>
      )}
    </div>
  );
}

export default ProductDetails;
