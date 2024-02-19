import ProductDiv from "../ProductDiv/ProductDiv";
import img from "../../Assets/product-xx99-mark-one-headphones/desktop/image-product.jpg";
import { useSelector } from "react-redux";

function OtherProducts(props) {
  const data = useSelector((state) => state.data.items);
  const otherProducts = [];
  const imagesList = [];

  if (data) {
    data.record.forEach((element) => {
      for (let i = 0; i < props.others.length; i++) {
        const secondArrElem = props.others[i];
        if (element.slug === secondArrElem.slug) {
          otherProducts.push(element);
          let img
          if (window.innerWidth > 900) {
            img = require(`../../Assets/product-${element.slug}/desktop/image-category-page-preview.jpg`);
          } else if (window.innerWidth > 350) {
            img = require(`../../Assets/product-${element.slug}/tablet/image-category-page-preview.jpg`);
          } else {
            img = require(`../../Assets/product-${element.slug}/mobile/image-category-page-preview.jpg`);
          }
          imagesList.push(img);
        }
      }
    });
  }

  return (
    <div className="productDetails__otherProducts">
      <ProductDiv
        textPosition="center"
        imgPosition="center"
        img={imagesList[0]}
        isNew={false}
        title={otherProducts[0].name}
        type="toSee"
        btnType="1"
        category={otherProducts[0].category}
        id={otherProducts[0].id}
      />
      <ProductDiv
        textPosition="center"
        imgPosition="center"
        img={imagesList[1]}
        isNew={false}
        title={otherProducts[1].name}
        type="toSee"
        btnType="1"
        category={otherProducts[1].category}
        id={otherProducts[1].id}
      />
      <ProductDiv
        textPosition="center"
        imgPosition="center"
        img={imagesList[2]}
        isNew={false}
        title={otherProducts[2].name}
        type="toSee"
        btnType="1"
        category={otherProducts[2].category}
        id={otherProducts[2].id}
      />
    </div>
  );
}

export default OtherProducts;
