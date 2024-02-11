import Logo from "../../Assets/shared/desktop/logo.svg";

function FooterLeft(props) {
  // dynamic checked or not
  return (
    <div className="footer__footerLeft">
      <img src={Logo} alt="logo" />
      <p>
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>
      <p>Copyright 2021. All Rights Reserved</p>
    </div>
  );
}

export default FooterLeft;
