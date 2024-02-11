import { Link } from "react-router-dom";

function NavElements(props) {
  // dynamic checked or not

  return (
    <ul className="navBar__navElements">
      <Link to="/" className="navBar__navElements__element">
        <li className="navBar__navElements__element">HOME</li>
      </Link>
      <Link className="navBar__navElements__element" to="/Headphones">
        <li className="navBar__navElements__element">HEADPHONES</li>
      </Link>
      <Link className="navBar__navElements__element" to="/Speakers">
        <li className="navBar__navElements__element">SPEAKERS</li>
      </Link>
      <Link className="navBar__navElements__element" to="/Earphones">
        <li className="navBar__navElements__element">EARPHONES</li>
      </Link>
    </ul>
  );
}

export default NavElements;
