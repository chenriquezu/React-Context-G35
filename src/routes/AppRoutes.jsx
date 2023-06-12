import { Routes, Route } from "react-router-dom";

import Home from "../views/Home";
import Favoritos from "../views/Favoritos";

const AppRoutes =()=> {
  return (
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/favoritos" element={<Favoritos />} />
       </Routes>
    );
}


export default AppRoutes;

