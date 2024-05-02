import PropTypes from "prop-types";

const Navbar = ({ textColor, logoColor }) => {
  return (
    <nav className="navbar">
      <ul className={`flex jus items-center text-${textColor}`}>
        <a href="#" className="text-xs cursor-pointer">
          <span className={`${logoColor}-logo`}></span>
          Coffee House
        </a>
        <li className="text-xs ml-10 mt-6 cursor-pointer">Our coffee</li>
        <li className="text-xs ml-10 mt-6 cursor-pointer">For your pleasure</li>
      </ul>
    </nav>
  );
};

Navbar.propTypes = {
  textColor: PropTypes.string,
  logoColor: PropTypes.string
}

export default Navbar;