import Logo from "../../Assets/shared/desktop/logo.svg";
import NavElements from "../NavBar/NavElements";

function FooterLeft(props) {
  // dynamic checked or not
  return (
    <div className="footer__logoNav">
      <img src={Logo} alt="logo" className="footer__logoNav__logo" />
      <NavElements />
    </div>
  );
}

export default FooterLeft;
