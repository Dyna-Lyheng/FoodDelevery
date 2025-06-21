import React from "react";
import { assets } from "../../assets/assets";

const AppDownLoad = () => {
return (
    <div className="flex flex-col items-center justify-center mt-25 gap-y-10 " id="app-download">
        <p className="sm:text-5xl text-4xl font-bold text-center">
            For Better Experience Download<br />Tomato App
        </p>
        <div className="flex gap-4 mt-4">
            <img className="w-60 transition-transform duration-500 hover:scale-105 " src={assets.play_store} alt="" />
            <img className="w-60 transition-transform duration-500 hover:scale-105" src={assets.app_store} alt="" />
        </div>
    </div>
);
};

export default AppDownLoad;
