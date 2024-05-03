import CoffeeBeans from "../CoffeeBeans/CoffeeBeans.jsx";
import whiteBeans from "../../../public/coffee-beans.svg"

import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const Hero = ({ heroHide }) => {
  return (
    <section className={`hero text-center text-white ${heroHide}`}>
      <div className="container">
        <div className="hero__content pt-20">
          <h1 className="text-6xl mb-5">Everything You Love About Coffee</h1>
          <CoffeeBeans coffeeSvg={whiteBeans} />
          <h4 className="text-3xl mt-10 mb-3">We makes every day full of energy and taste</h4>
          <h4 className="text-3xl mb-10">Want to try our beans?</h4>
          
          <div className="flex justify-center">
            <Link to="/our"
                  className="relative rounded-md flex h-[40px] w-36 items-center justify-center overflow-hidden bg-gray-800 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-orange-600 before:duration-500 before:ease-out hover:shadow-orange-600 hover:before:h-56 hover:before:w-56">
              <span className="relative z-10">More</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  heroHide: PropTypes.string
}

export default Hero;