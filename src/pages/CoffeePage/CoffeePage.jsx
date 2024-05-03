import Header from "../../Components/Header/Header.jsx";
import About from "../../Components/About/About.jsx";
import coffeeImg from "../../../public/aromistico-about.jpg";
import {Link} from "react-router-dom";


const CoffeePage = () => {
  return (
    <div>
      <Header ourHeader={"ourHeader"}
              hideHero={"heroHide"}
              heroTitle={"Our Coffee"}/>
      <About
        aboutBeans={"aboutDisplay"}
        aboutImg={coffeeImg}
        imgName={"mr-20"}
        aboutSpanHide={"aboutSpanHide"}
        aboutCoffee={"aboutCoffee"}/>
      
      
    </div>
  );
};

export default CoffeePage;