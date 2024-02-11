function DropDown(props) {
  // dynamic placeholder
  // dynamic Error phrase (show/hide)
  // dynamic label (show/hide)
  return (
    <div className="textInptDiv">
      <div className="textInptDiv__labelDiv">
        <label className="textInptDiv__labelDiv__label">{props.label}</label>
      </div>
      <select className="textInptDiv__inpt">
        <option>1</option>
        <option>1</option>
        <option>1</option>
      </select>
    </div>
  );
}

export default DropDown;
