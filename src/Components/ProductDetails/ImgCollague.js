function ImgCollague(props) {
  const img1 = require(`../../Assets/product-${props.product.slug}/desktop/image-gallery-1.jpg`)
  const img2 = require(`../../Assets/product-${props.product.slug}/desktop/image-gallery-2.jpg`)
  const img3 = require(`../../Assets/product-${props.product.slug}/desktop/image-gallery-3.jpg`)


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
