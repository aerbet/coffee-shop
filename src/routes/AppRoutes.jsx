import {Route, Routes} from "react-router-dom";

import OurCoffee from "../pages/OurPage/OurCoffee.jsx";
import ForYour from "../pages/ForPage/ForYour.jsx";
import App from "../Components/App/App.jsx";


const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route>
          <Route path="/" element={<App />}/>
        </Route>
        
        <Route>
          <Route path="/our" element={<OurCoffee />}/>
          <Route path="/for" element={<ForYour />}/>
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;