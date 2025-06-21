import React, { act, useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../Context/StoreContext";
const Navbar = ({ setShowlogin }) => {
  const [active, setActive] = useState("home");
  const {getTotalCartAmount} = useContext(StoreContext);

  return (
    <div className="flex items-center justify-between py-5">
      <Link to="/">
        <img className="w-35" src={assets.heng} alt="" />
      </Link>
      <ul className="lg:flex gap-10 text-xl font-medium hidden">
        <Link to="/"
          onClick={() => setActive("home")}
          className={active == "home" ? "active" : "cursor-pointer"}
        >
          Home
        </Link>
        <a href="#app-download"
          onClick={() => setActive("mobile")}
          className={active == "mobile" ? "active" : "cursor-pointer"}
        >
          Mobile-app
        </a>
        <a href="#explore-menu"
          onClick={() => setActive("menu")}
          className={active == "menu" ? "active" : "cursor-pointer"}
        >
          Menu
        </a>
        <a href="#footer"
          onClick={() => setActive("contact")}
          className={active == "contact" ? "active" : "cursor-pointer"}
        >
          Contact us
        </a>
      </ul>
      <div className="flex items-center gap-5">
        <img className="w-6" src={assets.search_icon} alt="" />
        <div className="relative">
          <Link to="/card">
            <img className="w-6" src={assets.basket_icon} alt="" />
          </Link>
          <div className={!getTotalCartAmount()?"":"min-w-[10px] border-blue-800 min-h-[10px] rounded-full absolute top-[-8px] right-[-8px]"}></div>
        </div>
        <button
          onClick={() => setShowlogin(true)}
          className="px-5 py-2 font-medium text-center border border-blue-800 text-lg rounded-full hover:bg-gradient-to-r from-blue-600 to-gray-800  hover:text-white cursor-pointer"
        >
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Navbar;
