import NumberInptDiv from "../FormElements/NumberInptDiv";

function SummaryItem(props) {
  const img = require(`../../Assets/product-${props.slug}/desktop/image-product.jpg`);

  return (
    <div className="summaryItem">
      <div className="summaryItem__info">
        <img className="summaryItem__info__img" src={img} alt="product" />
        <div className="summaryItem__info__details">
          <h6 className="summaryItem__info__details__name">XX99 MK 11</h6>
          <h6 className="summaryItem__info__details__price">$ 2.999</h6>
        </div>
      </div>
      {!props.modal && <p className="summaryItem__quantity">x1</p>}
      {props.modal && <NumberInptDiv />}
    </div>
  );
}

export default SummaryItem;
