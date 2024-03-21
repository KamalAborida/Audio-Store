import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { paymentActions } from "../../Store/payment-slice";
import { useContext } from "react";
import ModalContext from "../Context/modal-context";

function NavElements(props) {
  // dynamic checked or not
  const dispatch = useDispatch();
  const ctx = useContext(ModalContext);

  const linksHandler = () => {
    ctx.closeModalCart();
    dispatch(paymentActions.resetAll());
  };

  return (
    <ul className="navBar__navElements">
      <Link
        onClick={linksHandler}
        to="/Audio-Store"
        className="navBar__navElements__element"
      >
        <li className="navBar__navElements__element">HOME</li>
      </Link>
      <Link
        onClick={linksHandler}
        className="navBar__navElements__element"
        to="/Headphones"
      >
        <li className="navBar__navElements__element">HEADPHONES</li>
      </Link>
      <Link
        onClick={linksHandler}
        className="navBar__navElements__element"
        to="/Speakers"
      >
        <li className="navBar__navElements__element">SPEAKERS</li>
      </Link>
      <Link
        onClick={linksHandler}
        className="navBar__navElements__element"
        to="/Earphones"
      >
        <li className="navBar__navElements__element">EARPHONES</li>
      </Link>
    </ul>
  );
}

export default NavElements;
