import NavElements from "./NavElements";
import Logo from "../../Assets/shared/desktop/logo.svg";
import Cart from "../../Assets/shared/desktop/icon-cart.svg";
import hamburger from "../../Assets/shared/tablet/icon-hamburger.js";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import ModalContext from "../Context/modal-context";

function NavBar(props) {
  const navigate = useNavigate();
  const ctx = useContext(ModalContext);

  const homeBtnHandler = () => {
    navigate("/");
  };

  const cartBtnHandler = () => {
    ctx.openModalCart();
  };

  return (
    <nav className="navBar">
      <div className="navBar__logoMenu">
        {window.innerWidth < 900 && (
          <p onClick={props.openHamburgerHandler}>{hamburger}</p>
        )}
        <img
          className="navBar__logo"
          src={Logo}
          alt="Logo"
          onClick={homeBtnHandler}
        />
      </div>
      <NavElements />
      <img
        onClick={cartBtnHandler}
        className="navBar__cart"
        src={Cart}
        alt="Cart"
      />
    </nav>
  );
}

export default NavBar;
