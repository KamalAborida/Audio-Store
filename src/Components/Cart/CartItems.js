import SummaryItem from "../PaymentPage/SummaryItem";

function CartItems(props) {
  return (
    <div className={`summaryItems ${props.className}`}>
      {props.itemsList.map((elem) => {
        return (
          <SummaryItem
            slug={elem.name}
            quantity={elem.quantity}
            price={elem.price}
          />
        );
      })}
    </div>
  );
}

export default CartItems;
