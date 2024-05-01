import PropTypes from "prop-types";

const CoffeeBeans = ({ coffeeSvg, borderColor }) => {
  return (
    <div className="header__coffee flex justify-center items-center">
      <hr className={`${borderColor} w-16`} />
      <img src={coffeeSvg}
           alt="coffee svg"
           className="pl-5 pr-5"/>
      <hr className={`${borderColor} w-16`} />
    </div>
  );
};

CoffeeBeans.propTypes = {
  coffeeSvg: PropTypes,
  borderColor: PropTypes.string
}

export default CoffeeBeans;