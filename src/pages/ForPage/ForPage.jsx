
import About from "../../Components/About/About.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import Header from "../../Components/Header/Header.jsx";
import Card from "../../Components/Card/Card.jsx";

import aromistico from "../../../public/aromistico-1kg.png";
import forYour from "../../../public/fyp-bg.png";


const ForPage = () => {
  return (
    <div className="coffee">
      <Header forHeader={"forHeader"}
              hideHero={"heroHide"}
              heroTitle={"For your pleasure"}/>
      <About
        aboutBeans={"aboutDisplay"}
        aboutImg={forYour}
        imgName={"mr-20"}
        aboutSpanHide={"aboutSpanHide"}
        aboutSpan={"aboutSpan"}/>

      <div className="flex justify-center pb-10">
        <div className="flex justify-evenly w-7/12 drop-shadow-lg">
          <Card cardImg={aromistico}
                cardTitle={"AROMISTICO Coffee 1 kg"}
                cardCountry={"Brazil"}
                cardPrice={"6.99$"}/>
          <Card cardImg={aromistico}
                cardTitle={"AROMISTICO Coffee 1 kg"}
                cardCountry={"Kenya"}
                cardPrice={"6.99$"}/>
          <Card cardImg={aromistico}
                cardTitle={"AROMISTICO Coffee 1 kg"}
                cardCountry={"Columbia"}
                cardPrice={"6.99$"}/>
        </div>
      </div>
      <div className="flex justify-center pb-10">
        <div className="flex justify-evenly w-7/12 drop-shadow-lg">
          <Card cardImg={aromistico}
                cardTitle={"AROMISTICO Coffee 1 kg"}
                cardCountry={"Brazil"}
                cardPrice={"6.99$"}/>
          <Card cardImg={aromistico}
                cardTitle={"AROMISTICO Coffee 1 kg"}
                cardCountry={"Kenya"}
                cardPrice={"6.99$"}/>
          <Card cardImg={aromistico}
                cardTitle={"AROMISTICO Coffee 1 kg"}
                cardCountry={"Columbia"}
                cardPrice={"6.99$"}/>
        </div>
      </div>
      
      <Footer/>
    </div>
  );
};

export default ForPage;