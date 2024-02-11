function TextInptDiv(props) {
  // dynamic placeholder
  // dynamic Error phrase (show/hide)
  // dynamic label (show/hide)
  return (
    <div className="textInptDiv">
      <div className="textInptDiv__labelDiv">
        <label className="textInptDiv__labelDiv__label">{props.label}</label>
        {false && <p className="textInptDiv__labelDiv__error">Wrong format</p>}
      </div>
      <input
        className={`textInptDiv__inpt`}
        type="text"
        id={props.label}
        name={props.label}
        placeholder={props.placeholder}
      />
    </div>
  );
}

export default TextInptDiv;
