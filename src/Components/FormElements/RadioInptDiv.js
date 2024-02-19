function RadioInptDiv(props) {
  // dynamic checked or not
  return (
    <div className={`radioInptDiv radioInptDiv-${""}`}>
      <input
        className="radioInptDiv__inpt"
        type="radio"
        id={props.label.toLowerCase()}
        name={props.choicesFor.toLowerCase()}
        value={props.label.toLowerCase()}
        defaultChecked={props.isActive}
        onClick={props.onClick}
      />
      <label htmlFor={props.label} className="radioInptDiv__label">
        {props.label}
      </label>
    </div>
  );
}

export default RadioInptDiv;
