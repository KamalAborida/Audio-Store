function MoneyPaid(props) {
  return (
    <div className="moneyPaid">
      <p className="moneyPaid__title">{props.title}</p>
      <p
        className={`moneyPaid__amount ${
          props.special ? "moneyPaid__amount-special" : ""
        }`}
      >
        $ {props.amount}
      </p>
    </div>
  );
}

export default MoneyPaid;
