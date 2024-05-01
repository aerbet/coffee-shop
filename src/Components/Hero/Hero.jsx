import CoffeeBeans from "../CoffeeBeans/CoffeeBeans.jsx";
import whiteBeans from "../../../public/coffee-beans.svg"

const Hero = () => {
  return (
    <section className="hero text-center text-white">
      <div className="container">
        <div className="hero__content pt-28 pb-48">
          <h1 className="text-4xl mb-5">Everything You Love About Coffee</h1>
          <CoffeeBeans coffeeSvg={whiteBeans} />
          <h4 className="text-xl mt-10 mb-3">We makes every day full of energy and taste</h4>
          <h4 className="text-xl mb-4">Want to try our beans?</h4>
          
          <button className="border-2 rounded-md pl-10 pr-10 hover:bg-slate-800 transition-all">More</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;