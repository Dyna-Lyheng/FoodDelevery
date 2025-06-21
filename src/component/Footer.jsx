import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="flex justify-center bg-[#323232]  text-white mt-30 md:w-[100%] w-[145%]"  >
      <div className="flex  justify-center items-center flex-col w-[80%]" id="footer">
        <div className="pt-20 pb-10 grid lg:grid-cols-[2fr_1fr_1fr] gap-x-25  grid-cols-2">
          <div className="footer-left space-y-4">
            <img className="w-50" src={assets.logo} alt="" />
            <p className="text-lg mt-5">
              Deliciously crafted meals delivered with care. Explore our fresh
              menu, enjoy fast service, and savor every bite. Quality
              ingredients, local flavors—bringing your favorite dishes closer to
              home every day.
            </p>
            <div className="flex gap-x-7">
              <img src={assets.facebook_icon} alt="" />
              <img src={assets.twitter_icon} alt="" />
              <img src={assets.linkedin_icon} alt="" />
            </div>
          </div>
          <div className="footer-center">
            <h1 className="text-3xl font-bold mb-5">COMPANY</h1>
            <ul className="leading-loose text-lg">
              <li>Home</li>
              <li>About Us</li>
              <li>Delevery</li>
              <li>Privacy policy</li>
            </ul>
          </div>
          <div className="footer-right hidden lg:block">
            <h1 className="text-3xl font-bold mb-5">GET IN TOUCH</h1>
            <p className="text-lg">+1-212-456-7890</p>
            <p className="text-lg">Contact@tomato.com</p>
          </div>
        </div>
        <hr className="w-[100%] text-gray-300" />
        <p className="my-6 text-lg">© 2025 Dyna Lyheng. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
