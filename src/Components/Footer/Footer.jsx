import CoffeeBeans from "../CoffeeBeans/CoffeeBeans.jsx";
import Navbar from "../Navbar/Navbar.jsx";

import blackBeans from "../../../public/coffee-beans-black.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="flex justify-center mb-8">
          <Navbar textColor="black" logoColor="black" />
        </div>
        <CoffeeBeans coffeeSvg={blackBeans} borderColor={"border-black"}/>
      </div>
    </footer>
  );
};

export default Footer;