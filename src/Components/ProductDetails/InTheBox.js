function InTheBox(props) {
  return (
    <div className="productDetails__content__features__inTheBox">
      <h3>IN THE BOX</h3>
      <br />
      <ul className="productDetails__content__features__inTheBox__list">
        {props.inTheBox &&
          props.inTheBox.map((elem) => {
            return (
              <li key={elem.item}>
                <span>{elem.quantity}X</span> {elem.item}
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default InTheBox;
