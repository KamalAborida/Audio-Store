import NavElements from "../NavBar/NavElements";
import SocialMediaList from "./SocialMediaList";

function FooterRight(props) {
  // dynamic checked or not
  return (
    <div className="footer__footerRight">
      <NavElements />
      <SocialMediaList />
    </div>
  );
}

export default FooterRight;
