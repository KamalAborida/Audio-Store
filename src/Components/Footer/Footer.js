import FooterLeft from "./FooterLeft";
import FooterRight from "./FooterRight";

function Footer(props) {
  // dynamic checked or not
  return (
    <div className="footer">
      <FooterLeft />
      <FooterRight />
    </div>
  );
}

export default Footer;
