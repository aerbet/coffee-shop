
const CoffeeFilter = () => {
  const buttonsData = [
    {name: 'brazil', label: 'Brazil'},
    {name: 'kenya', label: 'Kenya'},
    {name: 'columbia', label: 'Columbia'},
  ];
  
  const buttons = buttonsData.map(({name, label}) => {
    
    return (
      <button className={`relative flex h-[40px] w-36 items-center
      justify-center overflow-hidden bg-gray-800 text-white
      shadow-2xl transition-all before:absolute before:h-0 before:w-0
      before:rounded-full before:bg-orange-600 before:duration-500
      before:ease-out hover:shadow-orange-600 hover:before:h-56
      hover:before:w-56 ml-2
      sm:h-[30px]w-20`}
              key={name}
              type="button">
        {label}
      </button>
    )
  })
  
  return (
    <div className="ml-12 flex">
      {buttons}
    </div>
  );
};

export default CoffeeFilter;