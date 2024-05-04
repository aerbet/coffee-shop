import Header from "../../Components/Header/Header.jsx";
import About from "../../Components/About/About.jsx";
import Card from "../../Components/Card/Card.jsx";
import Footer from "../../Components/Footer/Footer.jsx";

import CoffeeFilter from "../../Components/CoffeeFilter/CoffeeFilter.jsx";
import SearchPanel from "../../Components/SearchPanel/SearchPanel.jsx";

import venezia from "../../../public/Venezia.jpg";
import roma from "../../../public/Roma.jpg";
import napoli from "../../../public/Napoli.jpg";
import aboutIt from "../../../public/about-beans-img.jpg";
import {Component} from "react";

class OurPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {title: 'VENEZIA Blonde Light Roast', country: 'Venezia', price: '6.99$', img: venezia},
        {title: 'ROMA Medium Dark Roast', country: 'Roma', price: '6.99$', img: roma},
        {title: 'NAPOLI Rich Dark Roast', country: 'Napoli', price: '6.99$', img: napoli},
      ],
      term: '',
      countryFilter: 'all',
    }
  }
  
  searchCoffee = (items, term) => {
    if (term.length === 0) {
      return items;
    }
    
    return items.filter(item => item.title.toLowerCase().includes(term.toLowerCase()));
  }
  
  onUpdateSearch = (term) => {
    this.setState({ term });
  }
  
  filterByCountry = (items) => {
    const { countryFilter } = this.state;
    if (countryFilter === 'all') {
      return items;
    } else {
      return items.filter(item => item.country.toLowerCase() === countryFilter.toLowerCase());
    }
  }
  
  
  onCountryFilterSelect = (filter) => {
    this.setState({ countryFilter: filter });
  }
  
  
  render() {
    const { data, term, filter } = this.state;
    const filteredData = this.filterByCountry(this.searchCoffee(data, term));
    
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
          <SearchPanel
            onUpdateSearch={this.onUpdateSearch} />
          <CoffeeFilter filter={filter} onCountryFilterSelect={this.onCountryFilterSelect}/>
        </div>
        
        <div className="flex justify-center mt-20 pb-10">
          <div className="flex justify-evenly w-7/12 drop-shadow-lg">
            {filteredData.map((coffee, index) => (
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
            {filteredData.map((coffee, index) => (
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
}

export default OurPage;