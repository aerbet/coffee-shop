
import About from "../../Components/About/About.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import Header from "../../Components/Header/Header.jsx";
import Card from "../../Components/Card/Card.jsx";

import forYour from "../../../public/foryr.avif";
import venezia from "../../../public/Venezia.jpg";
import roma from "../../../public/Roma.jpg";
import napoli from "../../../public/Napoli.jpg";


const ForPage = () => {
  
  const data = [
    {title: 'VENEZIA Blonde Light Roast', country: 'Venezia', price: '6.99$', img: venezia},
    {title: 'ROMA Medium Dark Roast', country: 'Roma', price: '6.99$', img: roma},
    {title: 'NAPOLI Rich Dark Roast', country: 'Napoli', price: '6.99$', img: napoli},
  ]
  
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
      
      <hr className="w-1/2 mt-12 border-black block mx-auto"/>
      
      <div className="flex justify-center mt-20 pb-10">
        <div className="flex justify-evenly w-7/12 drop-shadow-lg">
          {data.map((coffee, index) => (
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
      <div className="flex justify-center pb-10">
        <div className="flex justify-evenly w-7/12 drop-shadow-lg">
          {data.map((coffee, index) => (
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
      <div className="flex justify-center pb-10">
        <div className="flex justify-evenly w-7/12 drop-shadow-lg">
          {data.map((coffee, index) => (
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
};

export default ForPage;