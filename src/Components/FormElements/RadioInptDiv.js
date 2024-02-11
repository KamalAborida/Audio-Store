function RadioInptDiv(props) {
  // dynamic checked or not
  return (
    <div className={`radioInptDiv radioInptDiv-${""}`}>
      <input
        className="radioInptDiv__inpt"
        type="radio"
        id={props.label}
        name={props.choicesFor}
        value={props.label}
      />
      <label htmlFor={props.label} className="radioInptDiv__label">
        {props.label}
      </label>
    </div>
  );
}

export default RadioInptDiv;
