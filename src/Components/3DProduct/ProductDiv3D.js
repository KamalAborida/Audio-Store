import earphones from "../../Assets/shared/desktop/image-category-thumbnail-earphones.png";
import headphones from "../../Assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakers from "../../Assets/shared/desktop/image-category-thumbnail-speakers.png";
import Button from "../FormElements/Button";

function ProductDiv3D(props) {
  let thumbnail = "";

  switch (props.type) {
    case "headphones":
      thumbnail = headphones;
      break;
    case "speakers":
      thumbnail = speakers;
      break;
    case "earphones":
      thumbnail = earphones;
      break;
    default:
      thumbnail = "";
  }

  return (
    <div className="productDiv3d">
      <img className="productDiv3d__img" src={thumbnail} alt="thumbnail" />
      <h6 className="productDiv3d__title">{props.type.toUpperCase()}</h6>
      <Button btnHandler={props.btnHandler} className="productDiv3d__btn" title="SHOP >" type="3" />
    </div>
  );
}

export default ProductDiv3D;
