import Header from "../../Components/Header/Header.jsx";
import About from "../../Components/About/About.jsx";
import Card from "../../Components/Card/Card.jsx";
import Footer from "../../Components/Footer/Footer.jsx";

import CoffeeFilter from "../../Components/CoffeeFilter/CoffeeFilter.jsx";
import SearchPanel from "../../Components/SearchPanel/SearchPanel.jsx";

import aromistico from "../../../public/aromistico-1kg.png";
import aboutIt from "../../../public/about-beans-img.jpg";

const coffeeData = [
  {
    "title": "AROMISTICO Coffee 1 kg",
    "country": "Brazil",
    "price": "6.99$",
    "img": aromistico
  },
  {
    "title": "AROMISTICO Coffee 1 kg",
    "country": "Kenya",
    "price": "6.99$",
    "img": aromistico
  },
  {
    "title": "AROMISTICO Coffee 1 kg",
    "country": "Columbia",
    "price": "6.99$",
    "img": aromistico
  }
];


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
            {coffeeData.map((coffee, index) => (
              <Card
                key={index + 1}
                title={coffee.title}
                cardImg={coffee.img}
                cardTitle={coffee.title}
                cardCountry={coffee.country}
                cardPrice={coffee.price}
              />
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-20 pb-10">
          <div className="flex justify-evenly w-7/12 drop-shadow-lg">
            {coffeeData.map((coffee, index) => (
              <Card
                key={index + 1}
                title={coffee.title}
                cardImg={coffee.img}
                cardTitle={coffee.title}
                cardCountry={coffee.country}
                cardPrice={coffee.price}
              />
            ))}
          </div>
        </div>
        
        <Footer/>
      </div>
    );
}

export default OurPage;