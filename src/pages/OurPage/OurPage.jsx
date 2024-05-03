import Header from "../../Components/Header/Header.jsx";
import About from "../../Components/About/About.jsx";
import aboutIt from "../../../public/about-beans-img.jpg";
import Card from "../../Components/Card/Card.jsx";
import aromistico from "../../../public/aromistico-1kg.png";
import Footer from "../../Components/Footer/Footer.jsx";

import CoffeeFilter from "../../Components/CoffeeFilter/CoffeeFilter.jsx";
import SearchPanel from "../../Components/SearchPanel/SearchPanel.jsx";
const OurPage = () => {
    
    return (
      <div className="coffee">
        <Header ourHeader={"ourHeader"}
                hideHero={"heroHide"}
                heroTitle={"Our Coffee"}/>
        <About
          aboutBeans={"aboutDisplay"}
          aboutImg={aboutIt}
          imgName={"mr-20"}
          aboutSpanHide={"aboutSpanHide"}
          aboutSpan={"aboutSpan"}/>
        <div className="flex justify-center items-center">
          <SearchPanel />
          <CoffeeFilter />
        </div>
        <div className="flex justify-center mt-20 pb-10">
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
        
        <Footer />
      </div>
    );
}

export default OurPage;