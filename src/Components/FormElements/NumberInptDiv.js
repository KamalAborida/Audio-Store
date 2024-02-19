function NumberInptDiv(props) {
  // dynamic placeholder
  // dynamic Error phrase (show/hide)
  // dynamic label (show/hide)
  // dynamic type
  return (
    <div className="numberInptDiv">
      <p onClick={props.numberInptHandler} className="numberInptDiv__minus">-</p>
      <p className="numberInptDiv__number">{props.currentNumber || 0}</p>
      <p onClick={props.numberInptHandler} className="numberInptDiv__plus">+</p>
    </div>
  );
}

export default NumberInptDiv;
