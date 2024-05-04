import PropTypes from "prop-types";

const CoffeeFilter = (props) => {
  const buttonsData = [
    {name: 'all', label: 'All'},
    {name: 'venezia', label: 'Venezia'},
    {name: 'roma', label: 'Roma'},
    {name: 'napoli', label: 'Napoli'},
  ];
  
  const buttons = buttonsData.map(({name, label}) => {
    
    return (
      <button onClick={() => props.onCountryFilterSelect(name)}
              className={`relative flex h-[40px] w-36 items-center
      justify-center overflow-hidden bg-gray-800 text-white
      shadow-2xl transition-all before:absolute before:h-0 before:w-0
      before:rounded-full before:bg-orange-600 before:duration-500
      before:ease-out hover:shadow-orange-600 hover:before:h-56
      hover:before:w-56 ml-2
      sm:h-[30px]w-20`}
              key={name}
              type="button">
        <span className="relative z-10">{label}</span>
      </button>
    )
  })
  
  return (
    <div className="ml-12 flex">
      {buttons}
    </div>
  );
};

CoffeeFilter.propTypes = {
  onCountryFilterSelect: PropTypes.func
}


export default CoffeeFilter;