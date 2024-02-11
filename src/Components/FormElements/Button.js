function Button(props) {
  // dynamic classname (btn-1, btn-2, btn-3)
  // dynamic button label/title (SEE PRODUCT, SHOP >)
  return (
    <button onClick={props.btnHandler} className={`btn btn-${props.type}`}>
      {props.title}
    </button>
  )
}

export default Button