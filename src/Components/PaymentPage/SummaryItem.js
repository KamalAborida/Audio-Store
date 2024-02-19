import { useEffect, useState } from "react";
import NumberInptDiv from "../FormElements/NumberInptDiv";
import { useSelector } from "react-redux";

function SummaryItem(props) {
  const img = require(`../../Assets/product-${props.slug}/desktop/image-product.jpg`);

  return (
    <div className="summaryItem" id={props.id}>
      <div className="summaryItem__info">
        <img className="summaryItem__info__img" src={img} alt="product" />
        <div className="summaryItem__info__details">
          <h6 className="summaryItem__info__details__name">{props.slug}</h6>
          <h6 className="summaryItem__info__details__price">$ {props.price}</h6>
        </div>
      </div>
      {!props.modal && <p className="summaryItem__quantity">x{props.quantity}</p>}
      {props.modal && (
        <NumberInptDiv
          numberInptHandler={props.numberInptHandler}
          currentNumber={props.currentNumber}
        />
      )}
    </div>
  );
}

export default SummaryItem;
