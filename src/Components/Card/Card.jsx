import PropTypes from "prop-types";
import {Link} from "react-router-dom";


const Card = ({ cardImg, cardTitle, cardCountry, cardPrice }) => {
  return (
    <Link to="/coffee" className="card h-60 rounded-md bg-white pt-7 px-8 pb-64 cursor-pointer hover:bg-gray-100 ">
      <div className="flex flex-col items-center">
        <div className="flex justify-center pb-2.5">
          <img src={cardImg}
               alt="coffee"
               className="card__img"/>
        </div>
        <div className="">
          <h4 className="pb-3.5">{cardTitle}</h4>
          <span className="flex justify-end pt-1.5 pb-1.5">{cardCountry}</span>
          <span className="flex justify-end pb-5">{cardPrice}</span>
        </div>
      </div>
    </Link>
  );
};

Card.propTypes = {
  cardImg: PropTypes.string,
  cardTitle: PropTypes.string,
  cardCountry: PropTypes.string,
  cardPrice: PropTypes.string,
}

export default Card;