import FooterLeft from "./FooterLeft";
import FooterRight from "./FooterRight";
import SocialMediaList from "./SocialMediaList";

function Footer(props) {
  // dynamic checked or not
  return (
    <div className="footer">
      <FooterLeft />
      <FooterRight />
      <SocialMediaList />
    </div>
  );
}

export default Footer;
