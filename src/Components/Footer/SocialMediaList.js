import facebook from "../../Assets/shared/desktop/icon-facebook.js";
import twitter from "../../Assets/shared/desktop/icon-twitter.js";
import instagram from "../../Assets/shared/desktop/icon-instagram.js";

function SocialMediaList(props) {
  // dynamic checked or not
  return (
    <ul className="socialMediaList">
      <li className="socialMediaList__element">{facebook}</li>
      <li className="socialMediaList__element">{twitter}</li>
      <li className="socialMediaList__element">{instagram}</li>
    </ul>
  );
}

export default SocialMediaList;
