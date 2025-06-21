import React, { useState } from "react";
import Navbar from "./component/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./page/home/Home";
import Card from "./page/card/Card";
import PlaceOrder from "./page/placeOrder/PlaceOrder";
import Footer from "./component/Footer";
import LoginPopUp from "./component/LoginPopUp/LoginPopUp";
const App = () => {
  const [showLogin,setShowlogin] = useState(false);
  return (
    <>
    {
      showLogin ? <LoginPopUp setShowlogin={setShowlogin}/> : <></>
    }
      <div className="md:w-[80%]  w-[145%] mx-auto px-10 md:px-0   overflow-hidden">
        <Navbar setShowlogin={setShowlogin}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/card" element={<Card />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
      </div>
     
        <Footer />
    </>
  );
};

export default App;
