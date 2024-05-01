import Navbar from "../Navbar/Navbar.jsx";
import Hero from "../Hero/Hero.jsx";

const Header = () => {
  return (
    <section className="header">
      <div className="container">
          <Navbar textColor="white" logoColor="white"/>
      </div>
      <Hero />
    </section>
  );
};

export default Header;