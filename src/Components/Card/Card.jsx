import PropTypes from "prop-types";


const Card = ({ cardImg, cardTitle, cardDescr, cardPrice }) => {
  return (
    <div className="card h-60 rounded-md bg-white pt-7 px-8 pb-60 cursor-pointer">
      <div className="flex flex-col items-center">
        <div className="flex justify-center pb-2.5">
          <img src={cardImg}
               alt="coffee"
               className="card__img"/>
        </div>
        <div className="">
          <h4 className="pb-3.5">{cardTitle}</h4>
          <span className="flex justify-end pt-1.5 pb-1.5">{cardDescr}</span>
          <span className="flex justify-end pb-5">{cardPrice}</span>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  cardImg: PropTypes.string,
  cardTitle: PropTypes.string,
  cardDescr: PropTypes.string,
  cardPrice: PropTypes.string,
}

export default Card;