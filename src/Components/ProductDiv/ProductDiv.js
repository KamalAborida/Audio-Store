import { useNavigate } from "react-router-dom";
import Button from "../FormElements/Button";
import NumberInptDiv from "../FormElements/NumberInptDiv";

function ProductDiv(props) {
  const navigate = useNavigate();

  const navigationBtnHandler = () => {
    if (props.type === "toSee" && props.id) {
      navigate(`/${props.category}/${props.id}`);
    } else {
      navigate(`/${props.category}`);
    }
  };

  return (
    <div className={`productDiv`}>
      {props.imgPosition === "left" && (
        <img className="productDiv__img" src={props.img} alt="" />
      )}

      <div
        className={`productDiv__contentDiv productDiv__contentDiv-${props.textPosition}`}
      >
        {props.imgPosition === "center" && (
          <img className="productDiv__img" src={props.img} alt="" />
        )}
        {props.isNew && (
          <p className="productDiv__contentDiv__newPhrase">NEW PRODUCT</p>
        )}
        <h1 className="productDiv__contentDiv__title">{props.title}</h1>
        <p className="productDiv__contentDiv__description">
          {props.desription}
        </p>
        {props.type === "toBuy" && (
          <p className="productDiv__contentDiv__price">$ {props.price}</p>
        )}
        <div className="productDiv__contentDiv__btnsDiv">
          {props.type === "toSee" && (
            <Button
              btnHandler={navigationBtnHandler}
              title="SEE PRODUCT"
              type={`${props.btnType || "1"}`}
            />
          )}
          {props.type === "toBuy" && (
            <Button title="ADD TO CART" type={`${props.btnType || "1"}`} />
          )}
          {props.type === "toBuy" && <NumberInptDiv />}
        </div>
      </div>

      {props.imgPosition === "right" && (
        <img className="productDiv__img" src={props.img} alt="" />
      )}
    </div>
  );
}

export default ProductDiv;
