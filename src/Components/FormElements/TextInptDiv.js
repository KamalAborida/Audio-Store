function TextInptDiv(props) {
  // dynamic placeholder
  // dynamic Error phrase (show/hide)
  // dynamic label (show/hide)
  return (
    <div className="textInptDiv">
      <div className="textInptDiv__labelDiv">
        <label className="textInptDiv__labelDiv__label">{props.label}</label>
        {props.error && <p className="textInptDiv__labelDiv__error">Wrong format</p>}
      </div>
      <input
        className={`textInptDiv__inpt ${props.error ? "textInptDiv__inpt-error" : ""}`}
        type="text"
        id={props.label}
        name={props.label}
        placeholder={props.placeholder}
        onChange={props.onChangeHandler}
      />
    </div>
  );
}

export default TextInptDiv;
