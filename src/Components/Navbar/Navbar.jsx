import { Link } from "react-router-dom"
import PropTypes from "prop-types";

const Navbar = ({ textColor, logoColor }) => {
  return (
    <nav className="navbar">
      <ul className={`flex jus items-center text-${textColor}`}>
        <Link
          to="/"
          className="text-xs cursor-pointer">
          <span className={`${logoColor}-logo`}></span>
          Coffee House
        </Link>
        <Link
          to="/our"
          className="text-xs ml-10 mt-6 cursor-pointer">
          Our coffee
        </Link>
        <Link
          to="/for"
          className="text-xs ml-10 mt-6 cursor-pointer">
          For your pleasure
        </Link>
      </ul>
    </nav>
  );
};

Navbar.propTypes = {
  textColor: PropTypes.string,
  logoColor: PropTypes.string
}

export default Navbar;