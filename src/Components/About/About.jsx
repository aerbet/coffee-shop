import CoffeeBeans from "../CoffeeBeans/CoffeeBeans.jsx";
import blackBeans from "../../../public/coffee-beans-black.svg";

import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const About = ({ aboutBeans, aboutImg, imgName, aboutSpan, aboutSpanHide, aboutCoffee}) => {
  return (
    <section className="about text-center">
      <div className="container">
        <div className={`${aboutBeans} flex justify-center items-center`}>
            <img src={aboutImg}
                 alt=""
                className={imgName}/>
          <div>
            <h2 className="text-2xl mt-20 mb-8">About Us</h2>
            
            <CoffeeBeans coffeeSvg={blackBeans}
                         borderColor={"border-black"}
            />
            
            <span className={`${aboutSpanHide} w-2/4 block mx-auto mt-8 mb-24`}>
              Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
              Afraid at highly months do things on at. Situation recommend objection do intention
              so questions. As greatly removed calling pleased improve an. Last ask him cold feel
              met spot shy want. Children me laughing we prospect answered followed. At it went
              is song that held help face.
              <br/>
              <br/>
              Now residence dashwoods she excellent you. Shade being under his bed her, Much
              read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
              horrible but confined day end marriage. Eagerness furniture set preserved far
              recommend. Did even but nor are most gave hope. Secure active living depend son
              repair day ladies now.
            </span>
            <span className={`${aboutSpan} aboutHide w-2/4 block mx-auto mt-8 mb-24`}>
              Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
              <br/>
              <br/>
              Afraid at highly months do things on at. Situation recommend objection do intention
              so questions.
              <br/>
              As greatly removed calling pleased improve an. Last ask him cold feel
              met spot shy want. Children me laughing we prospect answered followed. At it went
              is song that held help face.
            </span>
            <span className={`${aboutCoffee} aboutCoffeeHide w-2/4 flex justify-start mt-8 mb-24`}>
              <b><span className="text-xl">Country:</span></b> Brasil
              <br/>
              <br/>
              <b><span className="text-xl">Description:</span></b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              <br/>
              <br/>
              <div className="flex">
                <b>Price:  <span className="text-2xl">16.99$</span></b>
                
                <Link to="/our"
                      className="relative ml-20 rounded-md flex h-[40px] w-36 items-center justify-center overflow-hidden bg-gray-800 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-orange-600 before:duration-500 before:ease-out hover:shadow-orange-600 hover:before:h-56 hover:before:w-56">
                <span className="relative z-10">Buy</span>
              </Link>
              </div>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};


About.propTypes = {
  aboutBeans: PropTypes.string,
  aboutImg: PropTypes.string,
  aboutSpan: PropTypes.string,
  aboutSpanHide: PropTypes.string,
  imgName: PropTypes.string,
  aboutCoffee: PropTypes.string
}

export default About;