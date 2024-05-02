import Card from "../Card/Card.jsx";
import solimo from "../../../public/solimo-coffee-2kg.png";
import presto from "../../../public/presto-coffee-1kg.png";
import aromistico from "../../../public/aromistico-1kg.png";

const OurBest = () => {
  return (
    <section className="our text-center">
      <div className="container">
        <h2 className="text-2xl mt-20 mb-10">Our Best</h2>
        
        <div className="flex justify-center pb-28">
          <div className="flex justify-between w-7/12">
            <Card cardImg={solimo}
                  cardTitle={"Solimo Coffee Beans 2 kg"}
                  cardPrice={"10.73$"}/>
            <Card cardImg={presto}
                  cardTitle={"Presto Coffee Beans 1 kg"}
                  cardPrice={"15.99$"}/>
            <Card cardImg={aromistico}
                  cardTitle={"AROMISTICO Coffee 1 kg"}
                  cardPrice={"6.99$"}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurBest;