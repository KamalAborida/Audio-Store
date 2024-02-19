function ImgCollague(props) {
  let img1;
  let img2;
  let img3;

  if (window.innerWidth > 900) {
    img1 = require(`../../Assets/product-${props.product.slug}/desktop/image-gallery-1.jpg`);
    img2 = require(`../../Assets/product-${props.product.slug}/desktop/image-gallery-2.jpg`);
    img3 = require(`../../Assets/product-${props.product.slug}/desktop/image-gallery-3.jpg`);
  } else if (window.innerWidth > 350) {
    img1 = require(`../../Assets/product-${props.product.slug}/tablet/image-gallery-1.jpg`);
    img2 = require(`../../Assets/product-${props.product.slug}/tablet/image-gallery-2.jpg`);
    img3 = require(`../../Assets/product-${props.product.slug}/tablet/image-gallery-3.jpg`);
  } else {
    img1 = require(`../../Assets/product-${props.product.slug}/mobile/image-gallery-1.jpg`);
    img2 = require(`../../Assets/product-${props.product.slug}/mobile/image-gallery-2.jpg`);
    img3 = require(`../../Assets/product-${props.product.slug}/mobile/image-gallery-3.jpg`);
  }

  return (
    <div className="productDetails__content__imgCollague">
      <div className="productDetails__content__imgCollague__column1">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
      </div>
      <div className="productDetails__content__imgCollague__column2">
        <img src={img3} alt="" />
      </div>
    </div>
  );
}

export default ImgCollague;
